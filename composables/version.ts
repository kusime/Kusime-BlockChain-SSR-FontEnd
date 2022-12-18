// https://nuxt.com/docs/api/composables/use-state#usestate
export const useStateLayout = () => ({
  version: useState<string>('version', () => 'Ver 1.0'),
})
