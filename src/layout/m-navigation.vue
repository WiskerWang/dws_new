<template>
    <v-app>
        <v-container style="width: 100%; padding: 0;">

        </v-container>
    </v-app>
</template>

<script>
export default {
    name: "m-navigation",
    data() {
        return {
            drawer: null,
            collapseOnScroll: true,
            items: [
                { title: '主页', icon: 'mdi-anchor' },
                { title: '关于我们', icon: 'mdi-anchor' },
            ],
        };
    },
    components: {
    },
    methods: {

    },
    watch: {
        group () {
            this.drawer = false
        },
    },
    created() {
        // this.$router.push('/about');
    }
}
</script>

<style scoped>
    .navLogo {
        transform: scale(0.5);
        margin: 0;
    }
</style>
