import nodeMaker from './create';
import '../styles/style.css';
import '../scss/main.scss';

console.log('test');

const { createDiv } = nodeMaker;

const BODY = document.querySelector('body');

createDiv(BODY);
