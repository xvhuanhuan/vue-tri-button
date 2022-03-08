<template>
<!-- class="" :class="classes" :style="getStyle" @click="onClick" -->
  <div >
    <div class="outer" v-if="closeable" @click="onClose" >
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'custom-button',
  props: {
    color: { type: String, default: '' },
    textColor: { type: String, default: '' },
    size: {// default/medium/large
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
      getStyle: {
        get () {
          const { color, textColor, plain } = this
          if (color) {
            return {
              background: color,
              color: textColor
            }
          }
          /* if (plain) {
            return {
              color: '#347cd1',
              background: '#fff',
              border: '1px solid transparent'
            }
          } */
          return {
            color: '',
            background: ''
          }
        }
      },
      classes: {
        get () {
          const { type, plain, round, mark, transparent, size } = this
          return {
            [prefixCls]: true,
            [`${prefixCls}--${type}`]: type,
            [`${prefixCls}--size-${size}`]: size,
            [`${prefixCls}--plain`]: plain,
            [`${prefixCls}--transparent`]: transparent,
            [`${prefixCls}--round`]: round,
            [`${prefixCls}--mark`]: mark
          }
        }
      }
    },
  // mounted () {
  // },
  // methods: {
  //   onClose (event) {
  //     event.stopPropagation()
  //     this.$emit('close', event)
  //   },
  //   onClick (event) {
  //     this.$emit('click', event)
  //     event.stopPropagation()
  //   }
  // }
}
</script>
<style>
.outer{
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid blue;
  padding: 2px;
  position: relative;
  width:65px;
}
.outer::before {
  content: "\e6da";
  font-family: element-icons!important;
  position: absolute;
  right: -1px;
  top: 0px;
  display: inline-block;
  color: #fff;
  font-size: 5px;
  z-index: 100;
}
.outer::after {
  position: absolute;
  right: 0;
  top: 0;
  content: "";
  width: 0px;
  height: 0px;
  border-color: blue blue transparent transparent;
  border-width: 10px;
  border-style: solid;
}
</style>