import { createRouter, createWebHistory } from "vue-router";
import GradeNova from "../views/gradeNova.vue";
import OutraGradeView from "../views/gradeAntiga.vue";

const routes = [
  {
    path: "/",
    name: "GradePrincipal",
    component: GradeNova,
  },
  {
    path: "/outra-grade",
    name: "OutraGrade",
    component: OutraGradeView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
