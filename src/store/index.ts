import { createStore } from "vuex";
import Axios from "axios";
import New from "../interfaces/news";
import User from "../interfaces/user";

let server = "";

if (process.env.NODE_ENV === "development") {
  server = "https://localhost:3000/";
} else {
  server = "https://95.213.243.195:3000/";
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
    },
  },
  actions: {
    async registration({ commit }, newUser) {
      newUser.role = "user";
      const res = await axios.post(`auth/registration`, {
        ...newUser,
      });

      const data = res.data;
      commit("updateUser", data);
    },
    async login({ commit }, user) {
      const res = await axios.post(`auth/login`, {
        ...user,
      });
      const data = res.data;
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
      const res = await axios.get(`/auth/token`);
      const data = await res.data;

      commit("updateUser", data);
    },
  },
  modules: {},
});
