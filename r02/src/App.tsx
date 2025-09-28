import {Component} from "react"
import ClassComponent from "./ClassComponent"

export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent href="https://www.google.com" text="Go to google" />
        <ClassComponent href="https://www.naver.com" text="Go to naver"/>
      </ul>
    )
  }
}