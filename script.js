
        function openNav() {
            document.getElementById("mySidenav").style.width = "17%";
            document.getElementById('mainContent').style.width = "85%";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";

            document.getElementById('mainContent').style.width = "100%";
        }

        function openCity(evt, cityName) {
            var i, x, tablinks;
            x = document.getElementsByClassName("city");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < x.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " w3-red";
        }

        function createCards() {
            var cards = '';
            for (var i = 0; i < 10; i++) {
                cards += `<div class="oyo-card">
                <p>
                    <b>OYO</b>
                    <button class="card-button">Submit Work</button>
                </p>
                <p>
                    <span style="">
                        <b>Diwali Campaign</b>
                    <p>This is a campaign to create stunning videos.</p>
                    </span>
                    <span>
                       Rs. 2500
                    </span>

                </p>
            </div>`
            }
            document.getElementById('projects').innerHTML = cards;
        }
        createCards()
    