import React,{useEffect,useState} from 'react'
import EditTodo from './EditTodo'

export default function ListTodo() {
    const [todos,setTodos]=useState([])
    const deleteTodo=async (id)=>{
        try {
            const deleteTodo=await fetch(`http://localhost:5000/todos/${id}`,{
                method:"DELETE"
            })
            // console.log(deleteTodo)
            setTodos(todos.filter(todo=>todo.todo_id!==id))
        } catch (error) {
            console.log(error)
        }
    }
    const getTodos= async() =>{
        try {
            const response=await fetch("http://localhost:5000/todos")
            const jData=await response.json()
            setTodos(jData)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getTodos()
    },[])
    console.log(todos)
  return (
    <div>
        <div className="container mt-5 text-center">
            <h3 className="my-3">All Todos</h3>
                      
            <table className="table">
            <thead>
                <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                </tr> */}
                {todos.map(todo=>(
                    <tr key={todo.todo_id}>
                    <td>{todo.description}</td>
                    <td><EditTodo todo={todo}/></td>
                    <td><button type="button" className="btn btn-danger" onClick={()=>deleteTodo(todo.todo_id)}>Delete</button></td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
  </div>
  )
}
