import {twMerge} from "tailwind-merge";
import {clsx} from "clsx"

export default function merge (...inputs: string[]) {
  return twMerge(clsx(inputs))
}