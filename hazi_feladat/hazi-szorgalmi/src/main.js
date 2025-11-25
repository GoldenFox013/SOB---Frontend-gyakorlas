// src/main.js

import { createApp } from 'vue' // A Vue alapfunkciójának importálása
import App from './App.vue'     // Az alkalmazás gyökér komponensének importálása

// Globális stílusfájl importálása
// FIGYELEM: Ellenőrizd, hogy az útvonal (path) helyes legyen a te projektedben!
// Ha a style.css a src/assets/ mappában van, ez a helyes útvonal:
import './assets/style.css' 
// HA a style.css a src/ mappában van, akkor:
// import './style.css'


// Létrehozza a Vue alkalmazás példányát az App gyökérkomponensből
const app = createApp(App)

// Csatolja (mount-olja) az alkalmazást a HTML-ben lévő #app id-jű elemhez
app.mount('#app')