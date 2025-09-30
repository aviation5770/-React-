import ArrowComponent from "./ArrowComponent"
import ClassComponent from "./ClassComponent"
import P from "./P"

export default function App () {
  const text = ['hello', 'would'].map((text, index) =>
    <p key={index} children={text} />
  )
  return <div children={text} />
}