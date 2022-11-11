import { defineStore } from "pinia";
import { api } from "@/http/api";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemonsw: [],
  }),
  getters: {
    pokemonsName: (state) =>
      state.pokemonsw.map((el: { name2: string; url: string }) => el.url),
  },
  actions: {
    async getPokemons() {
      return await api.get("/pokemon?limit=5000").then((res) => {
        console.log(res.data.results);
        this.pokemonsw = res.data.results;
      });
    },
  },
});
