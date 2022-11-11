<script lang="ts" setup>
  import { usePokemonStore } from "@/store/modules/pokemon";
  import { storeToRefs } from "pinia";

  //const pokemonw = usePokemonStore();
  const { pokemonsName } = storeToRefs(usePokemonStore());
</script>

<template>
  <h3>About page</h3>
  <p>Pokemons list</p>
  <div>{{ pokemonsName }}</div>
</template>
