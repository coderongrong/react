<template>
  <div>
    <div>table</div>
    <a-form
      ref="formRef"
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item
        label="source"
        name="source"
        :rules="[{ required: true, message: 'Please input your source!' }]"
      >
        <a-input v-model:value="formState.source.data" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
        <a-button type="primary" @click="resetForm">reset</a-button>
      </a-form-item>
    </a-form>
    <component is="a-button" type="primary" ghost @click="handlebtn"
      >asdasd</component
    >
    <component is="a-button" type="primary" @click="handlebtn"
      >asdasd</component
    >
    <div :class="classes.red">123</div>
    <div :class="classes.blue">123</div>
  </div>
</template>

<script setup lang='ts'>

import classes from "@/assets/example.module.css";  // 模块化 css
// console.log(classes)

import { reactive, toRaw, ref, watch, watchEffect } from "vue";
import type { FormInstance } from "ant-design-vue";

const formRef = ref<FormInstance>();

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
type obj = {
  username: string;
  password: string;
  remember: boolean;
  source: object;
};

const formState = reactive<obj>({
  username: "",
  password: "",
  remember: true,
  source: {
    data: "",
  },
});
const onFinish = (values: any) => {
  console.log("Success:", values);
  console.log("Success:", values.source.data);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const handlebtn = () => {
  console.log("xxxx  btn");
};
const resetForm = () => {
  console.log("formRef", formRef);
  formRef.value.resetFields();
};
watch(formState, (val, old) => {
  console.log(val, old);
});
watchEffect(() => {
  console.log("watchEffect");
});
</script>

<style scoped>
</style>