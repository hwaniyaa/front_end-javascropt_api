
let news = []
// [1] api불러오기
const getLatestNews =async()=> {
  let url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business`);
  
  let header = new Headers({'x-api-key':'JJuWDXzbFQMEqpjpqDKtNwDUzaZgNpmQP4mr400GiUg'});

  let response = await fetch(url,{headers:header});
  let data = await response.json()
  news = data.articles;
  console.log(news);

  render();
};

// [2] 뉴스 가져와서 화면에 뿌리기
const render =()=> {
  let newsHTML = ''
  newsHTML = news.map((item) =>{
    return `
    <div class="row news">
        <div class="col-lg-4">
          <img class="news-img-size" src="${item.media}" alt="">
        </div>
        <div class="col-lg-8">
          <h2>${item.title}</h2>
          <p>${item.summary}</p>
          <div>${item.rights} * ${item.published_date}</div>
        </div>
      </div>
    `
  }).join(''); // [.join('');] , 찍혀있는 쓸때없는 택스트를 없애줌

  document.querySelector("#news-board").innerHTML = newsHTML;
}
getLatestNews();