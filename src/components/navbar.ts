export default class NavBar {
    output: string;

    constructor(value, pages, names) 
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