<template>
	<h2>About</h2>
	<p>{{ $route.path }}</p>
	<button class="btn btn-primary" @click="$router.push('/')">
		Home으로 이동
	</button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
