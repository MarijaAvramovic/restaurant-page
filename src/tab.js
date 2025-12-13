import { divContent } from "./home";

export const tab = function(btn, whatToDo) {

    btn.addEventListener("click", function() {
        divContent.innerHTML = '';
    });

    btn.addEventListener("click", whatToDo);
    



}