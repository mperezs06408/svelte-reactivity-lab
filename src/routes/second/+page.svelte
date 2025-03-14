<script lang="ts">
	let fibonacci: number[] = $state([]);
	let sum = $derived(fibonacci.reduce((p, c) => p + c, 0));

	function addFibonacci() {
		if (!fibonacci.length) {
			fibonacci.push(0);
			fibonacci.push(1);
		} else {
			fibonacci.push(fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1]);
		}
	}
</script>

<article>
	<button onclick={addFibonacci}>Fibonacci</button>
	{#if fibonacci.length}
		<h1>Suma: {sum}</h1>
		<h3>Elementos:</h3>
		<p>{fibonacci.join(',')}</p>
	{/if}
</article>

<style lang="scss">
	@use './styles.scss' as *;
</style>
