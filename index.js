  // Get a reference to "myhref".
  var myhref = document.getElementById("header-items");
  // Get a reference to "myfield".
  var myfield = document.getElementById("menu");
  // Attach an event listener to "myhref", which gets notifier when "myhref" is clicked.
  myhref.addEventListener("click", function() {
      // "myhref" is click. So, uncheck "myfield"
      myfield.checked = false;});
