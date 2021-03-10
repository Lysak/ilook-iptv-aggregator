<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()"> View All Channels</button>
      </small>
    </h4>

    <div class="col-md-12 form-wrapper">
      <h2> Edit Channel </h2>
      <form id="create-post-form" @submit.prevent="editChannel">
        <div class="form-group col-md-12">
          <label for="sort"> sort </label>
          <input type="text" id="sort" v-model="channel.sort" name="sort" class="form-control"
                 placeholder="Enter sort">
        </div>

        <div class="form-group col-md-12">
          <label for="category_sort"> category_sort </label>
          <input type="text" id="category_sort" v-model="channel.category.sort" name="category_sort" class="form-control"
                 placeholder="Enter category_sort">
        </div>

        <div class="form-group col-md-12">
          <label for="status"> status </label>
          <input type="text" id="status" v-model="channel.status" name="status" class="form-control"
                 placeholder="Enter status">
        </div>

        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit"> Edit Channel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {server} from "@/helper";
import axios from "axios";
import router from "../../router";

export default {
  data() {
    return {
      id: 0,
      channel: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getChannel();
  },
  methods: {
    editChannel() {
      let channelData = {
        sort: this.channel.sort,
        category_sort: this.channel.category.sort,
        status: this.channel.status,
      };
      
      console.log(channelData);

      axios
          .put(
              `${server.baseURL}/channel/update/${this.id}`,
              channelData
          )
          .then(() => {
            router.push({name: "home"});
          });
    },
    getChannel() {
      axios
          .get(`${server.baseURL}/channel/info/${this.id}`)
          .then(data => (this.channel = data.data))
          // .finally(() => console.log(this.channel, this.channel.category.sort))
          ;
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>

