    function openTab(tabName) {
            var i;
            var tabcontent = document.getElementsByClassName("tab-content");
            var tablinks = document.getElementsByClassName("tab");

            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("active");
            }

            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }

            document.getElementById(tabName).classList.add("active");
            document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add("active");
        }