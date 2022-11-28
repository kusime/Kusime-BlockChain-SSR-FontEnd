# Nuxt Starter

## Technically Supported

1. Pinia Supported
2. Nuxt3 Supported
3. Tailwind Supported
4. Vuetify Supported
5. DarkMode/LightMode Supported
6. I18N Supported
7. Eslint Supported

# About the DarkMode/LightMode

```vue
<script setup>
const colorMode = useColorMode()
colorMode.preference = 'dark'
console.log(colorMode.preference)
</script>
```

useColorMode() will return the current color mode state, and use preference to change the color mode

I have set up with the tailwind so , when

colorMode.preference set to 'light' or 'dark' will make a effect with the light mode

by the way , since we also integrate the vuetify
and just simply pass the preference value to the
v-app theme is ready to go ,to control the theme

# About the Vuetify

this start project is integrate the [Vuetify3](https://next.vuetifyjs.com/en/) .

# About the I18N

```vue
<script setup>
const { locale } = useI18n()

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="fr">fr</option>
      </select>
      // the welcome key is defined in the nuxt.config.ts
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>
</template>
</script>
```

https://v8.i18n.nuxtjs.org/getting-started/setup
