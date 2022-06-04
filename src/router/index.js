import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LessonSubmitPlan from "../views/LessonSubmitPlan.vue";
import Basics from "../views/Basics.vue";
import Contact from "../views/Contact.vue";
import LessonHub from "../views/LessonHub.vue";
import PersonalPronounsLesson from "../views/PersonalPronounsLesson.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/how-to-submit-lesson",
    name: "lessonsubmitplan",
    component: LessonSubmitPlan,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/basics",
    name: "basics",
    component: Basics,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/lessons",
    name: "lessons",
    component: LessonHub,
  },
  {
    path: "/personal-pronouns",
    name: "personal-pronouns",
    component: PersonalPronounsLesson,
  },
];

const router = new VueRouter({
  routes,
});

export default router;