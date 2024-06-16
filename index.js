const button = document.getElementById('add');
var huge = document.querySelector('.container');

button.addEventListener('click', () => {
    var inp = document.querySelector('input').value;
    if (inp === '') {
        alert('Please write something');
    }
     else {
        console.log(inp);
        let biggerdiv = document.createElement('div');
        let newdiv = document.createElement('div');
        let para = document.createElement('li');
        let but = document.createElement('button');
        but.innerHTML = 'remove';
        but.style.color = 'white';
        but.style.fontWeight = 'bolder';
        but.style.background = 'rgb(222, 198, 16)';
        but.style.border = 'none';
        but.style.borderRadius = '10px';
        but.style.height = '30px';
        but.style.width = '100px';
        but.addEventListener('click', () => {
            newdiv.remove();
        });

        para.innerHTML = inp;
        huge.appendChild(biggerdiv);
        biggerdiv.appendChild(newdiv);
        newdiv.appendChild(para);
        newdiv.appendChild(but);

        biggerdiv.style.background = 'rgb(206, 201, 201)';
        newdiv.style.background = 'rgb(168, 162, 162)';
        newdiv.style.width = '480px';
        biggerdiv.style.borderBottomLeftRadius = '10px';
        biggerdiv.style.borderBottomRightRadius = '10px';

        newdiv.style.position = 'relative';
        newdiv.style.top = '-19px';
        newdiv.style.padding = '10px';
        newdiv.style.display = 'flex';
        newdiv.style.alignItems = 'center';
        newdiv.style.justifyContent = 'space-between';
        
        // Clear input field after adding a new item
        document.querySelector('input').value = '';
    }
});


