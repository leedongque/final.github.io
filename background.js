const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
];// 각 idx 요소들의 값들이 img 폴더의 각 이미지 이름과 같게 하자
const chosenImage = images[Math.floor(Math.random() * images.length)];
//const body = document.querySelector("body");
//console.log(body);
//for now, create  elements and put to HTML
//src=source
//무엇을 HTML에 넣고 싶느냐? --> <img src="0.jpeg"/>이런 형태를 HTMl에 넣고싶다
//어떻게 HTML에 새로 추가하느냐?
const bgImage = document.createElement("img");
//createElement를 통해서 element를 만들어낼 수 있음.
bgImage.src = `img/${chosenImage}`;
//bgImage.src = `img/0.jpeg`;

console.log(bgImage);
//백틱`` + ${} 중괄호안에는 변수나 텍스트가 들어갈 수 있다.
//마지막으로 우리가 해야하는 일은 생성된 요소를 HTML <body>태그 안에 넣는거지
document.body.appendChild(bgImage);//appendChild는 마지막요소에 추가됨. 순서를 부여하고 싶다면 다른 함수도 있음
//console.log(body);




