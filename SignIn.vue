<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="id" label="Id" required></v-text-field>
    <v-text-field v-model="name" label="Name" required></v-text-field>

    <v-text-field v-model="email" label="E-mail" required></v-text-field>

    <v-text-field v-model="password" label="Password" required></v-text-field>

    <v-btn color="#ffc000" class="mr-4" @click="signUp"> Sign In </v-btn>
  </v-form>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    valid: true,
    id: "",
    name: "",
    email: "",
    password: "",
  }),

  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        email: this.email,
        name: this.name,
        password: this.password,
        id: this.id,
      });
      console.log(result);
      if (result.status == 201) {
        alert("Successfully Signed Up");
        localStorage.setItem("user-info", JSON.stringify(result.data));
      }
    },
  },
};
</script>

<style></style>
