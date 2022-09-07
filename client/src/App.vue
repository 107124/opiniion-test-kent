<template>
  <CustomersComponent />
</template>

<script>
import CustomersComponent from "./components/CustomersComponent.vue";
import "sweetalert2/dist/sweetalert2.min.css";
// import Swal from "sweetalert2";

export default {
  name: "App",
  components: {
    CustomersComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
