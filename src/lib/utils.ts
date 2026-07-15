import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstCha(input?: string) {
  return (
    input && `${input.charAt(0).toUpperCase()}${input.slice(1).toLowerCase()}`
  );
}
