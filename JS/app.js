console.log("This is Project 3.");

//Initialisaton
let apiKey = '5aa7b02de90d4ed8ae6e8c3c3c8b34a9';
let source = 'bbc-news';

// grabing the element by id
let newsAccordion = document.getElementById('newsAccordion');

//Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://newsapi.org/v2/top-headlines?country=in&apiKey=5aa7b02de90d4ed8ae6e8c3c3c8b34a9', true);

//What to do when response is ready.
xhr.onload = function () {
  if(this.status === 200) 
  {
    let json  = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = '';

    articles.forEach(function (element , index) {
      let news = `<div class="card">
              <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                  <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                  <b>Breaking News ${index+1} : </b> ${element["title"]}
                  </button>
                  </h2>
              </div>

              <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                <div class="card-body">
                  <!-- img src="${element["urlToImage"]}" alt="Image"> -->
                  ${element["content"]}.
                  <a href= ${element["url"]} target = "_blank"> Read more here. </a>
                </div>
              </div>
            </div>` ;
      newsHtml += news;
    });
      newsAccordion.innerHTML = newsHtml;
  }
  else{
    console.error("Some error occured.");
  }
}

//Send the XMLHttpRequest
xhr.send();



