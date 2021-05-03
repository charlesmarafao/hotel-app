<template>
  <div class="page-home">
    <section class="container">
      <ImageContainer
        src="/img/home.jpg"
        alt="Pool"
        title="Pool"
      />
    </section>

    <section class="container hotel-container">
      <HotelSearch @onSearch="loadData"/>
    </section>

    <h1 class="h1 text-center mb-6 mt-8 color-title">
      Hotels
    </h1>
    <section class="container">
        <AppGrid columns="4">
          <CardHotel
            v-for="hotel in hotels"
            :hotel="hotel"
            :key="hotel.id"
          />
        </AppGrid>
    </section>
  </div>
</template>

<script>
import HotelSearch from '@/components/HotelSearch'
import ImageContainer from '@/components/ImageContainer'
import CardHotel from '@/components/CardHotel'
import AppGrid from '@/components/common/AppGrid'

export default {
  components: {
    HotelSearch,
    CardHotel,
    ImageContainer,
    AppGrid
  },

 data() {
    return {
      hotels: [{}]
    }
  },

  watch: {
    $route() {
      this.$fetch()
    }
  },
  methods: {
    onSearch() {},
    async loadData ({ message } = null) {
      this.hotels = await this.$axios
      .get(`/hotels?text=${message}`)
      .then(({ data }) => data)
      .catch(err => console.log('error'))
    }
  },
  async fetch() {
    this.hotels = await this.$axios
      .get(`/hotels`)
      .then(({ data }) => data)
  },
}
</script>

<style lang="scss">
.hotel-container {
  position: relative;
}
.page-home {
  .hotel-search {
    z-index: 2;
    margin-top: -40px;
  }
}
</style>

