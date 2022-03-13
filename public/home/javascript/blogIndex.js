var bodyPart = document.getElementById('bodyPart');

function bodyPartCheck() {
    if (bodyPart.innerHTML == "请输入正文（限制在200-40000字以内）") {
        bodyPart.style.color = "#757575";
    }

}
bodyPartCheck();
bodyPart.addEventListener('focus', () => {
    if (bodyPart.innerHTML == "请输入正文（限制在200-40000字以内）") {
        bodyPart.innerHTML = "";
        bodyPart.style.color = "black";
    }
})


bodyPart.addEventListener('blur', () => {
    if (bodyPart.innerHTML == "") {
        bodyPart.innerHTML = "请输入正文（限制在200-40000字以内）";
        bodyPart.style.color = "#757575";
    }
})

// 富文本编辑器

var lis = document.getElementById('editFunctionButton').getElementsByTagName('li');



lis[0].addEventListener('click', () => {
    console.log(1);
    document.execCommand('fontSize', false, '5')
})

var lisFlag = false;

lis[lis.length - 1].addEventListener('click', () => {
    lisFlag = !lisFlag;
    console.log(lisFlag);
})