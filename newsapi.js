let apiKey="15100510b366408b8d6d270c24578197"
let url1=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
async function fetchNews(url){
    try{
        let res=await fetch(url);
        let data= await res.json();
        for(let i=0;i<9;i++){
            let box=document.querySelectorAll(".box");
            let s=data.articles[i].urlToImage;
            let img=document.createElement("img");
            img.src=s;
            box[i].appendChild(img);
            let p1=document.createElement("p")
            p1.innerText=data.articles[i].title;
            box[i].appendChild(p1);
            p1.classList.add("p1");
            let p2=document.createElement("p");
            p2.innerText=data.articles[i].description+"...."
            box[i].appendChild(p2)
            p2.classList.add("p2")
            let p3=document.createElement("p")
            p3.innerHTML=`read full article <div class="arrow"><span class="material-symbols-outlined">arrow_right_alt</span>`
            box[i].appendChild(p3);
            p3.classList.add("p3");
        }
    }catch(err){
        console.log("error",err);
    
}
}
fetchNews(url1);