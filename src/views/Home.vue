<template>
  <div>
    <button @click="toggleModal">Open</button>

    <transition name="fade">
      <div v-if="isOpen" class="modal">
        <button @click="toggleModal">Close</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style scoped>
.modal {
  width: 200px;
  height: 200px;
  background: #eee;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: .5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
