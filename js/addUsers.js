function onLoad() {
  $(document).ready(function () {
    $('.phone_with_ddd').mask('(00) 00000-0000')
  });
}

function addUser() {
  const userData = $(document).ready(function () {
    const nameArray = sessionStorage.getItem('name');
    const emailArray = sessionStorage.getItem('email');
    const telArray = sessionStorage.getItem('tel');

    const name = $('#name').val();
    const email = $('#email').val();
    const tel = $('#tel').val();

    let names = [];
    let emails = [];
    let tels = [];

    if (nameArray && emailArray && telArray) {
      names = [...JSON.parse(nameArray), name];
      emails = [...JSON.parse(emailArray), email];
      tels = [...JSON.parse(telArray), tel];
    } else {
        names.push(name);
        emails.push(email);
        tels.push(tel);
    }

    sessionStorage.setItem('name', JSON.stringify(names));
    sessionStorage.setItem('email', JSON.stringify(emails));
    sessionStorage.setItem('tel', JSON.stringify(tels));
  });
  return userData;
}
