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
    postData: null
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
    setPostData(state, data){
      state.postData = data
    }
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

    async editProd(context, payload) {
      try {
        const response = await axios.patch(`${Api}product/${payload.prodID}`, payload);
        if (response.data.msg) {
          context.dispatch("fetchProducts");
        }
      } catch (error) {
        console.error("An error occurred while updating the product:", error);
        
        if (error.response) {
          console.error("Server responded with:", error.response.data);
          if (error.response.status === 404) {
            context.commit("setMsg", "Product not found.");
          } else if(error.response.status === 500) {
            context.commit("setMsg", "Internal server error.");
          }
        }
      }
    },

    // async addProd({commit}, context, postProd) {
    //   try {
    //     const response = await axios.post(`${Api}product/`, postProd);
    //     commit("setPostResponse", response.data)
    //     if (response, msg) {
    //       context.dispatch("fetchProducts");
    //       console.log(response.data);
    //     }
    //   } catch (e) {
    //     commit("setMsg", "An error occurred while adding the product.");
    //   }
    // },
    async submitForm({commit}, postProd){
      try {
        const response = await axios.post(`${Api}product`, postProd)
        commit('setPostData', response.data)
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {},
});
