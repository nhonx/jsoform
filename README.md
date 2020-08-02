# jsoform

> Generate an Bulma-used form from any JS object and easily edit it. Supporting text field, array, nesting object,.. editing.

[![NPM](https://img.shields.io/npm/v/jsoform.svg)](https://www.npmjs.com/package/jsoform) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
* Currently, this plugin's available for Bulma-styled site only, as I could reduce efforts on styling forms components.
* You need to preload Bulma CSS from CDN/Static files first.
```bash
npm install --save jsoform
```

## Usage
* Our main purpose is `formilizing` aka producing a editable form for a JS Objects as quickest as possible with least configuration needed.
* Props:
  - `depth`: Default is 2. Nested depth to formilize starts with 0. Deeper nested children will be formilized as JSON string.
  - `baseObj`: Object to formilize.
  - `onObjChange`: Handler for update our object
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
  return <JSOForm depth={2} baseObj={state.myObj} onObjChange={onChange} />
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
