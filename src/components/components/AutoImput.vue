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
            <a-button @click="submit" type="primary">??????</a-button>
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
    //???????????????????????????????????? ????????????
    // formData: {
    //   type: Array,
    //   default: [],
    // },
  },
  directives: {
    drag: {
      // ???????????????
      bind: function (el) {
        let odiv = el //??????????????????
        console.log(odiv)
        el.onmousedown = (e) => {
          //?????????????????????????????????
          let disY = e.clientY - odiv.offsetTop
          let disX = e.clientX - odiv.offsetLeft
          console.log(disX)
          let top = ''
          let left = ''
          let bottomY = document.documentElement.clientHeight - 150
          let bottomX = document.documentElement.clientWidth
          console.log(bottomX)
          document.onmousemove = (e) => {
            //???????????????????????????????????????????????????????????????????????????
            top = e.clientY - disY
            left = e.clientX - disX
            //?????????????????????positionY??????
            //??????????????????
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
          label: '????????????',
          id: 'name', //key???
          type: 'input', //form?????????
          placeholder: '?????????????????????',
          rules: { required: true, message: 'name', trigger: 'change' },
        },
        {
          label: '????????????',
          id: 'name1', //key???
          type: 'input', //form?????????
          placeholder: '?????????????????????',
          rules: { required: true,  message: 'name1', trigger: 'change' },
        },
        {
          label: '????????????',
          id: 'name2', //key???
          type: 'input', //form?????????
          placeholder: '?????????????????????',
          rules: { required: true,  message: 'name2', trigger: 'change' },
        },
        {
          label: '??????',
          type: 'select',
          id: 'channel',
          placeholder: '???????????????',
          radio: [
            { key: 1, value: '??????' },
            { key: 2, value: 'IOS' },
          ],
        },
        // {
        //   label: '??????',
        //   type: 'datePicker',
        //   id: 'date',
        //   placeholder: '???????????????',
        // },
        // {
        //   label: '?????????',
        //   type: 'checkbox',
        //   id: 'checkbox',
        //   placeholder: '?????????',
        //   checkbox: [
        //     { key: 1, value: '??????' },
        //     { key: 2, value: 'IOS' },
        //   ],
        // },
        // {
        //   label: '??????',
        //   type: 'radio',
        //   id: 'radio',
        //   placeholder: '?????????',
        //   radio: [
        //     { key: 1, value: '??????' },
        //     { key: 2, value: 'IOS' },
        //   ],
        // },
        // {
        //   label: '?????????',
        //   type: 'textArea',
        //   id: 'textArea',
        //   placeholder: '?????????',
        // },
      ],
      rules: {
        name: [{ required: true, message: '??????', trigger: 'change' }],
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