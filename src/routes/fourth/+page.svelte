<script lang="ts">
	import { getAllPosts } from '$lib/core/contentful/gateway/post-gateway.svelte';

	let promise = $state(getAllPosts());
</script>

<article>
	{#await promise}
		<p>...Loading</p>
	{:then posts}
		{#each posts as post}
			<div>
				<h2>{post.title}</h2>
				<span>{post.description}</span>
				<p>{post.body}</p>
			</div>
		{/each}
	{:catch error}
		<p>Oh! Something happens :c</p>
	{/await}
</article>

<style lang="scss">
	@use './styles.scss' as *;
</style>
