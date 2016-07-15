
function generate_code() {
  // TODO: Check for any input blocks that don't have inputs and ignore them.
  var code = Blockly.Python.workspaceToCode(workspace);
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/accept.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("code=" + code);
}
