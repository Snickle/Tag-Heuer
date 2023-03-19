<template>
	<div class="page page--homepage">
		<Header />
		<HomepageAmbassadors :ambassadors="content.ambassadors"/>
	</div>
</template>

<script>
export default {
    name: "Homepage",
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {
            const content = await this.$axios.$get("/data/homepage.json").then(response => {
                this.content = response;
            })
                .catch(error => {
                console.log(error);
            });
        }
    },
    data() {
        return {
            content: {
				ambassadors: []
			}
        };
    }
}
</script>
