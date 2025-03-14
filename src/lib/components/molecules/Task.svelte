<script lang="ts">
	import type { TasksModel } from '@src/lib/core/utils/interfaces';

	let { data }: { data: TasksModel } = $props();

	function getDate() {
		const dateFormatted = new Date();

		const date = `${dateFormatted.getFullYear()}-${dateFormatted.getMonth() + 1}-${dateFormatted.getDate()} `;
		const hour = `${dateFormatted.getHours()}:${dateFormatted.getMinutes()}:${dateFormatted.getMilliseconds()}`;

		return `${date} ${hour} `;
	}
</script>

<article>
	<h2>{data.title}</h2>
	<span>{getDate()}</span>
	<p>{data.description}</p>
</article>

<style lang="scss">
	@use './Task.style.scss' as *;
</style>
