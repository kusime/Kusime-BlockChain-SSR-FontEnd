// https://nuxt.com/docs/api/composables/use-state#usestate
export const useStateLayout = () => ({
  header: useState<string>('header', () => 'Nuxt3 Starter'),
  footer: useState<string>('footer', () => 'Recommend Editor : Vscode'),
})
