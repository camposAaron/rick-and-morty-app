<script >
import { RouterLink, RouterView } from 'vue-router'
import Title from './components/Title.vue'

export default {
  methods: {
    gotoHome() {
      this.$router.push({ path: '/' });
    }
  },
  components: {
    Title
  }
}

</script>

<template>
  <header>
    <div class="img-container">
      <img alt="Rick and Morty Logo" class="logo" src="@/assets/logo.jpg" width="80" height="80" @click="gotoHome()" />
    </div>

    <div class="wrapper">
      <Title msg="Rick and Morty app" />
    </div>
  </header>

  <RouterView />

</template>


<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 99px;

}

.img-container {
  width: 6rem;
  height: 6rem;
  border: none;
  cursor: pointer;
  padding: 2px;
  color: #fff;
  position: relative;
}


.img-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg,
      red, blue, deeppink, blue, red, blue, deeppink, blue);
  background-size: 800%;
  border-radius: 999px;
  filter: blur(8px);
  animation: glowing 20s linear infinite;
}

header {
  display: flex;
  justify-content: space-between;
  width: 48%;
  margin-bottom: 2rem;
  line-height: 1.5;
  max-height: 100vh;
}


@keyframes glowing {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 400% 0;
  }

  100% {
    background-position: 0 0;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@media (max-width: 1000px) {
  header {
    width: 80%;
  }
}

@media (max-width: 652px) {
  header {
    width: 90%;
  }
}

@media (max-width: 450px) {
  header {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-bottom: 0px;
  }

  .img-container{
    margin-bottom : 1.2rem;
  }
}
</style>
