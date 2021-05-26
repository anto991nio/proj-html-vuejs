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
            link:"https://www.google.com/maps/dir//Salerno+SA/@40.6747384,14.7575509,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x133bc25734bd3089:0x15a49713da0374a0!2m2!1d14.7680961!2d40.6824408!3e0"
        }, {
            indirizzo: "204 E. Pizzetta Tommaso",
            citta: "Sorrento, AZ 85022",
            numero: "(358) 867-1010",
            link:"https://www.google.com/maps/dir/la+tua+posizione/80067+Sorrento+NA/@40.6262713,14.3057586,12z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x133b99536dbf5b61:0x2644eb57abc0ce40!2m2!1d14.3757985!2d40.6262925!3e0"
        }, {
            indirizzo: "Vale puglia 54",
            citta: "Torre Del Greco, AZ 85022",
            numero: "(359) 867-1010",
            link:"https://www.google.com/maps/place/80059+Torre+del+Greco+NA/@40.7808987,14.3598564,13z/data=!3m1!4b1!4m9!1m2!2m1!1sVale+puglia+54+Torre+Del+Greco,+AZ+85022!3m5!1s0x133ba40b8b175705:0x7419489c7149a569!8m2!3d40.7894429!4d14.367461!15sCihWYWxlIHB1Z2xpYSA1NCBUb3JyZSBEZWwgR3JlY28sIEFaIDg1MDIyIgOIAQGSAQhsb2NhbGl0eQ"
        }, {
            indirizzo: "Corso Italia AA",
            citta: "Naples, AZ 85022",
            numero: "(989) 867-1010",
            link:"https://www.google.com/maps/dir//Pizzeria+Arcangelo+Abbate,+Corso+Italia,+114,+80144+Napoli+NA/@40.8943322,14.2631835,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x133b07946f446457:0xbeb5b951a1011c37!2m2!1d14.2675892!2d40.8935632!3e0"
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
        reser: false,
        cart:false,
        clickCart:false
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
        },
        cartClick(){
            this.clickCart=!this.clickCart

        },nocartClick(){
            this.clickCart=false
        }
    }

})