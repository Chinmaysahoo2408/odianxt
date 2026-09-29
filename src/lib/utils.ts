import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatStatusLabel(status: string): string {
  switch (status) {
    case 'live':
      return 'Live in Production';
    case 'beta':
      return 'Public Beta';
    case 'in_development':
      return 'In Active Development';
    case 'coming_soon':
      return 'Coming Soon';
    default:
      return status;
  }
}

export function getStatusBadgeStyle(status: string): { bg: string; text: string; border: string; dot: string } {
  switch (status) {
    case 'live':
      return {
        bg: 'bg-[#173C35]/10',
        text: 'text-[#173C35]',
        border: 'border-[#173C35]/25',
        dot: 'bg-[#173C35]',
      };
    case 'beta':
      return {
        bg: 'bg-[#A8B7A1]/25',
        text: 'text-[#173C35]',
        border: 'border-[#173C35]/20',
        dot: 'bg-[#173C35]',
      };
    case 'in_development':
      return {
        bg: 'bg-[#B85C38]/10',
        text: 'text-[#B85C38]',
        border: 'border-[#B85C38]/25',
        dot: 'bg-[#B85C38]',
      };
    case 'coming_soon':
    default:
      return {
        bg: 'bg-[#C49A5A]/12',
        text: 'text-[#8C6B32]',
        border: 'border-[#C49A5A]/30',
        dot: 'bg-[#C49A5A]',
      };
  }
}
