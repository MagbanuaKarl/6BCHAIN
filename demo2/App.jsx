// App.jsx

import './App.css'
import DemoOne from './component/conditionalDemoOne'
import DemoTwo from './component/conditionalDemoTwo'
import DemoThree from './component/conditionalDemoThree'
import DemoFour from './component/conditionalDemoFour'

function App() {

  return (
    <div>
      <h1>Demo 1</h1>
      <DemoOne />

      <h1>Demo 2</h1>
      <DemoTwo />

      <h1>Demo 3</h1>
      <DemoThree />

      <h1>Demo 4</h1>
      <DemoFour />
      
    </div>
  )
}

export default App
