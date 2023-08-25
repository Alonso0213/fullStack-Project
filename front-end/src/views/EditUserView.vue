<template>
  <div>
    <h2>user Edit</h2>
    <a href="/admin">Back</a>
    <form @submit.prevent="EditConfirm">
      <input v-model="adduser.firstName" type="text" placeholder="firstName" />
      <input v-model="adduser.lastName" type="text" placeholder="lastName" />
      <input v-model="adduser.userAge" type="number" placeholder="userAge" />
      <input v-model="adduser.userProfile" type="text" placeholder="userProfile" />
      <input v-model="adduser.gender" type="text" placeholder="gender" />
      <input v-model="adduser.emailAdd" type="text" placeholder="Email" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adduser: {
        userID: this.id,
        firstName: "",
        lastName: "",
        userAge: "",
        userProfile: "",
        gender: "",
        emailAdd: "",
      },
    };
  },
  props: ["id"],
  methods: {
    EditConfirm() {
      this.$store.dispatch("ConfimEditUser", this.adduser);
    },
  },
};
</script>

<style scoped></style>
