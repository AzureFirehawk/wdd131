const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');



button.addEventListener('click', function (){
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    if (input.value.trim() !== ""){
        li.innerHTML = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        input.value = '';
        input.focus();
    } else {
        input.value = '';
        input.focus();
    }
});