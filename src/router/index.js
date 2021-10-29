import Vue from "vue";
import VueRouter from "vue-router";
import HomeTemplate from "./../views/HomeTemplate";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeTemplate,
    children: [
      {
        path: "/",
        component: () => import("../views/HomeTemplate/Home.vue"),
      },
      {
        path: "/about",
        component: () => import("../views/HomeTemplate/About.vue"),
      },
      {
        path: "/stations",
        component: () => import("./../views/HomeTemplate/Stations.vue"),
      },
      {
        path: "/stations/:id",
        name: "stationDetail",
        component: () => import("./../views/HomeTemplate/StationDetail.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("./../views/AdminTemplate"),
    beforeEnter(to, from, next) {
      if (localStorage.getItem("token")) {
        next();
      } else {
        next("/auth");
      }
    },
    children: [
      {
        path: "/admin/dashboard",
        component: () => import("../views/AdminTemplate/Dashboard.vue"),
      },
      {
        path: "/admin/stations",
        component: () => import("../views/AdminTemplate/stationPage"),
      },
      {
        path: "/admin/create-station",
        component: () => import("../views/AdminTemplate/CreateStation/index.vue"),
      },
      {
        path:"/admin/editStation",
        name:"editStation",
        component:()=> import("../views/AdminTemplate/EditStationPage")
      }
    ],
  },
  { path: "*", component: () => import("../views/PageNotFound.vue") },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
  },
  {
    path:"/auth",
    component:() => import("../views/Auth/Login.vue")
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
