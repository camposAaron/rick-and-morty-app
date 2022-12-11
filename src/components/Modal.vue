<script setup>
import { onMounted, ref } from 'vue'
const show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>

<template>
  <Transition name="bounce">
    <div v-if="show" class="modal-overlay " @click="$emit('close-modal')">
      <div class="modal inner" @click.stop>
        <div class="close" @click="$emit('close-modal')">x</div>
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000da;
}

.modal {
  display: flex;
  width: 30%;
  height: 500px;
  flex-direction: column;
  background-color: rgb(208, 211, 44);
  border-radius: 18px;
  box-shadow: 0px 0px 16px #2b2929;
  color: black;
}

.close {
  font-size: 24px;
  font-weight: bold;
  align-self: flex-end;
  margin-right: 20px;
}


.close:hover {
  cursor: pointer;
  transform: scale(1.1);
  color: rgb(12, 88, 12);
  transition: transform 200ms;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}


.bounce-enter-active .inner {
  animation: move 0.3s reverse;
}


@keyframes move {
  from {
    transform: translateY(0rem);
  }

  to {
    transform: translateY(-2rem);
  }
}

@keyframes bounce-in {

  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@media(max-width: 1000px) {
  .modal {
    width: 50%;
  }
}

@media(max-width: 800px) {
  .modal {
    width: 60%;
  }
}

@media(max-width: 600px) {
  .modal {
    width: 78%;
  }
}

@media(max-width: 400px) {
  .modal {
    width: 85%;
  }
}

@media(max-width: 290px) {
  .modal {
    width: 95%;
  }
}
</style>