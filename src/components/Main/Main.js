
import { useState } from 'react';
import './Main.css';

import deleteIcon from './assets/delete.png'
import editIcon from './assets/edit.png'



function Main() {


  let [tasks,setTasks] = useState([])
  let [addTaskButton,setAddTaskButton] = useState(true)

  let [taskText,setTaskText] = useState('')

  let [editStatus,setEditStatus] = useState(false)
  let [editItem,setEditItem] = useState(null)
  let [editText,setEditText] = useState();

  const styleSheet = {
    "botton":{backgroundColor:"black",color:"white",border:"1px solid black",borderRadius:"7px",padding:"10px",margin:"10px",fontWeight:"1",fontSize:"16px"},
    "textArea":{height:"100px",width:"200px",padding:"20px",borderRadius:"10px",fontSize:"14px"}
  }
  return (
    <div className="App">
      <h3>To Do app</h3>
      <div className='contentDiv' style={{display:"flex",justifyContent:"space-around"}}>
        <div>
          {
            tasks.length == 0 ?
            <div>
              <p style={{fontSize:"20px",fontWeight:"1",fontFamily:"monospace"}}>No tasks set yet!</p>
              {
                addTaskButton ?
                <div>
                  <textarea value={taskText} onChange={(event)=>{setTaskText(event.target.value)}} style={styleSheet.textArea}/>
                  <br/>

                  <button onClick={
                    (event)=>{
                      event.preventDefault();
                      setTasks(prevData=>([...prevData,taskText]));
                      setTaskText('');
                      setAddTaskButton(false);
                              }
                    } style={styleSheet.botton}
                    >Set task</button>

                </div>
                :
                <div>
                  <button style={styleSheet.botton}    onClick={(event)=>{event.preventDefault();setAddTaskButton(true)}}   >Add task</button>
                </div>
              }
            </div>
            :
            <div>
              {
                tasks.map((task,idx)=>{
                  task = task.trim()
                  if(task)
                  {
                    return <div className='taskText'>
                              <div style={{margin:"10px"}}>{task}</div>

                              <div>
                                {
                                  editStatus && (idx==editItem) ?
                                  <div>
                                    <textarea  style={styleSheet.textArea}  value={editText} onChange={(event)=>{setEditText(event.target.value)}}></textarea>
                                    <button style={styleSheet.botton}   
                                    onClick=
                                    {(event)=>{
                                      event.preventDefault();
                                      setEditStatus(false);
                                      setEditItem(null)
                                      setEditText('')
                                      setTasks(tasks.map(x=>{if(x==task){return editText}else{return x}}))
                                    }}
                                        >Ok</button>
                                  </div>
                                  :
                                  <div onClick={(event)=>{
                                    event.preventDefault();
                                    setEditStatus(true)
                                    setEditItem(idx)
                                    setEditText(task)
                                  }}>   <img style={{margin:"10px"}} src={editIcon} width="20px"/>   
                                  </div>
                                }
                              </div>


                              <div onClick={(event)=>{
                                event.preventDefault();
                                setTasks(tasks.filter(x=>(x!==task)))
                              }}>   <img style={{margin:"10px"}} src={deleteIcon} width="20px"/>   </div>
                              
                            </div>
                  }
                  // <p>{task.status}</p>
                })
              }
              {
                addTaskButton ?
                <div>
                  <textarea   value={taskText} onChange={(event)=>{setTaskText(event.target.value)}}    style={styleSheet.textArea}  />
                  <br/>
                  <button  onClick={
                    (event)=>{
                      event.preventDefault();
                      setTasks(prevData=>([...prevData,taskText]));
                      setTaskText('');
                      setAddTaskButton(false);
                              }
                    } 
                    style={styleSheet.botton} >
                    Set task</button>
                </div>
                :
                <div>
                  <button style={styleSheet.botton}   onClick={(event)=>{event.preventDefault();setAddTaskButton(true);console.log(tasks)}}    >Add task</button>
                </div>
              }
            </div>
          }
        </div>
      </div>
      
    </div>
  );
}

export default Main;
