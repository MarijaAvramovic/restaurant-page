import { addElementstoDiv } from "./home";
import "./style.css";
import { addMenu } from "./menu";
import { addContact } from "./contact";
import { tab } from "./tab";
import { btnContact, btnMenu, btnHome } from "./buttons"



tab(btnContact, addContact);
tab(btnMenu, addMenu);
tab(btnHome, addElementstoDiv);

// // buttons
//  addElementstoDiv();
//  addPhotoToDiv();
//  addTextToDiv();
// addMenu();
// addContact();
 
 

 

 