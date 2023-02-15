import "./assets/css/common.css";
import "./assets/css/index.less";
import jpptest from "./assets/images/jpgone.jpg";
import wenptest from "./assets/images/webp-two.webp";
import "./assets/iconfont/iconfont.css";
import "./assets/iconfont/iconfont.js";
import axios from "axios";
import "animate.css";
import jquery from "jquery";
import Vue from "vue";
import App from "./App";

new Vue({
  el: "#app",
  render(h) {
    return h(App);
  }
});
