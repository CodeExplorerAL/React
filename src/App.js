import './App.css';
import styles from './App.module.css'; // 3. CSS 模組，需創建一個檔案App.module.css
import styled from 'styled-components'; // 4. CSS-in-JS，要安裝第三方庫，如npm install styled-components


// 2. 內聯樣式
const style = {
  color: 'green',
  marginLeft: '20px'
};

// 4. CSS-in-JS
// 定義一個名為 Title 的 styled component
const Title = styled.h1`
  color: blue;
  background-color: lightgray;
`;

function App() {
  return (
    <div className="App">
    {/* 1. 引用 CSS 文件，參檔案 App.css */}
      <h1 className="green">1. 引用 CSS 文件</h1>

    {/* 2. 內聯樣式 */}
    <div style={style}>2. 內聯樣式_引用變數</div>
    <div style={{ color: 'orange' }}>2. 內聯樣式</div>

    {/* 3. CSS 模組 */}
      <div className={styles.green}>
        <h1>3. CSS 模組</h1>
      </div>

    {/* 4. CSS-in-JS */}
    <Title>Hello, world!</Title>
    </div>

  );
}

export default App;
