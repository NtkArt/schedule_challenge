function allStorage() {
  var archive = [],
    keys = Object.keys(sessionStorage),
    i = 0,
    key;

  for (; (key = keys[i]); i++) {
    archive.push(key + '=' + sessionStorage.getItem(key));
  }

  return archive;
}

function editUser(index) {
  const userData = $(document).ready(function () {
    $('#btnSubmit').click(() => {
      alert('Funcao ainda nao implementada. Desculpe.');
    });
  });
  return editUser;
}

function deleteUser(index) {
  console.log('deu', index);
  const editUser = $(document).ready(function () {
    $('.table-content').click(() => {
      const nameArray = sessionStorage.getItem('name');
      const emailArray = sessionStorage.getItem('email');
      const telArray = sessionStorage.getItem('tel');

      const name = JSON.parse(nameArray);
      const email = JSON.parse(emailArray);
      const tel = JSON.parse(telArray);

      name.splice(index, 1);
      email.splice(index, 1);
      tel.splice(index, 1);

      sessionStorage.setItem('name', JSON.stringify(name));
      sessionStorage.setItem('email', JSON.stringify(email));
      sessionStorage.setItem('tel', JSON.stringify(tel));
    });
  });
  document.location.reload();
  return editUser;
}

allStorage();
