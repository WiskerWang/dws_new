<template>
    <el-container>
        <el-row>
            <el-col :lg="1" :md="2" :sm="2" :xs="3" class="spanBtn" @click.native="collapseBtn()">
                <i class="el-icon-s-grid"></i>
            </el-col>
            <div style="background-color: #2c3e50">
            <el-col :lg="22" :md="20" :sm="20" :xs="18">
                <img class="navLogo" src="../assets/navLogo.png" style="height: 50px;">
            </el-col>
            <el-col :lg="1" :md="2" :sm="2" :xs="3">
                <el-dropdown>
                    <div class="avatarArea">
                        <el-avatar
                                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                                style="margin: 5px;"></el-avatar>
                    </div>
                    <el-dropdown-menu slot="dropdown" style="width: 200px">
                        <el-dropdown-item icon="el-icon-circle-plus-outline">注册</el-dropdown-item>
                        <el-dropdown-item icon="el-icon-user">登入</el-dropdown-item>
                        <el-dropdown-item divided icon="el-icon-switch-button">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
            </div>
        </el-row>
    </el-container>
</template>

<script>
// import { mapActions } from 'vuex';
// import model from "./model";

export default {
    name: "navHead",
    data() {
        return {
            // iconName: 'el-icon-s-unfold',
        };
    },
    methods: {
        collapseBtn() {
            this.$store.commit('handleNavAside');
            // (this.iconName === 'el-icon-s-fold') ? this.iconName = 'el-icon-s-unfold' : this.iconName = 'el-icon-s-fold';
        },
    }
}
</script>

<style scoped>
    .spanBtn:hover {
        background-color: cadetblue;
        transition: background-color 0.2s linear;
        cursor:pointer;
    }

    .avatarArea {
        width: 50px;
        height: 50px;
        justify-content : space-between;
    }

    .el-dropdown-menu__item {
        text-align: center;
    }

    .avatarArea:hover {
        background-color: rgba(41, 194, 36, 0.7);
        box-shadow: 0 2px 12px 0 rgba(255, 255, 255, 0.5);
        transition: background-color 0.2s linear;
        border-radius: 100px;
        /*width: 10px;*/
        cursor:pointer;
    }

    .navLogo {
        transform: scale(0.6);
    }

    .el-row {
        background-color: #2c3e50;
        width: 100%;
        height: 50px;
    }

    .el-col {
        background-color: #2c3e50;
        height: 50px;
    }
</style>

<!--<style>-->
<!--    .el-menu&#45;&#45;horizontal .el-menu-item {-->
<!--        float: left;-->
<!--        height: 60px;-->
<!--        line-height: 60px;-->
<!--        margin: 0;-->
<!--        border-bottom: 2px solid transparent;-->
<!--        color: aliceblue;-->
<!--    }-->

<!--    .buttonArea {-->
<!--        background-color: aliceblue;-->
<!--    }-->
<!--</style>-->
