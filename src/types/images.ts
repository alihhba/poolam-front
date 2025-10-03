// types/images.ts
export interface ImageProps {
    imageKey?: string;
    src?: string;
    alt: string;
    blurDataURL?: string;
    placeholder?: 'blur' | 'empty';
    className?: string;
    width?: number | string;
    height?: number | string;
    lazyLoad?: boolean;
    priority?: boolean;
    fallbackKey?: string;
    objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
    rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    hoverEffect?: boolean;
    onLoad?: () => void;
    onError?: () => void;
}

export type RoundedType = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
export type ShadowType = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ObjectFitType = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
