import common from "./assets/css/common.css";
import "./assets/css/index.less";
import jpptest from "./assets/images/jpgone.jpg";
import wenptest from "./assets/images/webp-two.webp";
import "./assets/iconfont/iconfont.css";
import "./assets/iconfont/iconfont.js";
import axios from "axios";
import "animate.css";
import jquery from "jquery";
import Vue from "vue";
export const addNum = (num1: number, num2: number) => {
  return num1 + num2;
};

let age = 12;

console.log(addNum(1, 2));

function test(num: number) {
  return num + age;
}

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("成功");
  }, 3000);
});

p.then((res) => {
  console.log("promise", res);
});



