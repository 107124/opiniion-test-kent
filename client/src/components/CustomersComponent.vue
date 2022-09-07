<template>
  <div class="widget-container">
    <!-- container for the opiniion logo and display same colors -->

    <div class="logo-container">
      <img src="../assets/opiniion.png" />
    </div>

    <div id="search-it">
      <div class="search-container">
        <!-- search wrapper -->
        <div class="search-wrapper">
          <label for="form-control">Search Customer</label>

          <div class="search-input">
            <i class="fa">&#xf002;</i>
            <div class="input-container">
              <input
                id="form-control"
                class="form-control"
                type="text"
                v-model="searchQuery"
                placeholder="first, last, phone or email"
              />
            </div>
          </div>
        </div>
        <!-- tables set by category and using nth child for legibility -->

        <div class="panel-body">
          <table v-if="customers.length" class="hidden-container">
            <p v-if="!searchQuery && !showIt">Search results</p>
            <tbody v-else-if="searchQuery && !showIt">
              <!-- for each person in the customers array, display each of their info -->

              <tr
                v-for="(customer, index) in filterCustomer"
                v-bind:item="customer"
                v-bind:index="index"
                v-bind:key="customer._id"
              >
                <td>{{ customer.firstName.toUpperCase() }}</td>
                <td>{{ customer.lastName.toUpperCase() }}</td>
                <td>{{ customer.phone }}</td>
                <td>{{ customer.email }}</td>
                <td
                  class="delete-square"
                  v-bind:item="customer"
                  v-bind:index="index"
                  v-bind:key="customer._id"
                  v-on:click="deleteCustomer(customer)"
                >
                  <!-- sending each customers item info through the delete button to delete it's index -->
                  <i class="fa trash">&#xf1f8;</i>
                </td>
              </tr>
            </tbody>
            <p v-else>No Results</p>
          </table>
        </div>
      </div>
    </div>
    <div class="dropdownList" style="margin: 50px auto 0; width: 250px"></div>
    <div class="table-container">
      <table class="display" v-show="first">
        <thead>
          <tr>
            <th
              class="table-label"
              @click="
                (last = false), (first = true), (phone = false), (email = false)
              "
            >
              First
            </th>
            <th
              class="table-label"
              @click="
                (last = true), (first = false), (phone = false), (email = false)
              "
            >
              Last
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = true), (email = false)
              "
            >
              Phone
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = false), (email = true)
              "
            >
              Email
            </th>

            <th class="table-label">Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- for each person in the customers array, display each of their info -->

          <tr
            v-for="(customer, index) in customers"
            v-bind:item="customer"
            v-bind:index="index"
            v-bind:key="customer._id"
          >
            <td>{{ customer.firstName.toUpperCase() }}</td>
            <td>{{ customer.lastName.toUpperCase() }}</td>
            <td>{{ customer.phone }}</td>
            <td>{{ customer.email }}</td>

            <td
              class="delete-square"
              v-bind:item="customer"
              v-bind:index="index"
              v-bind:key="customer._id"
              v-on:click="deleteCustomer(customer)"
            >
              <!-- sending each customers item info through the delete button to delete it's index -->
              <i class="fa trash">&#xf1f8;</i>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- each table represents the category selected -->

      <table class="display" v-show="last">
        <thead>
          <tr>
            <th
              class="table-label"
              @click="
                (last = true), (first = false), (phone = false), (email = false)
              "
            >
              Last
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = true), (phone = false), (email = false)
              "
            >
              First
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = true), (email = false)
              "
            >
              Phone
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = false), (email = true)
              "
            >
              Email
            </th>

            <th class="table-label">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(customer, index) in customers"
            v-bind:item="customer"
            v-bind:index="index"
            v-bind:key="customer._id"
          >
            <td>{{ customer.lastName.toUpperCase() }}</td>
            <td>{{ customer.firstName.toUpperCase() }}</td>
            <td>{{ customer.phone }}</td>
            <td>{{ customer.email }}</td>
            <td
              class="delete-square"
              v-bind:item="customer"
              v-bind:index="index"
              v-bind:key="customer._id"
              v-on:click="deleteCustomer(customer)"
            >
              <!-- sending each customers item info through the delete button to delete it's index -->
              <i class="fa trash">&#xf1f8;</i>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="display" v-show="phone">
        <thead>
          <tr>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = true), (email = false)
              "
            >
              Phone
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = true), (phone = false), (email = false)
              "
            >
              First
            </th>
            <th
              class="table-label"
              @click="
                (last = true), (first = false), (phone = false), (email = false)
              "
            >
              Last
            </th>

            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = false), (email = true)
              "
            >
              Email
            </th>

            <th class="table-label">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(customer, index) in customers"
            v-bind:item="customer"
            v-bind:index="index"
            v-bind:key="customer._id"
          >
            <td>{{ customer.phone }}</td>
            <td>{{ customer.firstName.toUpperCase() }}</td>
            <td>{{ customer.lastName.toUpperCase() }}</td>
            <td>{{ customer.email }}</td>
            <td
              class="delete-square"
              v-bind:item="customer"
              v-bind:index="index"
              v-bind:key="customer._id"
              v-on:click="deleteCustomer(customer)"
            >
              <!-- sending each customers item info through the delete button to delete it's index -->
              <i class="fa trash">&#xf1f8;</i>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="display" v-show="email">
        <thead>
          <tr>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = false), (email = true)
              "
            >
              Email
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = true), (phone = false), (email = false)
              "
            >
              First
            </th>
            <th
              class="table-label"
              @click="
                (last = false), (first = false), (phone = true), (email = false)
              "
            >
              Phone
            </th>
            <th
              class="table-label"
              @click="
                (last = true), (first = false), (phone = false), (email = false)
              "
            >
              Last
            </th>

            <th class="table-label">Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- for each person in the customers array, display each of their info -->

          <tr
            v-for="(customer, index) in customers"
            v-bind:item="customer"
            v-bind:index="index"
            v-bind:key="customer._id"
          >
            <td>{{ customer.email }}</td>
            <td>{{ customer.firstName.toUpperCase() }}</td>
            <td>{{ customer.phone }}</td>
            <td>{{ customer.lastName.toUpperCase() }}</td>
            <!-- delete button -->
            <td
              class="delete-square"
              v-bind:item="customer"
              v-bind:index="index"
              v-bind:key="customer._id"
              v-on:click="deleteCustomer(customer)"
            >
              <!-- sending each customers item info through the delete button to delete it's index -->
              <i class="fa trash">&#xf1f8;</i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import CustomerService from "../CustomerService";
