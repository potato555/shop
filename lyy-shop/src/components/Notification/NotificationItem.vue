<script setup lang="ts">
interface Props {
  msg: string
  status: NoticeSatus
  index: number
}

const props = defineProps<Props>()
</script>

<template>
  <div class="item">
    <SvgIcon v-if="status === 'success'" name="icon-check"></SvgIcon>
    <SvgIcon class="warning" v-if="status === 'warning'" name="icon-cancel"></SvgIcon>
    <p class="msg">{{ msg }}</p>
  </div>
</template>

<style lang="scss" scoped>
.item {
  width: 335rem;
  height: 50rem;
  position: fixed;
  z-index: 9999;
  border-radius: 8px;
  background-color: var(--primary-color);
  left: 20rem;
  margin-top: 20rem;
  display: flex;
  align-items: center;
  padding-left: 10rem;
  top: calc(v-bind(index) * 70rem);
  svg {
    font-size: 34rem;
    color: var(--success-color);

    &.warning {
      color: var(--warning-color);
    }
  }

  .msg {
    font-size: 20rem;
    margin-left: 10rem;
    color: var(--secondary-color);
  }
}
</style>
