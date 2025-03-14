import type { ENTRIES } from '@contentful-lib/assets/contentful-entries';
import type { Author } from './author';

export interface Post {
	id: number;
	title: string;
	description: string;
	body: string;
	datePublished: string;
	author: { fields: Author };
}

export interface PostSkeleton {
	contentTypeId: ENTRIES.POST;
	fields: Post;
}
