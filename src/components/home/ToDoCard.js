import { useState } from "react";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useDispatch } from "react-redux";
import { DeleteToDo, UpdateStatus } from "../../actions/index";
import { VscTrash } from "react-icons/vsc";

const ToDoCard = ({ id, data, status, incompleted }) => {
  const [expand, setExpand] = useState(false);  
  const dispatch = useDispatch();
 
  const handleChange = () => {
    dispatch(UpdateStatus(id))
  }

  return (
    <>
      <div className={`toDoCard ${status ? 'completed': ''}`}>
        <span className={`toDoIcon ${incompleted ? 'incompleted' : ''}`}>
        {
          !incompleted &&
          <RiCheckboxCircleFill />
        }
        {
          incompleted && 
          <RiCloseCircleFill />
        }
          
        </span>
        <div className="toDoCardContent">
          <h4 className="toDoTitle">{data.plan}</h4>
          <div className="dateTime">
            <span>{data.date}</span>
            <span>{data.time}</span>
          </div>
        </div>
        <div className="expandIcon" onClick={() => setExpand(!expand)}>
          {!expand ? <MdExpandMore /> : <MdExpandLess />}
        </div>
        {expand && (
          <div className="toDoExpanded">
            {data.note && (
              <p>
                <span style={{ fontWeight: 500 }}>Addtional Notes: </span>
                <span>{data.note}</span>
              </p>
            )}

            <div className="toDoAction">
              <div className="customCheckBox">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  checked={status}
                  id={id}
                />
                <label htmlFor={id}>Task Completed?</label>
              </div>
              <span
                onClick={() => dispatch(DeleteToDo(id))}
                className="toDoActionDelete"
              >
                <VscTrash />
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ToDoCard;
