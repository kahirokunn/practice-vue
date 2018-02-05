<template>
<transition name="fade">
  <div v-show="$store.state.isLoading" id="filter">
    <img src="img/loader/spinning-circles.svg">
  </div>
</transition>
</template>

<style>
.fade-enter-active {}

.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>

<style scoped>
#filter {
  background-color: #c4e3f3;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  display: flex;
}

#filter>img {
  display: block;
  margin: auto;
  width: 50px
}
</style>

<script>
export default {
  data: () => ({
    isLoading: true
  }),
  methods: {
    startLoading() {
      this.$store.state.isLoading = true
      setTimeout(() => {
        this.$store.state.isLoading = false;
      }, 1000)
    }
  }
}
</script>
