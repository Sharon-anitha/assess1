import React, {useState} from 'react';
import Navbar from './/Navbar';
import {  useNavigate } from 'react-router-dom'
import './Circle.css'
import './Navbar.css'
const Circle= () => {
  const navigate = useNavigate();
  const [circles, setCircles] = useState([{id: 1, count: 0, color: 'yellow' }]);

  const increaseCounter = (id) => {
    setCircles((prevCircles) =>
      prevCircles.map((circle) =>
        circle.id === id ? { ...circle, count: circle.count + 1, color: getRandomColor() } : circle
      )
    );
  };

  const duplicateCircle = (id) => {
    if (circles.length >= 10) {
      return;
    }
    const newCircle = { id: circles.length + 1, count: 0, color: 'yellow' };
    setCircles((prevCircles) => [...prevCircles, newCircle]);
  };

  const getRandomColor = () => {
    const colors = ['red', 'green', 'black','crimson','goldenrod','blue', 'orange', 'purple','pink'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
    <Navbar circle={circles.length}/>
    <div className="first">
    <div className="circle-container">
      {circles.map((circle) => (
        <div key={circle.id}>
          <div
            className="circle"
            style={{ backgroundColor: circle.color, width: '150px',height:'150px',borderRadius:'50%', paddingBottom: '10%' }}
          >
            <div className="count">{circle.count}</div>
            <div className="color">{circle.color}</div>
          </div>
          <button onClick={() => increaseCounter(circle.id)}>Increase Counter</button>
   
        </div>
      ))}
    
    </div>
   <div className="duplicate" ><button onClick={() => duplicateCircle(circles.length + 1) }>Duplicate Circle</button>
    <button  className="btn-default block" onClick={()=> navigate('/user/'+ circles.length)} >View Users</button>
          </div>
          </div>
          </>
  );
};

export default Circle;