import photo from "./imagep.jpeg"

 const divContent = document.querySelector("#content");

export const addElementstoDiv = function () {
  
     
        const newH1 = document.createElement('h1');
 
        newH1.textContent = 'This is the best restaurant';

      
        divContent.appendChild(newH1);
    }


    export const addPhotoToDiv = function () {
  
     
        const image = document.createElement('img');
 
       image.src = photo;

      
        divContent.appendChild(image);
    }


     export const addTextToDiv = function () {
  
     
        const text = document.createElement('p');
 
       text.textContent = "wooow";

      
        divContent.appendChild(text);
    }
