<template>
  <div class="w-100 h-100 main_box">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formLabelAlign"
      :rules="rules"
      style="max-width: 460px"
      ref="ruleFormRef"
    >
      <el-form-item label="用户：" prop="name">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="formLabelAlign.password" />
      </el-form-item>
      <!-- <el-form-item label="电话号码：" prop="code">
        <el-input v-model="formLabelAlign.code" />
      </el-form-item> -->
      <el-button @click="handleNo">注册</el-button>
      <el-button type="primary" @click="submit">提交</el-button>
      <div v-if="showVX" class="box_VX">
        客服微信：88888888
        <br />
        添加客服微信获取账号密码
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import { storeToRefs } from "pinia";
import { service } from "@/config/require.js";
import { userInfo } from "@/stores/counte.js";
import { toRaw } from "vue";
import { register, login } from "@/api/index.js";
const router = useRouter();
const store = userInfo();
const { handleUser } = store;

// data
const showVX: Ref<boolean> = ref(false);
const formLabelAlign = reactive({
  name: "",
  password: "",
  email: "",
});
const ruleFormRef = ref<FormInstance>();
console.log("ruleFormRef", ruleFormRef);
const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "blur",
    },
  ],
  code: [
    {
      required: true,
      message: "请输入身份证号码",
      trigger: "blur",
    },
  ],
});
// methods
const submit = () => {
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      const res = await login(toRaw(formLabelAlign));
      if (res == "登录成功") {
        handleUser(toRaw(formLabelAlign));
        ElMessage({
          message: "登入成功",
          type: "success",
        });
        router.push("/main/home");
      } else {
        ElMessage({
          message: res || "账户密码错误",
          type: "error",
        });
      }
    }
  });
};
const handleNo = async () => {
  console.log(toRaw(formLabelAlign));
  const res = await register(toRaw(formLabelAlign));
  // ElMessage({
  //   message: "请添加客服微信",
  //   type: "warning",
  // });
  // showVX.value = true;
};
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
