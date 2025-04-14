import { useState } from "react";
// import '../css/Todolist.css'; 
function TodoList(){
    const [tasks,setTasks] = useState([]);
    const [input,setInput] = useState("");
    const [editIndex,setEditIndex] = useState(null);
    const addTask = () => {
        if(input.trim()){
            if (editIndex !== null) {
                const updatedTasks = [...tasks];
                updatedTasks[editIndex] = input;
                setTasks(updatedTasks);
                setEditIndex(null);
              } else {
                setTasks([...tasks, input]);
              }
              setInput("");
        }
    }
    const removeTask = (index) =>{
        setTasks(tasks.filter((_,i)=> i !== index));
    }
    const editTask = (index)=>{
        setInput(tasks[index]);
        setEditIndex(index);
    }
    return(
        <div>
            <h2>Danh sách công việc</h2>
            <input type="text" name="" id="" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nhập"/>
            <button onClick={addTask}>{editIndex !== null? "Cập nhật":"Thêm"}</button>
            
            <ul>
                {
                    tasks.map((task, index)=>
                    (
                        <li key={index}>
                            {task}
                            <button onClick={()=> removeTask(index)}>Xóa</button>
                            <button onClick={()=> editTask(index)}>Sửa</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default TodoList;