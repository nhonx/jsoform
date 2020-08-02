// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React, { Component, Fragment } from 'react'
import { css, jsx } from '@emotion/core'
import {STYLE} from './style'
class ReorderList extends Component {
  constructor(props) {
    super(props)
    let orderList = this.props.orderList || []
    this.state = {
      orderList: orderList,
      currentDraggingItemId: '-1',
      keyFieldName: this.props.keyFieldName || 'id',
      displayFieldName: this.props.displayFieldName || 'text',
      onListChanged: this.props.onListChanged,
      onItemClick: this.props.onItemClick
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ orderList: nextProps.orderList })
  }
  onDragStart = (event, id) => {
    this.setState({ currentDraggingItemId: id })
  }
  onDragStop = (event) => {}
  onDragLeave = (event, id) => {
    this.unsetFocus(id)
  }
  onDragEnter = (event, id) => {
    if (id === this.state.currentDraggingItemId) {
      return
    }
    this.setFocus(id)
  }
  onDragOver = (event) => {
    event.stopPropagation()
    event.preventDefault()
  }
  onDrop = (event, id) => {
    this.swapList(this.state.currentDraggingItemId, id)
  }
  setFocus = (id) => {
    let orderedList = this.state.orderList.map((currentItem, i) => {
      return currentItem[this.state.keyFieldName] === id
        ? { ...currentItem, focus: true }
        : currentItem
    })
    //this.state.onListChanged && this.state.onListChanged(orderedList);
    this.setState({ orderList: orderedList })
  }
  unsetFocus = (id) => {
    let orderedList = this.state.orderList.map((currentItem, i) => {
      return currentItem[this.state.keyFieldName] === id
        ? { ...currentItem, focus: false }
        : currentItem
    })
    //this.state.onListChanged && this.state.onListChanged(orderedList);
    this.setState({ orderList: orderedList })
  }
  swapList = (srcId, destId) => {
    let orderedList = [...this.state.orderList]
    orderedList[destId] = this.state.orderList[srcId]
    orderedList[srcId] = this.state.orderList[destId]
    this.state.onListChanged && this.state.onListChanged(orderedList)
  }
  itemClick = (event, srcId) => {
    this.state.onItemClick && this.state.onItemClick(srcId)
  }
  itemRemove = (event, srcId) => {
    let orderedList = this.state.orderList.filter((x) => x.id !== srcId)
    this.state.onListChanged && this.state.onListChanged(orderedList)
  }
  addItem = () => {
    let newItem = prompt('New array element:')
    if (newItem) {
      let orderedList = [...this.state.orderList]
      orderedList.push({ id: orderedList.length, text: newItem })
      this.state.onListChanged && this.state.onListChanged(orderedList)
    }
  }
  render() {
    if (this.state.orderList && this.state.orderList.length > 0) {
      return (
        <div css={STYLE}>
          {this.state.orderList.map((currentItem, i) => {
            return (
              <Fragment key={i}>
                <span
                  draggable
                  onDragStart={(e) =>
                    this.onDragStart(e, currentItem[this.state.keyFieldName])
                  }
                  onDragEnd={(e) => this.onDragStop(e)}
                  onDragOver={(e) => this.onDragOver(e)}
                  onDragEnter={(e) =>
                    this.onDragEnter(e, currentItem[this.state.keyFieldName])
                  }
                  onDragLeave={(e) =>
                    this.onDragLeave(e, currentItem[this.state.keyFieldName])
                  }
                  onDrop={(e) =>
                    this.onDrop(e, currentItem[this.state.keyFieldName])
                  }
                  onClick={(e) =>
                    this.itemClick(e, currentItem[this.state.keyFieldName])
                  }
                  className={`rol-tag ${
                    currentItem.focus ? `bg-success` : `bg-info`
                  }`}
                  key={i}
                >
                  {currentItem[this.state.displayFieldName]}
                  <button
                    className={`rol-btn-delete`}
                    onClick={(e) =>
                      this.itemRemove(e, currentItem[this.state.keyFieldName])
                    }
                  ></button>
                </span>
              </Fragment>
            )
          })}
          <button className="rol-btn" onClick={this.addItem}>+</button>
        </div>
      )
    } else {
      return null
    }
  }
}
export default ReorderList
