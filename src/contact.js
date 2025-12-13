import { divContent } from "./home" 


 
 export const addContact = function() {

    const contactDiv = document.createElement('div');
    

    const contact = {
    name: "Pyra Mid",
    email: "john.doe@example.com",
    phone: "555-1234"
};
 

contactDiv.innerHTML = `
    <h2>${contact.name}</h2>
    <dl>
        <dt>E-mail address</dt>
        <dd><a href="mailto:${contact.email}">${contact.email}</a></dd>
        <dt>Phone number</dt>
        <dd><a href="tel:${contact.phone}">${contact.phone}</a></dd>
    </dl>
`;

 divContent.appendChild(contactDiv);
 }
;
