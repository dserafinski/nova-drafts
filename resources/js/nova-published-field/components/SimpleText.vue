<template>
  <div class="simple-text">
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true
    }
  },
  computed: {
    text() {
      // Wyciągnij tekst przekazany z PHP
      return this.field.text || "Domyślny tekst";
    }
  }
};
</script>

<style scoped>
.simple-text {
  font-size: 16px;
  color: #333;
  text-align: left;
}
</style>
