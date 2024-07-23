import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';  // 8. 表單提交

// 1. 變量
const nameVariable = 'You';

// 2. 函數調用
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
const user = {
  firstName: 'A',
  lastName: 'L'
};

// 3. 條件渲染
const isLoggedIn = true;

// 4. 列表渲染
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>{number}</li>
);

// 5. 邏輯運算符
const unreadMessages = ['React', 'Re: React', 'Re:Re: React'];

// 6. 屬性使用大括號
const title = 'Hello, World!';

// 7. 樣式和類名
const style = {
  backgroundColor: 'blue',
  color: 'white'
};
const isActive = true;
const className = isActive ? 'active' : 'inactive';

function App() {
  // 8. 表單提交
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + name);
    event.preventDefault();
  };

  return (
    <div>
      {/* 1. 變量 */}
      <h1>Hello, {nameVariable}!</h1>

      {/* 2. 函數調用 */}
      <h1>Hello, {formatName(user)}!</h1>

      {/* 3. 條件渲染 */}
      {isLoggedIn ? <h1>歡迎</h1> : <h1>登入</h1>}

      {/* 4. 列表渲染 */}
      <ul>{listItems}</ul>

      {/* 5. 邏輯運算符 */}
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }

      {/* 6. 屬性使用大括號 */}
      <h1 title={title}>Welcome</h1>

      {/* 7. 樣式和類名 */}
      <div>
        <h1 style={style}>Hello, World!</h1>
        <div className={className}>Content</div>
      </div>

      {/* 8. 表單提交 */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
