import React, { useEffect, useState, useRef } from "react";
import landPageImage from "../images/homePic.jpg";
import home from "../styles/home.module.css";
import stick from "../images/move.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Mai from "../images/Mai.webp";
import Take from "../images/Take.webp";

// import ReactBootstrapCarousel from "react-bootstrap-carousel";
// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import bottle from "../images/bottle.webp";
import bottle2 from "../images/bottle2.webp";
import bottle3 from "../images/bottle3.webp";
import bottle4 from "../images/bottle4.webp";
import bottle5 from "../images/bottle5.webp";
import CaroCss from "../styles/carousel.module.css";
import bmary from "../images/bmary.webp";
import tmf from "../images/tmh.webp";
import tmule from "../images/tmule.webp";
import west from "../images/west.webp";
import midnight from "../images/midnight.webp";
import MixModal from "./mixModal";
import cancel from "../images/cancel.png";
import DisplaySuggestedDrinks from "./displaySuggestedDrinks";
import { useDispatch, useSelector } from "react-redux";
import { deliverDrink } from "../slice/sendDrinkSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [yes, setYes] = useState(true);

  const navigate = useNavigate();

  //   const styles = {
  //     animation: "myAnimation 2s linear infinite",
  //     animationName: myAnimationFrames,
  //   };

  //   const myAnimationFrames = {
  //     "0%": { backgroundColor: "red" },
  //     "50%": { backgroundColor: "green" },
  //     "100%": { backgroundColor: "blue" },
  //   };

  let elements = "";
  let carousel = "";

  const [imgChildren, setImgChildren] = useState(0);

  useEffect(() => {
    elements = document.querySelectorAll(`.${home.imageSlider} img`);
    carousel = document.getElementsByClassName(`${home.carouselTest}`);
    let numberofChildren = elements.length;

    setImgChildren(numberofChildren);

    console.log(counter);
    // const nthEl = document.querySelectorAll(`.${home.imageSlider} img`)[n];
    // console.log("this" + nthEl);
  }, []);

  const [n, setN] = useState(5);
  // console.log("Ekow:::::" + imgChildren);

  const [add, setAdd] = useState(37);

  const [newVal, setVal] = useState(185);
  const [transition, setTransition] = useState(1.5);

  const newStyle = {
    transform: `translate(${add}%,0)`,
    transition: `${transition}s`,
  };

  const posStyle = {
    position: "relative",
    right: `${newVal}vw`,
  };

  const [style, setStyle] = useState({});

  const moveqNext = () => {
    setAdd(add + 37.6);
    setStyle(newStyle);
    // setVal(newVal + 3);

    if (n === 0) {
      setTransition(1.5);
    }

    if (n > 0) {
      setN(n - 1);

      if (n === 1) {
        setAdd(37.6);
        setTransition(0);
      }
    } else if (n === 0) {
      setN(imgChildren);
      // setAdd(40);
    }

    // alert(n);
    // alert("Fuck");
  };

  const [counter, setCounter] = useState(0);

  const countClick = () => {
    setCounter(counter + 1);
  };

  const [zero, setZero] = useState(0);
  const prevZeroRef = useRef();

  useEffect(() => {
    prevZeroRef.current = zero;
  });

  const prevZero = prevZeroRef.current;

  const [one, setOne] = useState(1);
  const [two, setTwo] = useState(2);
  const [three, setThree] = useState(3);
  const [four, setFour] = useState(4);
  // 98 for 2 , 146 for 3

  const [number, setNumber] = useState(1);

  const movePrev = () => {
    if (zero === 0) {
      setZero(1);
    } else if (zero === 1) {
      setZero(2);
    } else if (zero === 2) {
      setZero(3);
    } else if (zero === 3) {
      setZero(4);
    } else if (zero === 4) {
      setZero(0);
    }

    // alert(zero + "Current");
    // alert(prevZero);

    if (one === 0) {
      setOne(1);
    } else if (one === 1) {
      setOne(2);
    } else if (one === 2) {
      setOne(3);
    } else if (one === 3) {
      setOne(4);
    } else if (one === 4) {
      setOne(0);
    }

    if (two === 0) {
      setTwo(1);
    } else if (two === 1) {
      setTwo(2);
    } else if (two === 2) {
      setTwo(3);
    } else if (two === 3) {
      setTwo(4);
    } else if (two === 4) {
      setTwo(0);
    }

    if (three === 0) {
      setThree(1);
    } else if (three === 1) {
      setThree(2);
    } else if (three === 2) {
      setThree(3);
    } else if (three === 3) {
      setThree(4);
    } else if (three === 4) {
      setThree(0);
    }

    if (four === 0) {
      setFour(1);
    } else if (four === 1) {
      setFour(2);
    } else if (four === 2) {
      setFour(3);
    } else if (four === 3) {
      setFour(4);
    } else if (four === 4) {
      setFour(0);
    }

    if (number === 1) {
      setNumber(5);
    } else if (number >= 1 && number <= 5) {
      setNumber(number - 1);
    }
  };

  const moveNext = () => {
    if (zero === 0) {
      setZero(4);
    } else if (zero === 1) {
      setZero(0);
    } else if (zero === 2) {
      setZero(1);
    } else if (zero === 3) {
      setZero(2);
    } else if (zero === 4) {
      setZero(3);
    }

    if (one === 0) {
      setOne(4);
    } else if (one === 1) {
      setOne(0);
    } else if (one === 2) {
      setOne(1);
    } else if (one === 3) {
      setOne(2);
    } else if (one === 4) {
      setOne(3);
    }

    if (two === 0) {
      setTwo(4);
    } else if (two === 1) {
      setTwo(0);
    } else if (two === 2) {
      setTwo(1);
    } else if (two === 3) {
      setTwo(2);
    } else if (two === 4) {
      setTwo(3);
    }

    if (three === 0) {
      setThree(4);
    } else if (three === 1) {
      setThree(0);
    } else if (three === 2) {
      setThree(1);
    } else if (three === 3) {
      setThree(2);
    } else if (three === 4) {
      setThree(3);
    }

    if (four === 0) {
      setFour(4);
    } else if (four === 1) {
      setFour(0);
    } else if (four === 2) {
      setFour(1);
    } else if (four === 3) {
      setFour(2);
    } else if (four === 4) {
      setFour(3);
    }

    if (number >= 1 && number < 5) {
      setNumber(number + 1);
    } else if (number === 5) {
      setNumber(1);
    }

    // alert(number);
  };

  const [styling, setStyling] = useState({});

  useEffect(() => {
    const styles = {
      animationName: "my-animation",
      animationDuration: "2s",
    };

    const keyframes = `
      @keyframes my-animation {
        from {
            opacity: 0;
          }
          to {
            opacity: 1;
      }
    `;

    const styler = document.createElement("style");
    styler.appendChild(document.createTextNode(keyframes));
    document.head.appendChild(styler);

    setStyling(styles);
  }, []);

  // code for cocktail api extraction below
  const [cocktailData, setCocktailData] = useState([]);

  const alphabets = [];
  for (let i = 97; i <= 122; i++) {
    alphabets.push(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${String.fromCharCode(
        i
      )}`
    );
  }

  // We used the promise all method to aggregate multiple data from different endpoints into one array

  /*  Promise.all() to call fetch() for each URL and wait for all the responses to complete. We then use Promise.all() again to convert all the responses to JSON data. Finally, we set the data state variable to the array of JSON data.  */
  useEffect(() => {
    Promise.all(alphabets.map((url) => fetch(url)))
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => setCocktailData(data))
      .catch((error) => console.error(error));
  }, []);

  //GENERATING RANDOM COCKTAIL

  const [randomCocktail, setRandomCocktail] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((response) => setRandomCocktail(response))
      .catch((error) => console.error(error));
  }, []);

  const tempDrinkNames = [];

  cocktailData.map((data) =>
    data.drinks !== null
      ? tempDrinkNames.push(data?.drinks.map((res) => res?.strDrink))
      : ""
  );

  const namesofAllDrinks = [].concat.apply([], tempDrinkNames);

  // TOTAL INGREDIENTS  There are 579
  const [ingredientData, setIngredientData] = useState([]);

  const ingredientIndex = [];
  for (let i = 0; i <= 579; i++) {
    ingredientIndex.push(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=${i}`
    );
  }

  useEffect(() => {
    Promise.all(ingredientIndex.map((url) => fetch(url)))
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((data) => setIngredientData(data))
      .catch((error) => console.error(error));
  }, []);

  // console.log(ingredientData);

  const namesOfIng = [];

  ingredientData.map((data) =>
    data?.ingredients !== null
      ? data?.ingredients.map((res) => namesOfIng.push(res.strIngredient))
      : ""
  );

  // console.log(namesofAllDrinks);

  // console.log(namesOfIng);

  // console.log(randomCocktail);

  console.log(cocktailData);

  /* ****************** TRASH CODE **************************
 **************************************************************** 

  // cocktailData &&
  //   cocktailData.map((data) =>
  //     console.log(data?.drinks.map((res) => res?.strDrink))
  //   );

  //   const namesOfAllIngredients = [];
  //   const namesOfAllIngredients2 = [];
  //   const namesOfAllIngredients3 = [];
  //   const namesOfAllIngredients4 = [];
  //   const namesOfAllIngredients5 = [];
  //   const namesOfAllIngredients6 = [];

  //   cocktailData.map((data) =>
  //     data.drinks !== null
  //       ? namesOfAllIngredients.push(
  //           data?.drinks.map((res) => res?.strIngredient1)
  //         )
  //       : ""
  //   );

  //   cocktailData.map((data) =>
  //     data.drinks !== null
  //       ? namesOfAllIngredients2.push(
  //           data?.drinks.map((res) => res?.strIngredient2)
  //         )
  //       : ""
  //   );

  //   cocktailData.map((data) =>
  //     data.drinks !== null
  //       ? namesOfAllIngredients3.push(
  //           data?.drinks.map((res) => res?.strIngredient3)
  //         )
  //       : ""
  //   );

  //   cocktailData.map((data) =>
  //     data.drinks !== null
  //       ? namesOfAllIngredients4.push(
  //           data?.drinks.map((res) => res?.strIngredient4)
  //         )
  //       : ""
  //   );

  //   cocktailData.map((data) =>
  //     data.drinks !== null
  //       ? namesOfAllIngredients5.push(
  //           data?.drinks.map((res) => res?.strIngredient5)
  //         )
  //       : ""
  //   );

  //   cocktailData.map((data) =>
  //     data.drinks !== null
  //       ? namesOfAllIngredients6.push(
  //           data?.drinks.map((res) => res?.strIngredient6)
  //         )
  //       : ""
  //   );

  //   console.log(namesOfAllIngredients);
  //   console.log(namesOfAllIngredients2);
  //   console.log(namesOfAllIngredients3);
  //   console.log(namesOfAllIngredients4);
  //   console.log(namesOfAllIngredients5);
  //   console.log(namesOfAllIngredients6);

  // namesOfAllIngredients.map(data=>(data.map(res=>)))

  // const name1 =
  //   namesOfAllIngredients.join(", ") +
  //   namesOfAllIngredients2.join(", ") +
  //   namesOfAllIngredients3.join(", ") +
  //   namesOfAllIngredients4.join(", ") +
  //   namesOfAllIngredients5.join(", ") +
  //   namesOfAllIngredients6.join(", ");

  // const words = name1.split(" ");
  // const uniqueWords = words.filter((word, index) => {
  //   return (
  //     !words.slice(0, index).includes(word) &&
  //     !words.slice(index + 1).includes(word)
  //   );
  // });
  // const result = uniqueWords.join(" ");

  // console.log("Data INCOMING");
  // console.log(name1[1]);

  // const uniqueWords = [...new Set(name1.split(" "))];
  // const uniqueString = uniqueWords.join(" ");

  // console.log(uniqueString);

  // const {
  //   drinks: [{ strDrink }],
  // } = cocktailData[0];

  // console.log(strDrink);

  */

  const [isOpen, setIsOpen] = useState(false);

  const setVisible = () => {
    setIsOpen(true);
  };

  const modalStyle = {
    backgroundColor: "black",
    transform: "translate(-50px,-50px)",
    width: "30vw",
    height: "40vh",
    position: "fixed",
    left: "50vw",
    top: "40vh",
    zIndex: "1000",
  };

  // const createOption = () => {
  //   <img src={bottle}></img>;
  // };

  // const [show, setShow] = useState(false);

  const [vis, setVisibleee] = useState("hidden");
  const [vis2, setVisible2] = useState("hidden");
  const [vis3, setVisible3] = useState("hidden");
  const [vis4, setVisible4] = useState("hidden");
  const [vis5, setVisible5] = useState("hidden");

  const [count, setCount] = useState(0);

  const setShow = () => {
    if (count < 5) {
      setCount(count + 1);
    } else if (count === 5) {
      setCount(0);
    }

    if (count === 1) {
      setVisibleee("visible");
    }
    if (count === 2) {
      setVisible2("visible");
    }

    if (count === 3) {
      setVisible3("visible");
    }

    if (count === 4) {
      setVisible4("visible");
    }

    if (count === 5) {
      setVisible5("visible");
    }
    // alert(count);
  };

  const setButtVis = () => {
    setVisibleee("hidden");
    setValue2("");
  };

  const setButtVis2 = () => {
    setVisible2("hidden");
    setValue3("");
  };

  const setButtVis3 = () => {
    setVisible3("hidden");
    setValue4("");
  };

  const setButtVis4 = () => {
    setVisible4("hidden");
    setValue5("");
  };

  const setButtVis5 = () => {
    setVisible5("hidden");
    setValue6("");
  };

  const [itemValue1, setValue1] = useState("");
  const [itemValue2, setValue2] = useState("");
  const [itemValue3, setValue3] = useState("");
  const [itemValue4, setValue4] = useState("");
  const [itemValue5, setValue5] = useState("");
  const [itemValue6, setValue6] = useState("");

  // This handles the change values of the selected ingredients
  const handleIngredient1 = (event) => {
    setValue1(event.target.value);
  };

  const handleIngredient2 = (event) => {
    setValue2(event.target.value);
  };

  const handleIngredient3 = (event) => {
    setValue3(event.target.value);
  };

  const handleIngredient4 = (event) => {
    setValue4(event.target.value);
  };

  const handleIngredient5 = (event) => {
    setValue5(event.target.value);
  };

  const handleIngredient6 = (event) => {
    setValue6(event.target.value);
  };

  console.log(
    itemValue1,
    itemValue2,
    itemValue3,

    itemValue4,

    itemValue5,

    itemValue6
  );

  const selectedIngredients = [];

  const [option6, setOption6] = useState([]);
  const tempOption6 = [];

  const [option5, setOption5] = useState([]);
  const tempOption5 = [];

  const [option4, setOption4] = useState([]);
  const tempOption4 = [];

  const [option3, setOption3] = useState([]);
  const tempOption3 = [];

  // const [option2, setOption2] = useState([]);
  // const tempOption2 = [];

  const [option1, setOption1] = useState([]);
  const tempOption1 = [];

  const startMix = () => {
    if (itemValue1 !== "") {
      selectedIngredients.push(itemValue1);
    }

    if (itemValue2 !== "") {
      selectedIngredients.push(itemValue2);
    }

    if (itemValue3 !== "") {
      selectedIngredients.push(itemValue3);
    }
    if (itemValue4 !== "") {
      selectedIngredients.push(itemValue4);
    }
    if (itemValue5 !== "") {
      selectedIngredients.push(itemValue5);
    }
    if (itemValue6 !== "") {
      selectedIngredients.push(itemValue6);
    }

    // console.log(selectedIngredients[0].replace(/\s+/g, "") + "SSSAS");

    // The code below in a the logic the mix generator
    // HOW it works
    // Each select ingredient in the array (selectedIngredients) is iterated through the coctailData array
    // which contains every drink with each ingredient...
    // The ingredient is the compared with the first 6 ingredients if there is a match
    // the that particular drink is suggested
    // However the order of suggesstion depends on which the cocktail with the most ingredient match
    for (let i = 0; i <= selectedIngredients.length; i++) {
      cocktailData.map((data) =>
        data?.drinks === null
          ? ""
          : data?.drinks.map((data1, index) => {
              if (
                String(selectedIngredients[i])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                String(selectedIngredients[i])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient2)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                String(selectedIngredients[i])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient3)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                String(selectedIngredients[i])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient4)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                String(selectedIngredients[i])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient5)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                String(selectedIngredients[i])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient6).toLowerCase().replace(/\s+/g, "")
              ) {
                // const newItems = [...option6];

                // newItems.push({
                //   drinkName: data1.strDrink,
                //   instructions: data1.strInstructions,
                //   ingredient1: data1.strIngredient1,
                //   ingredient2: data1.strIngredient2,
                //   ingredient3: data1.strIngredient3,
                //   ingredient4: data1.strIngredient4,
                //   ingredient5: data1.strIngredient5,
                //   ingredient6: data1.strIngredient6,
                //   measure1: data1.strMeasure1,
                //   measure2: data1.strMeasure2,
                //   measure3: data1.strMeasure3,
                //   measure4: data1.strMeasure4,
                //   measure5: data1.strMeasure5,
                //   measure6: data1.strMeasure6,
                // });

                // setOption6(newItems);

                tempOption6.push({
                  drinkName: data1.strDrink,
                  instructions: data1.strInstructions,
                  ingredient1: data1.strIngredient1,
                  ingredient2: data1.strIngredient2,
                  ingredient3: data1.strIngredient3,
                  ingredient4: data1.strIngredient4,
                  ingredient5: data1.strIngredient5,
                  ingredient6: data1.strIngredient6,
                  measure1: data1.strMeasure1,
                  measure2: data1.strMeasure2,
                  measure3: data1.strMeasure3,
                  measure4: data1.strMeasure4,
                  measure5: data1.strMeasure5,
                  measure6: data1.strMeasure6,
                  drinkImage: data1.strDrinkThumb,
                });

                console.log(tempOption6);

                setOption6(tempOption6);

                console.log(
                  ` %c *********** 6TH BEST OPTION******** (1 INGREDIENT MATCH) \n  ${index} ) ${
                    data1.strIngredient1 !== null &&
                    data1.strIngredient1 !== undefined
                      ? data1.strIngredient1.toLowerCase()
                      : "Ingredient doesnt Exist "
                  } -----  ${selectedIngredients[i]
                    .toLowerCase()
                    .replace(/\s+/g, "")}  \n ${data1.strDrink} \n ${
                    data1.strInstructions
                  } `,
                  "color: RED"
                );
              }

              // CHECKING ANY 2 INGREDIENT MATCH
              if (
                (String(selectedIngredients[i])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, "")) &&
                (String(selectedIngredients[i + 1])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, ""))
              ) {
                tempOption5.push({
                  drinkName: data1.strDrink,
                  instructions: data1.strInstructions,
                  ingredient1: data1.strIngredient1,
                  ingredient2: data1.strIngredient2,
                  ingredient3: data1.strIngredient3,
                  ingredient4: data1.strIngredient4,
                  ingredient5: data1.strIngredient5,
                  ingredient6: data1.strIngredient6,
                  measure1: data1.strMeasure1,
                  measure2: data1.strMeasure2,
                  measure3: data1.strMeasure3,
                  measure4: data1.strMeasure4,
                  measure5: data1.strMeasure5,
                  measure6: data1.strMeasure6,
                  drinkImage: data1.strDrinkThumb,
                });

                console.log(tempOption5);

                setOption5(tempOption5);

                console.log(
                  `%c ***** 5ND BEST OPTION****** (2 INGREDIENT MATCH) \n  ${index} ) ${
                    data1.strIngredient1
                  } -----  ${selectedIngredients[i]} and ${
                    selectedIngredients[i + 1]
                  }   \n ${data1.strDrink} \n ${data1.strInstructions} `,
                  "color: blue"
                );
              }

              // CHECKING FOR 3 INGREDIENT MATCH
              if (
                (String(selectedIngredients[i])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, "")) &&
                (String(selectedIngredients[i + 1])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, "")) &&
                (String(selectedIngredients[i + 2])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, ""))
              ) {
                tempOption4.push({
                  drinkName: data1.strDrink,
                  instructions: data1.strInstructions,
                  ingredient1: data1.strIngredient1,
                  ingredient2: data1.strIngredient2,
                  ingredient3: data1.strIngredient3,
                  ingredient4: data1.strIngredient4,
                  ingredient5: data1.strIngredient5,
                  ingredient6: data1.strIngredient6,
                  measure1: data1.strMeasure1,
                  measure2: data1.strMeasure2,
                  measure3: data1.strMeasure3,
                  measure4: data1.strMeasure4,
                  measure5: data1.strMeasure5,
                  measure6: data1.strMeasure6,
                  drinkImage: data1.strDrinkThumb,
                });

                console.log(tempOption4);

                setOption4(tempOption4);

                console.log(
                  `%c ***** 4th OPTION****** (3 INGREDIENT MATCH) \n  ${index} ) ${
                    data1.strIngredient1
                  } -----  ${selectedIngredients[i]} and ${
                    selectedIngredients[i + 1]
                  }   \n ${data1.strDrink} \n ${data1.strInstructions} `,
                  "color: green"
                );
              }

              /// CHECKING FOR 4 MATCHING ITEMS IN
              if (
                (String(selectedIngredients[i])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, "")) &&
                (String(selectedIngredients[i + 1])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, "")) &&
                (String(selectedIngredients[i + 2])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, "")) &&
                (String(selectedIngredients[i + 3])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 3])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 3])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 3])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 3])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 3])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, ""))
              ) {
                tempOption3.push({
                  drinkName: data1.strDrink,
                  instructions: data1.strInstructions,
                  ingredient1: data1.strIngredient1,
                  ingredient2: data1.strIngredient2,
                  ingredient3: data1.strIngredient3,
                  ingredient4: data1.strIngredient4,
                  ingredient5: data1.strIngredient5,
                  ingredient6: data1.strIngredient6,
                  measure1: data1.strMeasure1,
                  measure2: data1.strMeasure2,
                  measure3: data1.strMeasure3,
                  measure4: data1.strMeasure4,
                  measure5: data1.strMeasure5,
                  measure6: data1.strMeasure6,
                  drinkImage: data1.strDrinkThumb,
                });

                console.log(tempOption3);

                setOption3(tempOption3);

                console.log(
                  `%c ***** THE 3RD BEST OPTION (4 Ingredient Match) ****** \n  ${index} ) ${
                    data1.strIngredient1
                  } -----  ${selectedIngredients[i]} and ${
                    selectedIngredients[i + 1]
                  }   \n ${data1.strDrink} \n ${data1.strInstructions} `,
                  "color: yellow"
                );
              }

              /// search FOR 6
              if (
                (String(selectedIngredients[i])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, "")) &&
                (String(selectedIngredients[i + 1])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 1])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, "")) &&
                (String(selectedIngredients[i + 2])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 2])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, "")) &&
                (String(selectedIngredients[i + 3])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 3])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 3])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 3])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 3])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 3])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, "")) &&
                ////5
                (String(selectedIngredients[i + 4])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 4])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 4])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 4])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 4])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 4])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, "")) &&
                ////6
                (String(selectedIngredients[i + 5])
                  .toLowerCase()
                  .replace(/\s+/g, "") ===
                  String(data1.strIngredient1)
                    .toLowerCase()
                    .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 5])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient2)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 5])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient3)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 5])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient4)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 5])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient5)
                      .toLowerCase()
                      .replace(/\s+/g, "") ||
                  String(selectedIngredients[i + 5])
                    .toLowerCase()
                    .replace(/\s+/g, "") ===
                    String(data1.strIngredient6)
                      .toLowerCase()
                      .replace(/\s+/g, ""))
              ) {
                tempOption1.push({
                  drinkName: data1.strDrink,
                  instructions: data1.strInstructions,
                  ingredient1: data1.strIngredient1,
                  ingredient2: data1.strIngredient2,
                  ingredient3: data1.strIngredient3,
                  ingredient4: data1.strIngredient4,
                  ingredient5: data1.strIngredient5,
                  ingredient6: data1.strIngredient6,
                  measure1: data1.strMeasure1,
                  measure2: data1.strMeasure2,
                  measure3: data1.strMeasure3,
                  measure4: data1.strMeasure4,
                  measure5: data1.strMeasure5,
                  measure6: data1.strMeasure6,
                  drinkImage: data1.strDrinkThumb,
                });

                console.log(tempOption1);

                setOption1(tempOption1);

                console.log(
                  `%c ******** THE  VERY BEST OPTION****** (ALL 5 INGREDIENT MATCH) \n  ${index} ) ${
                    data1.strIngredient1
                  } -----  ${selectedIngredients[i]} and ${
                    selectedIngredients[i + 1]
                  }   \n ${data1.strDrink} \n ${data1.strInstructions} `,
                  "color: pink"
                );
              }
            })
      );
    }

    // window.location.href = "/mixedDrinks";

    // window.location.pathname = "/mixedDrinks";
  };

  let finalresults = option1.concat(option3, option4, option5, option6);

  // ALGO TO REMOVE EVERY DUPLICATED VALUE FROM THE COMBINED ARRAY
  for (let j = 0; j < finalresults.length; j++) {
    for (let i = 0; i < finalresults.length; i++) {
      if (finalresults[j].drinkName === finalresults[i].drinkName && j !== i) {
        finalresults[i] = "";
      }
    }
  }
  finalresults = finalresults.filter((str) => str !== "");

  console.log(finalresults);

  const dispatch = useDispatch();

  dispatch(deliverDrink(finalresults));

  const movePage = () => {
    navigate("/mixedDrinks");
  };

  return (
    <div className={home.Container}>
      <div
        className={home.NavBar}
        style={{ backgroundImage: `url(${landPageImage})` }}
      >
        <ul>
          <li> Sip & Savor </li>
          <li> Our Cocktails </li>
          <li> Recipies </li>
          <li>News</li>

          <li onClick={movePage}>Behind the bar</li>

          <li> About Us </li>
        </ul>

        <div className={home.catchPhrase}>
          Sip , <br />
          Savour, <br />
          Repeat <p> Mix it up with us</p>
          <button onClick={setVisible}> Mix Now </button>
        </div>
      </div>

      {/* <DisplaySuggestedDrinks data={finalresults}></DisplaySuggestedDrinks> */}

      <MixModal
        style={modalStyle}
        open={isOpen}
        closeModal={() => setIsOpen(false)}

        // altClose={() => (isOpen === true ? setIsOpen(false) : null)}
      >
        <ul
          className={home.ingredientList}
          style={{ listStyleType: "none", display: "flex", flexWrap: "wrap" }}
        >
          <li>
            <select
              className={home.select}
              defaultValue="Select"
              value={itemValue1}
              onChange={handleIngredient1}
            >
              {namesOfIng.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
          </li>
          <li>
            <select
              style={{ visibility: vis }}
              className={home.select}
              onChange={handleIngredient2}
            >
              {namesOfIng.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
            <img
              src={cancel}
              onClick={setButtVis}
              style={{ visibility: vis, position: "relative", top: "10vh" }}
            />
          </li>
          <li>
            <select
              style={{ visibility: vis2 }}
              className={home.select}
              onChange={handleIngredient3}
            >
              {namesOfIng.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
            <img
              src={cancel}
              onClick={setButtVis2}
              style={{ visibility: vis2, position: "relative", top: "10vh" }}
            />
          </li>
          <li>
            <select
              style={{ visibility: vis3 }}
              className={home.select}
              onChange={handleIngredient4}
            >
              {namesOfIng.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
            <img
              src={cancel}
              onClick={setButtVis3}
              style={{ visibility: vis3, position: "relative", top: "10vh" }}
            />
          </li>
          <li>
            <select
              style={{ visibility: vis4 }}
              className={home.select}
              onChange={handleIngredient5}
            >
              {namesOfIng.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
            <img
              src={cancel}
              onClick={setButtVis4}
              style={{ visibility: vis4, position: "relative", top: "10vh" }}
            />
          </li>
          <li>
            <select
              style={{ visibility: vis5 }}
              className={home.select}
              onChange={handleIngredient6}
            >
              {namesOfIng.map((data) => (
                <option value={data}>{data}</option>
              ))}
            </select>
            <img
              src={cancel}
              onClick={setButtVis5}
              style={{ visibility: vis5, position: "relative", top: "10vh" }}
            />
          </li>
        </ul>

        <button
          style={{ position: "relative", bottom: "40vh" }}
          onClick={setShow}
        >
          {" "}
          Add ingredient{" "}
        </button>

        <button
          style={{ position: "relative", top: "15vh", left: "10vw" }}
          onClick={startMix}
        >
          Mix Now
        </button>
      </MixModal>

      <div className={home.secondInfo}>
        <img src={stick} className={home.stick} />
        <div className={home.horizontalLine}></div>
        <div className={home.verticalLine}></div>
        <div className={home.headInformation}>
          <div className={home.headContent}>
            Shake up <br /> your cocktail game <br /> with our recipe generator!
          </div>
          <p>
            At Sip & Savor, we help you generate recipies <br /> with any
            ingredient(s) your provide.
          </p>
          <button>Learn More</button>
        </div>
      </div>

      <div className={home.carouselTest}>
        <div className={CaroCss.head}>
          <img
            //   className={zero === 0 ? CaroCss.cornerMove : null}

            style={
              zero === 0
                ? {
                    position: "absolute",
                    right: "49vw",
                    transition: ".s",
                  }
                : //   : zero === 0 && prevZero === 4
                //   ? { position: "absolute", right: "0vw", transition: "0.7s" }
                zero === 1
                ? { position: "absolute", right: "0vw", transition: ".7s" }
                : zero === 2
                ? { position: "absolute", right: "-49vw", transition: ".7s" }
                : zero === 3
                ? { position: "absolute", right: "-98vw", transition: ".7s" }
                : zero === 4
                ? { position: "absolute", right: "-147vw", transition: "0s" }
                : null
            }
            src={bottle}
          ></img>
          <img
            style={
              one === 0
                ? { position: "absolute", right: "49vw", transition: ".s" }
                : one === 1
                ? { position: "absolute", right: "0vw", transition: ".7s" }
                : one === 2
                ? { position: "absolute", right: "-49vw", transition: ".7s" }
                : one === 3
                ? { position: "absolute", right: "-98vw", transition: ".7s" }
                : one === 4
                ? { position: "absolute", right: "-147vw", transition: "0s" }
                : null
            }
            src={bottle2}
          ></img>
          <img
            style={
              two === 0
                ? {
                    position: "absolute",
                    right: "49vw",
                    transition: ".s",
                  }
                : two === 1
                ? { position: "absolute", right: "0vw", transition: ".7s" }
                : two === 2
                ? { position: "absolute", right: "-49vw", transition: ".7s" }
                : two === 3
                ? { position: "absolute", right: "-98vw", transition: ".7s" }
                : two === 4
                ? { position: "absolute", right: "-147vw", transition: "0s" }
                : null
            }
            src={bottle3}
          ></img>
          <img
            style={
              three === 0
                ? { position: "absolute", right: "49vw", transition: ".s" }
                : three === 1
                ? { position: "absolute", right: "0vw", transition: ".7s" }
                : three === 2
                ? { position: "absolute", right: "-49vw", transition: ".7s" }
                : three === 3
                ? { position: "absolute", right: "-98vw", transition: ".7s" }
                : three === 4
                ? { position: "absolute", right: "-147vw", transition: "0s" }
                : null
            }
            src={bottle4}
          ></img>
          <img
            style={
              four === 0
                ? { position: "absolute", right: "49vw", transition: ".s" }
                : four === 1
                ? { position: "absolute", right: "0vw", transition: ".7s" }
                : four === 2
                ? { position: "absolute", right: "-49vw", transition: ".7s" }
                : four === 3
                ? { position: "absolute", right: "-98vw", transition: ".7s" }
                : four === 4
                ? { position: "absolute", right: "-147vw", transition: "0s" }
                : null
            }
            src={bottle5}
          ></img>
        </div>

        <div className={CaroCss.buttons}>
          <button onClick={movePrev}>Prev</button>
          <button onClick={moveNext}>Next</button>
        </div>

        <div className={CaroCss.moveBar}>
          <div
            className={CaroCss.barElement}
            style={
              one === 1
                ? { left: "0vw", transition: ".7s" }
                : one === 0
                ? { left: "16vw", transition: ".7s" }
                : one === 4
                ? { left: "32vw", transition: ".7s" }
                : one === 3
                ? { left: "48vw", transition: ".7s" }
                : one === 2
                ? { left: "64vw", transition: ".7s" }
                : null
            }
            my
          ></div>

          <div className={CaroCss.wineInfo}>
            {number === 1 ? (
              <div className={CaroCss.textAppear}>
                <h1>Bourbon & Vine</h1>
                <p>
                  Bourbon finished <br /> with <br /> a Cabernet infused <br />{" "}
                  French Oak spire
                </p>
                <button>SHOP NOW </button>
              </div>
            ) : number === 2 ? (
              <div style={styling} className={CaroCss.textAppear}>
                <h1>Wheat & Spire</h1>
                <p>
                  Wheated bourbon finished <br /> with <br /> a toasted French{" "}
                  <br />
                  Oak spire
                </p>{" "}
                <button>SHOP NOW </button>
              </div>
            ) : number === 3 ? (
              <div style={styling} className={CaroCss.textAppear}>
                <h1>Wheat & Honey</h1>
                <p>
                  Wheated bourbon finished <br /> with <br /> a honey soaked
                  American
                  <br />
                  Oak spire
                </p>{" "}
                <button>SHOP NOW </button>
              </div>
            ) : number === 4 ? (
              <div
                style={styling}
                className={number === 4 ? CaroCss.textAppear : ""}
              >
                <h1>Bourbon & Spire</h1>
                <p>
                  Bourbon finished <br /> with <br /> a toasted American
                  <br />
                  Oak spire
                </p>{" "}
                <button>SHOP NOW </button>
              </div>
            ) : number === 5 ? (
              <div
                style={styling}
                className={number === 5 ? CaroCss.textAppear : ""}
              >
                <h1>Rye & Spire</h1>
                <p>
                  Rye whiskey finished <br /> with <br /> a charred American{" "}
                  <br />
                  Oak spire
                </p>
                <button>SHOP NOW </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// for (let i = 0; i < selectedIngredients.length; i++) {
//   cocktailData.map((data) =>
//     data?.drinks === null
//       ? ""
//       : data?.drinks.map((data1, index) => {
//           if (
//             (selectedIngredients[i] === data1.strIngredient1 ||
//               selectedIngredients[i + 1] === data1.strIngredient1 ||
//               selectedIngredients[i + 2] === data1.strIngredient1) &&
//             (selectedIngredients[i] === data1.strIngredient2 ||
//               selectedIngredients[i + 1] === data1.strIngredient2 ||
//               selectedIngredients[i + 2] === data1.strIngredient2) &&
//             (selectedIngredients[i] === data1.strIngredient3 ||
//               selectedIngredients[i + 1] === data1.strIngredient3 ||
//               selectedIngredients[i + 2] === data1.strIngredient3)
//           ) {
//             console.log(
//               ` *****BEST OPTION******** \n  ${index} ) ${data1.strIngredient1}  and ${data1.strIngredient2}  and ${data1.strIngredient3}     -----  ${selectedIngredients[i]}   \n ${data1.strDrink} \n ${data1.strInstructions} `
//             );
//           }

//           if (
//             (selectedIngredients[i] === data1.strIngredient1 ||
//               selectedIngredients[i] === data1.strIngredient2 ||
//               selectedIngredients[i] === data1.strIngredient3) &&
//             (selectedIngredients[i + 1] === data1.strIngredient1 ||
//               selectedIngredients[i + 1] === data1.strIngredient2 ||
//               selectedIngredients[i + 1] === data1.strIngredient3)
//           ) {
//             console.log(
//               ` ***** 2ND BEST OPTION****** \n  ${index} ) ${
//                 data1.strIngredient1
//               } -----  ${selectedIngredients[i]} and ${
//                 selectedIngredients[i + 1]
//               }   \n ${data1.strDrink} \n ${data1.strInstructions} `
//             );
//           }

//           if (
//             selectedIngredients[i] === data1.strIngredient1 ||
//             selectedIngredients[i] === data1.strIngredient2 ||
//             selectedIngredients[i] === data1.strIngredient3
//           ) {
//             console.log(
//               ` ***** 3RD BEST OPTION****** \n  ${index} ) ${data1.strIngredient1} -----  ${selectedIngredients[i]}  \n ${data1.strDrink} \n ${data1.strInstructions} `
//             );
//           }
//         })
//   );
// }

///SSSSS

// <div
// // style={{ transform: "translate(80%,0)", transition: "1.5s" }}
// style={style}
// className={yes === true ? home.imageSlider : home.moves}
// >
// <img style={n === 0 ? posStyle : null} src={bottle} />
// <img
//   draggable={true}
//   style={n <= 1 ? posStyle : null}
//   src={bottle2}
// />
// <img style={n <= 2 ? posStyle : null} src={bottle3} />
// <img style={n <= 3 ? posStyle : null} src={bottle4} />
// <img style={n <= 4 ? posStyle : null} src={bottle5} />
// </div>
// <div className={home.previous}>Prev</div>
// <div onClick={moveNext} className={home.next}>
// Next
// </div>

// COCKTAIL PICTURES

// <div className={home.carouselTest}>
// <div className={CaroCss.head}>
//   <img
//     //   className={zero === 0 ? CaroCss.cornerMove : null}

//     style={
//       zero === 0
//         ? {
//             position: "absolute",
//             right: "49vw",
//             transition: ".s",
//           }
//         : //   : zero === 0 && prevZero === 4
//         //   ? { position: "absolute", right: "0vw", transition: "0.7s" }
//         zero === 1
//         ? { position: "absolute", right: "0vw", transition: ".7s" }
//         : zero === 2
//         ? { position: "absolute", right: "-49vw", transition: ".7s" }
//         : zero === 3
//         ? { position: "absolute", right: "-98vw", transition: ".7s" }
//         : zero === 4
//         ? { position: "absolute", right: "-147vw", transition: "0s" }
//         : null
//     }
//     src={bmary}
//   ></img>
//   <img
//     style={
//       one === 0
//         ? { position: "absolute", right: "49vw", transition: ".s" }
//         : one === 1
//         ? { position: "absolute", right: "0vw", transition: ".7s" }
//         : one === 2
//         ? { position: "absolute", right: "-49vw", transition: ".7s" }
//         : one === 3
//         ? { position: "absolute", right: "-98vw", transition: ".7s" }
//         : one === 4
//         ? { position: "absolute", right: "-147vw", transition: "0s" }
//         : null
//     }
//     src={tmf}
//   ></img>
//   <img
//     style={
//       two === 0
//         ? {
//             position: "absolute",
//             right: "49vw",
//             transition: ".s",
//           }
//         : two === 1
//         ? { position: "absolute", right: "0vw", transition: ".7s" }
//         : two === 2
//         ? { position: "absolute", right: "-49vw", transition: ".7s" }
//         : two === 3
//         ? { position: "absolute", right: "-98vw", transition: ".7s" }
//         : two === 4
//         ? { position: "absolute", right: "-147vw", transition: "0s" }
//         : null
//     }
//     src={west}
//   ></img>
//   <img
//     style={
//       three === 0
//         ? { position: "absolute", right: "49vw", transition: ".s" }
//         : three === 1
//         ? { position: "absolute", right: "0vw", transition: ".7s" }
//         : three === 2
//         ? { position: "absolute", right: "-49vw", transition: ".7s" }
//         : three === 3
//         ? { position: "absolute", right: "-98vw", transition: ".7s" }
//         : three === 4
//         ? { position: "absolute", right: "-147vw", transition: "0s" }
//         : null
//     }
//     src={midnight}
//   ></img>
//   <img
//     style={
//       four === 0
//         ? { position: "absolute", right: "49vw", transition: ".s" }
//         : four === 1
//         ? { position: "absolute", right: "0vw", transition: ".7s" }
//         : four === 2
//         ? { position: "absolute", right: "-49vw", transition: ".7s" }
//         : four === 3
//         ? { position: "absolute", right: "-98vw", transition: ".7s" }
//         : four === 4
//         ? { position: "absolute", right: "-147vw", transition: "0s" }
//         : null
//     }
//     src={tmule}
//   ></img>
// </div>

/* TRASH CODE 

  // cocktailData.map((data2) =>
  //   data2.drinks?.map((data3) => console.log(data3.strIngredient1))
  // );

  // selectedIngredients.map(data=>cocktailData.map(data2=>data2?.drinks?.map(data3)))

  // for (let i = 0; i < selectedIngredients.length; i++) {
  //   console.log(selectedIngredients[i]);
  // }



  // itemValue1 !== "" ? selectedIngredients.push(itemValue1) : "";
  // itemValue2 !== "" ? selectedIngredients.push(itemValue2) : null;
  // itemValue3 !== "" ? selectedIngredients.push(itemValue3) : null;
  // itemValue4 !== "" ? selectedIngredients.push(itemValue4) : null;
  // itemValue5 !== "" ? selectedIngredients.push(itemValue5) : null;
  // itemValue6 !== "" ? selectedIngredients.push(itemValue6) : null;

  // selectedIngredients.map((data) =>
  //   cocktailData.map((data2) =>
  //     data === data2.drinks?.map((data3) => data3.strIngredient1)
  //       ? console.log("Yes i found one")
  //       : console.log("No i didnt")
  //   )
  // );

  // selectedIngredients.map(data=>)
  // for (let i = 0; i < selectedIngredients.length; i++) {
  //   for (let j = 0; j < cocktailData?.length; j++) {
  //     for (let k = 0; k < cocktailData.drinks?.length; k++) {
  //       if (selectedIngredients[i] === cocktailData.drinks[i].strIngredient) {
  //         console.log("Match Found");
  //       }
  //     }
  //   }
  // }

  // array1.map((str1) => {
  //   array2.map((str2) => {
  //     if (str1 === str2) {
  //       console.log(`Match found: ${str1}`);
  //     }
  //   });
  // });

  // selectedIngredients.map((data) =>
  //   cocktailData.map((data2) =>
  //     data === data2.drinks?.map((data3) => data3.strIngredient1)
  //       ? console.log("Yes i found one")
  //       : console.log("No i didnt")
  //   )
  // );



   //  &&
              //   selectedIngredients[i] === data1.strIngredient2
              // ? console.log(
              //     `${index} ) ${data1.strIngredient2} -----  ${selectedIngredients[i]}  \n ${data1.strDrink} \n ${data1.strInstructions} `
              //   )
              // : "Didnt match"



                // cocktailData.map((data) =>
    //   data?.drinks === null
    //     ? ""
    //     : data?.drinks.map((data1, index) =>
    //         console.log(index + " ) " + data1.strIngredient1)
    //       )
    // );





    SECONF BEST OPTION 

     if (
                (selectedIngredients[i] === data1.strIngredient1 ||
                  selectedIngredients[i] === data1.strIngredient2 ||
                  selectedIngredients[i] === data1.strIngredient3) &&
                (selectedIngredients[i + 1] === data1.strIngredient1 ||
                  selectedIngredients[i + 1] === data1.strIngredient2 ||
                  selectedIngredients[i + 1] === data1.strIngredient3)
              ) {
                console.log(
                  ` ***** 2ND BEST OPTION****** \n  ${index} ) ${
                    data1.strIngredient1
                  } -----  ${selectedIngredients[i]} and ${
                    selectedIngredients[i + 1]
                  }   \n ${data1.strDrink} \n ${data1.strInstructions} `
                );
              }







              TRASH CODE FOR SEARCH 


                  //////////////////////////////////////////////////////////

              // (selectedIngredients[i] === data1.strIngredient1 ||
              //   selectedIngredients[+] === data1.strIngredient2 ||
              //   selectedIngredients[i] === data1.strIngredient3
              //   ) &&
              // (selectedIngredients[i + 1] === data1.strIngredient1 ||
              //   selectedIngredients[i + 1] === data1.strIngredient2 ||
              //   selectedIngredients[i + 1] === data1.strIngredient3)

              ////////////////////////////////////////////////////////////////////

              // if (
              //   (selectedIngredients[i] === data1.strIngredient1 ||
              //     selectedIngredients[i + 1] === data1.strIngredient1 ||
              //     selectedIngredients[i + 2] === data1.strIngredient1) &&
              //   (selectedIngredients[i] === data1.strIngredient2 ||
              //     selectedIngredients[i + 1] === data1.strIngredient2 ||
              //     selectedIngredients[i + 2] === data1.strIngredient2) &&
              //   (selectedIngredients[i] === data1.strIngredient3 ||
              //     selectedIngredients[i + 1] === data1.strIngredient3 ||
              //     selectedIngredients[i + 2] === data1.strIngredient3)
              // ) {
              //   console.log(
              //     ` ***********BEST OPTION********** \n  ${index} ) ${data1.strIngredient1}  and ${data1.strIngredient2}  and ${data1.strIngredient3}     -----  ${selectedIngredients[i]}   \n ${data1.strDrink} \n ${data1.strInstructions} `
              //   );
              // }





               /// BEst option
              // if (
              //   ///  CHECKING MATCH FOR 1ST INGREDIENT
              //   (selectedIngredients[i] !== null &&
              //   selectedIngredients[i] !== undefined &&
              //   data1.strIngredient1 !== null &&
              //   data1.strIngredient1 !== undefined
              //     ? selectedIngredients[i].toLowerCase().replace(/\s+/g, "") ===
              //       data1.strIngredient1.toLowerCase().replace(/\s+/g, "")
              //     : null ||
              //       //Second Index Check undefine and null
              //       (selectedIngredients[i + 1] !== null &&
              //         selectedIngredients[i + 1] !== undefined &&
              //         data1.strIngredient1 !== null &&
              //         data1.strIngredient1 !== undefined)
              //     ? selectedIngredients[i + 1]
              //         .toLowerCase()
              //         .replace(/\s+/g, "") ===
              //       data1.strIngredient1.toLowerCase().replace(/\s+/g, "")
              //     : null ||
              //       // 3rd I check U and N data types and Ing1
              //       (selectedIngredients[i + 2] !== null &&
              //         selectedIngredients[i + 2] !== undefined &&
              //         data1.strIngredient1 !== null &&
              //         data1.strIngredient1 !== undefined)
              //     ? selectedIngredients[i + 2]
              //         .toLowerCase()
              //         .replace(/\s+/g, "") ===
              //       data1.strIngredient1.toLowerCase().replace(/\s+/g, "")
              //     : null ||
              //       // 4th I check U and N data types and Ing1
              //       (selectedIngredients[i - 1] !== null &&
              //         selectedIngredients[i - 1] !== undefined &&
              //         data1.strIngredient1 !== null &&
              //         data1.strIngredient1 !== undefined)
              //     ? selectedIngredients[i - 1]
              //         .toLowerCase()
              //         .replace(/\s+/g, "") ===
              //       data1.strIngredient1.toLowerCase().replace(/\s+/g, "")
              //     : null ||
              //       // 5th I check U and N data types and Ing1
              //       (selectedIngredients[i - 2] !== null &&
              //         selectedIngredients[i - 2] !== undefined &&
              //         data1.strIngredient1 !== null &&
              //         data1.strIngredient1 !== undefined)
              //     ? selectedIngredients[i - 2]
              //         .toLowerCase()
              //         .replace(/\s+/g, "") ===
              //       data1.strIngredient1.toLowerCase().replace(/\s+/g, "")
              //     : null) &&
              //   ///  CHECKING MATCH FOR 2ND INGREDIENT

              //   (selectedIngredients[i] !== null &&
              //   selectedIngredients[i] !== undefined &&
              //   data1.strIngredient2 !== null &&
              //   data1.strIngredient2 !== undefined
              //     ? selectedIngredients[i].toLowerCase().replace(/\s+/g, "") ===
              //       data1.strIngredient2.toLowerCase().replace(/\s+/g, "")
              //     : null ||
              //       //Second Index Check undefine and null
              //       (selectedIngredients[i + 1] !== null &&
              //         selectedIngredients[i + 1] !== undefined &&
              //         data1.strIngredient2 !== null &&
              //         data1.strIngredient2 !== undefined)
              //     ? selectedIngredients[i + 1]
              //         .toLowerCase()
              //         .replace(/\s+/g, "") ===
              //       data1.strIngredient2.toLowerCase().replace(/\s+/g, "")
              //     : null ||
              //       // 3rd I check U and N data types and Ing2
              //       (selectedIngredients[i + 2] !== null &&
              //         selectedIngredients[i + 2] !== undefined &&
              //         data1.strIngredient2 !== null &&
              //         data1.strIngredient2 !== undefined)
              //     ? selectedIngredients[i + 2]
              //         .toLowerCase()
              //         .replace(/\s+/g, "") ===
              //       data1.strIngredient2.toLowerCase().replace(/\s+/g, "")
              //     : null ||
              //       // 4th I check U and N data types and Ing2
              //       (selectedIngredients[i - 1] !== null &&
              //         selectedIngredients[i - 1] !== undefined &&
              //         data1.strIngredient2 !== null &&
              //         data1.strIngredient2 !== undefined)
              //     ? selectedIngredients[i - 1]
              //         .toLowerCase()
              //         .replace(/\s+/g, "") ===
              //       data1.strIngredient2.toLowerCase().replace(/\s+/g, "")
              //     : null ||
              //       // 5th I check U and N data types and Ing2
              //       (selectedIngredients[i - 2] !== null &&
              //         selectedIngredients[i - 2] !== undefined &&
              //         data1.strIngredient2 !== null &&
              //         data1.strIngredient2 !== undefined)
              //     ? selectedIngredients[i - 2]
              //         .toLowerCase()
              //         .replace(/\s+/g, "") ===
              //       data1.strIngredient2.toLowerCase().replace(/\s+/g, "")
              //     : null) &&
              //   ///  CHECKING MATCH FOR 3RD INGREDIENT

              //   (selectedIngredients[i] !== null &&
              //   selectedIngredients[i] !== undefined &&
              //   data1.strIngredient3 !== null &&
              //   data1.strIngredient3 !== undefined
              //     ? selectedIngredients[i].toLowerCase().replace(/\s+/g, "") ===
              //       data1.strIngredient3.toLowerCase().replace(/\s+/g, "")
              //     : null ||
              //       //Second Index Check undefine and null
              //       (selectedIngredients[i + 1] !== null &&
              //         selectedIngredients[i + 1] !== undefined &&
              //         data1.strIngredient3 !== null &&
              //         data1.strIngredient3 !== undefined)
              //     ? selectedIngredients[i + 1]
              //         .toLowerCase()
              //         .replace(/\s+/g, "") ===
              //       data1.strIngredient3.toLowerCase().replace(/\s+/g, "")
              //     : null ||
              //       // 3rd I check U and N data types and Ing2
              //       (selectedIngredients[i + 2] !== null &&
              //         selectedIngredients[i + 2] !== undefined &&
              //         data1.strIngredient3 !== null &&
              //         data1.strIngredient3 !== undefined)
              //     ? selectedIngredients[i + 2]
              //         .toLowerCase()
              //         .replace(/\s+/g, "") ===
              //       data1.strIngredient3.toLowerCase().replace(/\s+/g, "")
              //     : null ||
              //       // 4th I check U and N data types and Ing2
              //       (selectedIngredients[i - 1] !== null &&
              //         selectedIngredients[i - 1] !== undefined &&
              //         data1.strIngredient3 !== null &&
              //         data1.strIngredient3 !== undefined)
              //     ? selectedIngredients[i - 1]
              //         .toLowerCase()
              //         .replace(/\s+/g, "") ===
              //       data1.strIngredient3.toLowerCase().replace(/\s+/g, "")
              //     : null ||
              //       // 5th I check U and N data types and Ing2
              //       (selectedIngredients[i - 2] !== null &&
              //         selectedIngredients[i - 2] !== undefined &&
              //         data1.strIngredient3 !== null &&
              //         data1.strIngredient3 !== undefined)
              //     ? selectedIngredients[i - 2]
              //         .toLowerCase()
              //         .replace(/\s+/g, "") ===
              //       data1.strIngredient3.toLowerCase().replace(/\s+/g, "")
              //     : null)
              // ) {
              //   console.log(
              //     ` ************BEST OPTION********** \n  ${index} ) ${data1.strIngredient1}  and ${data1.strIngredient2}  and ${data1.strIngredient3}     -----  ${selectedIngredients[i]}   \n ${data1.strDrink} \n ${data1.strInstructions} `
              //   );
              // }






              
  // let combinedCocktailData = cocktailData.map((data) =>
  //   data?.drinks === null
  //     ? ""
  //     : data?.drinks.map((data1, index) => data?.drinks.concat(data1))
  // );

  // for (let i = 0; i < cocktailData.length; i++) {
  //   if (cocktailData?.drinks[i] !== null) {
  //     combinedCocktailData = combinedCocktailData?.concat(
  //       cocktailData.concat(
  //         cocktailData?.drinks[i],
  //         cocktailData?.drinks[i + 1]
  //       )
  //     );
  //   }
  // }

  // console.log(combinedCocktailData);









console.log("COCKTAILLLLLLLLLLLLLLll");

  console.log("Ekow Solomon");

  console.log("This is cocktail data", cocktailData);

  var sample = undefined;

  var string = String(sample);

  console.log(string.toUpperCase());

  let myString = undefined; // a number
  let uppercaseString = String(myString).toUpperCase(); // convert to string and uppercase
  console.log(uppercaseString); // "123"




     console.log(" OPTION 6 array \n" + option6[0]);

    for (let i; i < option6.length; i++) {
      alert(option6[i]);
    }



    
  for (let j = 0; j < option5.length; j++) {
    if (option5.length > 1) {
      option5.map((data, index) => {
        if (option5[j].strDrink === data.strDrink && j !== index) {
          console.log(index);
          option5.splice(index, 1);
        }
      });
    }
  }





  
  // for (let j = 0; j < option4.length; j++) {
  //   for (let i = 0; i < option4.length; i++) {
  //     if (option4[j]?.strDrink === option4[i]?.strDrink) {
  //       if (j !== i) {
  //         option4[i] = "";
  //       }
  //     }
  //   }
  // }

  // for (let j = 0; j < option4.length; j++) {
  //   for (let i = 0; i < option4.length; i++) {
  //     console.log(option4[j].drinkName + " and " + option4[i].drinkName);
  //   }

  //   console.log(`Comparing item  at index ${j} with Every Index `);
  // }

  // console.log("OPTION 444", option4);




  // console.log("OPTION 6666", option6);
  // console.log("OPTION 555", option5);
  // console.log("OPTION 444", option4);
  // console.log("OPTION 333", option3);
  // console.log("OPTION 1111", option1);



  // // ALGO TO REMOVE EVERY DUPLICATED VALUE
  // for (let j = 0; j < option4.length; j++) {
  //   for (let i = 0; i < option4.length; i++) {
  //     if (option4[j].drinkName === option4[i].drinkName && j !== i) {
  //       option4[i] = "";
  //     }
  //   }
  // }
  // console.log("OPTION 444444", option4);


*/

// var science;
// var maths;

// if (science > 6 || maths > 5) {
//   if (science >= 10 && science <= 15 && maths >= 10 && maths <= 20) {
//     alert("You are in general Arts");
//   }

//   if ((science >= 16 && science <= 30) || (maths >= 21 && maths <= 30)) {
//     alert("You are in Business");
//   }

//   if (science > 30 && maths > 30) {
//     alert("You are in general Arts");
//   }
// } else {
//   alert("Go home");
// }
