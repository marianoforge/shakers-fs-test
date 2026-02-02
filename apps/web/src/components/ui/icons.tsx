interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export function ChevronLeftIcon({ size = 16, color = '#181B1A' }: IconProps) {
  return (
    <svg
      width={size / 2}
      height={(size * 3) / 4}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 1L1.5 6L6.5 11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({ size = 16, color = '#181B1A' }: IconProps) {
  return (
    <svg
      width={size / 2}
      height={size / 3}
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L4 4L7 1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon({ size = 12, color = '#181B1A' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="2" width="10" height="9" rx="1" stroke={color} />
      <path d="M1 5H11" stroke={color} />
      <path d="M4 1V3" stroke={color} strokeLinecap="round" />
      <path d="M8 1V3" stroke={color} strokeLinecap="round" />
    </svg>
  );
}

export function ClockIcon({ size = 12, color = '#181B1A' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="5" stroke={color} />
      <path d="M6 3V6L8 8" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function UsersIcon({ size = 14, color = '#181B1A' }: IconProps) {
  return (
    <svg
      width={size}
      height={(size * 12) / 14}
      viewBox="0 0 14 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5" cy="3" r="2" stroke={color} />
      <path
        d="M1 10C1 8.34315 2.34315 7 4 7H6C7.65685 7 9 8.34315 9 10"
        stroke={color}
        strokeLinecap="round"
      />
      <circle cx="10" cy="3" r="1.5" stroke={color} />
      <path d="M13 10C13 8.89543 12.1046 8 11 8H10" stroke={color} strokeLinecap="round" />
    </svg>
  );
}

export function CategoryIcon({ size = 12, color = '#181B1A' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="11" height="11" rx="1.5" stroke={color} />
    </svg>
  );
}

export function CloseIcon({ size = 10, color = '#181B1A' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L9 9M9 1L1 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FilterIcon({ size = 16, color = '#181B1A' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 4H14M4 8H12M6 12H10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SortIcon({ size = 16, color = '#181B1A' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 2L12 6M4 10L8 14L12 10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ size = 16, color = '#181B1A' }: IconProps) {
  return (
    <svg
      width={size}
      height={(size * 2) / 3}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4L4.5 7.5L11 1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
