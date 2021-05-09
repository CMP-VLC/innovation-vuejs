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
          <td class="text-xs-left">{{ item.gender }}</td>
          <td class="text-xs-left">{{ item.skin_color }}</td>
          <td class="text-xs-left">
            <v-btn
              text
              icon
              color="primary"
              @click="viewDetails(item.name, item.birth_year, item.homeworld)"
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
  name: "Home",
  data() {
    return {
      itemsApi: [],
      loading: true,
      viewOriginal: false,
      mySearch: "",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg",
      id: 1,
      headers: [
        {
          text: "Name",
        },
        { text: "Gender" },
        { text: "Skin Color" },
        { text: "Details" },
      ],
    };
  },
  mounted() {
    axios
      .get("https://swapi.dev/api/people/")
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
