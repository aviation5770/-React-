import type { SyntheticEvent } from "react"

export default function EventListener() {
  const onDivClick = (e : SyntheticEvent) => console.log('click event on <div>')
  const onButtonClick = (e : SyntheticEvent) => {
    console.log('click event on <button>')
    e.stopPropagation()
  }
  return (
    <div onClick={onDivClick}>
      <p>stop Propagation</p>
      <button onClick={onButtonClick}>Click Me and stop event Propagation</button>
    </div>
  )
}