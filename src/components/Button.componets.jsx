export const Button = ({ title, btnclass, ...others }) => {
  return (
    <button className={btnclass} type="button" {...others}>
      {title}
    </button>
  );
};
