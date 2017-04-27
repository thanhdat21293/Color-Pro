<template lang="html">
	<div class="collection">
        <div v-for="collec in collection">
            <div class="col-sm-2">
                <h4>{{collec.name}}</h4>
            </div>
            <div class="col-sm-10">
                <span v-for="color in collec.array" :data-clipboard-text="color"  class= "divcolor" v-bind:style="{ backgroundColor: color }"></span>
            </div>
        </div>
	</div>
</template>
<script>
	export default {
		props : ["collection"]
	}
</script>