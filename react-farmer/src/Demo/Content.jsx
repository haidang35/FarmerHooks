import axios from "axios";
import { useEffect } from "react";
import { useState, useRef } from "react";

const boxs = [
  {
    id: 1,
    color: "red",
    content: "Red",
  },
  {
    id: 2,
    color: "blue",
    content: "Blue",
  },
  {
    id: 3,
    color: "green",
    content: "Green",
  },
];

const menus = [
  {
    id: 1,
    name: "Red",
    boxId: 1,
  },
  {
    id: 2,
    name: "Blue",
    boxId: 2,
  },
  {
    id: 3,
    name: "Green",
    boxId: 3,
  },
];

const Content = () => {
  const titleRef = useRef();

  const boxRef = useRef([]);
  console.log("🚀 ~ file: Content.jsx ~ line 45 ~ Content ~ boxRef", boxRef)

  const handleClickMenu = (boxId) => {
    boxs.forEach((box, index) => {
      if(box.id === boxId) {
        const boxItemRef = boxRef.current[index];
        const position = boxItemRef.getBoundingClientRect();
        window.scrollTo(position.x, position.y)
      }
    })
  }

  return (
    <>
      <div>
        <h1 ref={titleRef}>Hello Content</h1>
        <ul>
          {menus.map((menu) => (
            <li key={menu.id} onClick={() => handleClickMenu(menu.boxId)}>
              {menu.name}
            </li>
          ))}
        </ul>

        {/* {boxs.map((box) => (
          <div
            ref={(ref) => boxRef.current.push(ref)}
            key={box.id}
            style={{
              width: "500px",
              height: "500px",
              backgroundColor: box.color,
              marginBottom: "2rem",
              color: "#ffff",
              textAlign: "center",
            }}
          >
            {box.content}
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Content;
