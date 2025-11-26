# GraphQL API vs REST API

Fájlstruktúra:
rest-loader-demo/  
├─ src/  
│  ├─ assets/  
│  ├─ components/  
│  │   ├─ GraphQLSection.vue  
│  │   |  
│  │   ├─ LoadingSpinner.vue  
│  │   ├─ Navbar.vue  
│  │   ├─ ProgressBar.vue  
│  │   ├─ RestApiSection.vue  
│  │   ├─ UsersList.vue  
│  ├─ mixins/  
│  │   ├─ loadingMixin.js  
│  ├─ App.vue  
│  ├─ main.js  
│  ├─ style.css  
...

Projekt létrehozása:

```bash
npm create vite@latest rest-loader-demo -- --template vue
cd rest-loader-demo
npm install
npm install axios
```

Ez nem szükséges:  
    src/mixins/loadingMixin.js
