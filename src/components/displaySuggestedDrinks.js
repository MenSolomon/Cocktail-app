import React, { useState } from "react";
import Home from "./home";
import { useSelector } from "react-redux";
import { selectDrinksToDeliver } from "../slice/sendDrinkSlice";
import drinksCss from "../styles/displayDrinks.module.css";

const DisplaySuggestedDrinks = (props) => {
  //   let acceptedData = props.data;

  // const [selectedDrinks, setSelectedDrinks] = useState([]);

  const selectedDrinks = useSelector(selectDrinksToDeliver);

  // setSelectedDrinks(useSelector(selectDrinksToDeliver));

  // alert(selectedDrinks);

  return (
    <div className={drinksCss.container}>
      {/* {acceptedData.map((data) => (
        <div> {data.drinkName} </div>
      ))} */}
      <h4>{props?.data}</h4>
      <ul>
        {selectedDrinks.map((data) => (
          <li
            style={{
              backgroundImage: `url(${data.drinkImage})`,
              backgroundSize: "cover",
            }}
            className={drinksCss.drinkCard}
          >
            {" "}
            Name: {data.drinkName}{" "}
            {data.ingredient1 !== null ? data.ingredient1 : null}
            {data.ingredient2 !== null ? data.ingredient2 : null}
            {data.ingredient3 !== null ? data.ingredient3 : null}
            {data.ingredient4 !== null ? data.ingredient4 : null}
            {data.ingredient5 !== null ? data.ingredient5 : null}
            {data.ingredient6 !== null ? data.ingredient6 : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplaySuggestedDrinks;
{
  /* <div>
Name: {data.drinkName} 1st Ingredient : {data.ingredient1}{" "}
</div> */
}
