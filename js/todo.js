const toDoForm = document.getElementById("todo-form");
//todo-form �̶��id�� ���� HTMl form�� �����´�
const toDoInput = document.querySelector("#todo-form input");
//�ΰ��� �ɼ��� �ִµ� ù������ HTML ��ü ��ҿ��� �˻��ϴ� ���̰�
// �ι�° �ɼ��� ù°�ٿ� toDoForm������ �̿��� todo-form id ������ ã�°�
const toDoList = document.getElementById("todo-list");
//default things that submit does is recreate the page so we should stop it
//How can we stop? --> preventDefault();
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {//�� �Լ��� ���Ǵ� ������Ʈ�� ���ΰ�ħ�Ǹ� ������ ������� ������ local storage�� �����ϱ� ����

    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//setItem �Լ��� key���� value�� ���ڷ� �����Ѵ�
    //���⼭ key���� todos�̰� value�� toDos(�迭�̴�) �� �Լ��� ȣ��Ǵ� ������ toDos�迭���� input������ ����Ǿ��ִ�.
}
function deleteToDo(event) {
    const li = event.target.parentElement;
    //const li_id = li.id;

    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();//filter�� ���ο� array�� ����� ���� �ƴϱ� ������ save�� �������

}
function paintToDo(newTodo) {//�� �Լ��� ���Ǵ�?-->input ���� ���� �������� span �ȿ� input���� �ְ� ����Ʈ�� ����� ��ư�� �Բ�
    //console.log("I will paint", newTodo);
    //HTml�� ����Ʈ�� �߰��ϴ� ��
    
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
    //���� li�� HTMl�� todo-list form�� �������
    toDoList.appendChild(li);//6���� �ٿ� id �� �����Ծ� ���� �̿��ϸ� ��.
    //HTML�� Ư��ID�� Ư�� form �� ���� ����ְ� �ʹٸ� , ������ queryselector, getElementById�� ���ؼ� �ҷ�����
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;//original ���� ����ϱ� ���ؼ� �����Ѱ�
   // console.log(toDoInput.value); ���⼭ ����ؾ� �� �� .
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    //Ȯ���� input ���� ��� ������ .vlaue�� ���̴� �� ����ϱ�
    toDos.push(newTodoObj);
    toDoInput.value = "";
    //���� �Է��ϰ� ��ĭ���� �ٲٱ� ���ؼ�
    paintToDo(newTodoObj);//16��° ������ ������ �Լ��� ���ڷ� �����ش�
    saveToDos();
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos)//savedToDos�� ���� �ƴ϶��
{

    const parsedToDos = JSON.parse(savedToDos);//localstorage�� �ִ� ���� objectȭ �ϴ� ������.
    toDos = parsedToDos;//local storage�� ���� ������ ���ܵα� ���ؼ�

    //console.log(parsedToDos);
    parsedToDos.forEach(paintToDo);
   // parsedToDos.forEach((item) => console.log("this it the turn of " , item));//foreach�� ���ڷ� �� �Լ��� �� idx�� ���ؼ� �����ϴµ� idx[0]������ ���� ,idx[1]�� �����ϰ� ����. �̷������� �����
}// Arrow function �� �������� �� ���� �����ϴ� => �� arrow function�̶�� ��

