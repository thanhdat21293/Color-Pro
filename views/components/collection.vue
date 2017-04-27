<template lang="html">
	<div class="collection">
        <div v-for="collec in collection">
            <span>Author : {{collec.author}}</span>
            <a href="#"><div style="width: 50px;height: 50px background-color: {{collect.array[0]}}"></div></a>
        </div>
	</div>
</template>
<script>
	export default {
		props : ["collection"]
	}
</script>