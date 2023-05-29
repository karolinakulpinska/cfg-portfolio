var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
      // hides the tab underline:
      for(
        tablink of tablinks) {
        tablink.classList.remove("active-link");
      }
      // hides the contents of the tab:
      for(
        tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
      }
      // displays underline when clicked:
      event.currentTarget.classList.add("active-link");
      // displays tab contents when clicked:
      document.getElementById(tabname).classList.add("active-tab");
    }