<template>
  <div class="rate">
    <input type="radio" id="star5" name="rate" :checked="rating == 5" value="5" 
    @input="emitValue"/>
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" :checked="rating == 4" value="4" 
    @input="emitValue"/>
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" :checked="rating == 3" value="3" 
    @input="emitValue"/>
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" :checked="rating == 2" value="2" 
    @input="emitValue"/>
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" :checked="rating == 1" value="1" 
    @input="emitValue"/>
    <label for="star1" title="text">1 star</label>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    rating: Number,
    modelModifiers: {
      default: () => ({})
    }
  },
  emits: ['update:rating'],
  methods: {
    emitValue(e) {
      let value = e.target.value
      console.log(value)
      console.log(this.rating)
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:rating', value)
    }
  }

};
</script>

<style scoped>
.rate {
  height: 30px;
  float: left;
}
.rate:not(:checked) > input {
  position: absolute;
  top: -9999px;
}
.rate:not(:checked) > label {
  float: right;
  width: 1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 30px;
  color: #ccc;
}
.rate:not(:checked) > label:before {
  content: "★ ";
}
.rate > input:checked ~ label {
  color: #ffc700;
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
  color: #deb217;
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
  color: #c59b08;
}
</style>