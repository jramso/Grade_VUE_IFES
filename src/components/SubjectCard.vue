<template>
  <div
    :class="['subject-card', `area-${subject.area}`, subject.status]"
    draggable="true"
    @dragstart="$emit('dragStart', subject)"
    @click="$emit('toggleStatus', subject.id)"
  >
    <span v-if="subject.tag" class="card-tag">{{ subject.tag }}</span>
    <p class="card-name">{{ subject.name }}</p>
    <p class="card-hours">Carga Horária: {{ subject.hours }}h</p>
  </div>
</template>

<script setup>
// Define as propriedades que este componente espera receber
defineProps({
  subject: {
    type: Object,
    required: true,
  },
});

// Define os eventos que este componente pode emitir para o pai
defineEmits(['dragStart', 'toggleStatus']);
</script>

<style scoped>
/* Os estilos do card estão no style.css global, 
   mas você poderia colocar estilos específicos aqui se quisesse. */
.subject-card.status-doing {
  background-color: var(--status-doing-bg);
}
.subject-card.status-done {
  background-color: var(--status-done-bg);
  text-decoration: line-through;
  opacity: 0.8;
}

.subject-card {
  background-color: var(--color-surface);
  border-radius: 8px;
  padding: 0.75rem;
  cursor: grab;
  user-select: none;
  box-shadow: var(--shadow-sm);
  border-left: 5px solid;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  position: relative;
}

.subject-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.subject-card.dragging {
  opacity: 0.5;
  transform: scale(1.05) rotate(3deg);
  cursor: grabbing;
}

.subject-card.area-core {
  border-color: var(--area-core);
}

.subject-card.area-programming {
  border-color: var(--area-programming);
}

.subject-card.area-math {
  border-color: var(--area-math);
}

.subject-card.area-management {
  border-color: var(--area-management);
}

.subject-card.area-humanities {
  border-color: var(--area-humanities);
}

.subject-card.area-systems {
  border-color: var(--area-systems);
}

.subject-card.area-web {
  border-color: var(--area-web);
}

.subject-card.area-elective {
  border-color: var(--area-elective);
}

.card-tag {
  position: absolute;
  top: 5px;
  right: 8px;
  background-color: #e9ecef;
  color: var(--color-text-secondary);
  font-size: 0.65rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 4px;
}

.card-name {
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  padding-right: 30px;
}

.card-hours {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
}
</style>