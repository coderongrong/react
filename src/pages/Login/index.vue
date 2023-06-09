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
      <el-button @click="submit">登入</el-button>
      <div v-if="showVX" class="box_VX">客服微信：88888888</div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRaw } from 'vue'
import type { Ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()

// data
const showVX: Ref<boolean> = ref(false)
const formLabelAlign = reactive({
  name: '',
  password: '',
})

// methods
const submit = () => {
  console.log(toRaw(formLabelAlign))
  router.push('/main/home')
}
const handleNo = () => {
  ElMessage({
    message: '请联系客服获取账号',
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
    position: relative;
    top: 50px;
    text-align: center;
  }
}
</style>
