function TodoItem(props) {

    const activity = props.activityArr
    const setActivityArr=props.setActivityArr

    function handleDelete(deleteid){
var temparr = activity.filter(function(item){
    if(item.id === deleteid)
        {
  return false }
  else{
    return true
  }      
})
setActivityArr(temparr)
    }
    return(
        
    <div>
        <div className="flex justify-between">

            <p>{props.index + 1}.{props.item.activity}</p>

            <button  className="bg-transparent " onClick={()=>handleDelete(props.id)}>Delete</button>

        </div>
    </div>
)
}
export default TodoItem