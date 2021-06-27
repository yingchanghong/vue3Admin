<template>
    <div class="basic-layout">
        <div class="nav-side"></div>
        <div class="content-right">
            <div class="nav-top">
                <div class="bread">面包屑</div>
                <div class="userInfo">用户信息</div>
            </div>
            <div class="wrapper">
                <router-view class="main"></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    created() {
    },
}
</script>

<style lang="scss">
.basic-layout {
    position: relative;
    display: flex;
    .nav-side {
        // position: fixed;
        width: 200px;
        height: 100vh;
        background: #001529;
        color: #fff;
        overflow-y: auto;
        transition: width 0.5s;
    }
    .content-right {
        flex-grow: 1;

        // margin-left: 200px;
        .nav-top {
            box-sizing: border-box;
            height: 50px;
            line-height: 50px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            align-items: center;
            padding: 20px;
        }
        .wrapper {
            box-sizing: border-box;
            background: #eef0f3;
            padding: 20px;
            height: calc(100vh - 50px);
            .main {
                background: #fff;
                height: 100%;
            }
        }
    }
}
</style>