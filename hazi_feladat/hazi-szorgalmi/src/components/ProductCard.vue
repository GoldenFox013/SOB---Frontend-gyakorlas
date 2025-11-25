<template>
  <div class="product-card">
    <div class="product-image-container">
      <img :src="product.image" 
           :alt="product.name" 
           class="product-image">
    </div>
    
    <div class="product-details">
      <h3 class="product-title">{{ product.name }}</h3>
      <p class="product-author">Író: **{{ product.author }}**</p>
      <div class="product-price">{{ product.price }}</div>
      <button class="add-to-cart-btn">🛒 Kosárba</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Fogadja a 'product' objektumot a MainContent.vue-ból
const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
});
</script>

<style scoped>
.product-card {
    border: 1px solid #eee;
    padding: 15px;
    text-align: center;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    
    /* Carousel elrendezéshez szükséges: */
    width: 200px;
    flex-shrink: 0; 
}

.product-image-container {
    height: 220px;
    margin-bottom: 10px;
    display: flex; 
    justify-content: center;
    align-items: center;
    overflow: hidden; 
}

.product-image {
    max-width: 100%;
    max-height: 100%; 
    object-fit: contain; 
}

.product-title {
    font-size: 1em; 
    margin: 0 0 5px 0;
    min-height: 2.8em; /* Hely két sornyi címnek */
    line-height: 1.4em; 
    overflow: hidden; 
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.product-author {
    font-size: 0.85em;
    color: #666;
    margin: 0 0 10px 0;
    min-height: 1.2em;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
}

.product-price {
    font-size: 1.2em;
    color: var(--color-price, #c62828); 
    font-weight: bold;
    margin-bottom: 10px;
}

.add-to-cart-btn {
    background-color: var(--color-primary, #0288d1);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
}
</style>