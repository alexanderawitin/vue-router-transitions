import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import Parent from "../components/Parent.vue";
import Default from "../components/Default.vue";
import Foo from "../components/Foo.vue";
import Bar from "../components/Bar.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    {
      path: "/parent",
      component: Parent,
      children: [
        { path: "", component: Default },
        { path: "foo", component: Foo },
        { path: "bar", component: Bar }
      ]
    }
  ]
});
