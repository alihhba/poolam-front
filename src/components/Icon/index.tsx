import React, {useEffect, useState} from 'react';
import {cn} from "@/lib/utils.ts";

// Type for the icon name, just as a string.
type IconName = string;

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    className?: string;
}

const Icon: React.FC<IconProps> = ({name, className, ...props}) => {
    const [SvgIcon, setSvgIcon] = useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);

    useEffect(() => {
        // Dynamically import the SVG when the name changes
        const loadIcon = async () => {
            try {
                // Dynamically import the SVG file
                const iconModule = await import(`@/assets/icons/${name?.replaceAll('_', '-')}.svg?react`);
                setSvgIcon(() => iconModule.default);
            } catch (error) {
                console.error(`Error loading icon: ${name}`, error);
                setSvgIcon(null); // You can set a fallback icon if needed
            }
        };

        loadIcon();
    }, [name]);

    // Render the icon or a fallback if not found
    return SvgIcon ? <SvgIcon className={className} {...props} /> :
        <div className={cn(
            'w-full h-full bg-gray-200 animate-pulse rounded-md',
            className
        )}></div>;
};

export default Icon;
