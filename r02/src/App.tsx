import {Component} from "react"
import ClassComponent from "./ClassComponent"

export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent />
        <ClassComponent />
      </ul>
    )
  }
}