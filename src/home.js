import photo from "./imagep.jpeg"

  export const divContent = document.querySelector("#content");

export const addElementstoDiv = function () {
  
     
        const newH1 = document.createElement('h1');
        const image = document.createElement('img');
        const text = document.createElement('p');
 
        newH1.textContent = 'This is the best restaurant';
        image.src = photo;
        text.textContent = "wooow";

      
        divContent.appendChild(newH1);
        divContent.appendChild(image);
        divContent.appendChild(text);
    }
