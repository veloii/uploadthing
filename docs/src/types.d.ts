import { type SearchOptions } from "flexsearch";

declare module "@/mdx/search" {
  export type Result = {
    url: string;
    title: string;
    pageTitle?: string;
  };

  export function search(query: string, options?: SearchOptions): Array<Result>;
}