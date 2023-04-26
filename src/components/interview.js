import React, { useEffect, useState } from "react";
import intCss from "../styles/interview.module.css";

const CATS = [
  {
    name: "Fluffikins",
    breed: "Orange tabby",
    url: "https://placekitten.com/800/600",
    description: "Loren ipsum dolor sit amet, cibsecteteur aduscping elit.",
    age: 8,
  },

  {
    name: "Blizzard",
    breed: "Calico",
    url: "https://placekitten.com/800/600",
    description: "Loren ipsum dolor sit amet, cibsecteteur aduscping elit.",
    age: 7,
  },

  {
    name: "Garfield",
    breed: "Maine Coon",
    url: "https://placekitten.com/800/600",
    description: "Loren ipsum dolor sit amet, cibsecteteur aduscping elit.",
    age: 4,
  },

  {
    name: "vanilla",
    breed: "siberian",
    url: "https://placekitten.com/800/600",
    description: "Loren ipsum dolor sit amet, cibsecteteur aduscping elit.",
    age: 1,
  },

  {
    name: "savannah",
    breed: "Scottish fold",
    url: "https://placekitten.com/800/600",
    description: "Loren ipsum dolor sit amet, cibsecteteur aduscping elit.",
    age: 10,
  },

  {
    name: "Soduku",
    breed: "Munchkin",
    url: "https://placekitten.com/800/600",
    description: "Loren ipsum dolor sit amet, cibsecteteur aduscping elit.",
    age: 7,
  },

  {
    name: "Brownie",
    breed: "Ragdoll",
    url: "https://placekitten.com/800/600",
    description: "Loren ipsum dolor sit amet, cibsecteteur aduscping elit.",
    age: 9,
  },

  {
    name: "Puffins",
    breed: "Bengal",
    url: "https://placekitten.com/800/600",
    description: "Loren ipsum dolor sit amet, cibsecteteur aduscping elit.",
    age: 6,
  },
];

const Interview = () => {
  //   (useEffect) => (() => {}, []);

  const newArray = CATS.slice(0, 6);

  return (
    <div className={intCss.container}>
      {/* {newArray.map((data, index) => (
        <div>
          <div className={intCss.cardBox}> </div>
          <div className={intCss.card} key={index}>
            <b>{data.name} </b> <br /> <br />
            {data.breed} . {data.age} Years <br /> <br />
            {data.description}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Interview;
