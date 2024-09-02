<script setup lang="ts"></script>

<template>
  <FixedButton @click="$router.back()" class="back">
    <SvgIcon name="icon-back"></SvgIcon>
  </FixedButton>
</template>

<style lang="scss" scoped>
.back {
  top: 20rem;
  left: 20rem;
  svg {
    transform: translateX(20%);
  }
}
</style>
