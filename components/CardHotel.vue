<template>
  <div class="card-hotel" @click="openDetails">
    <figure class="card-hotel__image-wrapper">
      <img
        class="card-hotel__image"
        src="https://cloud.tui.com/pics/hotels/size:700/aHR0cHM6Ly9waWNzLnR1aS5jb20vcGljcy9waWNzMTYwMHgxMjAwL3R1aS9pL2lsMjEyNTkzLmpwZw=="
        :alt="hotel.name"
        :title="hotel.name"
      />
    </figure>
    <div class="card-hotel__content">
      <h4 class="card-hotel__title h4 mb-2">{{ hotel.name }}</h4>

      <IconStar v-for="i in 4" :key="i" />
      <p v-if="hotel.address" class="card-hotel__location">
        {{ hotel.address.cityName }}, {{ hotel.address.countryCode }}
      </p>

      <div class="card-hotel__footer d-flex">
        <p class="card-hotel__price">
         US$ 289 /noite
        </p>
        <AppButton type="red" size="small">Ver detalhes</AppButton>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/common/buttons/AppButton'
import IconStar from '@/assets/svg/icon-star.svg'

export default {
  name: 'CardHotel',

  components: {
    AppButton,
    IconStar,
  },

  props: {
    hotel: {
      type: Object,
      required: true
    }
  },
  methods: {
    openDetails () {
      this.$router.push({ path: `/hotels/${this.hotel.id}` })
    }
  }
}
</script>

<style lang="scss">
.card-hotel {
  position: relative;
  border: 1px solid var(--dark-grey);
  border-radius: border-radius(extra);
  cursor: pointer;
  background: var(--white);
  overflow: hidden;
  font-size: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  max-width: 100%;
  transition: 0.2s ease-in;

  .app-svg {
    width: 16px;
    height: 16px;
    fill: var(dark-blue);
    stroke: var(dark-blue);
    margin-bottom: 16px;
  }

  $root: &;


  &__content {
    padding: 16px 24px 24px;
  }

  &__image-wrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-bottom: 50%;
  }

  &__image {
    position: absolute;
    left: 0;
    top: 50%;
    max-width: 100%;
    width: 100%;
    object-fit: cover;
    transform: translateY(-50%);
    transition: 0.2s cubic-bezier(0.05, 0.36, 0.57, 1.01);
  }

  &__title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: var(dark-blue);
  }


  &__location {
    display: flex;
    font-size: 16px;
    color: var(dark-blue);
    align-items: center;
    min-height: 24px;
  }

  &__footer {
    margin-top: 24px;
    border-top: 1px solid var(--dark-grey);
    padding-top: 16px;
    justify-content: space-between;
  }

  &__price {
    font-size: 20px;
    font-weight: bold;
    color: var(dark-blue);
  }
}
</style>
