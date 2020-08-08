/** @jsx jsx */
import React from 'react'
import ReorderList from './components/reorder-list'
import { css, jsx } from '@emotion/core'
import { JSOSTYLE } from './style'
export class JSOForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      limitDepth: !isNaN(props.depth) ? parseInt(props.depth) : 2,
      baseObj: this.props.baseObj
    }
    this.onChange = this.onChange.bind(this)
  }
  mutateObj = (obj, patharr, value) => {
    var newObj = { ...obj }
    if (patharr.length == 1) {
      newObj[patharr[0]] = value
      return newObj
    } else {
      var subObj = this.mutateObj(obj[patharr[0]], patharr.slice(1), value)
      newObj[patharr[0]] = subObj
      return newObj
    }
  }
  customOnChange(path, fieldType, value) {
    console.log(this.state.baseObj)
    var trace_eles = path.split('.')
    var stateObj = this.mutateObj(this.state.baseObj, trace_eles, value)
    console.log(stateObj)
    this.props.onObjChange(stateObj)
  }
  onChange(path, fieldType, event) {
    let value = event.target.value
    if (event.target.name === 'checkbox') {
      value = event.target.checked
    }
    this.customOnChange(path, fieldType, value)
  }
  generateField = (
    label,
    defaultValue,
    fieldPath,
    fieldLevel,
    renderFieldType
  ) => {
    var fieldType = typeof defaultValue
    if (fieldType !== 'object') {
      if (fieldType == 'boolean') {
        return (
          <div className='jsofield' key={fieldPath}>
            {/* <label className='jsolabel'>
              {label}
              <input
                className='jsocheckbox'
                name='checkbox'
                type='checkbox'
                checked={defaultValue}
                onChange={this.onChange.bind(null, fieldPath, renderFieldType)}
              ></input>
            </label> */}
            <label className='toggle'>
              <span className='toggle-label'>{label}</span>
              <input
                className='toggle-checkbox'
                type='checkbox'
                name='checkbox'
                checked={defaultValue}
                onChange={this.onChange.bind(null, fieldPath, renderFieldType)}
              />
              <div className='toggle-switch'></div>
            </label>
          </div>
        )
      } else {
        return (
          <div className='jsofield' key={fieldPath}>
            <label className='jsolabel'>{label}:</label>
            <div className='jsocontrol'>
              <input
                className='jsoinput'
                type='text'
                value={defaultValue}
                onChange={this.onChange.bind(null, fieldPath, renderFieldType)}
              ></input>
            </div>
          </div>
        )
      }
    } else {
      if (defaultValue.length > 0) {
        if (typeof defaultValue[0] === 'object') {
          return (
            <div className='jsofield' key={fieldPath}>
              <label className='jsolabel'>{label}:</label>
              <div className='jsocontrol'>
                <p>Unsupported Field</p>
              </div>
            </div>
          )
        }
        return (
          <div className='jsofield' key={fieldPath}>
            <label className='jsolabel'>{label}:</label>
            <div className='jsocontrol'>
              <ReorderList
                onListChanged={(newValue) =>
                  this.customOnChange(
                    fieldPath,
                    renderFieldType,
                    newValue.map((x) => x.text)
                  )
                }
                orderList={defaultValue.map((e, i) => ({ id: i, text: e }))}
              ></ReorderList>
            </div>
          </div>
        )
      } else if (fieldLevel < this.state.limitDepth) {
        return (
          <div key={fieldPath}>
            <div className='jsofield'>
              <label className='jsolabel'>{label}:</label>
            </div>
            <div className='jsobox'>
              {Object.keys(defaultValue).map((currentValue, key) => {
                var currentObj = defaultValue[currentValue]
                return this.generateField(
                  currentValue,
                  currentObj,
                  fieldPath + '.' + currentValue,
                  fieldLevel + 1
                )
              })}
            </div>
          </div>
        )
      } else {
        return this.generateField(
          label,
          JSON.stringify(defaultValue),
          fieldPath,
          fieldLevel,
          'object'
        )
      }
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.baseObj != this.props.baseObj) {
      this.setState({ ...this.state, baseObj: nextProps.baseObj })
    }
  }
  render() {
    if (!this.state.baseObj) {
      return <span>No form object detected</span>
    }
    return (
      <div css={JSOSTYLE}>
        {Object.keys(this.state.baseObj).map((currentValue, key) => {
          var currentObj = this.state.baseObj[currentValue]
          return this.generateField(currentValue, currentObj, currentValue, 0)
        })}
      </div>
    )
  }
}
