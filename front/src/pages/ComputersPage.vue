<script setup lang="js">
import { createBranch, getBranches } from "../api/branches";
import { getComputers, addComputer, editComputer, removeComputer } from "../api/computers";
export default {
  data() {
    return {
      loading: true,
      computer: {
        description: "",
        quantity: null,
        brand: "",
        branchId: null,
      },
      branches: [],
      computers: [],
      computerToEdit: null
    };
  },
  methods: {
    clearFields: function () {
      this.computerToEdit = null;
      this.computer = {
        description: "",
        quantity: null,
        brand: "",
        branchId: null,
      }
    },
    fetchComputers: function () {
      getComputers().then((response) => {
        this.computers = response.data
      })
    },
    fetchBranches: function() {
      getBranches().then((response) => {
        this.branches = response.data
      })
    },
    onComputerAdd: function () {
      const item = this.computer;

      addComputer(this.computer)
        .then((response) => {
          this.clearFields();
        })
        .finally(() => {
          this.fetchComputers();
        });
    },
    onComputerEdit: function () {
      const item = this.computer;

      editComputer(this.computer)
        .then((response) => {
          this.clearFields();
        })
        .finally(() => {
          this.fetchComputers();
        });
    },
    onComputerEditClick: function (computer) {
      this.computerToEdit = computer;
      this.computer = {
        ...computer,
        branchId: computer.branch.id
      };
    },
    onComputerRemoveClick: function (computer) {
      removeComputer(computer)
        .then(() => this.clearFields())
        .finally(this.fetchComputers);
    },
  },
  mounted() {
    this.fetchComputers();
    this.fetchBranches();
  },
};
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>Computers ({{ this.computers.length }})</h1>

      <div class="content__form">
        <span>
          <label>Select the branch:</label>
          <select v-model="computer.branchId">
            <option v-for="branch in branches" :value="branch.id">
              {{ branch.name }}
            </option>
          </select>
        </span>
        <span>
          <label>Brand:</label>
          <select v-model="computer.brand">
            <option value="Samsung">Samsung</option>
            <option value="Acer">Acer</option>
            <option value="DELL">DELL</option>
            <option value="Asus">Asus</option>
            <option value="Positivo">Positivo</option>
            <option value="Avell">Avell</option>
          </select>
        </span>
        <input v-model="computer.description" placeholder="Description" />
        <input
          v-model="computer.quantity"
          type="number"
          placeholder="quantity"
        />
        <div v-if="computerToEdit" class="button" @click="onComputerEdit">
          Edit
        </div>
        <div v-else class="button" @click="onComputerAdd">Add</div>
      </div>

      <table class="table">
        <thead>
          <th>Branch</th>
          <th>Brand</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr
            v-for="computer in computers"
            :key="computer.id"
            :class="{ 'item--selected': computerToEdit?.id == computer.id }"
          >
            <td>{{ computer.branch.name }}</td>
            <td>{{ computer.brand }}</td>
            <td>{{ computer.description }}</td>
            <td>{{ computer.quantity }}</td>
            <td>
              <a class="action-button" @click="onComputerEditClick(computer)"
                >Edit</a
              >
              |
              <a class="action-button" @click="onComputerRemoveClick(computer)"
                >Remove</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
