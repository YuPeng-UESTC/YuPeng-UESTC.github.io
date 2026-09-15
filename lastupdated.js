(function() {
  var d = new Date(document.lastModified);
  var months = ["Jan","Feb","Mar","Apr","May","Jun",
                "Jul","Aug","Sep","Oct","Nov","Dec"];
  var el = document.getElementById("last-updated");
  if (el) el.textContent = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
})();
