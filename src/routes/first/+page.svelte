<script lang="ts">
	let count = $state(0);

	function add() {
		count += 1;
	}

	function remove() {
		count -= 1;
	}
</script>

<article>
	<h1>{count}</h1>
	<div>
		<button onclick={remove}>-</button>
		<button onclick={add}>+</button>
	</div>
</article>

<style lang="scss">
	@use './styles.scss' as *;
</style>
