<template>
  <div class="card">
    <div v-for="(brand, i) in brands" :key="i">
      {{ Object.getOwnPropertyNames(brand)[0] }}
      <ul v-for="(item, i) in brand" :key="i">
        <li v-for="(model, i) in item" :key="i">
          {{ model.model }}({{ model.units }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//"Request" to web service by importing the data from /data/dummy.json
import data from "@/data/dummy.json";

export default {
  name: "LeftCol",
  data() {
    return {
      brands: [],
    };
  },
  methods: {
    //Get every brand
    fetchBrands() {
      let brands = [];
      data.forEach((element) => {
        if (!brands.includes(element.brand)) {
          brands.push(element.brand);
          this.brands.push(this.modelsToBrands(element.brand));
        }
      });
    },

    //Returns the models of each brand
    modelsToBrands(brand) {
      let brandArr = [];
      data.forEach((element) => {
        if (element.brand === brand) {
          brandArr.push(element);
        }
      });
      const brandObj = {
        [brand]: brandArr,
      };
      return brandObj;
    },
  },
  created() {
    this.fetchBrands();
  },
};
</script>

<style>
</style>