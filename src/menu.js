  import { divContent } from "./home" 



export const addMenu = function () {
  
     
        const menu = document.createElement('h1');
        const list = document.createElement('p');
 
        menu.textContent = 'Menu';
        list.textContent = 'List items and prices';

      
        divContent.appendChild(menu);
        divContent.appendChild(list);


    };