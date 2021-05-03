<template>
  <header class="main-header">
    <div class="container d-flex">
      <div class="d-flex">
        <nuxt-link :to="'/'" aria-label="Home">
          <LogoTui />
        </nuxt-link>
      </div>
      <div class="d-flex">
        <nav class="header-menu d-flex">
          <AppButton :link="'/'">
            Help
          </AppButton>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import LogoTui from 'assets/svg/logo-tui.svg'
import AppButton from '@/components/common/buttons/AppButton'

export default {
  name: 'MainHeader',

  components: {
    LogoTui,
    AppButton
  }
}
</script>

<style lang="scss">
.main-header {
  height: 80px;
  display: flex;
  border-bottom: 1px solid var(--tui-blue-25);

  .header-menu {
    align-items: center;

    > *:not(:first-child) {
      margin-left: 20px;
    }
  }

  .container {
    justify-content: space-between;
  }

  .app-svg--logo {
    height: 40px;
    margin-top: 14px;
    margin-right: 38px;
  }
}
</style>