import axios from "axios";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2";

export default {
  name: "CustomersComponent",
  data() {
    return {
      customers: [],
      customer: "",
      first: true,
      last: false,
      phone: false,
      email: false,
      showIt: false,
      searchQuery: "",
      searchStorage: false,
      inStorage: true,
      deleteName: "",
      categories: ["First", "Last", "Phone", "Email"],
    };
  },

  created() {
    // GET request using fetch with error handling
    fetch("http://localhost:5050/api/customers/")
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        this.customers = data;
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.totalVuePackages = data.total;
      })
      .catch((error) => {
        this.errorMessage = error;
        console.error("There was an error!", error);
      });
  },
  computed: {
    // filter out the searched items
    filterCustomer() {
      if (this.searchQuery) {
        return this.customers.filter((item) => {
          if (item.firstName.startsWith(this.searchQuery)) {
            return item.firstName.startsWith(this.searchQuery);
          } else if (item.lastName.startsWith(this.searchQuery)) {
            return item.lastName.startsWith(this.searchQuery);
          } else if (item.phone.startsWith(this.searchQuery)) {
            return item.phone.startsWith(this.searchQuery);
          } else if (item.email.startsWith(this.searchQuery)) {
            return item.email.startsWith(this.searchQuery);
          } else {
            return null;
          }
        });
      } else {
        return null;
      }
    },
  },
  methods: {
    deleteCustomer(customer) {
      // var result = confirm(
      // `Are you sure you want to delete ${item.firstName}'s account?\n`
      // Vue.swal('Hello Vue world!!!')
      // this.$swal('Hello Vue world!!!')
      Swal.fire({
        title: `Do you really want to delete ${customer.firstName}'s record?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "DELETE",
        denyButtonText: `Don't delete`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          axios
            .delete(`http://localhost:5050/api/customers/${customer._id}`)
            .then((response) => {
              console.log(response);
              location.reload();
            });
          Swal.fire(`${customer.firstName.toUpperCase()}`, "Deleted!");
          return true;
        } else if (result.isDenied) {
          Swal.fire(`${customer.firstName.toUpperCase()}`, "NOT deleted");
          return false;
        }
      });
    },
  },

  // async deleteCustomer(id) {
  //   console.log("Helloooooo")
  //     return await axios.delete(`http://localhost:5050/api/customers/${id}`)
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500&display=swap");
@import url("https://kit.fontawesome.com/14ae188149.js");

