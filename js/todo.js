const toDoForm = document.getElementById("todo-form");
//todo-form 이라는id를 가진 HTMl form을 가져온다
const toDoInput = document.querySelector("#todo-form input");
//두가지 옵션이 있는데 첫번쨰는 HTML 전체 요소에서 검색하는 것이고
// 두번째 옵션은 첫째줄에 toDoForm변수를 이용해 todo-form id 에서만 찾는것
const toDoList = document.getElementById("todo-list");
//default things that submit does is recreate the page so we should stop it
//How can we stop? --> preventDefault();
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {//이 함수의 의의는 웹사이트가 새로고침되면 값들이 사라지기 때문에 local storage에 저장하기 위함

    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//setItem 함수는 key값과 value를 인자로 전달한다
    //여기서 key값은 todos이고 value는 toDos(배열이다) 이 함수가 호출되는 시점에 toDos배열에는 input값들이 저장되어있다.
}
function deleteToDo(event) {
    const li = event.target.parentElement;
    //const li_id = li.id;

    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();//filter은 새로운 array를 만드는 것이 아니기 때문에 save를 해줘야함

}
function paintToDo(newTodo) {//이 함수의 의의는?-->input 받은 값을 바탕으로 span 안에 input값을 넣고 리스트로 만든다 버튼과 함꼐
    //console.log("I will paint", newTodo);
    //HTml에 리스트를 추가하는 것
    
    const li = document.createElement("li");
    li.id = newTodo.id;
    //localStorage.setItem("id", li.id);
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    //console.log(li);
    //이제 li를 HTMl에 todo-list form에 넣으면됨
    toDoList.appendChild(li);//6번쨰 줄에 id 를 가져왔어 변수 이용하면 됨.
    //HTML에 특정ID나 특정 form 에 값을 집어넣고 싶다면 , 변수에 queryselector, getElementById를 통해서 불러오자
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;//original 값을 기억하기 위해서 저장한것
   // console.log(toDoInput.value); 여기서 기억해야 할 것 .
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    //확실한 input 값을 얻고 싶으면 .vlaue를 붙이는 것 기억하기
    toDos.push(newTodoObj);
    toDoInput.value = "";
    //값을 입력하고 빈칸으로 바꾸기 위해서
    paintToDo(newTodoObj);//16번째 저장한 변수를 함수에 인자로 전해준다
    saveToDos();
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos)//savedToDos가 빈값이 아니라면
{

    const parsedToDos = JSON.parse(savedToDos);//localstorage에 있는 값을 object화 하는 과정임.
    toDos = parsedToDos;//local storage에 이전 값들을 남겨두기 위해서

    //console.log(parsedToDos);
    parsedToDos.forEach(paintToDo);
   // parsedToDos.forEach((item) => console.log("this it the turn of " , item));//foreach는 인자로 준 함수를 각 idx에 대해서 수행하는데 idx[0]접근후 실행 ,idx[1]에 접근하고 실행. 이런식으로 진행됨
}// Arrow function 이 가독성이 더 좋고 간결하다 => 를 arrow function이라고 함

