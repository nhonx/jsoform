import { css, jsx } from '@emotion/core'
export const  STYLE = css`
border: 1px solid #c6c6c6;
border-radius: 5px;
padding: 5px;
margin-bottom: 10px;
.rol-btn {
    align-items: center;
    border: 1px solid transparent;
    box-shadow: none;
    display: inline-flex;
    height: 2.25em;
    line-height: 1.5;
    position: relative;
    vertical-align: top;
    background-color: #fff;
    border-color: #dbdbdb;
    border-width: 1px;
    color: #363636;
    cursor: pointer;
    justify-content: center;
    padding-bottom: calc(.375em - 1px);
    padding-left: .75em;
    padding-right: .75em;
    padding-top: calc(.375em - 1px);
    text-align: center;
    white-space: nowrap;
    border-radius: 2px;
    font-size: .75rem;
}
.rol-tag {
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  margin-right: 5px;
  margin-bottom: 5px;
  text-align: center;
  .rol-btn-delete {
    height: 16px;
    max-height: 16px;
    max-width: 16px;
    min-height: 16px;
    min-width: 16px;
    width: 16px;
    background-color: rgba(10, 10, 10, 0.2);
    border: none;
    border-radius: 290486px;
    cursor: pointer;
    pointer-events: auto;
    display: inline-block;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 0;
    outline: 0;
    position: relative;
    vertical-align: top;
    margin-left: 1rem;
    &::after,
    &::before {
      background-color: #fff;
      content: '';
      display: block;
      left: 50%;
      position: absolute;
      top: 50%;
      -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      -webkit-transform-origin: center center;
      transform-origin: center center;
    }
    &::before {
      height: 50%;
      width: 2px;
    }
    &::after {
      width: 50%;
      height: 2px;
    }
  }
  &.bg-info {
    background-color: #209cee;
    color: #fff;
  }
  &.bg-success {
    background-color: #23d160;
    color: #fff;
  }
  &.focused {
    width: 80px;
  }
  &:hover {
    cursor: move;
  }
}
`