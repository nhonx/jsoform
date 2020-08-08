import { css, jsx } from '@emotion/core'
export const JSOSTYLE = css`
  * {
    box-sizing: inherit;
  }
  .jsofield {
    margin-bottom: 0.75rem;
    .jsolabel {
      color: #363636;
      display: block;
      font-size: 1rem;
      font-weight: 700;
      margin-bottom: 0.5em;
    }
    .toggle {
      cursor: pointer;
      display: inline-block;
    }
    .toggle-switch {
      display: inline-block;
      background: #ccc;
      border-radius: 16px;
      width: 58px;
      height: 32px;
      position: relative;
      vertical-align: middle;
      transition: background 0.25s;
      &:before,
      &:after {
        content: '';
      }
      &:before {
        display: block;
        background: linear-gradient(to bottom, #fff 0%, #eee 100%);
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        width: 24px;
        height: 24px;
        position: absolute;
        top: 4px;
        left: 4px;
        transition: left 0.25s;
      }
    }
    .toggle-checkbox:checked + .toggle-switch {
      background: #56c080;
      &:before {
        left: 30px;
      }
    }
    .toggle-checkbox {
      position: absolute;
      visibility: hidden;
    }
    .toggle-label {
      margin-left: 5px;
      position: relative;
      top: 2px;
      margin-right: 10px;
    }
    .jsocheckbox {
      margin-left: 5px;
    }
    .jsocontrol {
      box-sizing: border-box;
      clear: both;
      font-size: 1rem;
      position: relative;
      text-align: left;
      .jsoinput {
        align-items: center;
        border: 1px solid transparent;
        display: inline-flex;
        font-size: 1rem;
        height: 2.25em;
        justify-content: flex-start;
        line-height: 1.5;
        padding-bottom: calc(0.375em - 1px);
        padding-left: calc(0.625em - 1px);
        padding-right: calc(0.625em - 1px);
        padding-top: calc(0.375em - 1px);
        position: relative;
        vertical-align: top;
        background-color: #fff;
        border-color: #dbdbdb;
        border-radius: 4px;
        color: #363636;
        box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
        max-width: 100%;
        width: 100%;
      }
    }
  }
  .jsobox {
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    display: block;
    padding: 1.25rem;
  }
`
