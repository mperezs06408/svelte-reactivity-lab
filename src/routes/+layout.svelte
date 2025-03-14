<script lang="ts">
	import { ROUTES_INFO } from '@src/lib/core/constants';
	import getLabelCapitalized from '@src/lib/core/utils/methods/getLabelCapitalized';
	import '@src/styles/layout.style.scss';

	let { children } = $props();
</script>

<nav class="navbar">
	{#each ROUTES_INFO as route}
		<a class="navbar__item" href={route.route}>{getLabelCapitalized(route.label)}</a>
	{/each}
</nav>

{@render children()}
