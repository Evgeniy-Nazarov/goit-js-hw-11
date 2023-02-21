import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const axios = require('axios');
const BASE_URL = 'https://pixabay.com/api/';
const KEY = '33830559-b80d1d0487f9caaadda577109';



const inputEl = document.querySelector('input');
console.log(inputEl);
const searchButton = document.querySelector('button');
const galleryEl = document.querySelector('.gallery');

