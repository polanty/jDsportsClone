import Spinner from "./Spinner/Spinner.components";

export const Button = ({ title, btnclass, isLoading = false, ...others }) => {
  return (
    <button className={btnclass} type="button" {...others}>
      {isLoading ? (
        <Spinner spinnerOptions={`SpinnerContainer__small`} />
      ) : (
        title
      )}
    </button>
  );
};
