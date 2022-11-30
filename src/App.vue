<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink :to="{ name: 'courseOne' }">
          CourseOne
        </RouterLink>
        <RouterLink :to="{ name: 'courseTwo' }">
          CourseTwo
        </RouterLink>
        <RouterLink :to="{ name: 'courseThree' }">
          CourseThree
        </RouterLink>
        <RouterLink :to="{ name: 'courseFour' }">
          CourseFour
        </RouterLink>
        <RouterLink :to="{ name: 'courseFive' }">
          CourseFive
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView p-30px />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

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

@media (min-width: 1024px) {
  header {
    place-items: center;
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
</style>
