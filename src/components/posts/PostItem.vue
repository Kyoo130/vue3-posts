<template>
	<AppCard>
		<h5 class="card-title">{{ title }}</h5>
		<p class="card-text">
			{{ content }}
		</p>
		<p class="card-text">{{ new Date(createdAt) }}</p>
	</AppCard>
</template>

<script setup>
import AppCard from '../AppCard.vue';
defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		type: Number,
	},
});
</script>

<style lang="scss" scoped></style>
