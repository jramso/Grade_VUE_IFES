<template>
  <!-- O header contém os elementos que aparecem em TODAS as páginas -->
  <header class="header">
    <div class="header-content">
      <h1>
        <img src="./assets/ifes_logo.png" alt="Logo IFES" style="height: 45px; margin-right: 15px;" />
        Organize sua Grade Curricular</h1>
    </div>
    <nav class="main-nav">
      <!-- Links que trocam de página -->
      <RouterLink to="/">Grade Nova (IFES)</RouterLink>
      <RouterLink to="/outra-grade">Grade Antiga</RouterLink>
    </nav>
    <div class="header-actions">
       <button @click="printPage" class="print-button">Imprimir / Salvar PDF</button>
    </div>
  </header>

  <RouterView />

  <Footer />

  
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/Footer.vue';

// A função de impressão é global, então pode ficar aqui.
function printPage() {
  window.print();
}
</script>

<style scoped>
/* Os estilos que você já tinha para o header e a navegação estão perfeitos aqui */
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.header-content h1 {
  font-size: 1.8rem;
  margin: 0;
}

.main-nav {
  display: flex;
  gap: 1rem;
}

.main-nav a {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  color: var(--color-text-secondary);
  transition: background-color 0.2s, color 0.2s;
}

.main-nav a:hover {
  background-color: var(--color-header-bg);
  color: var(--color-text-primary);
}

/* Estilo para o link da página ativa */
.main-nav a.router-link-exact-active {
  background-color: #0077b6;
  color: white;
}

.print-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    border: 1px solid var(--color-border);
    background-color: var(--color-surface);
    color: var(--color-text-primary);
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
}
</style>
