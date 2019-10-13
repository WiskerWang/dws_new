<template>
    <el-container direction="vertical">
        <el-header height="50px">
            <nav-head></nav-head>
        </el-header>
        <el-container>
            <el-aside width="auto">
                <nav-aside style="height: 100%"></nav-aside>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view/>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
import navHead from "./navHead";
import navAside from "./navAside";

export default {
    name: "navigation",
    data() {
        return {
            isCollapse: true,
            iconName: 'el-icon-s-unfold',
        };
    },
    components: {
        navHead,
        navAside,
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSideNav() {
            (this.iconName === 'el-icon-s-fold') ? this.iconName = 'el-icon-s-unfold' : this.iconName = 'el-icon-s-fold';
        },
        handleAsideMenu() {
            (this.isCollapse === true) ? this.isCollapse = false : this.isCollapse = true;
        },
    },
    created() {
        // this.$router.push('/about');
    }
}
</script>

<style scoped>
    .el-header {
        /*background-color: #0c3866;*/
        color: white;
        text-align: center;
        line-height: 50px;
        width: 100%;
        padding: 0;
        box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .54);
    }

    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        width: 100%;
        padding: 0;
    }

    .el-aside {
        /*background-color: #D3DCE6;*/
        /*color: #333;*/
        text-align: left;
        /*line-height: 200px;*/
        box-shadow:  0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
