import BootStrap from './pages/Bootstrap';
import Icon from './pages/Icon';
import Style from './pages/Style';
import UsingIcon from './pages/UsingIcon';
import UsingIconWithCSSClass from './pages/UsingIconWithCSSClass';

function App() {
  return (
    <div>
      <UsingIconWithCSSClass />
      <UsingIcon />
      <Style />
      <Icon />
      <BootStrap />
      <button className="btn btn-primary">TEST</button>

      {/* CSS 기본구문 실습 */}
      <div>
        <div className="box">box</div> {/* class는 JS 예약어이므로 충돌을 피하기 위해 Name을 붙혀 사용 */}
          <button className="btn">Click me!</button>
          <div className="outer">
          <div className="inner">Hello CSS</div>
        </div>
      </div>
    </div>
  );
}

export default App;