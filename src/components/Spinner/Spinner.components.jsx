import "./Spinner.style.css";

const Spinner = ({ spinnerOptions }) => {
  return (
    <>
      {spinnerOptions ? (
        <div className={spinnerOptions}></div>
      ) : (
        <div className={"SpinnerContainer"}></div>
      )}
    </>
  );
};

export default Spinner;
