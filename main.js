//Get Input Element
let filterInput = document.getElementById('filterInput')
//Add Event Listener
filterInput.addEventListener('keyup', filternames);

function filternames(){
    //Get value of Input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    //Get names ul
    let ul = document.getElementById('names');
    //Get li's from ul
    let li = ul.querySelectorAll('li.collection-item');
    var flag = false;
    //loop thru collection items li
    for (let i = 0; i < li.length; i++)
    {
        let a = li[i].getElementsByTagName('a')[0];
        //If matches
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
            flag = true;
        }
        else{
            li[i].style.display = 'none';
        }
    }
    if (flag == false)
    alert('Match Not Found!');
}