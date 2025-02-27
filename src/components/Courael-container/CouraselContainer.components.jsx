import "./CouraselContainer.css";
import Courasel from "../Courasel/Cousarel.components";
// import TopBanner from "../../../src/assets/courasel/TopBanner.gif";
import { Button } from "../Button.componets";
import { useState } from "react";

const CouraselContainer = ({ couraelElements = [], link }) => {
  const [activeInd, setActiveInd] = useState(0);

  // console.log(activeInd);

  // const couraelElements = [
  //   {
  //     title: "Courasel elements 1",
  //     color: "orange",
  //   },
  //   {
  //     title: "Courasel elements 2",
  //     color: "silver",
  //   },
  //   {
  //     title: "Courasel elements 3",
  //     color: "green",
  //   },
  // ];

  const couraselLength = couraelElements.length - 1;

  //Hnadler for previous scroll
  const upDateInd = (ind) => {
    if (ind < 0) {
      ind = 0;
    } else if (ind >= couraselLength) {
      ind = couraselLength;
    }

    setActiveInd(ind);
  };

  return (
    <div className="Courasel-container">
      <div className="courasel-inner">
        {couraelElements.map((_, index) => {
          return (
            <Courasel
              key={index}
              TopBanner={couraelElements[index]}
              link={link}
              title={"Courasel Element"}
              style={{
                // backgroundColor: `${"red"}`,
                transform: `translateX(${(index - activeInd) * 100}%)`,
              }}
            />
          );
        })}
      </div>

      <Button
        btnclass="courasel-button courasel-button__left"
        title={"<"}
        onClick={() => {
          upDateInd(activeInd - 1);
        }}
      />

      <Button
        btnclass="courasel-button courasel-button__right"
        title={">"}
        onClick={() => {
          upDateInd(activeInd + 1);
        }}
      />

      <div className="coursel-buttons">
        {couraelElements.map((ele, ind) => (
          <span
            key={ind}
            className={`${
              ind === activeInd ? "active" : " "
            } courasel-button__dots`}
            onClick={() => {
              upDateInd(ind);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

// title={element.title}
// style={{
//   backgroundColor: `${element.color}`,
//   transform: `translateX(${(index - activeInd) * 100}%)`,
// }}

export default CouraselContainer;
