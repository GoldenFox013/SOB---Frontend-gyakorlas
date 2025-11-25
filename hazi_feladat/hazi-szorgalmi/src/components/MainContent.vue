<script setup>
import ProductCard from './ProductCard.vue';
import { ref } from 'vue';

// A 8 könyv statikus adatai és URL-jei
const products = ref([
    { 
      id: 1, 
      name: "Dűne", 
      author: "Frank Herbert", 
      price: "4 990 Ft", 
      image: "https://lira.erbacdn.net/upload/M_28/rek1/199/4274199.jpg"
    },
    { 
      id: 2, 
      name: "Az öreg halász és a tenger", 
      author: "Ernest Hemingway", 
      price: "2 150 Ft", 
      image: "https://cdn.antikvarium.hu/foto/nagy/44018802.jpg"
    },
    { 
      id: 3, 
      name: "1984", 
      author: "George Orwell", 
      price: "3 490 Ft", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffYeQgIcha1AN2dv-1nju5NyUZsAjEMOP8w&s"
    },
    { 
      id: 4, 
      name: "Harry Potter és a bölcsek köve", 
      author: "J. K. Rowling", 
      price: "5 790 Ft", 
      image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
    },
    { 
      id: 5, 
      name: "Bűn és bűnhődés", 
      author: "Fjodor Mihajlovics Dosztojevszkij", 
      price: "4 200 Ft", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjcrjBIMib2odEYT5glqVxyB4fvLjG1mHVQ&s"
    },
    { 
      id: 6, 
      name: "The king in yellow", 
      author: "Robert W. Chambers", 
      price: "2 890 Ft", 
      image: "https://thumbs.readings.com.au/K0ogyE4bQF6cYCHwQ7dtUTTO3Mg=/0x500/https://readings-v4-production.s3.amazonaws.com/assets/09b/8bf/669/09b8bf669610b79f098c625b563520df3e234972/978166730500420250522-2-h7h9ld.jpg"
    },
    { 
      id: 7, 
      name: "Pszichoanalízis", 
      author: "Sigmund Freud", 
      price: "2 590 Ft", 
      image: "https://marvin.bline.hu/product_images/1321/ID22-288758.JPG"
    },
    { 
      id: 8, 
      name: "A gyűrűk ura", 
      author: "J. R. R. Tolkien", 
      price: "6 190 Ft", 
      image: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif"
    }
]);
</script>

<template>
  <div class="main-content">
    <h2 class="section-title">📚 Top Bestsellerek</h2>
    
    <div class="product-carousel">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
      /> 
    </div>
  </div>
</template>

<style scoped>
.main-content {
    padding: 20px 0;
}

.section-title {
    font-size: 1.5em;
    color: #333;
    border-bottom: 2px solid var(--color-primary, #0288d1);
    padding-bottom: 5px;
    margin-bottom: 20px;
}

/* VÍZSZINTES GÖRGETÉS BEÁLLÍTÁSA */
.product-carousel {
    display: flex;         
    overflow-x: auto;      /* Ez engedélyezi a görgetést! */
    gap: 15px;             
    padding-bottom: 20px; 
    margin-bottom: 40px;
    /* Görgető sáv elrejtése - opcionális */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.product-carousel::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}
</style>