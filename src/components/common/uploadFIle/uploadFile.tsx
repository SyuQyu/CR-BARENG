"use client";
import React, { useRef } from "react";
import { ImageWithFallback } from "..";

type FilePreviewProps = {
    files: File[];
    onRemove: (index: number) => void;
};

function FilePreview({ files, onRemove }: FilePreviewProps) {
    return (
        <div className="flex flex-wrap gap-4 mt-2">
            {files.map((file, idx) => {
                const url = URL.createObjectURL(file);
                return (
                    <div key={idx} className="relative w-32 h-32 border rounded overflow-hidden">
                        <ImageWithFallback
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="object-cover w-full h-full"
                            onLoad={() => URL.revokeObjectURL(url)}
                            priority={false}
                            src={url}
                            alt={file.name}
                        />
                        <button
                            type="button"
                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                            onClick={() => onRemove(idx)}
                            title="Remove"
                        >
                            &times;
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

type FileUploadProps = {
    label: string;
    name: string;
    files: File[];
    setFiles: (files: File[]) => void;
};

export default function FileUpload({ label, name, files, setFiles }: FileUploadProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles([...files, ...Array.from(e.target.files)]);
            e.target.value = ""; // reset input
        }
    };

    const handleRemove = (idx: number) => {
        setFiles(files.filter((_, i) => i !== idx));
    };

    return (
        <div className="border p-4 mb-4">
            <label className="font-bold block mb-2">{label}</label>
            <input
                ref={inputRef}
                type="file"
                name={name}
                multiple
                accept="image/*"
                onChange={handleChange}
                className="block mb-2"
            />
            <FilePreview files={files} onRemove={handleRemove} />
        </div>
    );
}