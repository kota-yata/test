import type { TextLinks, News } from '$lib/types';

export interface I18N {
  biography: TextLinks[],
  qualifications: TextLinks[],
  communication: TextLinks[],
  interests: string,
  works: {
    featured: TextLinks[],
    algorithmImplementations: TextLinks[],
    others: TextLinks[]
  },
  news: News[]
}
