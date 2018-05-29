const electron = require('electron');
  const  { ipcRenderer } = electron;
   document.querySelector('form').addEventListener('submit', (event) => {
     event.preventDefault();
     const login = document.getElementById('login').value;
     const password = document.getElementById('password').value;
     ipcRenderer.send('adm:login', login, password);
   });

   ipcRenderer.on('adm:loginfail', () => {
     const message = document.getElementById('message');
     message.innerHTML = 'Login ou senha incorretos.';
   });