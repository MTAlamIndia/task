import ToDoCard from "./ToDoCard";

const TaskList = ({ list }) => {
  const checkCompletedTask = () => {
    const completedTask = list.filter((item) => item.status === true);
    return completedTask;
  };

  const fetchUpcomingTasks = () => {
    const filteredData = list.filter(
      (item) =>
        (new Date(item.data.date).setHours(0, 0, 0, 0) ===
          new Date().setHours(0, 0, 0, 0) ||
          new Date(item.data.date) - new Date() > 0) &&
        item.status !== true
    );
    return filteredData;
  };

  const pastDateTasks = () => {
    const filteredData = list.filter(
      (item) => new Date(item.data.date) - new Date() < 0
    );
    return filteredData;
  };

  return (
    <>
      {fetchUpcomingTasks().length > 0 && (
        <div style={{ paddingTop: 15 }}>
          <h4 className="cardTitle">Upcoming Tasks</h4>
          {fetchUpcomingTasks().map((item, i) => {
            return <div key={i}>{!item.status && <ToDoCard {...item} />}</div>;
          })}
        </div>
      )}

      {checkCompletedTask().length > 0 && (
        <div style={{ paddingTop: 15 }}>
          <h4 className="cardTitle">Completed Tasks</h4>
          {checkCompletedTask().map((item, i) => {
            return <div key={i}>{item.status && <ToDoCard {...item} />}</div>;
          })}
        </div>
      )}

      {pastDateTasks().length > 0 && (
        <div style={{ paddingTop: 15 }}>
          <h4 className="cardTitle">Past Dates' Tasks</h4>
          {pastDateTasks().map((item, i) => {
            return (
              <div key={i}>
                {<ToDoCard {...item} incompleted={!item.status} />}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TaskList;
