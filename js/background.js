const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg",
];// �� idx ��ҵ��� ������ img ������ �� �̹��� �̸��� ���� ����
const chosenImage = images[Math.floor(Math.random() * images.length)];
//const body = document.querySelector("body");
//console.log(body);
//for now, create  elements and put to HTML
//src=source
//������ HTML�� �ְ� �ʹ���? --> <img src="0.jpeg"/>�̷� ���¸� HTMl�� �ְ�ʹ�
//��� HTML�� ���� �߰��ϴ���?
const bgImage = document.createElement("img");
//createElement�� ���ؼ� element�� ���� �� ����.
bgImage.src = `img/${chosenImage}`;
//bgImage.src = `img/0.jpeg`;

console.log(bgImage);
//��ƽ`` + ${} �߰�ȣ�ȿ��� ������ �ؽ�Ʈ�� �� �� �ִ�.
//���������� �츮�� �ؾ��ϴ� ���� ������ ��Ҹ� HTML <body>�±� �ȿ� �ִ°���
document.body.appendChild(bgImage);//appendChild�� ��������ҿ� �߰���. ������ �ο��ϰ� �ʹٸ� �ٸ� �Լ��� ����
//console.log(body);




