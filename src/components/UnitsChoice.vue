<script setup lang="ts">
import { computed } from 'vue'
import { usePizzaStore } from  '../stores/pizza'

const pizzaStore = usePizzaStore();

const measureItems = ['cm', 'in'];
const currencyItems = computed(() => {
  return pizzaStore.currencies
})

</script>

<template>
    <v-container>
        <v-row class="d-flex justify-center">
            <v-autocomplete 
              v-if="currencyItems" 
              v-model="pizzaStore.units.currency"
              :items="currencyItems" 
              label="Your currency"
              item-title="code"
              item-value="code"
              variant="filled"
              density="compact"
              class="selector-box"
            >
              <template v-slot:item="{ props, item }">
                <v-list-item v-bind="props" :subtitle="item.raw.country" />
              </template>
            </v-autocomplete>
            <v-select 
              v-model="pizzaStore.units.measure" 
              :items="measureItems"
              label="Your measure unit"
              variant="filled"
              density="compact"
              class="selector-box"
            />
        </v-row>
    </v-container>
</template>

<style style="scss" scoped>
.selector-box {
  max-width: 25vw;
}
@media(max-width: 650px) {
  .selector-box {
    min-width: 50vw;
  }
  ::v-deep .selector-box .v-input__details {
    display: none;
  }
}
</style>