import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LessonSubmitPlan from "../views/LessonSubmitPlan.vue";
import Basics from "../views/lessons/Basics.vue";
import Contact from "../views/Contact.vue";
import LessonHub from "../views/LessonHub.vue";
import PersonalPronounsLesson from "../views/lessons/PersonalPronounsLesson.vue"
import CyrillicLesson from "../views/lessons/CyrillicLesson.vue"
import GreetingsLesson from "../views/lessons/GreetingsLesson.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/how-to-submit-lessons",
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
    path: "/lessons/personal-pronouns",
    name: "personal-pronouns",
    component: PersonalPronounsLesson,
  },
  {
    path: "/lessons/cyrillic",
    name: "cyrillic",
    component: CyrillicLesson,
  },
  {
    path: "/lessons/greetings",
    name: "greetings",
    component: GreetingsLesson,
  },
];

const router = new VueRouter({
  routes,
});

export default router;