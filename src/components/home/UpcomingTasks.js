import { useSelector } from "react-redux";
import ToDoCard from "./ToDoCard";

const UpcomingTasks = ({ title }) => {
  const toDoList = useSelector((state) => state.ToDoReducer.list);

  const fetchUpcomingTasks = () => {
    const finalData = toDoList.filter(
      (item) =>
        new Date(item.data.date).setHours(0, 0, 0, 0) ===
          new Date().setHours(0, 0, 0, 0) ||
        new Date(item.data.date) - new Date() > 0
    );

    return finalData;
  };

  return (
    <>
      {title && <h4 className="cardTitle">{title}</h4>}

      {fetchUpcomingTasks().map((item, i) => {
        return <>{!item.status && <ToDoCard key={i} {...item} />}</>;
      })}
      
    </>
  );
};

export default UpcomingTasks;
