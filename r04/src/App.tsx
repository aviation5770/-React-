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
        <div className="box">box</div> {/* class는 JS 예약어이므로 충돌을 피하기 위해 Name사용 */}
          <button className="btn">Click me!</button>
          <div className="outer">
          <div className="inner">Hello CSS</div>
        </div>
      </div>

      <div className="form-group">
        {/* htmlFor 속성이 (↓) */}
        <label htmlFor="username" className="label">사용자 이름</label> {/* for은 JS 예약어이므로 충돌을 피하기 위해 htmlFor로 변경 */}

        {/* input의 id(↓)와 연결됨 */}
        <input id="username" type="text" className="input" placeholder="이름을 입력하세요" />
      </div>
    </div>
  );
}

export default App;