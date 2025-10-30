// import { Icon } from "../components/Icon";

// export default function UsingIcon() {
//   return (
//     <div>
//       <h3>UsingIcon</h3>
//       <Icon name="home" />
//       <Icon name="check_circle_outline" />
//     </div>
//   );
// }

// 코드 개선

import { Icon } from "../components/Icon";
export default function UsingIcon() {
  return (
    <div>
      <h3>UsingIcon</h3>
      <Icon name="home" className="text-blue" />
      <Icon name="check_circle_outline" className="text-red" style={{fontSize:'50px'}} />
    </div>
  );
}