import Vue from "vue";
import App from "./src/app.vue"
import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
import './static/element-variables.scss'

Vue.use(ElementUI);
new Vue({
    el: "#app",
    render: h => h(App),
})