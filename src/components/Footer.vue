<template>
  <footer class="app-footer">
    <div class="footer-content">
      <!-- Sinta-se à vontade para alterar o texto -->
      <p>&copy; {{ new Date().getFullYear() }} Josué Ramos Souza. Desenvolvido com Vue.js: Vite.</p>
      
      <div class="social-links">
        <!-- IMPORTANTE: Substitua '#' pelos seus links reais -->
        <a href="https://github.com/jramso" target="_blank" rel="noopener noreferrer" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="https://jramso.github.io/portfolio-jramso/" target="_blank" rel="noopener noreferrer" title="Portfólio">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>
        </a>
        <a href="https://x.com/JosueRSou" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"></path><path d="m9 17 3-3.5L15 17"></path><path d="m15 7-3 3.5L9 7"></path></svg>
        </a>
        <a href="https://www.instagram.com/josue.rsou" target="_blank" rel="noopener noreferrer" title="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="https://www.linkedin.com/in/josué-r-6a7a1a115" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Nenhuma lógica de script é necessária para este componente simples
</script>

<style scoped>
.app-footer {
  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: 1.5rem 2rem;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin-top: auto; /* Garante que ele fique no final do conteúdo */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.social-links {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.social-links a {
  color: var(--color-text-secondary);
  transition: color 0.2s ease-in-out;
}

.social-links a:hover {
  color: var(--color-text-primary);
}

.social-links svg {
  width: 20px;
  height: 20px;
}
</style>
