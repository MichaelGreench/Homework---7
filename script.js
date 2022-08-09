
    function getUsersfromServer() {
        let request = new XMLHttpRequest();

    request.addEventListener('load', function() {
        let dabrunebuli = this.responseText;
        let newdabrunebuli = JSON.parse(dabrunebuli);

        console.log(newdabrunebuli);

        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.textContent = newdabrunebuli.data[0].id + ' ' + newdabrunebuli.data[0].first_name + ' ' + newdabrunebuli.data[0].last_name + ' ' + newdabrunebuli.data[0].email;
        
        ul.appendChild(li);
        document.getElementById('users').appendChild(ul);
    })
    
    request.open('GET', 'https://reqres.in/api/users?page=2');
    request.send();
    }
    
    getUsersfromServer();

