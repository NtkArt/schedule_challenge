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
      alert("Funcao ainda nao implementada. Desculpe.")
    });
  });
  return editUser;
}

function deleteUser(index) {
  console.log('deu', index);
  const editUser = $(document).ready(function () {
    $('.table-content').click(() => {
      const nameArray = sessionStorage.getItem('name');

      const name = JSON.parse(nameArray);

      console.log(name[index]);
      name.splice(index, 1);
      sessionStorage.setItem('name', JSON.stringify(name));
      console.log('names', names);
    });
  });
  document.location.reload();
  return editUser;
}

allStorage();
