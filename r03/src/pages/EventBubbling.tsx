import type { SyntheticEvent } from "react";

export default function EventBubbling() {
  const onDivClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles, currentTarget } = e;
    console.log("click event on <div>", isTrusted, target, bubbles, currentTarget);
  };

  const onButtonClick = (e: SyntheticEvent) => {
    const { isTrusted, target, bubbles, currentTarget } = e;
    console.log("click event on <button>", isTrusted, target, bubbles, currentTarget);
  };

  return (
    <div onClick={onDivClick}>
      <p>EventBubbling</p>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
}

// 이벤트 버블링으로 인해 발생하는 문제 -> 기술적 현상으로 propagation으로 해결해야 한다.
// 이벤트 버블링 현상을 잘 이용한 프로그래밍 기법은 '이벤트 위임' 이라고 한다.