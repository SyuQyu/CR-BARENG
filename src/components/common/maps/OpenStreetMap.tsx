"use client"
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { SearchIcon } from 'lucide-react';

interface OpenStreetMapProps {
    lat: number;
    lng: number;
    zoom?: number;
    onLocationChange?: (lat: number, lng: number) => void;
}

export default function OpenStreetMapComponent({
    lat = -6.175394,
    lng = 106.827183,
    zoom = 15,
    onLocationChange
}: OpenStreetMapProps) {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<L.Map | null>(null);
    const markerRef = useRef<L.Marker | null>(null);

    // Initialize map when component mounts
    useEffect(() => {
        if (typeof window !== 'undefined' && !mapRef.current && mapContainerRef.current) {
            // Fix Leaflet icon issue
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
                iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
            });

            // Create map instance
            const map = L.map(mapContainerRef.current).setView([lat, lng], zoom);

            // Add OpenStreetMap tiles
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            // Add marker
            const marker = L.marker([lat, lng], { draggable: true })
                .addTo(map)
                .on('dragend', function () {
                    const position = marker.getLatLng();
                    if (onLocationChange) {
                        onLocationChange(position.lat, position.lng);
                    }
                });

            markerRef.current = marker;

            // Add click handler to map
            map.on('click', function (e) {
                const { lat, lng } = e.latlng;
                marker.setLatLng([lat, lng]);
                if (onLocationChange) {
                    onLocationChange(lat, lng);
                }
            });

            // Create custom search control with suggestions
            const SearchControl = L.Control.extend({
                options: {
                    position: 'topright' // Changed to topright from topleft
                },

                onAdd: function () {
                    const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-search');
                    container.style.backgroundColor = 'white';
                    container.style.padding = '5px';
                    container.style.margin = '10px';
                    container.style.borderRadius = '4px';
                    container.style.boxShadow = '0 1px 5px rgba(0,0,0,0.4)';
                    container.style.width = '250px';
                    container.style.position = 'relative';

                    const form = L.DomUtil.create('form', '', container);
                    const searchWrapper = L.DomUtil.create('div', '', form);
                    searchWrapper.style.display = 'flex';

                    const input = L.DomUtil.create('input', '', searchWrapper);
                    input.type = 'text';
                    input.placeholder = 'Search location...';
                    input.style.flex = '1';
                    input.style.border = 'none';
                    input.style.padding = '5px';
                    input.style.outline = 'none';

                    const button = L.DomUtil.create('button', '', searchWrapper);
                    button.type = 'submit';
                    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>';
                    button.style.backgroundColor = 'transparent';
                    button.style.border = 'none';
                    button.style.cursor = 'pointer';

                    // Create suggestions container
                    const suggestionsContainer = L.DomUtil.create('div', '', container);
                    suggestionsContainer.style.position = 'absolute';
                    suggestionsContainer.style.left = '0';
                    suggestionsContainer.style.right = '0';
                    suggestionsContainer.style.top = '100%';
                    suggestionsContainer.style.backgroundColor = 'white';
                    suggestionsContainer.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                    suggestionsContainer.style.borderRadius = '0 0 4px 4px';
                    suggestionsContainer.style.maxHeight = '200px';
                    suggestionsContainer.style.overflowY = 'auto';
                    suggestionsContainer.style.zIndex = '1000';
                    suggestionsContainer.style.display = 'none';

                    // Debounce search input
                    let debounceTimer: number | null = null;

                    // Handle input changes for suggestions
                    L.DomEvent.on(input, 'input', function () {
                        const searchText = input.value.trim();
                        if (!searchText) {
                            suggestionsContainer.style.display = 'none';
                            return;
                        }

                        if (debounceTimer) {
                            window.clearTimeout(debounceTimer);
                        }

                        debounceTimer = window.setTimeout(() => {
                            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchText)}&limit=5`)
                                .then(response => response.json())
                                .then(data => {
                                    suggestionsContainer.innerHTML = '';

                                    if (data && data.length > 0) {
                                        suggestionsContainer.style.display = 'block z-10';

                                        data.forEach((item: any) => {
                                            const suggestionItem = L.DomUtil.create('div', '', suggestionsContainer);
                                            suggestionItem.textContent = item.display_name;
                                            suggestionItem.style.padding = '8px 12px';
                                            suggestionItem.style.borderBottom = '1px solid #eee';
                                            suggestionItem.style.cursor = 'pointer';

                                            // Hover effect
                                            L.DomEvent.on(suggestionItem, 'mouseover', function () {
                                                suggestionItem.style.backgroundColor = '#f0f0f0';
                                            });

                                            L.DomEvent.on(suggestionItem, 'mouseout', function () {
                                                suggestionItem.style.backgroundColor = 'white';
                                            });

                                            // Click handler
                                            L.DomEvent.on(suggestionItem, 'click', function () {
                                                input.value = item.display_name;
                                                suggestionsContainer.style.display = 'none';

                                                const latitude = parseFloat(item.lat);
                                                const longitude = parseFloat(item.lon);

                                                marker.setLatLng([latitude, longitude]);
                                                map.setView([latitude, longitude], 15);

                                                if (onLocationChange) {
                                                    onLocationChange(latitude, longitude);
                                                }
                                            });
                                        });
                                    } else {
                                        suggestionsContainer.style.display = 'none';
                                    }
                                })
                                .catch(error => {
                                    console.error('Search suggestion error:', error);
                                    suggestionsContainer.style.display = 'none';
                                });
                        }, 300);
                    });

                    // Hide suggestions when clicking outside
                    L.DomEvent.on(document.documentElement, 'click', function (e) {
                        if (!container.contains(e.target as Node)) {
                            suggestionsContainer.style.display = 'none';
                        }
                    });

                    // Prevent map click events when interacting with the search control
                    L.DomEvent.disableClickPropagation(container);
                    L.DomEvent.disableScrollPropagation(container);

                    // Add search functionality
                    L.DomEvent.on(form, 'submit', function (e) {
                        L.DomEvent.preventDefault(e);

                        const searchText = input.value;
                        if (!searchText) return;

                        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spinner"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>';
                        const spinner = button.querySelector('.spinner');
                        if (spinner) {
                            (spinner as HTMLElement).style.animation = 'spin 1s linear infinite';
                        }

                        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchText)}`)
                            .then(response => response.json())
                            .then(data => {
                                if (data && data.length > 0) {
                                    const { lat, lon } = data[0];
                                    const latitude = parseFloat(lat);
                                    const longitude = parseFloat(lon);

                                    marker.setLatLng([latitude, longitude]);
                                    map.setView([latitude, longitude], 15);

                                    if (onLocationChange) {
                                        onLocationChange(latitude, longitude);
                                    }
                                }

                                button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>';
                                suggestionsContainer.style.display = 'none';
                            })
                            .catch(error => {
                                console.error('Search error:', error);
                                button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>';
                            });
                    });

                    return container;
                }
            });

            // Add the search control to the map
            map.addControl(new SearchControl());

            // Add styles for spinning animation
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);

            mapRef.current = map;
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    // Update marker position when props change
    useEffect(() => {
        if (mapRef.current && markerRef.current) {
            markerRef.current.setLatLng([lat, lng]);
            mapRef.current.setView([lat, lng], zoom);
        }
    }, [lat, lng, zoom]);

    return (
        <div
            ref={mapContainerRef}
            className="w-full h-[300px]"
            style={{ minHeight: '300px', zIndex: 1 }}
        />
    );
}