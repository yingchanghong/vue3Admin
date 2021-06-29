<template>
    <div class="login_wraper">
        <div class="model">
            <el-form :model="loginInfo" status-icon :rules="rules" ref="userForm">
                <div class="titles">平台</div>
                <el-form-item prop="userName">
                    <el-input type="text" prefix-icon="el-icon-user" v-model="loginInfo.userName"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" prefix-icon="el-icon-view" v-model="loginInfo.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template >

<script>
export default {
    data() {
        return {
            loginInfo: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, trigger: 'blur', message: '账号不能为空' }
                ],
                password: [
                    { required: true, trigger: 'blur', message: '账号不能为空' }
                ],
            }
        }
    },
    methods: {
        login() {
            this.$refs.userForm.validate((valid) => {
                if (!valid) this.$message.error('账号或密码不能为空！')
            })
            this.$api.login.login(this.loginInfo).then(res => {
                console.log(res)
                let { code, data } = res;
                if (code === 200) {
                    this.$store.commit('saveUserInfo', data)
                    console.log(1111)
                } else {

                }
            })
        }
    }
}
</script>


<!-- <script setup>
import { defineProps, reactive } from 'vue'
import { useRouter } from 'vue-router'
defineProps({
    msg: String
})
const state = reactive({ count: 0 })
const router = useRouter()
const gohome = () => {
    router.push('/welcome')
}
</script> -->

<style lang="scss" scoped>
.login_wraper {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9fcff;
    width: 100vw;
    height: 100vh;
    .model {
        width: 500px;
        padding: 50px;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0px 0px 10px 3px #c7c9cb4d;
    }
    .titles {
        font-size: 50px;
        text-align: center;
        margin-bottom: 30px;
    }
}
</style>