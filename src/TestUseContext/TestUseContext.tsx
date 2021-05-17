import Counter from './Counter';
import { Context, store } from './store';


export default function TestUseContext() {
    return (
      <Context.Provider value={store}>
        <Counter />
      </Context.Provider>
    )
  }