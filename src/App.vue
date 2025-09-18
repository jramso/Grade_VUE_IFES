<template>
  <header class="header">
    <!-- O conteúdo do seu header continua o mesmo -->
    <div class="header-content">
      <h1>Planejador de Grade BSI</h1>
      <p>Arraste e solte as disciplinas entre os períodos para planejar seus estudos. 
        <br>Clique em um card para alterar seu status.</p>
    </div>
    <div class="header-actions">
       <button @click="printPage" class="print-button">
        <i class="bi bi-printer"></i>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg> -->
        Imprimir / Salvar PDF
      </button>
      <div class="instructions">
        <div class="status-legend"><span class="dot todo"></span> A Fazer</div>
        <div class="status-legend"><span class="dot doing"></span> Cursando</div>
        <div class="status-legend"><span class="dot done"></span> Concluída</div>
      </div>
    </div>
  </header>

  <!-- Container principal para as duas fileiras -->
  <main class="grid-wrapper">
    <!-- Primeira fileira (Períodos 1-4) -->
    <div class="grid-row">
      <PeriodColumn
        v-for="period in firstHalfPeriods"
        :key="period.id"
        :period="period"
        @dragStart="handleDragStart"
        @drop="handleDrop"
        @toggleStatus="handleToggleStatus"
      />
    </div>
    <!-- Segunda fileira (Períodos 5-8) -->
    <div class="grid-row">
       <PeriodColumn
        v-for="period in secondHalfPeriods"
        :key="period.id"
        :period="period"
        @dragStart="handleDragStart"
        @drop="handleDrop"
        @toggleStatus="handleToggleStatus"
      />
    </div>
  </main>
</template>

<script setup>
// Adicione 'computed' à importação do vue
import { ref, computed } from 'vue';
import PeriodColumn from './components/PeriodColumn.vue';
import { courseData } from './data/courseData.js';

const courseGrid = ref(initializeGrid());
const draggedSubject = ref(null);
const statuses = ['status-todo', 'status-doing', 'status-done'];

// NOVO: Propriedades computadas para dividir a grade
const firstHalfPeriods = computed(() => courseGrid.value.filter(p => p.id <= 4));
const secondHalfPeriods = computed(() => courseGrid.value.filter(p => p.id > 4));


function initializeGrid() {
  let subjectIdCounter = 0;
  return courseData.map((period) => ({
    id: period.period,
    name: `${period.period}º Período`,
    subjects: period.subjects.map(subject => ({
      ...subject,
      id: subjectIdCounter++,
      status: 'status-todo',
    })),
  }));
}

// O resto das suas funções (handleDragStart, handleDrop, etc.) continua igual
function handleDragStart(subject) {
  draggedSubject.value = subject;
}

function handleDrop(targetPeriodId) {
  if (!draggedSubject.value) return;
  const subjectToMove = draggedSubject.value;
  let originPeriod = courseGrid.value.find(p => p.subjects.some(s => s.id === subjectToMove.id));
  if (originPeriod) {
    originPeriod.subjects = originPeriod.subjects.filter(s => s.id !== subjectToMove.id);
  }
  const targetPeriod = courseGrid.value.find(p => p.id === targetPeriodId);
  if (targetPeriod) {
    targetPeriod.subjects.push(subjectToMove);
  }
  draggedSubject.value = null;
}

function handleToggleStatus(subjectId) {
  for (const period of courseGrid.value) {
    const subject = period.subjects.find(s => s.id === subjectId);
    if (subject) {
      const currentIndex = statuses.indexOf(subject.status);
      const nextIndex = (currentIndex + 1) % statuses.length;
      subject.status = statuses[nextIndex];
      break; 
    }
  }
}

function printPage() {
  window.print();
}
</script>

<style scoped>
/* Os estilos específicos do App.vue continuam os mesmos */
.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
}

.header-content {
  text-align: left;
}

.header-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
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

.print-button:hover {
  background-color: var(--color-header-bg);
}
</style>

