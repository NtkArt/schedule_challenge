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
  console.log('deu', index);
  const editUser = $(document).ready(function () {
    $('.table-content').click(() => {
      const nameArray = sessionStorage.getItem('name');
      const emailArray = sessionStorage.getItem('email');
      const telArray = sessionStorage.getItem('tel');

      const name = $('#name').val();
      const email = $('#email').val();
      const tel = $('#tel').val();

      let names = [];
      let emails = [];
      let tels = [];

      names = [...JSON.parse(nameArray), name];
      emails = [...JSON.parse(emailArray), email];
      tels = [...JSON.parse(telArray), tel];
      console.log('names', names);
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

      const teste = JSON.parse(nameArray);

      console.log(teste[index]);
      teste.splice(index, 1);
      sessionStorage.setItem('name', JSON.stringify(teste));
      console.log('names', names);
    });
  });
  document.location.reload();
  return editUser;
}

allStorage();
