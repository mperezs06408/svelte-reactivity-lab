import type { Post, PostSkeleton } from '../domain/post';
import { ENTRIES } from '../assets/contentful-entries';
import { client } from './contentful-client';

export async function getAllPosts(): Promise<Post[]> {
	const posts = await client.getEntries<PostSkeleton>({
		content_type: ENTRIES.POST
	});

	if (posts) {
		return posts.items?.map((item) => item.fields);
	}
	return [] as Post[];
}
