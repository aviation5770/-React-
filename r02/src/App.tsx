import ArrowComponent from "./ArrowComponent"
import ClassComponent from "./ClassComponent"

export default function App () {
    return (
      <ul>
        <ClassComponent href="https://www.google.com" text="Go to google" />
        <ArrowComponent href="https://www.naver.com" text="Go to naver"/>
      </ul>
    )
}