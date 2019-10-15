<template>
    <v-app>
        <v-container style="width: 100%; padding: 0;">
<!--            顶部导航栏================================================================-->
            <v-toolbar
                    min-width="120"
                    :collapse="collapse"
            >
                <template v-if="extendedSlot" #extension>
                    <v-toolbar-items>
                        <v-btn text>Link 1</v-btn>
                        <v-btn text>Link 2</v-btn>
                        <v-btn text>Link 3</v-btn>
                    </v-toolbar-items>
                </template>
                <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>访客</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-toolbar-items v-if="!collapse">
                    <v-btn text>登陆</v-btn>
                    <v-btn text>注册</v-btn>
                </v-toolbar-items>

                <el-avatar
                        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        style="margin: 5px;"
                        @click.native="collapse = !collapse"></el-avatar>
            </v-toolbar>
<!--            侧边菜单抽屉=================================================================-->
            <v-navigation-drawer
                    v-model="drawer"
                    absolute
                    temporary>
                <v-list-item>
                    <v-list-item-content align="left" style="padding: 20px">
                        <v-list-item-title class="title" style="bottom: 0">
                            Edemy Education
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            Free Online Tutoring Service
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
                <v-list dense>
                    <v-list-item
                            v-for="item in items"
                            :key="item.title"
                            link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: "m-navigation",
    data() {
        return {
            collapse: true,
            drawer: null,
            items: [
                { title: '主页', icon: 'mdi-home' },
                { title: '开始学习', icon: 'mdi-book-open-variant' },
                { title: '求职板块', icon: 'mdi-briefcase' },
                { title: '关于我们', icon: 'mdi-information' },
                { title: '捐赠', icon: 'mdi-coin' },
            ],
        };
    },
    components: {
    },
    methods: {

    },
    watch: {

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
