<script setup lang="ts">
const notification = useNotificationStore()
</script>

<template>
  <TransitionGroup>
    <NotificationItem
      class="item"
      v-for="(item, index) in notification.items"
      :key="item.id"
      :index="index"
      :msg="item.msg"
      :status="item.status"
    ></NotificationItem>
  </TransitionGroup>
</template>

<style lang="scss" scoped>
.item {
  transition: all 0.5s;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100rem);
  opacity: 0;
}
</style>
