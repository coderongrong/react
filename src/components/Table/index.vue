<template>
  <div>
    <div>table</div>
    <!-- <a-form
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
    </a-form> -->
    <!-- <component is="a-button" type="primary" ghost @click="handlebtn"
      >asdasd</component
    >
    <component is="a-button" type="primary" @click="handlebtn"
      >asdasd</component
    >
    <div :class="classes.red">123</div>
    <div :class="classes.blue">123</div>
    <div>{{ state.count }}</div>
    <div>state.data : {{ state.data }}</div>
    <div>{{ data1 }}</div>
    <div :class="classes.blue">{{ data2 }}</div>
    <component is="a-button" type="primary" ghost @click="handlebtn1"
      >asdasd</component
    >
    <component is="a-button" type="primary" @click="handlebtn2"
      >asdasd</component
    >
    <div>{{ foo }} --- {{ bar }}</div>
    <component is="a-button" type="primary" @click="handlebtn3"
      >asdasd</component
    >
    <div>{{ _state.count }}</div>
    <input v-model="text" /> -->
    <!-- <div>{{ state.foo }}</div>
    <div>{{ state.nested.bar }}</div>
    <component is="a-button" type="primary" @click="handlebtn3"
      >asdasd</component
    > -->
    <div ref="el">{{ counter }}</div>
    <component is="a-button" type="primary" @click="handlebtn3"
      >asdasd</component
    >
    <div>{{ foo.abc }}</div>
    <!-- <Input /> -->
    <span v-pre
      >{{ this will not be compiled }}
      <span>asdasd</span>
    </span>
    <span v-once>This will never change: {{ msg }}</span>
    <div v-cloak>
      {{ msg }}
    </div>
    <transition>
      <div style="width: 500px; text-align: center" :key="text">
        <span style="display: block; width: 500px; text-align: center">{{
          text
        }}</span>
      </div>
    </transition>
    <div>
      <component is="a-button" type="primary" @click="handlebtn4"
        >asdasd</component
      >
      <Children
        :msg="msg"
        @changeChildren="changeChildren"
        @delete="hanlddelete"
      />
    </div>
  </div>
</template>

<script setup lang='ts'>
import classes from "@/assets/example.module.css"; // 模块化 css
// console.log(classes)
import Children from "./children.vue";
import {
  shallowReactive,
  isReactive,
  shallowReadonly,
  isReadonly,
  effectScope,
  computed,
  watch,
  ref,
  onMounted,
  watchEffect,
  inject,
} from "vue";
import type { FormInstance } from "ant-design-vue";
const el = ref();
const foo = inject("foo");
const text = ref(1);
const handlebtn4 = () => {
  text.value++;
};
// console.log(foo)
onMounted(() => {
  el.value; // <div>
  // console.log(el.value)
});
const scope = effectScope();
const counter = ref(10);
const msg = ref(100);
setTimeout(() => {
  msg.value = 12321;
}, 1000);

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})

// scope.run(() => {
//   const doubled = computed(() => counter.value * 2);

//   watch(doubled, () => console.log(doubled.value));

//   // watchEffect(() => console.log('Count: ', doubled.value))
// });
// scope.stop();

const changeChildren = (value) => {
  msg.value = value;
};
const hanlddelete = (value) => {
  msg.value = value;
};
const handlebtn3 = () => {
  counter.value++;
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>