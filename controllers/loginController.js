const electron = require('electron');
  const  { ipcRenderer } = electron;
   document.querySelector('form').addEventListener('submit', (event) => {
     event.preventDefault();
     const login = document.getElementById('login').value;
     const password = document.getElementById('password').value;
     const message = document.getElementById('message');
     message.innerHTML = '*';
     ipcRenderer.send('adm:login', login, password);


   });

   ipcRenderer.on('adm:loginfail', () => {
     const login = document.getElementById('login').value;
     const password = document.getElementById('password').value;
     const message = document.getElementById('message');
     login.value = '';
     password.value = '';
     message.innerHTML = 'Login ou senha incorretos.';
   });
