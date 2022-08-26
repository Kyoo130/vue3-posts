<template>
	<TheHeader />
	<TheView />
</template>

<script>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from './layouts/TheView.vue';

export default {
	name: 'App',
	components: {
		TheHeader,
		TheView,
	},
};
</script>

<style></style>