:root {
  --blue: #4fc5c4;
  --orange: #f48d46;
  --gray: #545454;
}

body {
  background-color: white;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.logo-container {
  display: flex;
  justify-content: center;
  margin: 15px;
}
img {
  width: 215px;
  justify-self: flex-start;
}
.widget-container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #535353;
  background-color: white;
  height: 100%;
  width: 100vw;
}

.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 42px;
}

.text {
  color: black;
}

.form-control {
  width: 200px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  outline: none;
  border: none;
  background-color: transparent;
  text-align: center;
  text-decoration: none;
}

.form-control::placeholder {
  color: rgb(147, 145, 145);
  font-family: "Nunito", sans-serif;
}

.fa {
  /* this is the search button */
  color: orange;
  font-size: 1.2em;
}

.trash {
  color: #9f9f9f;
}

.search-input {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 100%;
  background-color: rgba(255, 166, 0, 0.198);
  border-bottom: 2px solid orange;
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hidden-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 42px;
  max-height: 350px;
  overflow-y: auto;
  width: 60vw;
  border-bottom: 3px solid #535353;
}

.hidden-container p {
  padding: 8px 15px;
  margin: 5px;
}

.hidden-container tr:nth-child(odd),
.display tr:nth-child(odd) {
  background-color: rgb(245, 245, 245);
  border-left: none;
}

.table-label {
  background-color: #535353;
  color: white;
}

.hide {
  display: none;
}

.display {
  height: 100%;
  border: 3px solid #535353;
  border-radius: 5px;
  overflow-y: auto;
}

tr {
  order: 2;
}

tr:nth-child(even) {
  background-color: lightgray;
  padding: 14px 42px;
  overflow-x: hidden;
  transition: ease-in-out 0.25s;
}

th {
  cursor: pointer;
  transition: ease-in-out 0.25s;
  color: #545454;
}

td {
  padding: 15px;
  overflow-x: hidden;
}
td:nth-child(odd) {
  padding: 14px 42px;
  overflow-x: hidden;
  transition: ease-in-out 0.25s;
}

.delete-square {
  cursor: pointer;
}

.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;
}
.table {
  width: 70%;
  height: 600px;
}
.action {
  color: white;
}
.details-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
}
.fa-trash-alt {
  color: var(--gray);
  cursor: pointer;
  margin: 25px;
  transition: ease-in-out 0.25s;
  pointer-events: all;
  border: none;
  font-size: 18px;
}
.fa-trash-alt:hover {
  color: red;
}
p {
  font-size: 1.2em;
}
h3 {
  color: white;
}

.panel-body {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: 100%;
}

.customer-row {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}
button {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border-radius: 30px;
  padding: 5px;
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  text-transform: uppercase;
  transition: ease-in-out 0.25s;
  cursor: pointer;
  padding: 8px 16px;
  font-size: 1.2em;
}
button:hover {
  color: white;
}
</style>
