// 기존 코드

// export default function Icon() {
//   return (
//     <div>
//       <h3>Icon</h3>
//       <span className="material-icons">delete</span>
//       <span className="material-icons">check_circle_outline</span>
//     </div>
//   );
// }



// 코드 개선해보기

import type { FC, CSSProperties } from "react";

export type IconProps = {
  name: string;
  style?: CSSProperties;
};

export const Icon: FC<IconProps> = (props) => {
  const { name, style } = props;
  return (
    <span className="material-icons" style={style}>{name}</span>
  );
};

// 부모가 전달해준 style 객체를 사용할 수 있도록 개선