# jsoform

> Generate an effortless form from any JS object and easily edit it. Supporting text field, array, nesting object,.. editing.

[![NPM](https://img.shields.io/npm/v/jsoform.svg)](https://www.npmjs.com/package/jsoform) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
* Just install it from NPM:
```bash
npm install --save jsoform
```

## Documentation
* Our main purpose is `formilizing` aka producing a editable form for a JS Objects as quickest as possible with least configuration needed.
* Let's assume our main object is
```js
{
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
```
  - Each key-value pair in our main object will be formilized into a Form Component with its Key as label and its Value as default value.
  - Currently, we support types of nested fields:
    - *Text*: formilized to a simple text input
    - *Checkbox/Switch*: formilized from a Boolean field. Its value has to be `true/false` to be formilized correctly
    - *Nested*: If this field is a child object, its children will be recursively formilizied. We do have a `depth` props to control how deep we recursive.
    - *Array/List*: formilized to a custom control which allow us to re-order/add/remove its elements. 
* Props:
  - `depth`: Default is 2. Nested depth to formilize starts with 0. Deeper nested children will be formilized as JSON string.
  - `baseObj`: Object to formilize. 
  - `onObjChange`: Handler for update our object

## Example

```jsx
import React, { Component } from 'react'

import JSOForm from 'jsoform'
const App = () => {
  const [state,setState] = React.useState({
    myObj: {
      "str1": "123",
      "arr1": [1,2,3],
      "num1": 123,
      "bool1": true,
      "bool2": false,
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
  //Just call this handler from anywhere you like
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

<img src="https://i.imgur.com/JeaHodf.png" width="480" height="680" />

## Wishlist
- Overriden class names via props to customize form styling.

## License

MIT © [nhonx](https://github.com/nhonx)
