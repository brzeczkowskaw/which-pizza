<script setup lang="ts">
import { computed } from 'vue'
import { Pizza } from '../types'
import { usePizzaStore } from  '../stores/pizza'
import pluralize from 'pluralize'
import pizzaImage1 from "../assets/pizza1.jpg"
import pizzaImage2 from "../assets/pizza2.jpg"
import "@lottiefiles/lottie-player"
import animationLoading from "../assets/animationLoading.json"

const pizzaStore = usePizzaStore();

const props = defineProps({
  pizzaData: {
    type: Object as () => Pizza,
    required: true,
  },
  pizzaIndex: {
    type: Number,
    required: true,
  }
})

const measurUnit = computed(() => pizzaStore.units.measure);
const currencyUnit = computed(() => pizzaStore.units.currency);

const pizzaNumberCount = computed(() => {
  return props.pizzaIndex + 1;
})

function decrementPizzaSize() {
  if (props.pizzaData.diameter === 0) return;
  props.pizzaData.diameter = --props.pizzaData.diameter;
}

function incrementPizzaSize() {
  if (props.pizzaData.diameter === 80) return;
  props.pizzaData.diameter = ++props.pizzaData.diameter;
}

const getCardColor = computed((): string => {
  if (!pizzaStore.isResultShown) return '';
  if (pizzaStore.cheaperPizzaIndex === 3) return 'blue';
  return props.pizzaIndex === pizzaStore.cheaperPizzaIndex ? 'green' : 'red';
})
</script>

<template>
    <v-card class="pizza-card text-center mx-3" variant="elevated" elevation="20" :color="getCardColor">
      <div v-if="pizzaStore.isComparingPizzas">
        <lottie-player autoplay loop :src="animationLoading" />
      </div>
      <div v-else>
        <v-card-title class="justify-center mb-3 mx-0 px-0 mt-0 pt-0">
          <v-img :src="pizzaNumberCount === 1 ? pizzaImage1 : pizzaImage2" height="140" cover />
          <h3>Pizza option {{ pizzaNumberCount }}</h3>
        </v-card-title>
        <v-card-text v-if="!pizzaStore.isResultShown" class="mx-4">
          <v-row class="px-2 pt-2 mb-n4">
            <v-col class="ma-0 pa-0">
              <div class="text-start">
                <v-icon class="mr-1 mb-2" size="small" color="primary">mdi-diameter-variant</v-icon>
                <span
                  class="text-h5 font-weight-light"
                  v-text="props.pizzaData.diameter"
                />
                <span class="subheading font-weight-light me-2 mt-3 pt-n3 ml-1">{{ measurUnit }} diameter</span>
              </div>
              <v-slider 
                v-model="props.pizzaData.diameter" 
                :min="10" 
                :max="80" 
                :step="1"
                :track-size="2"
                :thumb-size="12"
                color="primary"
                class="pa-0 ma-0"
              >
                <template v-slot:prepend>
                  <v-btn
                    size="x-small"
                    variant="text"
                    icon="mdi-minus"
                    color="primary"
                    class="pa-0 ma-0"
                    @click="decrementPizzaSize"
                  ></v-btn>
                </template>
                <template v-slot:append>
                  <v-btn
                    size="x-small"
                    variant="text"
                    icon="mdi-plus"
                    color="primary"
                    class="pa-0 ma-0"
                    @click="incrementPizzaSize"
                  ></v-btn>
                </template>
              </v-slider>
            </v-col>
          </v-row>
          <v-row class="px-2 my-n4">
            <div class="d-inline-flex align-center">
              <v-icon class="mr-2 mb-1" size="small" color="primary">
                mdi-numeric
              </v-icon>
              <v-text-field 
                v-model.number="props.pizzaData.amount" 
                type="number" 
                variant="underlined" 
                style="width: 50px"
                class="mr-2"
                :min="1"
              />
              <span class="subheading font-weight-light me-2 mt-3 pt-n3 ml-1">
                pizza(s)
              </span>
            </div>
          </v-row>
          <v-row class="px-2 mt-4">
            <div class="d-inline-flex align-center">
              <v-icon class="mr-2 mb-1" size="small" color="primary">
                mdi-cash-multiple
              </v-icon>
              <v-text-field 
                v-model.number="props.pizzaData.pricePerPizza" 
                type="number" 
                variant="underlined" 
                style="width: 50px"
                class="mr-2"
                :min="1"
              />
              <span class="subheading font-weight-light me-2 mt-3 pt-n3 ml-1">
                price per pizza in {{ currencyUnit }}
              </span>
            </div>
          </v-row>
        </v-card-text>
        <v-card-text v-else class="pa-4 mx-">
          <v-row class="mb-1 d-flex justify-center">
            <b>{{ pluralize('pizza', props.pizzaData.amount, true) }} for {{ props.pizzaData.pricePerPizza }} {{ currencyUnit }} each </b>
          </v-row>
          <v-row class="mb-1 d-flex justify-center">
            <b>Total price: </b>&nbsp; {{ props.pizzaData.totalPrice }} {{ currencyUnit }}
          </v-row>
          <v-row class="mb-1 d-flex justify-center">
            <b>Total area: </b>&nbsp; {{ props.pizzaData.totalArea.toFixed(2) }} {{ measurUnit }}&sup2;
          </v-row>
          <v-row class="mb-1 d-flex justify-center">
            <b>Price per {{ measurUnit }}&sup2;: </b>&nbsp; {{ props.pizzaData.pricePerCentimeter.toFixed(2) }}{{ currencyUnit }}
          </v-row>
        </v-card-text>
      </div>
    </v-card>
</template>

<style style="scss" scoped>
.v-img {
  -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
}
.pizza-card {
  width: 25vw; 
  height: 60vh;
}
@media(max-width: 850px) {
  .pizza-card {
    width: 75vw;
    margin-bottom: 20px;
  }
}

</style>