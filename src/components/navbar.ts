/* Copyright (C) 2021 - Developers: ShinkuKira21, *Add your name to the list here. * - 
    Usage Terms: The individual can use this template in a open-source or freeware manor. 
    Feel free to tweak and make any comments to improve the template. */

export default class NavBar {
    output: string;

    constructor(value: string, pages: string[], names: string[]) 
    { 
        this.output = "<ul>";

        for(let i = 0; i < pages.length; i++)
        {
            this.output += "<li>"; this.output += "<a ";

            if(value == '/' + pages[i] || value == '/' && pages[i] == '/') this.output += "class='active' ";

            this.output += "href='" + pages[i] + "'>";

            this.output += names[i];

            this.output += "</a>";
            this.output += "</li>";
        }

        this.output += "</ul>";
        
    }

    NavBar() {
        return this.output;
    }
}