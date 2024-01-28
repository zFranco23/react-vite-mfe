
import './App.css'
import NumberChanger from './components/number-changer'

function App() {


  return (
    <>
      

        <div>
          <p>Testing exposed component</p>
            <NumberChanger initialValue={50} />
        </div>
    </>
  )
}

export default App
