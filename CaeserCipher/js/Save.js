function save1(){
    let text = document.getElementById('out').value;
    let number = Math.ceil(Math.random() * 10000);

    if(localStorage.getItem(number) != null)
    {
        while (localStorage.getItem(number) != null)
        {
        number = Math.ceil(Math.random() * 10000);
        }
    }
    localStorage.setItem(number.toString(), text);

    alert('ID твоего сохранения: ' + number);
}

function save2(){
    let text = document.getElementById('out2').value;
    let number = Math.ceil(Math.random() * 10000);

    if(localStorage.getItem(number) != null)
    {
        while (localStorage.getItem(number) != null)
        {
        number = Math.ceil(Math.random() * 10000);
        }
    }
    localStorage.setItem(number.toString(), text);

    alert('ID твоего сохранения: ' + number);
}

function showE(){
    let number = document.getElementById('pin').value;

    document.getElementById('cipher').value = localStorage.getItem(number.toString());
}