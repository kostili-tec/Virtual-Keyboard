import nodeMaker from "./create.js";
import "../styles/style.css"
import "../scss/main.scss"
console.log('test');

const {createDiv} = nodeMaker;

const BODY = document.querySelector('body');



createDiv(BODY);