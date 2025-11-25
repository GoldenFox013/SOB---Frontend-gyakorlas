<template>
  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-column">
        <h3>Információk</h3>
        <ul>
          <li><a href="#">Rólunk</a></li>
          <li><a href="#">Kapcsolat</a></li>
          <li><a href="#">Szállítás és fizetés</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Vásárlás</h3>
        <ul>
          <li><a href="#">Általános szerződési feltételek</a></li>
          <li><a href="#">Adatkezelési tájékoztató</a></li>
          <li><a href="#">Süti (cookie) tájékoztató</a></li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      &copy; 2025 LibriSto Klón | Készült tanulási céllal.
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
    background-color: #333;
    color: white;
    padding: 30px 0 10px 0;
    margin-top: auto; /* Tolja le a láblécet az aljára */
}

.footer-container {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto 20px auto;
    padding: 0 20px;
}

.footer-column h3 {
    border-bottom: 1px solid #777;
    padding-bottom: 5px;
    margin-bottom: 15px;
}

.footer-column ul {
    list-style: none;
    padding: 0;
}

.footer-column li a {
    color: #ccc;
    text-decoration: none;
    line-height: 1.8;
}

.copyright {
    text-align: center;
    border-top: 1px solid #777;
    padding-top: 10px;
    font-size: 0.8em;
    color: #ccc;
}
</style>