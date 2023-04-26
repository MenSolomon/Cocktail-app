import React, { useEffect, useRef, useState } from "react";
import bottle from "../images/bottle.webp";
import bottle2 from "../images/bottle2.webp";
import bottle3 from "../images/bottle3.webp";
import bottle4 from "../images/bottle4.webp";
import bottle5 from "../images/bottle5.webp";
import CaroCss from "../styles/carousel.module.css";

export const Carousel = () => {
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

  //   const styles = {
  //     animationName: "my-animation",
  //     animationDuration: "2s",
  //   };

  //   const keyframes = `
  //   @keyframes my-animation {
  //     from {
  //         opacity: 0;
  //       }
  //       to {
  //         opacity: 1;
  //   }
  // `;

  //   const styler = document.createElement("style");
  //   styler.appendChild(document.createTextNode(keyframes));
  //   document.head.appendChild(styler);

  return (
    <div className={CaroCss.container}>
      <div className={CaroCss.head} style={{ paddingTop: "10vh" }}>
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
              {" "}
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
              {" "}
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
              {" "}
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
  );
};

// 2 Wheat & Spire
// Wheated bourbon finished with a toasted French Oak spire

// 3 Wheat & Honey
// Wheated bourbon finished with a honey soaked American Oak spire

// 4 Bourbon & Spire
// Bourbon finished with a toasted American Oak spire

// 5 Rye & Spire
// Rye whiskey finished with a charred American Oak spire

// import React, { useEffect, useState } from "react";
// import bottle from "../images/bottle.webp";
// import bottle2 from "../images/bottle2.webp";
// import bottle3 from "../images/bottle3.webp";
// import bottle4 from "../images/bottle4.webp";
// import bottle5 from "../images/bottle5.webp";
// import CaroCss from "../styles/carousel.module.css";

// export const Carousel = () => {
//   useEffect(() => {
//     const slider = document.getElementsByClassName(`${CaroCss.head}`);
//   });

//   const [n, setN] = useState(-1);
//   const [add, setAdd] = useState(0);

//   const newStyle = {
//     transform: `translate(${add}%,0)`,
//     transition: ".7s",
//   };
//   const [style, setStyle] = useState({});

//   const moveNext = () => {
//     setAdd(add - 50);
//     console.log(add);
//     setN(n + 1);
//   };

//   const movePrev = () => {
//     setAdd(add + 50);
//     console.log(add);
//     setN(n - 1);
//   };

//   // 98 for 2 , 146 for 3
//   return (
//     <div className={CaroCss.container}>
//       <div style={newStyle} className={CaroCss.head}>
//         <img
//           // style={{ position: "relative", left: "246vw" }}
//           style={n >= 0 ? { position: "relative", left: "246vw" } : null}
//           src={bottle}
//         ></img>
//         <img
//           style={n >= 1 ? { position: "relative", left: "246vw" } : null}
//           src={bottle2}
//         ></img>
//         <img
//           style={n >= 2 ? { position: "relative", left: "246vw" } : null}
//           src={bottle3}
//         ></img>
//         <img
//           style={n >= 3 ? { position: "relative", left: "246vw" } : null}
//           src={bottle4}
//         ></img>
//         <img
//           style={n >= 4 ? { position: "relative", left: "246vw" } : null}
//           src={bottle5}
//         ></img>
//       </div>

//       <div className={CaroCss.buttons}>
//         <button onClick={movePrev}>Prev</button>
//         <button onClick={moveNext}>Next</button>
//       </div>
//     </div>
//   );
// };
