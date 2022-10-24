<script setup lang="js">
import { createBranch } from "../api/branches";
import { getComputers } from "../api/computers";
import { getAirConditioners, createAirConditioner } from "../api/airConditioners";
export default {
  data() {
    return {
      loading: true,
      branches: [],
      selectedBranch: null,
      branch: {
        name: "",
        description: "",
      },
      airConditioner: {
        description: "",
        quantity: null,
        btu: null,
      },
      computer: {
        description: "",
        quantity: null,
        brand: ""
      },
      computers: [],
      airConditioners: [],
    };
  },
  methods: {
    fetchAirConditioners: function () {
      getAirConditioners(this.selectedBranch).then((response) => {
        console.log({response})
        this.airConditioners = response.data
      })
    },
    fetchBranches: function () {
      fetch("http://localhost:3000/branches")
        .then((response) => {
          return response
            .json()
            .then((data) => {
              if (data.status == "error") {
                throw data;
              }

              this.branches = data;
              console.log({ data });
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    onBranchAdd: function () {
      console.log(this.branchName);
      console.log(this.branch);
      createBranch(this.branch)
        .then((response) => {
          console.log({ response });
          this.branch = {
            name: "",
            description: "",
          };
        })
        .finally(() => {
          this.fetchBranches();
        });
    },
    onBranchClick: function(branch) {
      console.log({ branch });
      this.selectedBranch = branch;

      getComputers(branch).then((response) => {
        console.log({response})
        this.computers = response.data
      })

      this.fetchAirConditioners();

    },
    onAirConditionerAdd: function () {
      // const item = this.airConditioner;
      // item.branch = this.selectedBranch;
      // console.log({item});
      createAirConditioner(this.selectedBranch, this.airConditioner)
        .then((response) => {
          console.log("air", { response });
          // this.airConditioner = {
          //   description: "",
          //   quantity: null,
          //   btu: null
          // };
        })
        .finally(() => {
          this.fetchAirConditioners();
        });
    },
  },
  mounted() {
    this.fetchBranches();
  },
};
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>Branches Page</h1>

      <div class="branch-form">
        <input v-model="branch.name" placeholder="Name" />
        <input v-model="branch.description" placeholder="Description" />
        <button @click="onBranchAdd">Add</button>
      </div>

      <div
        v-for="branch in branches"
        :key="branch.id"
        class="branch__container"
        @click="onBranchClick(branch)"
      >
        <div>
          <h2>{{ branch.name }}</h2>
          <p>{{ branch.description }}</p>
        </div>
      </div>
    </div>

    <div v-if="selectedBranch" class="branch-selected-container">
      <h2 class="primary bold centered">
        {{ selectedBranch.name }}
      </h2>

      <div class="container">
        <div class="content">
          <p>Air Condicionado ({{ this.airConditioners.length }})</p>
          <div class="air-conditioner-form">
            <input
              v-model="airConditioner.description"
              placeholder="Description"
            />
            <input
              v-model="airConditioner.quantity"
              type="number"
              placeholder="quantity"
            />
            <input
              v-model="airConditioner.btu"
              type="number"
              placeholder="btu"
            />
            <div class="button" @click="onAirConditionerAdd">Add</div>
          </div>

          <div
            v-for="airConditioner in airConditioners"
            :key="airConditioner.id"
            class="airConditioner__container"
          >
            <div>
              <h3>
                {{ airConditioner.description }} {{ airConditioner.btu }} BTUs
                (qtd: {{ airConditioner.quantity }})
              </h3>
            </div>
          </div>
        </div>
        <div class="content">
          <p>Computadores ({{ this.computers.length }})</p>
          <div
            v-for="computer in computers"
            :key="computer.id"
            class="computer__container"
          >
            <div>
              <h3>
                {{ computer.brand }}: {{ computer.description }} (qtd:
                {{ computer.quantity }})
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <Loader v-if="loadingNews" /> -->
  <!-- <div v-else class="news-content">branches</div> -->
</template>

<style scoped>
.news-content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
}

.container {
  display: flex;
  flex: 1;
}

.branch-selected-container {
  display: flex;
  flex-direction: column;
  flex: 3;
  padding: 0 0.1em;
}
.branch-form {
  padding: 1em;
}

.content {
  margin: 0.2em;
  padding: 1em;
  border: 2px dotted #00bd7e;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.branch__container:hover {
  background-color: #00bd7e50;
  cursor: pointer;
}

.button {
  cursor: pointer;
  width: max-content;
  background-color: #00bd7edd;
  padding: 0.2em 1em;
  /* margin: 0.5em; */
  border-radius: 5px;
  color: white;
  display: inline;
}
.button:hover {
  background-color: #00bd7e;
}

.primary {
  color: #00bd7e;
}
.bold {
  font-weight: bold;
}
.centered {
  text-align: center;
}
</style>
