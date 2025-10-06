import type { ChangeEvent } from "react"

export default function Onchange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    e.preventDefault()
    console.log('onChangeValue', e.target.value)
  }
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeChecked', e.target.checked)
  }
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    console.log('onChangeFiles', e.target.files)
  }

  return (
    <div><p>OnChange</p>
      <input type="text" onChange={onChangeValue} defaultValue='Hello'/>
      <input type="checkbox" onChange={onChangeChecked} defaultChecked />
      <input type="file" onChange={onChangeFiles} multiple accept="image/*" />
      {/* 파일 선택 화면에서 cmd + click으로 여러 파일 선택 가능 and 그림 파일만 선택 가능 */}
    </div>
  )
}