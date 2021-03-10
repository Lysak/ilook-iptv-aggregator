<template>
  <div class="container-fluid">

    <div class="text-center">
      <h1>Channel List</h1>

      <div v-if="channels.length === 0">
        <h2> No channel found at the moment </h2>
      </div>
    </div>

    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Counter in list</th>
          <th scope="col">Name</th>
          <th scope="col">Sort</th>
          <th scope="col">category Name</th>
          <th scope="col">category Sort</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="channel in channels" :key="channel.id">
          <td>{{ channel.id }}</td>
          <td>{{ channel.counter }}</td>
          <td>{{ channel.name }}</td>
          <td>{{ channel.sort }}</td>
          <td>{{ channel.category.name }}</td>
          <td>{{ channel.category.sort }}</td>
          <td>{{ channel.status }}</td>
          <td>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group" style="margin-bottom: 20px;">
                <router-link :to="{name: 'Edit', params: {id: channel.id}}" class="btn btn-sm btn-outline-secondary">
                  Edit Channel
                </router-link>
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {server} from "@/helper";
import axios from "axios";

export default {
  data() {
    return {
      channels: []
    };
  },
  created() {
    this.fetchChannels();
  },
  methods: {
    fetchChannels() {
      axios
          .get(`${server.baseURL}/channel/list`)
          .then(data => (this.channels = data.data));
    },
  }
};
</script>

