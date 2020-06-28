//Get my repositories from Github to be shown in my projects section
function get_github_repos() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.github.com/users/aswinvisva/repos?affiliation:owner", false); // false for synchronous request
    xmlHttp.send(null);
    // console.log(xmlHttp.responseText)
    var json = JSON.parse(xmlHttp.responseText);
    var colors = ['#1B1B1E', '#CF5C36', '#A9BCD0', '#153243'];
    var rowDiv = document.createElement("Div")
    rowDiv.setAttribute('class', 'justify-content-center')

    const shuffled = Object.keys(json).sort(function() {
        return .5 - Math.random();
    });

    n = 5;
    counter = 0

    for (var key in shuffled) {

        if (counter >= n) {
            break;
        }

        // Creating a div element
        var divElement = document.createElement("Div");
        var fade_up_div = document.createElement("Div");
        var blog_div = document.createElement("Div");
        var blog_details = document.createElement("Div")
        var a = document.createElement("a");
        a.href = json[shuffled[key]]["html_url"];

        // divElement.id = "divID";


        divElement.setAttribute('class', 'project-area   featured-projects animated fadeInUp');
        blog_div.setAttribute('class', 'single-blog showcaseditem-1 justify-content-center');
        blog_details.setAttribute('class', 'blog-details');

        // Adding a paragraph to it
        var paragraph = document.createElement("P");
        var heading = document.createElement("h2")

        var name = document.createTextNode(json[shuffled[key]]["name"]);
        var text = document.createTextNode(json[shuffled[key]]["description"]);

        heading.appendChild(name);
        paragraph.appendChild(text);

        heading.style.paddingBottom = "120px";
        heading.style.paddingTop = "20px";
        heading.style.paddingLeft = "20px";
        heading.style.fontSize = "100px";
        heading.style.lineHeight = "75pt";
        heading.style.overflowWrap = "break-word";

        paragraph.style.lineHeight = "45pt";
        paragraph.style.paddingLeft = "20px";

        blog_div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        blog_div.style.fontSize = "40px";
        blog_div.style.borderRadius = "20px";
        // blog_div.style.width = "50%";

        blog_details.appendChild(heading);
        blog_details.appendChild(paragraph);
        blog_div.appendChild(blog_details);
        fade_up_div.appendChild(blog_div);
        divElement.appendChild(fade_up_div);
        a.appendChild(divElement);
        rowDiv.appendChild(a);

        // Appending the div element to body
        counter++;
    }

    document.body.appendChild(rowDiv);


    // return xmlHttp.responseText;
}

get_github_repos()