import { Suspense, lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundary from './ErrorBoundary'


// eslint-disable-next-line
const NumberChanger = lazy(() => import('remote-app/number-changer'),)


function App() {
  const [count, setCount] = useState(0)

  // console.log(_webpack_.require);

  // @ts-ignore
  // console.log(__webpack_require__.s);
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


        <ErrorBoundary errorFallback={<div>Error loading component</div>}>
          <Suspense fallback={<div>Loading</div>} >
            <NumberChanger initialValue={count} />
          </Suspense>
        </ErrorBoundary>
    </>
  )
}

export default App
