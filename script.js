var textbox = document.getElementById('text-box')
    var button = document.getElementById("btn")

    button.addEventListener('click',testClick)
    
    function testClick(){

    var ul = document.getElementById('ul')
    var li = document.createElement('li')
    li.textContent = textbox.value
    li.setAttribute('style','padding:10px;')
    ul.appendChild(li)
    
    var del = document.createElement('button')
    del.textContent = 'delete'
    del.setAttribute('class','bu1')
    ul.appendChild(del)

    }