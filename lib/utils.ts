import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function reading_time(content: string) {
  const avgWPM = 200;
  const words = content.split(/\s/g).length;

  let value = Math.ceil(words / avgWPM);

  return `~${value} min read`;;
}