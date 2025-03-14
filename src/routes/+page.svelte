<script lang="ts">
	import { ROUTES_INFO } from '$lib/core/constants';
	import getLabelCapitalized from '@src/lib/core/utils/methods/getLabelCapitalized';
</script>

<article>
	<h1>Tabla de contenidos</h1>
	<ul>
		{#each ROUTES_INFO as route}
			<li><a href={route.route}>{getLabelCapitalized(route.label)}</a></li>
		{/each}
	</ul>
</article>

<style lang="scss">
	@use './styles.scss' as *;
</style>
