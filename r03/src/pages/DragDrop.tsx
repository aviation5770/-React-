import type { DragEvent } from "react"

export default function DragDrop() {
  const onDragStart = (e: DragEvent<HTMLElement>) =>
    console.log('onDragStart', e.dataTransfer)
  
  const onDragEnd = (e: DragEvent<HTMLElement>) =>
    console.log('onDragEnd', e.dataTransfer)
  
  const onDragOver = (e: DragEvent) =>
    e.preventDefault()
  
  const onDrop = (e: DragEvent) => {
    e.preventDefault()
    console.log('onDrop', e.dataTransfer) // 파일을 드롭했을때 새 창이 열리지 않게 하는 용도(필수x)
  }
  return (
    <div>
      <p>DragDrop</p>
      <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <h1>Drag Me</h1>
      </div>
      <div draggable onDragOver={onDragOver} onDrop={onDrop}>
        <h1>Drag over Me</h1>
      </div>
    </div>
  )
}