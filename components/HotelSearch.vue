<template>
  <div class="hotel-search d-flex">
    <h3 class="hotel-search__title h3">Find your perfect stay!</h3>
    <div class="hotel-search__content">
      <form v-on:submit.prevent="fetchData">
        <FormSearchInput v-model="hotelSearch" class="">
        </FormSearchInput>
      </form>
      <AppButton type="red" @click="fetchData" size="large">Search
      </AppButton>
    </div>
  </div>
</template>

<script>
import AppGrid from '@/components/common/AppGrid'
import FormSearchInput from '@/components/FormSearchInput'
import AppButton from '@/components/common/buttons/AppButton'

export default {
  name: 'HotelSearch',

  components: {
    AppGrid,
    FormSearchInput,
    AppButton
  },
  data: () => ({
    hotelSearch: '',
  }),
  methods: {
    fetchData() {
      this.$emit('onSearch', { message: this.hotelSearch })
    }
  }
}
</script>

<style lang="scss">
.hotel-search {
  position: absolute;
  padding: 40px;
  background: var(--white);
  box-shadow: box-shadow(level3);
  flex-direction: column;
  top: -280px;
  right: 100px;

  &__title {
    color: var(dark-blue);
    text-align: center;

  }

  &__content {
    display: flex;
    align-items: center;
    margin-top: 20px;
    flex-direction: column;
    width: 100%;

    form {
      width: 100%;
    }
  }

  .app-button {
    margin-top: 20px;
    width: 100%;
  }

  // IGNORE
}
</style>
