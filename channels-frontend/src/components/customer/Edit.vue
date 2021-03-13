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
          <template v-for="(item, index) in channelSort">
            <label class="checkbox" :key="'key'+index" :for="item.value"><span>{{ item.value }}</span>
              <input :id="item.value" :key="'key'+index" :value="item.value" type="radio"
                     :checked="item.value === channel.sort" v-model="channel.sort">
            </label>
          </template>
        </div>

        <div class="form-group col-md-12">
          <template v-for="(item, index) in channelStatus">
            <label class="checkbox" :key="'key'+index" :for="item.name"><span>{{ item.name }}</span>
              <input :id="item.name" :key="'key'+index" :value="item.value" type="radio"
                     :checked="item.value === channel.status" v-model="channel.status">
            </label>
          </template>
        </div>

        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit Channel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import {channelSort, channelStatus, server} from "@/helper";
import axios from "axios";
import router from "../../router";

export default {
  data() {
    return {
      id: 0,
      channel: {},
      channelStatus: channelStatus,
      channelSort: channelSort,
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
        // category_sort: this.channel.category.sort,
        status: this.channel.status,
      };

      // console.log(channelData);

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

