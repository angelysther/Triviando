function checkEmpty() {
  if (document.forms['frm'].question.value === "") {
    alert("empty");
    return false;
  }
  return true;
}