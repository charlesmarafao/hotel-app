<template>
  <div>
    <MainHeader />
    <Nuxt />
  </div>
</template>

<script>
import MainHeader from '@/components/header/MainHeader'

export default {
  name: 'default',
  components: {
    MainHeader
  }
}
</script>
