<template>
  <div class="container">
    <LeftCol />
    <RightCol />
  </div>
</template>

<script>
import RightCol from "@/components/RightColumn";
import LeftCol from "@/components/LeftColumn";

export default {
  name: "home",
  components: {
    RightCol,
    LeftCol,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;
}
.card {
  width: 400px;
  height: 600px;
  border: black 1px solid;
  background-color: lightblue;
  border-radius: 25px;
  text-align: left;
  padding:16px;
}
</style>