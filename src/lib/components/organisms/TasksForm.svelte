<script lang="ts">
	import { tasksItems } from '$lib/core/hooks/shared';
	import { Task } from '$lib/components/molecules';

	let title: string = $state('');
	let description: string = $state('');

	let totalTasks = $derived(tasksItems.reduce((t) => t + 1, 0));
	let disabled = $derived(!title || !description);

	function submit() {
		tasksItems.push({ id: totalTasks + 1, title, description });
		title = '';
		description = '';
	}
</script>

<article>
	<form>
		<div class="form-item">
			<label for="title">Título:</label>
			<input bind:value={title} type="text" name="title" />
		</div>
		<div class="form-item">
			<label for="desc">Descripción:</label>
			<textarea bind:value={description} name="desc"></textarea>
		</div>
		<button type="submit" onclick={submit} {disabled}>Submit</button>
	</form>

	<section>
		{#each tasksItems as task (task.id)}
			<Task data={task} />
		{/each}
	</section>
</article>

<style lang="scss">
	@use './TasksForm.styles.scss' as *;
</style>
