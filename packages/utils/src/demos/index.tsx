import * as React from 'react';
import demo from '..';

const App: React.FC<unknown> = () =>
  // 针对请求接口，参考ahooks
  (
    <div>
      <p>8888888888转换为第二位到倒数第二位的脱敏展示</p>
      {demo.formatInfo('8888888888', 2, 2)}
    </div>
  );
export default App;
