<template>
  <div class="hotel-page" >
    <template>
      <section class="container">
        <ImageContainer
          src="/img/home.jpg"
          alt="Pool"
          title="Pool"
        />
      </section>
      <section class="container mt-8">
        <h2 class="hotel-page__title h2 mb-5">
          {{ hotel.name }}
        </h2>
        <p v-if="hotel.description" class="hotel-page__title p mb-5">
          {{ hotel.description.text }}
        </p>
      </section>

      <section class="container amenities hotel-page__title ">
        <h3 class="hotel-page__title h3 mb-5">
          Amenities
        </h3>
          <ol>
            <li v-for="(amenity, index) in hotel.amenities" :key="index">
              {{ `- ${amenity}` }}
            </li>
          </ol>
      </section>
      <section class="container offers">
        <h3 class="hotel-page__title h3 mb-5">
          Choose your room
        </h3>
        <template v-for="offer in offers">
          <div class="offer-card" :key="offer">
            <h1>{{ offer.room.typeEstimated.category }}</h1>
            <div class="offer-card__price">
              <span>{{ `${offer.price.currency} ${offer.price.total}`}}</span>
              <div :class="['offer-card__available', !offer.available && 'offer-card__available--false']"> {{ isAvailable(offer)}} </div>
            </div>
          </div>
        </template>
      </section>
    </template>
  </div>
</template>

<script>
import ImageContainer from '@/components/ImageContainer'
import AppGrid from '@/components/common/AppGrid'
import CardHotel from '@/components/CardHotel'
import AppButton from '@/components/common/buttons/AppButton'

export default {
  name: 'HotelDetail',

  components: {
    ImageContainer,
    AppGrid,
    CardHotel,
    AppButton
  },

  data() {
    return {
      hotel: {},
      offers: []
    }
  },

  watch: {
    $route() {
      this.$fetch()
    }
  },
  methods: {
    isAvailable (offer) {
      return offer.available ? 'Disponível' : 'Não disponível'
    }
  },
  async fetch() {
    const id = this.$route.params.id

    const [hotel, offers] = await Promise.all([
      this.$axios.get(`/hotels/${id}`),
      this.$axios.get(`/hotel-offers/${id}`),
    ])

    this.hotel = hotel.data

    this.offers = offers.data
  },

}
</script>

<style lang="scss">
.hotel-page {
  &__title {
    color: var(dark-blue);
  }

  .app-grid {
    row-gap: 32px;
  }
}
.amenities {
      margin-top: 3em;

    ol {
      counter-reset: item;
      list-style-type: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      max-height: 300px;
      flex-wrap: wrap;
      padding: 20px 0;
      li {
        font-weight: 700;
      }
    }
}
.offers {
    margin-top: 2em;
    margin-bottom: 2em;
}
.offer-card {
  background-color: #e7e3db;
  margin-bottom: 4px;
  padding: 15px 30px;
  height: 100px;
  align-items: center;
  &:nth-child(even){
    background:#f9f8f6;
  }
  display: flex;
  justify-content: space-between;
  &__available {
    height: 38px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #092a5e;
    color: white;
    padding: 10px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.24);
    &--false {
      background-color: #d40e14
    }
  }
  &__price {
    display: flex;
    align-items: center;
    span {
      color: #092a5e;
      font-size: 30px;
      font-weight: 700;
      font-style: normal;
      font-stretch: normal;
      line-height: 36px;
      margin-right: 20px;
    }
  }
}
</style>
