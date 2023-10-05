import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import {increament,decreament} from './redux/slices/counter'

function App() {
  const count = useAppSelector((state) => state.counter)
const dispatch = useAppDispatch()
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Count is {count}</h1>
        <button onClick={()=> dispatch(increament())}>increament</button>
        <button onClick={()=> dispatch(decreament())}>decreament</button>
      </div>
   
    </>
  )
}

export default App
