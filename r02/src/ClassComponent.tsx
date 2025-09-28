import { Component } from "react";

export type ClassComponentProps = {
  href : string,
  text : string
}

export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const href = this.props.href
    const text = this.props.text
    // const {href, text} = this.props; 로도 축약 가능

    return (
      <li>
        <a href={href}><p>{text}</p></a>
      </li>
    )
  }
}