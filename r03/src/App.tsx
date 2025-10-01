// import EventListener from './pages/EventListener'
// import OnClick from './pages/OnClick'
// import ReactOnClick from './pages/ReactOnClick'
// import DispatchEvent from './pages/DispatchEvent'
// 콘솔에 불필요한 메세지 출력 방지

import EventBubbling from './pages/EventBubbling'
import StopPropagation from './pages/StopPropagation'
import VariousInputs from './pages/VariousInputs'
import OnChange from './pages/Onchange'
import FileInput from './pages/FileInput'
import DragDrop from './pages/DragDrop'
import FileDrop from './pages/FileDrop'

function App() {
  return (
    <div>
      <FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      {/* <DispatchEvent />
      <ReactOnClick />
      <OnClick />
      <EventListener /> */}
    </div>
  )
}

export default App
