import { useState } from "react"
import TodoItem from "./TodoItem"


function TodoList(props) {

    const activityArr = props.activityArr
const setActivityArr =props.setActivityArr
return(
        <div className="bg-[#BDB4EA]  border rounded-md p-2 flex-grow">
            <p className="text-2xl font-medium">Today Activity</p>
           
            {activityArr.length===0? <p>You haven't add anything yet</p>:""}
            {
                activityArr.map(function (item, index) {
                    return <TodoItem id={item.id} index={index} item={item} activityArr={activityArr} setActivityArr={setActivityArr} />
                })
            }
        </div>
    )
}
export default TodoList