import * as React from "react";
import Meeting from "../assets/svg/meeting_planers";
import Travels from "../assets/svg/travels";
import Teams from "../assets/svg/teams";
import Vr360 from "../assets/svg/vr360";
import Vr from "../assets/svg/vr";
import Sf from "../assets/svg/sf";
import Sa from "../assets/svg/sa";

export default function MenuLateral({
  menuOption,
  menuOptionIndex,
  setMenuOptionIndex,
  setMenuOption,
  setSelectedOption,
}) {
  const handleSelectCategory = (indice, option, section) => {
    setSelectedOption(option);
    setMenuOption(section);
    setMenuOptionIndex(indice);
  };

  return (
    <nav className="menu_lateral">
      <ul>
        <li>
          <a
            onClick={() => {
              handleSelectCategory(1, "servicios", "meeting");
            }}
            className={menuOptionIndex == 1 ? "seleccionado" : ""}
          >
            <Meeting></Meeting>
            <span>Meeting planners</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              handleSelectCategory(2, "servicios", "vr");
            }}
            className={menuOptionIndex == 2 ? "seleccionado" : ""}
          >
            <Vr></Vr>
            <span>Virtual Reality</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              handleSelectCategory(3, "servicios", "travels");
            }}
            className={menuOptionIndex == 3 ? "seleccionado" : ""}
          >
            <Travels></Travels>
            <span>Incentive Travels</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              handleSelectCategory(4, "servicios", "team");
            }}
            className={menuOptionIndex == 4 ? "seleccionado" : ""}
          >
            <Teams></Teams>
            <span>Team Building</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              handleSelectCategory(5, "servicios", "360");
            }}
            className={menuOptionIndex == 5 ? "seleccionado" : ""}
          >
            <Vr360></Vr360>
            <span>360 & VR productions</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              handleSelectCategory(6, "servicios", "sf");
            }}
            className={menuOptionIndex == 6 ? "seleccionado" : ""}
          >
            <Sf></Sf>
            <span>Sustainable furniture</span>
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              handleSelectCategory(7, "servicios", "sa");
            }}
            className={menuOptionIndex == 7 ? "seleccionado" : ""}
          >
            <Sa></Sa>
            <span>Sustainable activations</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
