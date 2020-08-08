import React from 'react'

import { JSOForm } from 'jsoform'
// import 'jsoform/dist/index.css'

const App = () => {
  const [state, setState] = React.useState({
    myObj: {
      str1: '123',
      arr1: [1, 2, 3],
      num1: 123,
      bool1: true,
      bool2: false,
      obj1: {
        num2: 345,
        str2: 'cxb',
        obj2: {
          num3: 4545,
          arr2: ['a', 'as', 'vcv', 'cv']
        }
      }
    }
  })
  let onChange = function (mutateObj) {
    setState({ ...this.state, myObj: mutateObj })
  }
  let onClick = function () {
    alert(`Your new state: ${JSON.stringify(state)}`)
  }
  return (
    <div
      style={{
        width: '500px',
        flexGrow: 1,
        margin: '0 auto',
        position: 'relative'
      }}
    >
      <JSOForm depth={2} baseObj={state.myObj} onObjChange={onChange} />
      <button onClick={onClick}>Click me</button>
    </div>
  )
}

export default App
