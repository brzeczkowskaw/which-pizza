<script setup lang="ts">
import { ref, computed } from 'vue'
import { Pizza } from '../types'

const props = defineProps({
  pizzaData: {
    type: Object as () => Pizza,
    required: true,
  },
  pizzaNumber: {
    type: Number,
    required: true,
  }
})

const smallerThanOne = [(value: number) => !!value || "Should be at least one"]

const pizzaNumberCount = computed(() => {
  return props.pizzaNumber + 1;
})

function decrement() {
  if (props.pizzaData.diameter === 0) return;
  props.pizzaData.diameter = --props.pizzaData.diameter;
}

function increment() {
  if (props.pizzaData.diameter === 80) return;
  props.pizzaData.diameter = ++props.pizzaData.diameter;
}

</script>

<template>
    <v-card class="pizza-card text-center" variant="elevated" elevation="8" style="max-width: 100vw">
      <v-card-title class="justify-center">
        Pizza {{ pizzaNumberCount }}
      </v-card-title>
      <v-card-text>
        <v-row class="px-2 pt-2 mb-n4">
          <v-col class="ma-0 pa-0">
            <div class="text-start">
              <v-icon class="mr-1 mb-2" size="small" color="secondary">mdi-diameter-variant</v-icon>
              <span
                class="text-h5 font-weight-light"
                v-text="props.pizzaData.diameter"
              />
              <span class="subheading font-weight-light me-2 mt-3 pt-n3 ml-1">CM diameter</span>
            </div>
            <v-slider 
              v-model="props.pizzaData.diameter" 
              :min="10" 
              :max="80" 
              :step="1"
              :track-size="2"
              :thumb-size="12"
              color="secondary"
              class="pa-0 ma-0"
            >
              <template v-slot:prepend>
                <v-btn
                  size="x-small"
                  variant="text"
                  icon="mdi-minus"
                  color="secondary"
                  class="pa-0 ma-0"
                  @click="decrement"
                ></v-btn>
              </template>
              <template v-slot:append>
                <v-btn
                  size="x-small"
                  variant="text"
                  icon="mdi-plus"
                  color="secondary"
                  class="pa-0 ma-0"
                  @click="increment"
                ></v-btn>
              </template>
            </v-slider>
          </v-col>
        </v-row>
        <v-row class="px-2 my-n4">
          <div class="d-inline-flex align-center">
            <v-icon class="mr-2 mb-1" size="small" color="secondary">
              mdi-numeric
            </v-icon>
            <v-text-field 
              v-model.number="props.pizzaData.amount" 
              type="number" 
              variant="underlined" 
              style="width: 50px"
              class="mr-2"
              :rules="smallerThanOne"
              :min="1"
            />
            <span class="subheading font-weight-light me-2 mt-3 pt-n3 ml-1">
              pizza(s)
            </span>
          </div>
        </v-row>
        <v-row class="px-2 mt-4">
          <div class="d-inline-flex align-center">
            <v-icon class="mr-2 mb-1" size="small" color="secondary">
              mdi-cash-multiple
            </v-icon>
            <v-text-field 
              v-model.number="props.pizzaData.pricePerPizza" 
              type="number" 
              variant="underlined" 
              style="width: 50px"
              class="mr-2"
              :rules="smallerThanOne"
              :min="1"
            />
            <span class="subheading font-weight-light me-2 mt-3 pt-n3 ml-1">
              price per pizza
            </span>
          </div>
        </v-row>
      </v-card-text>
    </v-card>
</template>

<style style="scss" scoped>
</style>