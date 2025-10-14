import { createRouter, createWebHistory } from "vue-router";
import GradeNova from "../views/gradeNova.vue";
import OutraGradeView from "../views/gradeAntiga.vue";

const routes = [
  {
    path: "/GRADE_VUE_IFES",
    name: "GradePrincipal",
    component: GradeNova,
  },
  {
    path: "/GRADE_VUE_IFES/outra-grade",
    name: "OutraGrade",
    component: OutraGradeView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
