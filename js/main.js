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



allStorage();
