
let SearchNews = async (url) => {
   
    try {
            let res = await fetch(url);
            let data = await res.json();
            return data.articles;
    } catch (err) {
        console.log(err);
    }
}

let append = ( data, result ) => {
    data.forEach( ( {urlToImage, title, description, content }) => {
        let box = document.createElement("div");
        box.setAttribute("class", "box");

        let req = {
            urlToImage, title, content
        }
        box.addEventListener("click", function ( ){
            nextPage(req) ;
        });

        let div = document.createElement("div");
        let details = document.createElement("div");
        details.setAttribute("class", "news")

        let img = document.createElement("img");
        img.src = urlToImage;
        img.setAttribute("class", "images")
        let name = document.createElement("h3");
        name.innerText = title;
        
        let detail = document.createElement("p");
        detail.innerText = description;

        details.append(name,detail);
        div.append(img);
        box.append(div, details);
        result.append(box);
    })
};


let search = async (ev) => {
    if (ev.key === "Enter" )
    {
        let query = document.querySelector("#search_input").value;
        let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`;
        let news = await SearchNews(url);
        console.log(news);
        localStorage.setItem("news", JSON.stringify(news));
        window.location.href = "search.html";
    }
};

export {SearchNews, append, search} ;
