// src/components/Icon.tsx
import React from "react";
import { cn } from "@/lib/utils.ts";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
    className?: string;
}

const iconModules = import.meta.glob("@/assets/icons/**/*.svg");

const Icon: React.FC<IconProps> = ({ name, className, ...props }) => {
    const [IconComponent, setIconComponent] = React.useState<React.FC<React.SVGProps<SVGSVGElement>> | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    const fileName = name?.replaceAll("_", "-");

    React.useEffect(() => {
        if (!fileName) {
            setLoading(false);
            return;
        }

        // Find the matching module
        const modulePath = Object.keys(iconModules).find(path => {
            const pathFileName = path.split("/").pop()?.replace(".svg", "")?.replaceAll("_", "-");
            return pathFileName === fileName;
        });

        if (!modulePath) {
            console.warn(`⚠️ Icon not found: ${fileName}`);
            setError(true);
            setLoading(false);
            return;
        }

        // Dynamically import the icon
        iconModules[modulePath]()
            .then((module: any) => {
                const Component = module.default || module.ReactComponent;
                if (Component) {
                    setIconComponent(() => Component);
                } else {
                    setError(true);
                }
            })
            .catch((err) => {
                console.error(`Failed to load icon ${fileName}:`, err);
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [fileName]);

    if (loading) {
        return (
            <div
                className={cn(
                    "animate-pulse bg-gray-200 rounded-md",
                    className
                )}
            />
        );
    }

    if (error || !IconComponent) {
        return (
            <div
                className={cn(
                    "bg-gray-100 rounded-md flex items-center justify-center text-gray-400",
                    className
                )}
                style={{
                    width: props.width || 24,
                    height: props.height || 24,
                }}
            >
                ?
            </div>
        );
    }

    return <IconComponent className={className} {...props} />;
};

export default Icon;
