<template>
  <div>
    <div class="view-header">
      <div class="view-header-content">
        <h2>Grade Nova BSI (Extensão)</h2>
        <p>Arraste e solte as disciplinas para planejar seus estudos. Clique em um card para alterar seu status.</p>
      </div>
      <div class="instructions">
        <div class="status-legend"><span class="dot todo"></span> A Fazer</div>
        <div class="status-legend"><span class="dot doing"></span> Cursando</div>
        <div class="status-legend"><span class="dot done"></span> Concluída</div>
      </div>
    </div>

    <main class="grid-wrapper">
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import PeriodColumn from '../components/PeriodColumn.vue';
import { courseData } from '../data/courseData.js'; // Importa os dados da grade NOVA

const courseGrid = ref(initializeGrid());
const draggedSubject = ref(null);
const statuses = ['status-todo', 'status-doing', 'status-done'];

const firstHalfPeriods = computed(() => courseGrid.value.filter(p => p.id <= 4));
const secondHalfPeriods = computed(() => courseGrid.value.filter(p => p.id > 4));

function initializeGrid() {
  let subjectIdCounter = 0;
  return courseData.map((period) => ({
    id: period.period,
    name: `${period.period}º Período`,
    subjects: period.subjects.map(subject => ({ ...subject, id: subjectIdCounter++, status: 'status-todo' })),
  }));
}

function handleDragStart(subject) { draggedSubject.value = subject; }

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
</script>

<style scoped>
.view-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background-color: var(--color-header-bg);
}
.view-header-content h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}
.view-header-content p {
  margin: 0;
  color: var(--color-text-secondary);
}
</style>
