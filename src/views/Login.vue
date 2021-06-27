<template>
    <div>
        登录
        <el-button @click="gohome">回首页</el-button>
    </div>
</template >
<script setup>
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
</script>