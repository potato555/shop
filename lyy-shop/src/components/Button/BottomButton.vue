<script setup lang="ts"></script>

<template>
  <FixedButton class="bottom-btn">
    <slot></slot>
  </FixedButton>
</template>

<style lang="scss" scoped>
.bottom-btn {
  width: 335rem;
  height: 60rem;
  bottom: 80rem;
  left: 20rem;
}
</style>
