// scripts/generate-icons.js
const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../src/assets/icons');
const outputFile = path.join(__dirname, '../src/components/Icon.tsx');

function generateIcons() {
    if (!fs.existsSync(iconsDir)) {
        console.error('Icons directory not found:', iconsDir);
        return;
    }

    const files = fs.readdirSync(iconsDir);
    const svgFiles = files.filter(file => file.endsWith('.svg'));

    if (svgFiles.length === 0) {
        console.warn('No SVG files found in', iconsDir);
        return;
    }

    const imports = [];
    const iconMap = [];

    svgFiles.forEach(file => {
        const iconName = file.replace('.svg', '').replace(/-/g, '_');
        const importName = `Icon_${iconName.replace(/[^a-zA-Z0-9_]/g, '_')}`;

        imports.push(`import ${importName} from '@/assets/icons/${file}?react';`);
        iconMap.push(`  '${iconName}': ${importName},`);
    });

    const fileContent = `import React from 'react';

// Auto-generated file - do not edit manually
// Generated ${new Date().toISOString()}
${imports.join('\n')}

const icons = {
${iconMap.join('\n')}
} as const;

export type IconName = keyof typeof icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, className, size, ...props }) => {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    console.warn(\`Icon "\${name}" not found. Available icons: \${Object.keys(icons).join(', ')}\`);
    return (
      <div
        className={\`inline-flex items-center justify-center bg-gray-100 text-gray-400 \${className}\`}
        style={size ? { width: size, height: size } : undefined}
      >
        ❌
      </div>
    );
  }

  const style = size ? { width: size, height: size } : undefined;
  return <SvgIcon className={className} style={style} {...props} />;
};

export default Icon;
`;

    fs.writeFileSync(outputFile, fileContent);
    console.log(`✅ Generated ${svgFiles.length} icons in ${outputFile}`);
}

// Run if called directly
if (require.main === module) {
    generateIcons();
}

module.exports = generateIcons;
