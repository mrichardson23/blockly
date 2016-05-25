
function generate_code() {
  var code = Blockly.Python.workspaceToCode(workspace);
  alert(code);
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/accept.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("code=" + code);
}
