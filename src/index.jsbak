import React from 'react'
import ReorderList from "./components/reorder-list";


export class JSOForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limitDepth: !isNaN(props.depth) ? parseInt(props.depth): 2,
      baseObj: this.props.baseObj,
    };
    this.onChange = this.onChange.bind(this);
  }
  mutateObj = (obj, patharr, value) => {
    var newObj = { ...obj };
    if (patharr.length == 1) {
      newObj[patharr[0]] = value;
      return newObj;
    } else {
      var subObj = this.mutateObj(obj[patharr[0]], patharr.slice(1), value);
      newObj[patharr[0]] = subObj;
      return newObj;
    }
  };
  customOnChange(path,fieldType,value){
    console.log(this.state.baseObj)
    var trace_eles = path.split(".");
    var stateObj = this.mutateObj(
      this.state.baseObj,
      trace_eles,
      value
    );
    console.log(stateObj);
    this.props.onObjChange(stateObj);
  }
  onChange(path, fieldType, event) {
    this.customOnChange(path,fieldType,event.target.value);
  }
  generateField = (
    label,
    defaultValue,
    fieldPath,
    fieldLevel,
    renderFieldType
  ) => {
    var fieldType = typeof defaultValue;
    if (fieldType !== "object") {
      return (
        <div className="field" key={fieldPath}>
          <label className="label">{label}:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={defaultValue}
              onChange={this.onChange.bind(null, fieldPath, renderFieldType)}
            ></input>
          </div>
        </div>
      );
    } else {
      if (defaultValue.length > 0) {
        if (typeof defaultValue[0] === "object") {
          return (
            <div className="field" key={fieldPath}>
              <label className="label">{label}:</label>
              <div className="control">
                <p>Unsupported Field</p>
              </div>
            </div>
          );
        }
        return (
          <div className="field" key={fieldPath}>
            <label className="label">{label}:</label>
            <div className="control">
              <ReorderList
                onListChanged = {(newValue) => this.customOnChange(fieldPath,renderFieldType,newValue.map(x => x.text))}
                orderList={defaultValue.map((e, i) => ({ id: i, text: e }))}
              ></ReorderList>
            </div>
          </div>
        );
      } else if (fieldLevel < this.state.limitDepth) {
        return (
          <div key={fieldPath}>
            <div className="field">
              <label className="label">{label}:</label>
            </div>
            <div className="box">
              {Object.keys(defaultValue).map((currentValue, key) => {
                var currentObj = defaultValue[currentValue];
                return this.generateField(
                  currentValue,
                  currentObj,
                  fieldPath + "." + currentValue,
                  fieldLevel + 1
                );
              })}
            </div>
          </div>
        );
      } else {
        return this.generateField(
          label,
          JSON.stringify(defaultValue),
          fieldPath,
          fieldLevel,
          "object"
        );
      }
    }
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.baseObj != this.props.baseObj) {
      this.setState({ ...this.state, baseObj: nextProps.baseObj });
    }
  }
  render() {
    if(!this.state.baseObj){
       return (<span>No form object detected</span>)
    }
    return (
      <div>
        {Object.keys(this.state.baseObj).map((currentValue, key) => {
          var currentObj = this.state.baseObj[currentValue];
          return this.generateField(currentValue, currentObj, currentValue, 0);
        })}
      </div>
    );
  }
}
