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
                //Close any other open panels
                let openPanels = document.querySelectorAll(".panel");
                openPanels.forEach(function (openPanel) {
                    openPanel.style.display = "none";
                });

                //Reset all icons to plus icon
                let icons = document.querySelectorAll(".plusIcon");
                icons.forEach(function (icon) {
                    icon.src = "assets/images/icon-plus.svg";
                });

                panel.style.display = "block";
                icon.src = "assets/images/icon-minus.svg";
            }
        });
    }
}
