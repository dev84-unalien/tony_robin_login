function log(finUrl) {
  let mail = $("#login").val();
  let psw = $("#password").val();
  $.ajax({
    url: `http://192.168.1.112:8001/${finUrl}`,
    type: "POST",
    data: { email: mail, password:psw },
    success: function(recupdonnees) {
      alert(recupdonnees.message);
    }
  });
}
let valider = $("#btn_connect");
let fb = $("#btn_fb");
valider.click(() =>{
log("login");
});
fb.click(function() {
  log("facebook");
});