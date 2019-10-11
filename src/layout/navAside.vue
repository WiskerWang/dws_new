<template>
    <div>
        <el-menu default-active="1-4-1"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 :collapse="this.$store.state.navAsideCollapse"
                 router
                 >
            <el-menu-item index="/">
                <i class="el-icon-house"></i>
                <span slot="title">主页</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-reading"></i>
                    <span slot="title">开始学习</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1"><i class="el-icon-edit"></i>学术写作</el-menu-item>
                    <el-menu-item index="1-2"><i class="el-icon-document-checked"></i>课程辅导</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-suitcase-1"></i>
                <span slot="title">求职板块</span>
            </el-menu-item>
            <el-menu-item index="/about">
                <i class="el-icon-setting"></i>
                <span slot="title">关于我们</span>
            </el-menu-item>
            <el-menu-item index="/">
                <i class="el-icon-present"></i>
                <span slot="title">捐赠</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-loading"></i>
                <span slot="title">Building</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: "navAside",
    data() {
        return {
            // isCollapse: true,
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        created() {

        }
    }
}
</script>

<style scoped>
.el-menu {
    height: 100%;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

</style>
