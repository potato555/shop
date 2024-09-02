<script setup lang="ts">
const keyword = ref('')
const debouncedKeyword = refDebounced(keyword, 200)
</script>

<template>
  <div class="search">
    <input type="text" v-model="keyword" placeholder="请输入关键字" />
    <SvgIcon v-show="keyword !== ''" @click="keyword = ''" name="icon-close"></SvgIcon>
  </div>
  <!-- 商品列表 -->
  <ProductList :keyword="debouncedKeyword"></ProductList>
</template>

<style lang="scss" scoped>
.search {
  position: relative;
  input {
    width: 335rem;
    margin: 20rem;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--border-color);
    height: 60rem;
    font-size: 30rem;
  }
  svg {
    position: absolute;
    height: 30rem;
    right: 30rem;
    border: none;
    background-color: transparent;
    font-size: 20rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
}
</style>
