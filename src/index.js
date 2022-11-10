import _ from "lodash";
import "./style.css";
import Tree from "./tree.png";
import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const img = new Image();
  img.src = Tree;
  element.appendChild(img);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
