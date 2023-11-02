import './styles.css';
import React, { useState } from 'react';

const initList = () => {
  return Array.from({ length: 200 }, (_el, index) => ({
    value: Math.random(),
    label: `row ${index + 1}`,
  }));
};

export default function App() {
  const [list] = useState(initList());
  //const [list, setList] = useState(() => initList());
  const handleUpdate = () => {
    list[0].value = Math.random();
    /*
    setList((prev) =>
      prev.map((item, index) => {
        if (index === 0) {
          return { ...item, value: Math.random() };
        }
        return item;
      })
    );
     */
  };
  return (
    <div className="App">
      <h1>List All</h1>
      <Button onClick={handleUpdate}>Update row 1</Button>
      {list.map(({ label, value }) => (
        <Row label={label} key={label} value={value}></Row>
      ))}
    </div>
  );
}

function Button(props) {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
}

function Row(props) {
  const { label, value } = props;
  return (
    <div style={{ marginTop: '8px' }}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

// const Row = memo(function (props) {
//   const { label, value } = props;
//   return (
//     <div style={{ marginTop: "8px" }}>
//       <span>{label}</span>
//       <span>{value}</span>
//     </div>
//   );
// });
