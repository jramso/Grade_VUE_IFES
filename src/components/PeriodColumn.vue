<template>
  <div
    class="period-column"
    @dragover.prevent
    @dragenter.prevent
    @drop="$emit('drop', period.id)"
  >
    <h2>{{ period.name }}</h2>
    <div class="cards-container">
      <SubjectCard
        v-for="subject in period.subjects"
        :key="subject.id"
        :subject="subject"
        @dragStart="$emit('dragStart', $event)"
        @toggleStatus="$emit('toggleStatus', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import SubjectCard from './SubjectCard.vue';

defineProps({
  period: {
    type: Object,
    required: true,
  },
});

defineEmits(['drop', 'dragStart', 'toggleStatus']);
</script>