import React,{useState} from 'react'
import ListTodo from './ListTodo'

export default function InputTodo() {

    const [description,setDescription]=useState("")
    const submitForm=async e=>{
        e.preventDefault()
        try {
            
            const body={description}
            // console.log(description+" "+body)
            const response=await fetch("http://localhost:5000/todos",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            window.location="/hh-todo"
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <>
        <div className="container text-center my-5">
            <h3 className="my-5">Your Todo List</h3>
            <form className="d-flex" role="todo" onSubmit={submitForm}>
                <input className="form-control me-2" type="todo" placeholder="Clean Room" value={description} onChange={e=>setDescription(e.target.value)}/>
                <button className="btn btn-success" type="submit">Add</button>
            </form>
        </div>
        <ListTodo/>
    </>
  )
}
