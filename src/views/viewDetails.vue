<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="img"></v-img>

    <v-card-title>{{ primaryDetail }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>

      <div class="my-4 subtitle-1">
        {{ secondDetail }}
      </div>

      <span
        >To access more information you can access here
        <a :href="thirdDetail">{{ thirdDetail }}</a></span
      >
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
  </v-card>
</template>

<script>
export default {
  name: "viewDetails",
  data() {
    return {
      loading: false,
      selection: 1,
      primaryDetail: this.$route.params.primaryDetail,
      secondDetail: this.$route.params.secondDetail,
      thirdDetail: this.$route.params.thirdDetail,
      img: this.$route.params.img,
    };
  },
};
</script>