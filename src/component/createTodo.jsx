import React, { Fragment, useEffect, useState } from 'react';
import './todo.css'
import { v4 as uuid } from "uuidv4";

function Task() {
  const [input, setInput] = useState('')
  const [tasklist, setTasklist] = useState([])
  useEffect(() => {
    let data = localStorage.getItem('task') || []
    
  })


  const handleAddTask = () => {
    let payload = {
      task: tasks,
      status: false,
      id:uuid()
    }
    let tasks = JSON.stringify(input)
    localStorage.setItem('task',tasks)
  }
  return (
    <Fragment>
      <div className='heading'>
        Todo
      </div>
      <div>
        <form onSubmit={handleAddTask}>
        <div>
          <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        </div>
        <div>
          <button type="submit">ADD</button>
        </div>
      </form>
      </div>

    </Fragment>
  )
}