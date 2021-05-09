<template>
  <div v-if="loading">Cargando...</div>
  <div v-else>
    <input type="search" v-model="mySearch" placeholder="Search results" />
    <v-btn
      color="blue-grey"
      small
      class="ma-2 white--text"
      @click="filterResults()"
    >
      Filter Table
      <v-icon right dark> mdi-pencil </v-icon>
    </v-btn>
    <v-btn
      v-if="viewOriginal"
      color="blue-grey"
      small
      class="ma-2 white--text"
      onclick="location.reload()"
    >
      Original view
      <v-icon right dark> mdi-cached </v-icon>
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="itemsApi.results"
      :items-per-page="5"
      item-key="name"
      class="elevation-1"
      :key="id"
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        prevIcon: 'mdi-minus',
        nextIcon: 'mdi-plus',
      }"
    >
      <template v-slot:item="{ item }">
        <tr :key="item.name">
          <td class="text-xs-left">{{ item.name }}</td>
          <td class="text-xs-left">{{ item.terrain }}</td>
          <td class="text-xs-left">{{ item.population }}</td>
          <td class="text-xs-left">
            <v-btn
              text
              icon
              color="primary"
              @click="viewDetails(item.name, item.population, item.url)"
              ><v-icon>mdi-account-circle</v-icon>
            </v-btn>
          </td>
        </tr>
      </template></v-data-table
    >
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Planets",
  data() {
    return {
      itemsApi: [],
      loading: true,
      viewOriginal: false,
      mySearch: "",
      id: 1,
      img:
        "https://i.pinimg.com/originals/54/9f/ab/549fab59c313727613e315479f077cb9.png",
      headers: [
        {
          text: "Name",
        },
        { text: "Terrain" },
        { text: "Population" },
        { text: "Details" },
      ],
    };
  },
  mounted() {
    axios
      .get("https://swapi.dev/api/planets/")
      .then((response) => {
        this.itemsApi = response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    viewDetails(x, y, v) {
      this.$router.push({
        name: "viewDetails",
        params: {
          primaryDetail: x,
          secondDetail: y,
          thirdDetail: v,
          img: this.img,
        },
      });
    },
    filterResults() {
      if (this.mySearch != null) {
        this.itemsApi.results = this.itemsApi.results.filter((item) =>
          item.name.includes(this.mySearch)
        );
        this.id + 1;
        this.viewOriginal = true;

        this.mySearch = "";
      }
      return this.itemsApi;
    },
  },
};
</script>
