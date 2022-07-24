import { createStore } from "vuex";
import Axios from "axios";
import New from "../interfaces/news";
import User from "../interfaces/user";

let server = "";

if (process.env.NODE_ENV === "development") {
  server = "https://localhost:3001/";
} else {
  server = "https://unik-server.site/";
}

const axios = Axios.create({
  withCredentials: true,
  baseURL: process.env.VUE_APP_SERVER || server,
});

export default createStore({
  state: {
    news: [] as New[],
    post: {} as New,
    users: [] as User[],
    user: {} as User,
  },
  getters: {
    getNews(state) {
      return state.news;
    },
    getUsers(state) {
      return state.users;
    },
    getOneNews(state) {
      return state.post;
    },
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    updateNews(state, news: New[]) {
      state.news = news;
    },
    updateUsers(state, users: User[]) {
      state.users = users;
    },
    getNews(state, news: New) {
      state.post = news;
    },
    updateUser(state, user: User) {
      state.user = user;
      console.log(state.user);
    },
  },
  actions: {
    async registration({ commit }, newUser) {
      newUser.role = "user";
      const res = await axios.post(`auth/registration`, {
        ...newUser,
      });

      const data = res.data;
      localStorage.setItem("user", data.role);
      commit("updateUser", data);
    },
    async login({ commit }, user) {
      const res = await axios.post(`auth/login`, {
        ...user,
      });
      const data = res.data;
      localStorage.setItem("user", data.role);
      commit("updateUser", data);
    },
    async getAllNews({ commit }) {
      const news = await axios.get(`news`);
      const data = await news.data;

      commit("updateNews", data);
    },

    async getNewsById({ commit }, id: number) {
      const res = await axios.get(`news/${id}`);
      const data = await res.data;

      commit("getNews", data);
    },

    async getAllUsers({ commit }) {
      const news = await axios.get(`users`);
      const data = await news.data;

      commit("updateUsers", data);
    },
    async getUserByToken({ commit }) {
      console.log(localStorage.getItem("user"));

      if (localStorage.getItem("user") !== null) {
        const res = await axios.get(`/auth/token`);
        const data = await res.data;

        commit("updateUser", data);

        console.log(456);
      }

      console.log(123);
    },
  },
  modules: {},
});
