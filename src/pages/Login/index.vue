<template>
  <div class="w-100 h-100 main_box">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      style="max-width: 460px"
    >
      <el-form-item label="账号：">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="formLabelAlign.password" />
      </el-form-item>
      <el-button @click="handleNo">注册</el-button>
      <el-button type="primary" @click="submit">登入</el-button>
      <div v-if="showVX" class="box_VX">
        客服微信：88888888
        <br />
        添加客服微信获取账号密码
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { storeToRefs } from 'pinia'
import { service } from '@/config/require.js'
import { userInfo } from '@/stores/counte.js'
import { toRaw } from 'vue'
const router = useRouter()
const store = userInfo()
const { handleUser } = store

// data
const showVX: Ref<boolean> = ref(false)
const formLabelAlign = reactive({
  name: '',
  password: '',
})

// methods
const submit = async () => {
  const res = await service.post('/goods/user/login', toRaw(formLabelAlign))
  console.log('res', res)
  if (res == '登录成功') {
    handleUser(toRaw(formLabelAlign))
    ElMessage({
      message: '登入成功',
      type: 'success',
    })
    router.push('/main/home')
  } else {
    ElMessage({
      message: res || '账户密码错误',
      type: 'error',
    })
  }
}
const handleNo = () => {
  ElMessage({
    message: '请添加客服微信',
    type: 'warning',
  })
  showVX.value = true
}
</script>

<style lang="less" scoped>
.main_box {
  display: flex;
  justify-content: space-around;
  align-self: center;
  /deep/ .el-form {
    display: inline-block;
    padding: 70% 10%;
  }
  /deep/ .el-button {
    transform: translate(150%, 50%);
  }
  .box_VX {
    color: #1890ff;
    position: relative;
    top: 50px;
    text-align: center;
  }
}
</style>
