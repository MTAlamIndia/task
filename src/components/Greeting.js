const Greeting = () => {
  const currHour = new Date().getHours();
  return (
    <>
      {currHour >= 12
        ? currHour >= 16
          ? "Good Evening"
          : "Good Afternoon"
        : "Good Morning"}
    </>
  );
};
export default Greeting;
