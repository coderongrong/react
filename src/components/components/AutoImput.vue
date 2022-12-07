<template>
  <div>
    <a-form-model ref='form' :model="form" layout="inline">
      <a-row>
        <a-col :span="4" v-for="(item, index) in formData" :key="index">
          <div v-if="item.type == 'input'">
            <a-form-model-item :label="item.label" :prop="item.id" :rules="item.rules">
              <a-input v-model="form[item.id]" :placeholder="item.placeholder" />
            </a-form-model-item>
          </div>
          <div v-if="item.type == 'select'">
            <a-form-model-item :label="item.label">
              <a-select :placeholder="item.placeholder" v-model="form[item.id]" style="width: 183px">
                <a-select-option v-for="(item, index) in item.radio" :key="item.key + index">
                  {{ item.value }}
                </a-select-option>
              </a-select>
            </a-form-model-item>
          </div>
          <div v-if="item.type == 'datePicker'">
            <a-form-model-item :label="item.label">
              <a-date-picker
                v-model="form[item.id]"
                show-time
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD "
                :placeholder="item.placeholder"
                style="width: 183px"
              />
            </a-form-model-item>
          </div>
          <div v-if="item.type == 'checkbox'">
            <a-form-model-item :label="item.label">
              <a-checkbox-group :placeholder="item.placeholder" v-model="form[item.id]" style="width: 183px">
                <a-checkbox v-for="(item, index) in item.checkbox" :key="item.key + index" :value="item.value">
                  {{ item.value }}
                </a-checkbox>
              </a-checkbox-group>
            </a-form-model-item>
          </div>
          <div v-if="item.type == 'radio'">
            <a-form-model-item :label="item.label">
              <a-radio-group :placeholder="item.placeholder" v-model="form[item.id]" style="width: 183px">
                <a-radio v-for="(item, index) in item.radio" :key="item.key + index" :value="item.value">
                  {{ item.value }}
                </a-radio>
              </a-radio-group>
            </a-form-model-item>
          </div>
          <div v-if="item.type == 'textArea'">
            <a-form-model-item :label="item.label">
              <a-input
                v-model="form[item.id]"
                :placeholder="item.placeholder"
                type="textarea"
                style="width: 100%; height: 100%"
              />
            </a-form-model-item>
          </div>
        </a-col>
        <slot></slot>
        <a-col :span="4">
          <a-form-model-item>
            <a-button @click="submit" type="primary">查询</a-button>
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: 'AntdadminIndex',
  props: {
    //接收父组件拿到的表单内容 然后遍历
    // formData: {
    //   type: Array,
    //   default: [],
    // },
  },
  directives: {
    drag: {
      // 指令的定义
      bind: function (el) {
        let odiv = el //获取当前元素
        console.log(odiv)
        el.onmousedown = (e) => {
          //算出鼠标相对元素的位置
          let disY = e.clientY - odiv.offsetTop
          let disX = e.clientX - odiv.offsetLeft
          console.log(disX)
          let top = ''
          let left = ''
          let bottomY = document.documentElement.clientHeight - 150
          let bottomX = document.documentElement.clientWidth
          console.log(bottomX)
          document.onmousemove = (e) => {
            //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
            top = e.clientY - disY
            left = e.clientX - disX
            //绑定元素位置到positionY上面
            //移动当前元素
            odiv.style.top = top > 0 && top < bottomY ? top + 'px' : top <= 0 ? 0 : bottomY + 'px'
            odiv.style.left = left > 0 && left < bottomX ? left + 'px' : left <= 0 ? 0 : bottomX + 'px'
          }
          document.onmouseup = (e) => {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      },
    },
  },
  data() {
    return {
      form: {},
      formData: [
        {
          label: '角色名称',
          id: 'name', //key值
          type: 'input', //form的属性
          placeholder: '请输入角色名称',
          rules: { required: true, message: 'name', trigger: 'change' },
        },
        {
          label: '角色名称',
          id: 'name1', //key值
          type: 'input', //form的属性
          placeholder: '请输入角色名称',
          rules: { required: true,  message: 'name1', trigger: 'change' },
        },
        {
          label: '角色名称',
          id: 'name2', //key值
          type: 'input', //form的属性
          placeholder: '请输入角色名称',
          rules: { required: true,  message: 'name2', trigger: 'change' },
        },
        {
          label: '渠道',
          type: 'select',
          id: 'channel',
          placeholder: '请选择渠道',
          radio: [
            { key: 1, value: '安卓' },
            { key: 2, value: 'IOS' },
          ],
        },
        // {
        //   label: '时间',
        //   type: 'datePicker',
        //   id: 'date',
        //   placeholder: '请选择时间',
        // },
        // {
        //   label: '复选框',
        //   type: 'checkbox',
        //   id: 'checkbox',
        //   placeholder: '请选择',
        //   checkbox: [
        //     { key: 1, value: '安卓' },
        //     { key: 2, value: 'IOS' },
        //   ],
        // },
        // {
        //   label: '单选',
        //   type: 'radio',
        //   id: 'radio',
        //   placeholder: '请选择',
        //   radio: [
        //     { key: 1, value: '安卓' },
        //     { key: 2, value: 'IOS' },
        //   ],
        // },
        // {
        //   label: '文本框',
        //   type: 'textArea',
        //   id: 'textArea',
        //   placeholder: '请输入',
        // },
      ],
      rules: {
        name: [{ required: true, message: '必填', trigger: 'change' }],
      },
    }
  },
  mounted() {},
  methods: {
    submit() {
      this.$refs['form'].validate(valid => {
        console.log(valid)
        console.log(this.form)
        this.$emit('updateValue', this.form)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>