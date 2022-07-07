import { Flux } from 'sav-flux'

// ES5
const flux = new (Flux as any)({
  strict: true
})

declare global {
  interface Window {
    flux: object
  }
}

window.flux = flux

flux.use(({ prop }: any) => {
  prop('bootstrap', (config: object) => {
    prop('config', config)
  })
})

export default flux
