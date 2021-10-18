export enum WrapperTypes {
  main = 'main',
  footer = 'footer',
  header = 'header',
  section = 'section',
  article = 'article',
  div = 'div',
}

export const WrapperType = {
  [WrapperTypes.main]: 'main',
  [WrapperTypes.footer]: 'footer',
  [WrapperTypes.header]: 'header',
  [WrapperTypes.section]: 'section',
  [WrapperTypes.article]: 'article',
  [WrapperTypes.div]: 'div',
} as const;
