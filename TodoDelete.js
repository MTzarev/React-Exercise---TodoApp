import React from "react";
function TodoDelete({onDelete, id}){
    
return (
    <button onClick={()=>onDelete(id)}>Delete</button>
)
}
export default TodoDelete;