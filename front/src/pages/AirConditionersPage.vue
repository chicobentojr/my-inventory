<script setup lang="js">
import { getBranches } from "../api/branches";
import { getAirConditioners, addAirConditioner, editAirConditioner, removeAirConditioner } from "../api/airConditioners";
export default {
  data() {
    return {
      loading: true,
      airConditioner: {
        branchId: null,
        description: "",
        quantity: null,
        btu: null,
      },
      branches: [],
      airConditioners: [],
      airConditionerToEdit: null
    };
  },
  methods: {
    clearFields: function () {
      this.airConditionerToEdit = null;
      this.airConditioner = {
        description: "",
        quantity: null,
        btu: "",
        branchId: null,
      }
    },
    fetchAirConditioners: function () {
      getAirConditioners().then((response) => {
        this.airConditioners = response.data
      })
    },
    fetchBranches: function() {
      getBranches().then((response) => {
        this.branches = response.data
      })
    },
    onAirConditionerAdd: function () {
      addAirConditioner(this.airConditioner)
        .then((response) => {
          this.clearFields();
        })
        .finally(() => {
          this.fetchAirConditioners();
        });
    },
    onAirConditionerEdit: function () {
      editAirConditioner(this.airConditioner)
        .then((response) => {
          this.clearFields();
        })
        .finally(() => {
          this.fetchAirConditioners();
        });
    },
    onAirConditionerEditClick: function (airConditioner) {
      this.airConditionerToEdit = airConditioner;
      this.airConditioner = {
        ...airConditioner,
        branchId: airConditioner.branch.id
      };
    },
    onAirConditionerRemoveClick: function (airConditioner) {
      removeAirConditioner(airConditioner)
        .then(() => this.clearFields())
        .finally(this.fetchAirConditioners);
    },
  },
  mounted() {
    this.fetchAirConditioners();
    this.fetchBranches();
  },
};
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>Air Conditioners ({{ this.airConditioners.length }})</h1>

      <div class="content__form">
        <span>
          <label>Select the branch:</label>
          <select v-model="airConditioner.branchId">
            <option v-for="branch in branches" :value="branch.id">
              {{ branch.name }}
            </option>
          </select>
        </span>
        <input v-model="airConditioner.description" placeholder="Description" />
        <input v-model="airConditioner.btu" type="number" placeholder="btu" />
        <input
          v-model="airConditioner.quantity"
          type="number"
          placeholder="quantity"
        />
        <div
          v-if="airConditionerToEdit"
          class="button"
          @click="onAirConditionerEdit"
        >
          Edit
        </div>
        <div v-else class="button" @click="onAirConditionerAdd">Add</div>
      </div>

      <table class="table">
        <thead>
          <th>Branch</th>
          <th>Description</th>
          <th>BTUs</th>
          <th>Quantity</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr
            v-for="airConditioner in airConditioners"
            :key="airConditioner.id"
            :class="{
              'item--selected': airConditionerToEdit?.id == airConditioner.id,
            }"
          >
            <td>{{ airConditioner.branch.name }}</td>
            <td>{{ airConditioner.description }}</td>
            <td>{{ airConditioner.btu }}</td>
            <td>{{ airConditioner.quantity }}</td>
            <td>
              <a
                class="action-button"
                @click="onAirConditionerEditClick(airConditioner)"
                >Edit</a
              >
              |
              <a
                class="action-button"
                @click="onAirConditionerRemoveClick(airConditioner)"
                >Remove</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
