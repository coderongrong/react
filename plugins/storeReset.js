import { cloneDeep } from 'lodash'

export default function storeReset({ store }) {
  const initialState = cloneDeep(store.$state)
  store.$reset = () => store.$patch(cloneDeep(initialState))
  store.$abc = () => store.$patch(cloneDeep(initialState))
}
