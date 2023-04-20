<template>
  <div class="inline">
    <a-form-model ref="form" :model="form" layout="inline" :label-col="{ span: 10 }" :wrapper-col="{ span: 8 }">
      <a-row>
        <a-col
          class="col-width"
          :style="{ width: inputWidth + 'px', 'margin-right': '15px' }"
          v-for="(item, index) in formData"
          :key="index"
        >
          <a-form-model-item :label="item.label" :prop="item.id" :rules="item.rules" style="display: flex">
            <component
              :disabled="item.disabled"
              v-if="item.type"
              :is="'a-' + item.type.split('_')[0]"
              :mode="(/_m/.test(item.type) && 'multiple') || 'false'"
              :placeholder="item.placeholder || '请输入'"
              v-model="form[item.id]"
              :tree-data="item.options"
              :tree-checkable="!item.show"
              default-checked
              @change="handleChange(item.isClick)"
            >
              <component :is="'a-select-option'" v-for="(item, index) in item.options" :key="index" :value="item.value">
                {{ item.label || item.title || item.value }}
              </component>
            </component>
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
  </div>
</template>

<script>
class Arrobj {
  constructor() {
    this.id = 'productClassName'
    this.label = '输入分类名称'
    this.type = 'input'
  }
}
export default {
  name: 'AllInput',
  props: {
    //接收父组件拿到的表单内容 然后遍历
    formData: {
      type: Array,
      default: () => []
    },
    dataShowBack: {
      type: String,
      default: () => '新增'
    },
    inputWidth: {
      type: Number,
      default: () => 300
    }
  },
  watch: {
    formData: {
      handler(val) {
        if (this.dataShowBack != '编辑') return
        this.handleWatch()
      },
      immediate: true
    },
    dataShowBack: {
      handler() {
        this.handleWatch()
      },
      immediate: true
    }
  },
  data() {
    return {
      form: {},
      valid: false
    }
  },
  methods: {
    handleWatch() {
      try {
        this.form = this.formData.reduce((pre, cur) => {
          pre[cur?.id] = ['select_m', 'select', 'tree-select'].includes(cur.paramType) && !Array.isArray(cur.value)
            ? cur.value?.length > 0 ? cur.value.split(',') : undefined
            : cur?.value
          return pre
        }, {})
      } catch (e) {
        console.error(e)
        this.form = new Arrobj()
      }
    },
    handleChange(isClick) {
      this.$emit('changeClickSelect', isClick)
    },
    save() {
      this.$refs['form'].validate(valid => {
        this.valid = valid
      })
    },
    resetForm() {
      this.$refs['form'].resetFields()
    },
    getForm() {
      return new Promise((resovle, reject) => {
        this.$refs['form'].validate(valid => {
          if (valid) {
            resovle(this.form)
          } else {
            //reject()
          }
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ .ant-form-item-control {
  width: 200px !important;
}
/deep/ .ant-form-item-label {
  width: 127px;
}
.col-width {
  display: inline-block;
}
</style>
