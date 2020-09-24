function onEdit(td) {
  console.log('editando');
  selectedRow = td.parentElement.parentElement;
  document.getElementById('name').value = selectedRow.cells[0].innerHTML;
  document.getElementById('email').value = selectedRow.cells[1].innerHTML;
  document.getElementById('tel').value = selectedRow.cells[2].innerHTML;
  document.getElementById('city').value = selectedRow.cells[3].innerHTML;
}
