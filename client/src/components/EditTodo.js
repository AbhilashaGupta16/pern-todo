import React,{useState} from 'react'

export default function EditTodo(props) {

    const [description,setDescription]=useState(props.todo.description)
    const updateDescription=async e=>{
        e.preventDefault()
        try {
            const body={description}
            // console.log(description+" "+body)
            const response=await fetch(`http://localhost:5000/todos/${props.todo.todo_id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            window.location="/hh-todo"
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <div className="container">
 
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#myModal${props.todo.todo_id}`}>
                Edit
            </button>

            
            <div className="modal fade" id={`myModal${props.todo.todo_id}`}>
                <div className="modal-dialog">
                <div className="modal-content">
                
                    
                    <div className="modal-header">
                    <h4 className="modal-title">Edit Todo</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    
                    <div className="modal-body">
                    <input className="form-control me-2" type="edittodo" value={description} onChange={e=>setDescription(e.target.value)}/>
                    </div>
                    
                    <div className="modal-footer">
                    <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e=>updateDescription(e)}>Edit</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                    
                </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
