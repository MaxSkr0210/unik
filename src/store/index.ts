import { createStore } from "vuex";
import axios from "axios";
import New from "../interfaces/news";
import User from "../interfaces/user";

export default createStore({
  state: {
    news: [] as New[],
    users: [] as User[],
  },
  getters: {
    getNews(state) {
      return state.news;
    },
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
    updateNews(state, news) {
      state.news = news;
    },
    updateUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async getAllNews({ commit }) {
      console.log(process.env);

      const news = await axios.get(`${process.env.VUE_APP_SERVER}news`);
      const data = await news.data;

      commit("updateNews", data);
    },

    // async getAllUsers({ commit }) {
    //   const news = await axios.get(`${serverUrl}users`);
    //   const data = await news.data;

    //   commit("updateUsers", data);
    // },
  },
  modules: {},
});
