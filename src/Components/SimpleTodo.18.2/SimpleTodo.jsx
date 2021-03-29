import React, { useState } from 'react'
import './style.css'


const data = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];


const SimpleTodo = () => {

  const onClick = (i) => {
    const newTasks = tasks;
    newTasks[i].completed = !newTasks[i].completed;
    setComplete([...newTasks]);
  }

  const [tasks, setComplete] = useState(data);

  return (
    <div className="simpleTodo">
      {tasks.map((t, index) => {
        return <div key={index}>
          {t.completed ? <span className="complete">{t.name}</span> : <span>{t.name}</span>}
          <span onClick={() => onClick(index)}>{t.completed ? ' \u2713' : ' \u2717'}</span>
        </div>
      })}
    </div>);
}

export default SimpleTodo