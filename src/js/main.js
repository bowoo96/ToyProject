// 스와이퍼 적용
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
const swiper = new Swiper('.swiper',{})


// 변수들
// 모달창 슬라이드 변수들
const bcButton = document.querySelector('.bc-button');
const container = document.querySelector('.breakdown-container');
const listHeight = document.querySelector('.breakdown-list>div');
let booleanResult = true;

// date 불러오는 변수들
let time = new Date();
let month = time.getMonth()+1;
let date = time.getDate();
let sum = 0;


const slideTop = function (){
    container.style.transform = 'translate(0,-250px)';
    container.style.transitionDuration = '0.5s';
    listHeight.style.height = '560px';
}

const slideBottom = function(){
    container.style.transform = 'translate(0,0)';
    container.style.transitionDuration = '0.5s';
}

let result = function(){
    if(booleanResult){
        booleanResult = !booleanResult;
        slideTop();
    }else{
        booleanResult = !booleanResult;
        slideBottom();
        setTimeout(function(){
            listHeight.style.height = '300px';
        },300);
    }
}

bcButton.addEventListener('click',result);


// json파일에서 li에 넣을 데이터 가져오기.
// fetch("https://eulsoo.github.io/generated_1.json")
//   .then((response) => response.json())
//   .then((data) => {
//     for(let i = 0; i < data.length; i++){
//         console.log(data[i].item);
//         let addLi = document.createElement("li");
//         let addSpan1 = document.createElement("span");
//         let addSpan2 = document.createElement("span");
//         listUl.appendChild(addLi);
//         addLi.appendChild(addSpan1);
//         addLi.appendChild(addSpan2);
//         addSpan1.innerHTML = `${data[i].item}`;
//         addSpan2.innerHTML = `${data[i].price}`;
        
//         let jsonMonth = `${data[i].date.substr(5,1)}`;
//         let jsonDate = `${data[i].date.substr(7,1)}`;
//         console.log(jsonMonth,jsonDate);
//         console.log(month,date);
//         //현재 날짜와 date값 비교
//         if(month === jsonMonth && date === jsonDate){
//             console.log(month,date,`오늘`)
//         }
//     }
//   });


// json에서 가져온 데이터 날짜별로 적용.

const data = [
    {
      "date": "2022.5.8",
      "inOut": "in",
      "type": "mart",
      "item": "용돈",
      "price": 20000
    },
    {
      "date": "2022.5.8",
      "inOut": "out",
      "type": "health",
      "item": "샐러드",
      "price": 10000
    },
    {
      "date": "2022.5.8",
      "inOut": "out",
      "type": "eatout",
      "item": "맛있어돈까스",
      "price": 8000
    },
    {
      "date": "2022.5.9",
      "inOut": "out",
      "type": "mart",
      "item": "이마트",
      "price": 36000
    },
    {
      "date": "2022.5.9",
      "inOut": "out",
      "type": "eatout",
      "item": "놀부보쌈",
      "price": 1200
    },
    {
      "date": "2022.5.9",
      "inOut": "in",
      "type": "mart",
      "item": "김밥천국",
      "price": 10000
    },
    {
      "date": "2022.5.10",
      "inOut": "out",
      "type": "mart",
      "item": "쌈밤",
      "price": 20000
    },
    {
      "date": "2022.5.10",
      "inOut": "out",
      "type": "mart",
      "item": "콜라",
      "price": 10000
    },
    {
      "date": "2022.5.10",
      "inOut": "out",
      "type": "eatout",
      "item": "택시",
      "price": 30000
    },
    {
      "date": "2022.5.10",
      "inOut": "out",
      "type": "eatout",
      "item": "짜장면",
      "price": 29900
    }
  ]

    // 태그 생성
    
    

    // 반복문으로 div 4개 만들기..
    for(let j = 1; j < 5; j++){
        let addDiv = document.createElement("div");
        let breakDownDiv = document.querySelector('.breakdown-list>div');
        let addListHeader = document.createElement("div");
        let addH4 = document.createElement("h4");
        let addUl = document.createElement("ul");
        let addSpan = document.createElement("span");

        breakDownDiv.appendChild(addDiv);
        addDiv.appendChild(addListHeader).className = "list-header";
        addDiv.appendChild(addUl).className = "list";
        addListHeader.appendChild(addH4);
        addListHeader.appendChild(addSpan);
    }

    // 생성한 태그 적용
    
    


for(let i = 0; i < data.length; i++){

        let jsonMonth = Number(`${data[i].date.substr(5,1)}`);
        let jsonDate = Number(`${data[i].date.substr(7,2)}`);

        //현재 날짜와 date값 비교
        if(month === jsonMonth && date === jsonDate){

            let addLi = document.createElement("li");
            let addSpan1 = document.createElement("span");
            let addSpan2 = document.createElement("span");
            
            addUl.appendChild(addLi);
            addLi.appendChild(addSpan1);
            addLi.appendChild(addSpan2);
            addSpan1.innerHTML = `${data[i].item}`;
            addSpan2.innerHTML = `${data[i].price}`;
            addH4.innerHTML = '오늘';
            addSpan.innerHTML = `${sum += data[i].price}`

        }else if(month === jsonMonth && (date-1) === jsonDate){

            
            let addLi = document.createElement("li");
            let addSpan1 = document.createElement("span");
            let addSpan2 = document.createElement("span");
            
            addUl.appendChild(addLi);
            addLi.appendChild(addSpan1);
            addLi.appendChild(addSpan2);
            addSpan1.innerHTML = `${data[i].item}`;
            addSpan2.innerHTML = `${data[i].price}`;
            addH4.innerHTML = '어제';
            addSpan.innerHTML = `${sum += data[i].price}`
            
        }else if(month === jsonMonth && (date-2) === jsonDate){
            console.log(`2일전`);
        }else if(month === jsonMonth && (date-3) === jsonDate){
            console.log(`3일전`);
        }
    }
    