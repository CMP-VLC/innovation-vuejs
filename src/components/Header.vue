<template>
  <v-app>
    <v-app-bar color="primary" dark max-height="80px">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://media-exp1.licdn.com/dms/image/C560BAQFvOLvrfZo1wg/company-logo_200_200/0/1556631014849?e=2159024400&v=beta&t=qp_u6T4cXn7i9nQum0ByNEDdRq2YjbWU6wmKR2RYM3w"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title
          >Prueba Carlos Mundo - Innovation Strategies</v-toolbar-title
        >
      </div>

      <v-spacer></v-spacer>
      <v-btn @click="$router.push({ name: 'Home' })" target="_blank" text>
        <span class="mr-2">Home</span>
      </v-btn>

      <v-btn @click="$router.push({ name: 'Starships' })" target="_blank" text>
        <span class="mr-2">Starships</span>
      </v-btn>

      <v-btn @click="$router.push({ name: 'Planets' })" target="_blank" text>
        <span class="mr-2">Planets</span>
      </v-btn>
    </v-app-bar>
    <router-view />
  </v-app>
</template>
<script>
export default {
  name: "Header",
};
</script>