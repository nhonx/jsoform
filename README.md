# jsoform

> Generate an Bulma-used form from any JS object and easily edit it. Supporting text field, array, nesting object,.. editing.

[![NPM](https://img.shields.io/npm/v/jsoform.svg)](https://www.npmjs.com/package/jsoform) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
* Requiring Bulma for styling
```bash
npm install --save jsoform
```

## Usage

```jsx
import React, { Component } from 'react'

import JSOForm from 'jsoform'
const App = () => {
  const [state,setState] = React.useState({
    myObj: {
      "str1": "123",
      "arr1": [1,2,3],
      "num1": 123,
      "obj1":{
        "num2":345,
        "str2":"cxb",
        "obj2":{
          "num3":4545,
          "arr2":["a","as","vcv","cv"]
        }
      }
      
    }
  });
  let onChange = function(mutateObj){
    setState({...this.state, myObj: mutateObj});
  }
  return <JSOForm  baseObj={state.myObj} onObjChange={onChange} />
}
class Example extends Component {
  render() {
    return <App />
  }
}
```
Result:

![Image](https://i.imgur.com/iE8Cvdu.png "Result")

## License

MIT © [nhonx](https://github.com/nhonx)
