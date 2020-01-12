import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "@/views/Home";
import Login from "@/views/Login";
import User from "@/views/User";
import Posts from "@/views/Posts";
import SinglePost from "@/components/Posts/SinglePost";

import guest from "./middleware/guest";
import auth from "./middleware/auth";
import middlewarePipeline from "./middlewarePipeline";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      middleware: [guest]
    }
  },
  {
    path: "/user",
    name: "user",
    component: User
  },
  {
    path: "/posts",
    name: "posts",
    component: Posts,
    meta: {
      middleware: [auth]
    }
  },
  {
    path: "/posts/:id",
    name: "post",
    component: SinglePost
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((toR, fromR, next) => {
  if (!toR.meta.middleware) {
    return next();
  }
  const middleware = toR.meta.middleware;

  const context = {
    toR,
    fromR,
    next,
    store
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});

export default router;
