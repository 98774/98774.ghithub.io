<template>
  <div class="container">
    <h1>About</h1>
    <div class="button-group">
      <button
        v-for="(name, index) in headingNames"
        :key="index"
        @click="currentDetail = index"
        :class="{ active: currentDetail === index }"
      >
        {{ name }}
      </button>
    </div>
    <div class="detail-container">
      <transition name="fade">
        <div v-if="currentDetail !== null" class="detail">
          <p v-html="details[currentDetail]"></p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      currentDetail: 0,
      headingNames: ['Overview', 'Beyond Computers', 'Coursework'],
      details: [
        `<p>In May 2023, I graduated with a Bachelor's degree in Computer Engineering from Purdue University. I really enjoy working  at the boundary between hardware and software to create custom platforms. I have a background in Linux, specifically building Linux for embedded systems. I enjoy the challenge of connecting software with hardware and designing systems for custom purposes.</p>
        <p>On the other side of the spectrum, I enjoy web development. I have been using JavaScript for many years and more recently began using frameworks, specifically Vue.js. This site was built with <a href='https://vuejs.org/'>Vue.js</a> so go check it out! Beyond the front-end, I enjoy server configuration and database management. I designed a scheduling management program for school districts. To learn more about that, visit our <a href='https://feljon.org/'>website</a>.</p>
        <p>Right now I am serving as a year-long volunteer with <a href='https://mds.org/'>Mennonite Disaster Service</a>. You can read more about that experience <a href='https://katieandjonathon-mds.blogspot.com/'>here</a>.</p>`,

        `<p>When I'm not working on personal projects, I love getting outside. Rock climbing is my favorite outdoor activity, but I also enjoy hiking and backpacking. I live in Princeton, NJ with my wife Katie. Since getting married in 2022, we have taken turns finishing up school. Now we are looking for our next adventure!</p>`,

        `<p>During my time in college, I took a lot of interesting classes! Here are some of the highlights:</p>
        <ul>
          <li>Introduction to Compilers (ECE 46800) — Implemented a compiler for micro C using Java</li>
          <li>Cybersecurity (ECE 40400) — Fundamentals of encryption algorithms and security practices</li>
          <li>Introduction to AI (ECE 47300) — Architecting neural networks and understanding AI fundamentals</li>
          <li>Real Analysis (MA 34100) — Analysis of real numbers (up to calculus)</li>
          <li>Applied Algorithms (ECE 59500) — Survey of various algorithms and their applications</li>
        </ul>`
      ]
    }
  }
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--content-max-width);
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* Increased spacing between buttons */
  margin-bottom: 2rem;
  flex-wrap: wrap; /* Ensures buttons wrap on smaller screens */
  margin-top: 2rem;
}

button {
  background-color: var(--dark-grey); /* Darker shade of green */
  color: var(--light-grey);
  border: 2px solid var(--grey);
  border-radius: var(--default-border-radius);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition:
    transform 0.2s,
    background-color 0.3s;
}

button:hover {
  background-color: var(--highlight-background);
  color: var(--highlight-color);
  transform: scale(1.05);
}

button.active {
  background-color: var(--accent-color-1); /* Active button color */
  color: white;
  transform: scale(1.1);
}

.detail-container {
  width: 100%;
  padding-left: 2%;
  padding-right: 2%;
  border-radius: var(--default-border-radius);
  background-color: var(--default-panel-background);
  text-align: left;
}

.detail p,
.detail li {
  line-height: 1.6;
  color: var(--accent-color-2);
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
