<template>
  <div class="table-container">
    <div class="filters">
      <div class="filter">
        <label>Data: </label>
        <input type="date" v-model="date" />
        <button class="filter-button" @click="sortAge">Filter age</button>
      </div>
      <div class="filter">
        <label>Quantidade: </label>
        <input type="number" v-model="quant" />
        <button class="filter-button" @click="sortQuant">
          Filter quantity
        </button>
      </div>
      <div class="filter">
        <button class="reset-button" @click="fetchData">Reset</button>
      </div>
    </div>

    <table>
      <tr>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Data de release</th>
        <th>Idade</th>
        <th>Numero de viaturas</th>
      </tr>
      <tr v-for="(item, i) in brands" :key="i">
        <td>{{ item.brand }}</td>
        <td>{{ item.model }}</td>
        <td>{{ item.releaseDate }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.units }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
//"Request to web service" by importing the data from /data/dummy.json
import data from "@/data/dummy.json";

export default {
  name: "Search",
  data() {
    return {
      brands: [],
      componentKey: 0,
      date: "",
      quant: 0,
    };
  },
  methods: {
    //Gets initial data into the table
    fetchData() {
      let withDateArr = [];
      data.forEach((element) => {
        element["age"] = this.getAge(element.releaseDate);
        withDateArr.push(element);
      });
      this.brands = withDateArr;
    },

    //Sort through quantity
    sortQuant() {
      let arr = [];
      for (let i = 0; i < this.brands.length; i++) {
        const element = this.brands[i];
        if (element.units >= this.quant) {
          arr.push(element);
        }
      }
      this.brands = arr;
    },

    //Sort through age
    sortAge() {
      let targetAge = this.getAge(this.date);
      let arr = [];
      for (let i = 0; i < this.brands.length; i++) {
        const element = this.brands[i];
        if (element.age <= targetAge) {
          arr.push(element);
        }
      }
      this.brands = arr;
    },

    //Gets age difference between release date and current date
    getAge(dateString) {
      var today = new Date();
      var release = new Date(dateString);
      var age = today.getFullYear() - release.getFullYear();
      var m = today.getMonth() - release.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < release.getDate())) {
        age--;
      }
      return age;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  width: 800px;
  margin: 16px;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid black;
}
.filters {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.filter {
  padding: 6px;
}
.filter-button {
  margin-left: 6px;
}
</style>