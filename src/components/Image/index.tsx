// components/Image.tsx
import React, { useState } from 'react';
import {type ImageKey, images} from "@/constants/images.ts";

interface ImageProps {
    src?: ImageKey;
    alt: string;
    className?: string;
    width?: number | string;
    height?: number | string;
    lazy?: boolean;
    rounded?: boolean;
    onLoad?: () => void;
    onError?: () => void;
}

const Image: React.FC<ImageProps> = ({
                                         src,
                                         alt,
                                         className = '',
                                         width,
                                         height,
                                         lazy = true,
                                         rounded = false,
                                         onLoad,
                                         onError,
                                     }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const getImageUrl = (): string => {
        console.log(src)
        if (!src) return images.placeholder;

        if (src in images) {
            return images[src as ImageKey];
        }

        return src;
    };

    const imageUrl = getImageUrl();
    const roundedClass = rounded ? 'rounded-lg' : '';

    const handleLoad = () => {
        setIsLoaded(true);
        onLoad?.();
    };

    const handleError = () => {
        setHasError(true);
        onError?.();
    };

    return (
        <div className={`relative overflow-hidden ${roundedClass} ${className}`}>
            {!isLoaded && !hasError && (
                <div className="absolute inset-0  animate-pulse" />
            )}

            {/* Error state */}
            {hasError && (
                <div className="flex items-center justify-center bg-gray-100 text-gray-400">
                    <div className="text-center p-4">
                        <div className="text-2xl mb-2">📷</div>
                        <div className="text-sm">Failed to load image</div>
                    </div>
                </div>
            )}

            {/* Main image */}
            <img
                src={imageUrl}
                alt={alt}
                loading={lazy ? 'lazy' : 'eager'}
                onLoad={handleLoad}
                onError={handleError}
                className={`transition-opacity duration-300 ${
                    isLoaded && !hasError ? 'opacity-100' : 'opacity-0'
                } ${roundedClass}`}
                style={{
                    width: width || '100%',
                    height: height || 'auto',
                }}
            />
        </div>
    );
};

export default Image;
