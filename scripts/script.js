const app = new Vue({
    el: "#app",
    data: {
        searchInput: false,
        //Questi array contengono le voci del menu

        menuLeft: [{
            text: "HOME",
            link: "#",
        },
        {
            text: "PAGES",
            link: "#",
        },
        {
            text: "MENU",
            link: "#",
        },],
        menuRight: [{
            text: "EVENT",
            link: "#",
        },
        {
            text: "BLOG",
            link: "#",
        },
        {
            text: "LANDING",
            link: "#",
        },],
        //Questo array contiene gli indirizzi nel footer

        findRestaurants: [{
            indirizzo: "1614 E. Bell Rd #104.",
            citta: "Salerno, AZ 85022",
            numero: "(602) 867-1010",
        }, {
            indirizzo: "204 E. Pizzetta Tommaso",
            citta: "Sorrento, AZ 85022",
            numero: "(358) 867-1010",
        }, {
            indirizzo: "Vale puglia 54",
            citta: "Torre Del Greco, AZ 85022",
            numero: "(359) 867-1010",
        }, {
            indirizzo: "Corso Italia AA",
            citta: "Naples, AZ 85022",
            numero: "(989) 867-1010",
        },
        ],
        //Questo array contiene gli orari lavorativi nel footer

        workDay: [{
            day: "MONDAY",
            closedKit: "Kitchen Closed",
        }, {
            day: "TUESDAY UNTIL FRIDAY",
            hours: "9:00 - 22:00",
        }, {
            day: "SATURDAY ",
            pos: "*",
            hours: "Saturday 11am to midnight",
        }, {
            day: "SUNDAY",
            hours: "9:00 - 22:00",
        },],
        //Questo array contiene le immagini dell'hero
        imagesHero: [{
            image: "img/h3-rev-img-6.png",
            word: "img/h3-rev-img-5.png",
        }, {
            image: "img/h3-rev-img-4.png",
            word: "img/h3-rev-img-3.png",
        }, {
            image: "img/h3-rev-img-2.png",
            word: "img/h3-rev-img-1.png",
        },],
        imagesPizza: [{
            image: "img/h3-product-img-1a-100x100.png",
            name: "BISMARK",
            price: "$30.00",
        }, {
            image: "img/h3-product-img-2a-150x150.png",
            name: "FIORI DI ZUCCA",
            price: "$7.00 - $50.00",
        }, {
            image: "img/h3-product-img-3a-150x150.png",
            name: "VALDOSTANA",
            price: "$55.00",
        }, {
            image: "img/h3-product-img-4a-150x150.png",
            name: "PIZZA TARTUFATA",
            price: "$45.00",
        }, {
            image: "img/h3-product-img-5a-150x150.png",
            name: "FRANCESCANA",
            price: "$25.00",
        }, {
            image: "img/h3-product-img-6a-100x100.png",
            name: "cAMPAGNOLA",
            price: "$50.00 - $95.00",
        },],
        activeImgHero: 0,
        hours: "",
        data: "",
        person: "",
        reservation: [{}],
        reser: false
    },
    methods: {
        changeImg(direction) {
            let newIndex = this.activeImgHero + direction;
            if (newIndex < 0) {
                newIndex = this.imagesHero.length - 1;
            } else if (newIndex > (this.imagesHero.length - 1)) {
                newIndex = 0
            }

            this.activeImgHero = newIndex
        },
        clickReservation() {
            this.reservation.push({
                hours: this.hours,
                data: this.data,
                person: this.person,
            })
            this.reser = true
        },
        reserF(){
            this.reser = false
        }
    }

})