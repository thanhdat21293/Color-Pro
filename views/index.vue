<template>
        <div class="container">
                <div class="col-sm-12">
                        <div class="row">
                                <headerme></headerme>
                                <collection :collection="collection" :popup="popup"></collection>
                        </div>
                </div>
        </div>
</template>

<script>
	export default {
		data() {
            collection : []
        },
            ready() {
                    new Clipboard('.divcolor');
            },
        methods : {
        }
	}
</script>