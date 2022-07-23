<template>
  <div class="lk">
    {{ getUser }}
    132
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters(["getUser"]),
  },
});
</script>
