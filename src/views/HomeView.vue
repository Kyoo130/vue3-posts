<template>
	<h2>Home</h2>
	<p>{{ $route.path }}</p>
	<button class="btn btn-primary" @click="$router.push('/about')">
		About으로 이동
	</button>
	<hr class="my-4" />
	<div class="row g-3">
		<AppGrid :items="items" v-slot="{ item }" col-class="col-6">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import AppCard from '@/components/AppCard.vue';
import AppGrid from '@/components/AppGrid.vue';

const items = ref(['사과', '딸기', '포도', '바나나']);
</script>
