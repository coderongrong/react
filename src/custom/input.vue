<template>
  <div>
    <!-- <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol"> -->
      <a-form-model-item :label="item.label" v-for="(item, index) in dataProps" :key="index">
        <component :is="'a-' + item.type" :placeholder="item.placeholder" v-model="item.model">
          <template v-if="item.options && item.options.length > 0">
            <a-select-option v-for="(childrenItem, indeY) in item.options" :key="indeY" :value="childrenItem.value">
              {{ childrenItem.label }}
            </a-select-option>
          </template>
        </component>
      </a-form-model-item>
    <!-- </a-form-model> -->
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    dataProps: {
      type: Array,
      default: () => [
        {
          label: 'a',
          type: 'input',
          placeholder: '请输入',
          model: '100',
        },
        {
          label: 'a',
          type: 'input',
          placeholder: '请输入',
          model: '10',
        },
        {
          label: 'a',
          type: 'select',
          placeholder: '请输入',
          model: '',
          options: [
            { value: 'jack', label: 'jack' },
            { value: 'Lucy', label: 'Lucy' },
          ],
        },
        {
          label: 'a',
          type: 'select',
          placeholder: '请输入',
          model: '20',
          options: [
            { value: 'jack', label: 'jack' },
            { value: 'Lucy', label: 'Lucy' },
          ],
        },
        {
          label: 'a',
          type: 'switch',
          model: true,
        },
      ],
    },
  },
  data() {
    return {
      labelCol: { span: 3, offset: 0 },
      wrapperCol: { span: 10, offset: 0 },
      form: {},
    }
  },
}
</script>
