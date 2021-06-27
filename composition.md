路由跳转的三种方式
router-link

<router-link to="/login">去登录</router-link>
传统跳转

<template>
	<el-button @click="goHome">回首页</el-button>
</template>

<script>
export default{
	name:'login',
  methods:{
    goHome(){
      this.$router.push('/welcome')
    }
  }
}
</script>

Composition API 跳转

<script setup>
import { useRouter } from 'vue-router'
let router = useRouter()
const goHome = ()=>{
  router.push('/welcome')
}
</script>
