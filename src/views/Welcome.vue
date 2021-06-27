<template>
    <div class="welcome">
        <el-button size="mini" type="primary" @click="login">去登录</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    created() {
        this.$storage.setItem('userInfo', { name: '万物', age: 12 })
        console.log(this.$storage.getItem('userInfo'));
        this.$request({
            method: 'get',
            url: '/demo',
            data: {
                name: '12'
            }
        }).then(res => {
            // console.log(res);
        })
        this.$request.get('/demo').then(res => {
            // console.log('demo的', res);
        })
        this.$request({
            method: 'post',
            url: '/login',
            data: {
                name: '12'
            }
        }).then(res => {
            // console.log(res);
        })
    },
    methods: {
        login() {
            this.$router.push('/login')
        }
    },
}
</script>

<style lang="scss">
.welcome {
}
</style>