import { createStore } from "vuex";
import axios from "axios";
const Api = "https://limitless-api.onrender.com/";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    spinner: false,
    token: null,
    msg: null,
    postData: null,
  },
  getters: {},
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
    setProduct(state, product) {
      state.product = product;
    },
    setSpinner(state, value) {
      state.spinner = value;
    },
    setToken(state, token) {
      state.token = token;
    },
    setMsg(state, msg) {
      state.msg = msg;
    },
    setPostData(state, data) {
      state.postData = data;
    },
  },

  actions: {
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${Api}users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${Api}products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMsg", "An Error has occured😒");
      }
    },
    async deleteProd(context, prodID) {
      try {
        const { data } = await axios.delete(`${Api}product/${prodID}`);
        if (data.msg) {
          context.dispatch("fetchProducts");
        }
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },
    async deleteUser(context, userID) {
      try {
        const { data } = await axios.delete(`${Api}user/${userID}`);
        if (data.msg) {
          context.dispatch("fetchUsers");
        }
      } catch (e) {
        context.commit("setMsg", "An error occurred.");
      }
    },

    async ConfimAddprod({ commit }, addprod) {
      try {
        const res = await axios.post(`${Api}product`, addprod);
        commit("setPostData", res.data);
        console.log(res.data);
      } catch (e) {
        console.error(err);
      }
    },

    async ConfimAdduser({ commit }, adduser) {
      try {
        const res = await axios.post(`${Api}user`, adduser);
        commit("setPostData", res.data);
        console.log(res.data);
      } catch (e) {
        console.error(err);
      }
    },

    async ConfimEditProd(context, editprod) {
      try {
        const res = await axios.patch(
          `${Api}product/${editprod.prodID}`,
          editprod
        );
        context.commit("setPostData", res.data);
        console.log(res.data);
      } catch (e) {
        console.log(err);
      }
    },
  },
  modules: {},
});
