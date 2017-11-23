import React from 'react';
const List = (props) => { // we're using an arrow function and const variable type, a ES6 features
  const list = props.listItems.map((el, i)=>(
    <li key={i}><h2>{el}</h2></li>
  ));
  return (
    <div>
      <ul>
        {
          list // 这里是执行js方法
        }
      </ul>
    </div>
  )
};
export default List;
