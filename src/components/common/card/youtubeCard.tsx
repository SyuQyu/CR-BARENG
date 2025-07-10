'use client';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from '..';

interface VideoData {
    title: string;
    thumbnail: string;
    channel: string;
}

interface YouTubeCardProps {
    url: string;
}

const YouTubeCard: React.FC<YouTubeCardProps> = ({ url }) => {
    const [videoData, setVideoData] = useState<VideoData | null>(null);

    // Function to extract video ID from the URL
    const getYouTubeID = (url: string): string | null => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    const videoID = getYouTubeID(url);

    useEffect(() => {
        if (videoID) {
            fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoID}&format=json`)
                .then((response) => response.json())
                .then((data) => {
                    setVideoData({
                        title: data.title,
                        thumbnail: data.thumbnail_url,
                        channel: data.author_name,
                    });
                })
                .catch((error) => console.log("Error fetching video data:", error));
        }
    }, [videoID]);

    if (!videoData) return <div>Loading...</div>;

    return (
        <a className="w-full flex md:h-[89px] max-h-[89px] flex-row justify-start items-center" href={`https://www.youtube.com/watch?v=${videoID}`} target="_blank" rel="noopener noreferrer">
            <ImageWithFallback
                width={0}
                height={0}
                sizes="100vw"
                className="w-full md:w-[89px] h-full max-w-[89px] object-cover"
                priority={false}
                src={videoData.thumbnail}
                alt={videoData.title}
            />
            <div className="flex flex-col h-full w-full justify-between items-start bg-white pr-6 p-2 shadow">
                <div className="sm:text-desktop-body-2 text-desktop-body-3">{videoData.title}</div>
                <p className="sm:text-desktop-body-3 text-mobile-caption-s text-blue-600 underline">{url}</p>
            </div>
        </a>
    );
};

export default YouTubeCard;
