"use strict";
import {$} from "./modules/nQuery.js";
import {Ajax} from "./modules/Ajax.js";

/*
 * Event handler for fortune button - tests responseText
 */
let getNewContent = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("modules/byer.json", txtHandler);
}

let getNewContentTwo = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("modules/students.json", txtHandlerTwo);
}

/*
 * readystatechange/load event handler 
 * aka callback function
 * for the above AJaX
 */
let txtHandler = function(e) {
    /* ajax load event
     * puts received text 
     * onto the dom 
     * into the dom
     */

    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it
    for (let i = 0; i < obj.length; i++) {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let city = document.createTextNode(`${obj[i].name}`);
        td1.appendChild(city);
        let td2 = document.createElement("td");
        let population = document.createTextNode(`${obj[i].population}`);
        td2.appendChild(population);
        row.appendChild(td1);
        row.appendChild(td2);
        $("new").appendChild(row);
    }
}
let txtHandlerTwo = function(e) {
    /* ajax load event
     * puts received text 
     * onto the dom 
     * into the dom
     */

    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it
    for (let i = 0; i < obj.length; i++) {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let name = document.createTextNode(`${obj[i].firstname}`);
        td1.appendChild(name);
        let td2 = document.createElement("td");
        let lastname = document.createTextNode(`${obj[i].lastname}`);
        td2.appendChild(lastname);
        let td3 = document.createElement("td");
        let email = document.createTextNode(`${obj[i].email}`);
        td3.appendChild(email);
        let td4 = document.createElement("td");
        let bday = document.createTextNode(`${obj[i].bday}`);
        td4.appendChild(bday);
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);
        $("new-two").appendChild(row);
    }
}

/*
 *  Listen to the button
 */
let showStarter = function () {
    $("fortune").addEventListener("click", getNewContent);
    $("fortune-two").addEventListener("click", getNewContentTwo);
}

window.addEventListener("load", showStarter);