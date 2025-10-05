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

// 이벤트 버블링은 기술적 현상 -> 이를 방지하기 위해 사용하는 방식이 이벤트 전파 막기