/* Copyright (C) 2021 - Developers: ShinkuKira21, *Add your name to the list here. * - 
    Usage Terms: The individual can use this template in a open-source or freeware manor. 
    Feel free to tweak and make any comments to improve the template. */

export default class NavBar {
    output: string;
    bActive = false;
    constructor(value: string, pages: string[], names: string[]) { 
        this.output = `<nav class='navbar navbar-expand-lg navbar-light bg-light'>
            <a class='navbar-brand' href='/'>` + document.title + `</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                <div class='navbar-nav'>`

        for(let i = 0; i < pages.length; i++)
        {
            this.output += "<a class='nav-item nav-link";

            if(value == '/' + pages[i] || value == '/' && pages[i] == '/') 
            { this.bActive = !this.bActive; this.output += " active'"; }
            else this.output += "'";

            this.output += "href='" + pages[i] + "'>";

            this.output += names[i];

            this.output += "</a>";
        }
        this.output += "</div></div></nav>";        
    }

    NavBar() {
        return this.output;
    }
}