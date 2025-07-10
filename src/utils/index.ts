export function truncateTo100Chars(text: string): string {
    if (text.length <= 100) return text;
    return text.substring(0, 100) + '...';
}

export function truncate(text: string, length: number): string {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
}

// utils/formatters.ts
export const formatParams = (data: string): string => {
    return data
        .replace(/%20/g, ' ')  // Replace '%20' with a space
        .split(' ')            // Split by space into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(' ');            // Join the words back into a string
};

export function getQueryParam(param: string): string | null {
    if (typeof window === "undefined") return null;
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}