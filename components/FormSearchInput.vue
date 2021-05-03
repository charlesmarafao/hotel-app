<template>
  <label
    class="form-search-input"
    :class="{ 'form-search-input--focus': focus }"
  >
    <slot />
    <input
      class="form-search-input__input"
      type="text"
      placeholder="Search by destination or hotel"
      @focus="focus = true"
      @blur="focus = false"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event)"
    />
  </label>
</template>

<script>
export default {
  name: 'FormSearchInput',
  inheritAttrs: false,
  props: {
    value: {},
  },
  data() {
    return {
      focus: false
    }
  }
}
</script>

<style lang="scss" scoped>
.form-search-input {
  position: relative;
  display: flex;

  $root: &;

  &__input {
    display: flex;
    padding: 8px;
    border: 1px solid var(--dark-grey);
    height: 48px;
    width: 100%;
    border-radius: border-radius(base);
    font-size: 20px;
    font-family: font-family(main);
    font-style: italic;
    transition: 0.2s cubic-bezier(0, 0, 0.13, 0.97);
    color: var(dark-blue);

    @include placeholder {
      color: var(-grey-100);
    }

    &:focus {
      outline: none;
    }
  }

}
</style>
