<script setup lang="ts">
const { to } = defineProps({
  to: {
    type: String,
    description: 'link to go',
  },
})
</script>

<template>
  <NuxtLink :style="{ '--clr': randomColor() }" class="px-5 py-3" :to="to">
    <i></i>
    <span class="rainbow-text">
      <slot />
    </span>
  </NuxtLink>
</template>

<style scoped>
a {
  /*alignment: center;*/
  position: relative;
  background: #27282c56;
  color: #fff;
  text-decoration: none;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
  border: 3px solid rgb(68, 68, 68);
  font-weight: 600;
  margin: 4px auto;
  box-sizing: border-box;
  border-radius: 20px;
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  overflow: hidden;
}

a:hover {
  letter-spacing: 0.25em;
  border-color: var(--clr);
  color: var(--clr);
  box-shadow: 0 0 35px var(--clr);
}

a::before {
  content: '';
  position: absolute;
  inset: 2px;
}

s span {
  position: relative;
  z-index: 2;
  color: white;
}

a i {
  position: absolute;
  inset: 0;
  display: block;
}

a i::before {
  content: '';
  position: absolute;
  top: -6px;
  left: 80%;
  width: 10px;
  height: 5px;
  border: 2px solid var(--clr);
  background: #27282c;
  transform: translateX(-50%);
  transition: 0.5s;
}

a:hover i::before {
  width: 20px;
  left: 20%;
}

a i::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 20%;
  width: 10px;
  height: 5px;
  border: 2px solid var(--clr);
  background: #27282c;
  transform: translateX(-50%);
  transition: 0.5s;
}

a:hover i::after {
  width: 20px;
  left: 80%;
}

@keyframes hue {
  from {
    filter: hue-rotate(0);
  }

  to {
    filter: hue-rotate(-360deg);
  }
}

.rainbow-text {
  display: inline-block;
  position: relative;
  color: transparent;
  animation: hue 1.5s linear infinite;
  background-image: linear-gradient(
    to right bottom,
    rgb(255, 0, 0),
    rgb(255, 128, 0),
    rgb(255, 255, 0),
    rgb(0, 255, 0),
    rgb(0, 255, 128),
    rgb(0, 255, 255),
    rgb(0, 128, 255),
    rgb(0, 0, 255),
    rgb(128, 0, 255),
    rgb(255, 0, 255),
    rgb(255, 0, 128)
  );
  -webkit-background-clip: text;
}
</style>
