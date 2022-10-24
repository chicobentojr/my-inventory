<script setup lang="js">
import { getBranches, addBranch, removeBranch, editBranch } from "../api/branches";
export default {
  data() {
    return {
      loading: true,
      branch: {
        name: "",
        description: "",
      },
      branches: [],
      branchToEdit: null
    };
  },
  methods: {
    clearFields: function () {
      this.branchToEdit = null;
      this.branch = {
        name: "",
        description: "",
      }
    },
    fetchBranches: function() {
      getBranches().then((response) => {
        this.branches = response.data
      })
    },
    onBranchAdd: function () {
      const item = this.branch;

      addBranch(this.branch)
        .then((response) => {
          this.clearFields();
        })
        .finally(() => {
          this.fetchBranches();
        });
    },
    onBranchEdit: function () {
      const item = this.branch;

      editBranch(this.branch)
        .then((response) => {
          this.clearFields();
        })
        .finally(() => {
          this.fetchBranches();
        });
    },
    onBranchEditClick: function (branch) {
      this.branchToEdit = branch;
      this.branch = {
        ...branch,
      };
    },
    onBranchRemoveClick: function (branch) {
      removeBranch(branch)
        .then(() => this.clearFields())
        .finally(() => this.fetchBranches());
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
      <h1>Branches ({{ this.branches.length }})</h1>

      <div class="content__form">
        <input v-model="branch.name" placeholder="Name" />
        <input v-model="branch.description" placeholder="Description" />
        <div v-if="branchToEdit" class="button" @click="onBranchEdit">Edit</div>
        <div v-else class="button" @click="onBranchAdd">Add</div>
      </div>

      <table class="table">
        <thead>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </thead>
        <tbody>
          <tr
            v-for="branch in branches"
            :key="branch.id"
            :class="{ 'item--selected': branchToEdit?.id == branch.id }"
          >
            <td>{{ branch.name }}</td>
            <td>{{ branch.description }}</td>
            <td>
              <a class="action-button" @click="onBranchEditClick(branch)"
                >Edit</a
              >
              |
              <a class="action-button" @click="onBranchRemoveClick(branch)"
                >Remove</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
