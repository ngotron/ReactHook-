import { useState } from "react";
import Content from "./component/Content";

function App() {
  const [mount, setMount] = useState(false);
  // Khi chưa bấm Click me thì count Content chưa được gọi là mount hay unmount 
  // Nó chỉ là một conponent chưa được hiển thị ra màn hình
  // mount là được hiển thị ra màn hình(Hay còn gọi là được thêm vào DOM)
  // unmount là không được hiển thị ra màn hình (Hay còn gọi là được loại bỏ ra khỏi DOM)
  return (
    <div className="App">
      <button onClick={() => { setMount(!mount) }}>Click me</button>
      {mount && <Content />}
    </div >
  );
}

export default App;
