<template>
  <div class="card">
    <ol>
      <li v-for="(item, i) in brands" :key="i">
        {{ item.model }} - {{ item.brand }} ({{ item.units }});
      </li>
    </ol>
  </div>
</template>

<script>
//"Request" to web service by importing the data from /data/dummy.json
import data from "@/data/dummy.json";

export default {
  name: "RightCol",
  data() {
    return {
      brands: [],
    };
  },
  methods: {
    //Sort array through date
    sortData() {
      //Descend
      /* data.sort(function (a, b) {
        return new Date(b.releaseDate) - new Date(a.releaseDate);
      }); */
      
      //As the example said
      data.sort(function (a, b) {
        return new Date(a.releaseDate) - new Date(b.releaseDate);
      });
      this.brands = data;
    },
  },
  created() {
    this.sortData();
  },
};
</script>

<style>
</style>