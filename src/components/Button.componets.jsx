export const Button = ({ title, btnclass }) => {
  return (
    <button className={btnclass} type="button">
      {title}
    </button>
  );
};
