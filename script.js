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

/*
 *  Listen to the button
 */
let showStarter = function () {
    $("fortune").addEventListener("click", getNewContent);
}

window.addEventListener("load", showStarter);