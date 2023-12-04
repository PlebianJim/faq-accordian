function expandAccordian() {
  let acc = document.getElementsByClassName("accordian");
  let i;

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      let panel = this.nextElementSibling;
      let icon = this.querySelector(".plusIcon");

      if (panel.style.display === "block") {
        panel.style.display = "none";
        icon.src = "assets/images/icon-plus.svg";
      } else {
        //Check if the clicked panel is already open
        let isAlreadyOpen = panel.style.display === "block";

        //Close panels
        let panels = document.querySelectorAll(".panel");
        panels.forEach(function (panel) {
          panel.style.display = "none";
        });

        //Reset all icons to plus icons
        let icons = document.querySelectorAll(".plusIcon");
        icons.forEach(function (icon) {
          icon.src = "assets/images/icon-plus.svg";
        });

        //If the clicked panel was not already open, expand it
        if (!isAlreadyOpen) {
          panel.style.display = "block";
          icon.src = "assets/images/icon-minus.svg";
        }
      }
    });
  }
}
