<script setup lang="ts">
import Text from '../components/Text/index.vue'
import { userInfo, userInfoProxy } from '@/stores/counte.js'
import { service } from '@/config/require.js'
const router = useRouter()
const store = userInfo()
const { user } = storeToRefs(store)
const { _proxy } = storeToRefs(userInfoProxy())
const { handleUserProxy } = userInfoProxy()

const { person } = toRaw(user.value)
//methods
const logout = async () => {
  handleUserProxy(toRaw(_proxy.value).info + 1, 'info')
  router.push('/login')
  // const res = await service.post('/goods/user/login', { name: 'zhangsan', password: '1234565' })
  // console.log('res', res)
}
</script>

<template>
  <div class="main_box">
    <span class="person">个人中心</span>
    <br />
    <span class="user_info">用户名：{{ person?.name || '******' }}</span>
    <br />
    <span class="user_info">个人信息：{{ person?.info || '******' }}</span>
    <br />
    <span class="user_info">兴趣爱好：******</span>
    <br />
    <span class="user_info">其他：******</span>
    <br />
    <el-button type="primary" class="login" @click="logout">退出登入</el-button>
  </div>
</template>

<style lang="less" scoped>
.login {
  width: 100%;
  position: fixed;
  bottom: 50%;
}

.person {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 5px 0px;
}
.user_info {
  display: inline-block;
  width: 100%;
  padding: 5px 0px 8px 30px;
  border-bottom: 1px solid #f3f3f3;
}
.hoby {
  animation: move 4s;
  animation-iteration-count: infinite;
  position: relative;
  left: 20px;
}
@keyframes move {
  0% {
    left: 10px;
    color: red;
  }
  50% {
    left: 50px;
    color: green;
  }
  100% {
    left: 10px;
    color: red;
  }
}
</style>
