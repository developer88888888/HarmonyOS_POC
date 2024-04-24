function openDialog() {
  setTimeout(() => {
    console.log('h5 receive native message');
    document.getElementById('myDialog').show();
  }, 2000);
}

function closeDialog() {
  document.getElementById('myDialog').close();
}