import { colors } from '@/theme';

interface CategoryIconProps {
  size?: number;
  color?: string;
}

export function CodeIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M3.5 8.5L1 6L3.5 3.5M8.5 3.5L11 6L8.5 8.5M7 2L5 10"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChartIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M2 10V6M6 10V2M10 10V4"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloudIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M3.5 8C2.11929 8 1 6.88071 1 5.5C1 4.11929 2.11929 3 3.5 3C3.62602 3 3.74996 3.00868 3.87133 3.02551C4.27211 2.39044 4.97868 2 5.76923 2C6.97754 2 7.96154 2.98401 7.96154 4.19231C7.96154 4.27495 7.95748 4.35666 7.94956 4.4375C8.54456 4.6875 9 5.24231 9 5.9C9 6.78411 8.28411 7.5 7.4 7.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BrainIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M8.5 3C9.328 3 10 3.672 10 4.5C10 5.328 9.328 6 8.5 6M8.5 3C7.672 3 7 3.672 7 4.5M8.5 3V2.5C8.5 1.672 7.828 1 7 1C6.172 1 5.5 1.672 5.5 2.5V4.5M5.5 4.5C5.5 3.672 4.828 3 4 3C3.172 3 2.5 3.672 2.5 4.5C2.5 5.328 3.172 6 4 6M5.5 4.5V8.5C5.5 9.328 6.172 10 7 10M7 10C7.828 10 8.5 9.328 8.5 8.5V6M7 10V11"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M6 1L2 3V6C2 8.5 6 11 6 11C6 11 10 8.5 10 6V3L6 1Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClipboardIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M8 2H9C9.55228 2 10 2.44772 10 3V10C10 10.5523 9.55228 11 9 11H3C2.44772 11 2 10.5523 2 10V3C2 2.44772 2.44772 2 3 2H4M5 1H7C7.55228 1 8 1.44772 8 2V3C8 3.55228 7.55228 4 7 4H5C4.44772 4 4 3.55228 4 3V2C4 1.44772 4.44772 1 5 1Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckCircleIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6ZM4 6L5.5 7.5L8.5 4.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SettingsIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M6 7.5C6.82843 7.5 7.5 6.82843 7.5 6C7.5 5.17157 6.82843 4.5 6 4.5C5.17157 4.5 4.5 5.17157 4.5 6C4.5 6.82843 5.17157 7.5 6 7.5Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 7.5C9.4 7.7 9.4 7.9 9.5 8.1L10 9C10.1 9.2 10 9.4 9.8 9.5L9 10C8.8 10.1 8.6 10 8.5 9.9L7.6 9.4C7.4 9.3 7.2 9.3 7 9.4L6.5 9.7C6.3 9.8 6.2 10 6.2 10.2V11C6.2 11.2 6 11.4 5.8 11.4H4.2C4 11.4 3.8 11.2 3.8 11V10.2C3.8 10 3.7 9.8 3.5 9.7L3 9.4C2.8 9.3 2.6 9.3 2.4 9.4L1.5 9.9C1.3 10 1.1 10 1 9.8L0.2 9C0.1 8.8 0.1 8.6 0.2 8.5L0.7 7.6C0.8 7.4 0.8 7.2 0.7 7L0.4 6.5C0.3 6.3 0.1 6.2 -0.1 6.2H-1C-1.2 6.2 -1.4 6 -1.4 5.8V4.2C-1.4 4 -1.2 3.8 -1 3.8H-0.2C0 3.8 0.2 3.7 0.3 3.5L0.6 3C0.7 2.8 0.7 2.6 0.6 2.4L0.1 1.5C0 1.3 0 1.1 0.2 1L1 0.2C1.2 0.1 1.4 0.1 1.5 0.2L2.4 0.7C2.6 0.8 2.8 0.8 3 0.7L3.5 0.4C3.7 0.3 3.8 0.1 3.8 -0.1V-1C3.8 -1.2 4 -1.4 4.2 -1.4H5.8C6 -1.4 6.2 -1.2 6.2 -1V-0.2C6.2 0 6.3 0.2 6.5 0.3L7 0.6C7.2 0.7 7.4 0.7 7.6 0.6L8.5 0.1C8.7 0 8.9 0 9 0.2L9.8 1C9.9 1.2 9.9 1.4 9.8 1.5L9.3 2.4C9.2 2.6 9.2 2.8 9.3 3L9.6 3.5C9.7 3.7 9.9 3.8 10.1 3.8H11C11.2 3.8 11.4 4 11.4 4.2V5.8C11.4 6 11.2 6.2 11 6.2H10.2C10 6.2 9.8 6.3 9.7 6.5L9.4 7C9.3 7.2 9.3 7.4 9.4 7.6L9.9 8.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NetworkIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="2" r="1" stroke={color} strokeWidth="1" />
      <circle cx="2" cy="10" r="1" stroke={color} strokeWidth="1" />
      <circle cx="10" cy="10" r="1" stroke={color} strokeWidth="1" />
      <path d="M6 3V7M2 9L6 7M10 9L6 7" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function DatabaseIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <ellipse cx="6" cy="3" rx="4" ry="1.5" stroke={color} strokeWidth="1" />
      <path
        d="M2 3V9C2 9.828 3.79 10.5 6 10.5C8.21 10.5 10 9.828 10 9V3M2 6C2 6.828 3.79 7.5 6 7.5C8.21 7.5 10 6.828 10 6"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LightbulbIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M6 1V2M2.5 2.5L3.2 3.2M1 6H2M10 6H11M8.8 3.2L9.5 2.5M4.5 8.5H7.5M5 10.5H7M6 8C4.34315 8 3 6.65685 3 5C3 3.34315 4.34315 2 6 2C7.65685 2 9 3.34315 9 5C9 6.65685 7.65685 8 6 8Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BuildingIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M2 11V3L6 1L10 3V11M2 11H10M4 5V7M8 5V7M4 9V11M8 9V11"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CpuIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <rect x="3.5" y="3.5" width="5" height="5" stroke={color} strokeWidth="1" rx="0.5" />
      <rect x="5" y="5" width="2" height="2" stroke={color} strokeWidth="1" />
      <path
        d="M4 3.5V1M8 3.5V1M4 11V8.5M8 11V8.5M3.5 4H1M3.5 8H1M11 4H8.5M11 8H8.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PaletteIcon({ size = 12, color = colors.text.grey9 }: CategoryIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M6 1C3.24 1 1 3.24 1 6C1 8.76 3.24 11 6 11C6.55 11 7 10.55 7 10C7 9.75 6.9 9.55 6.8 9.4C6.7 9.25 6.65 9.1 6.65 8.9C6.65 8.35 7.1 7.9 7.65 7.9H9C10.1 7.9 11 7 11 5.9C11 3.14 8.76 1 6 1Z"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="3.5" cy="5.5" r="0.5" fill={color} />
      <circle cx="5" cy="3.5" r="0.5" fill={color} />
      <circle cx="7" cy="3.5" r="0.5" fill={color} />
      <circle cx="8.5" cy="5.5" r="0.5" fill={color} />
    </svg>
  );
}

export function getCategoryIcon(categoryId: number) {
  const iconMap: Record<number, React.ComponentType<CategoryIconProps>> = {
    1: CodeIcon,
    2: ChartIcon,
    3: CloudIcon,
    4: BrainIcon,
    5: ShieldIcon,
    6: ClipboardIcon,
    7: PaletteIcon,
    8: CheckCircleIcon,
    9: SettingsIcon,
    10: NetworkIcon,
    11: NetworkIcon,
    12: DatabaseIcon,
    13: LightbulbIcon,
    14: BuildingIcon,
    15: CpuIcon,
  };

  return iconMap[categoryId] || CodeIcon;
}
