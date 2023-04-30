
const ToDoList = (props) => {
    
  return (
    <div className="task">
      <li>
      <i className="fa-solid fa-circle-xmark fa-2xl" onClick={()=>{
        props.onSelect(props.id);
      }} ></i>
        {props.text}
        {props.OnSelect}
      </li>
    </div>
  );
};
export default ToDoList;