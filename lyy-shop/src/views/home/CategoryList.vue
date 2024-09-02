<script setup lang="ts">
import { type SvgName } from '~virtual/svg-component'

// 创建分类数据
const categoryData: Array<{
  id: number
  name: string
  icon: SvgName
}> = [
  {
    id: 1,
    name: '手机数码',
    icon: 'icon-phone',
  },
  {
    id: 2,
    name: '家居生活',
    icon: 'icon-chair',
  },
  {
    id: 3,
    name: '服饰鞋帽',
    icon: 'icon-clothes',
  },
  {
    id: 4,
    name: '电脑办公',
    icon: 'icon-computer',
  },
  {
    id: 5,
    name: '个护化妆',
    icon: 'icon-beauty',
  },
  {
    id: 6,
    name: '母婴用品',
    icon: 'icon-toys',
  },
  {
    id: 7,
    name: '食品饮料',
    icon: 'icon-food',
  },
  {
    id: 8,
    name: '运动户外',
    icon: 'icon-outdoor',
  },
]
</script>

<template>
  <div class="category-list">
    <router-link
      :to="`/home/${item.id}`"
      class="category-item"
      v-for="item in categoryData"
      :key="item.id"
    >
      <SvgIcon :name="item.icon"></SvgIcon>
      <span>{{ item.name }}</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.category-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 80rem;
  .category-item {
    font-size: 30rem;
    text-align: center;

    &.router-link-active {
      color: var(--hilight-color);
    }
    span {
      display: block;
      font-size: 14rem;
    }
  }
}
</style>
