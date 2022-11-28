// https://nuxt.com/docs/api/composables/use-state#usestate
export const layoutState = () => ({
  header: useState<string>('header', () => 'Nuxt3 Starter'),
  footer: useState<string>('footer', () => 'Recommend Editor : Vscode'),
})
