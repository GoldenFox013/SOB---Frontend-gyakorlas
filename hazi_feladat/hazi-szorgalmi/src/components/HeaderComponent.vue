<template>
  <header class="main-header">    
    <div class="nav-container">
      <a href="/" class="logo-area">
        <span class="logo-text">LibriSto</span>
      </a>
      
      <div class="search-area">
        <select class="category-select">
          <option>Minden kategória</option>
          <option>Könyv</option>
          <option>E-könyv</option>
        </select>
        <input type="text" placeholder="Keresés a termékek között..." class="search-input">
        <button class="search-btn">🔍 Keresés</button>
      </div>

      <div class="icon-area">
        <button class="icon-btn">👤 Fiók</button>
        <button class="icon-btn cart-btn">🛒 Kosár (0)</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Színek és elrendezés a Libristo kinézete alapján */
.main-header {
    background-color: #fff;
    border-bottom: 1px solid #ddd;
}

.top-bar {
    background-color: #0288d1; /* Kék csík a tetején */
    color: white;
    padding: 5px 20px;
    text-align: center;
    font-size: 0.9em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    max-width: 1200px;
    margin: 0 auto;
}

.logo-area {
    text-decoration: none;
    margin-right: 20px;
}

.logo-text {
    font-size: 2em;
    font-weight: bold;
    color: #333; /* Fekete/szürke logó */
}

.search-area {
    display: flex;
    flex-grow: 1;
    max-width: 600px;
}

.category-select, .search-input, .search-btn {
    padding: 10px;
    border: 1px solid #ccc;
    height: 40px;
}

.category-select {
    border-right: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #f7f7f7;
}

.search-input {
    flex-grow: 1;
    border-left: none;
    border-right: none;
}

.search-btn {
    background-color: #ffb300; /* Sárga gomb */
    color: #333;
    font-weight: bold;
    cursor: pointer;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 1px solid #ffb300;
}

.icon-area {
    display: flex;
    gap: 10px;
}

.icon-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1em;
    padding: 10px;
    transition: color 0.2s;
}

.cart-btn {
    font-weight: bold;
    color: #0288d1;
}
</style>