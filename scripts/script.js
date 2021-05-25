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

        findRestaurants:[{
            indirizzo:"1614 E. Bell Rd #104.",
            citta:"Salerno, AZ 85022",
            numero:"(602) 867-1010",
        },{
            indirizzo:"204 E. Pizzetta Tommaso",
            citta:"Sorrento, AZ 85022",
            numero:"(358) 867-1010",
        },{
            indirizzo:"Vale puglia 54",
            citta:"Torre Del Greco, AZ 85022",
            numero:"(359) 867-1010",
        },{
            indirizzo:"Corso Italia AA",
            citta:"Naples, AZ 85022",
            numero:"(989) 867-1010",
        },
        ],
        //Questo array contiene gli orari lavorativi nel footer

        workDay:[{
            day:"MONDAY",
            closedKit:"Kitchen Closed",
        },{
            day:"TUESDAY UNTIL FRIDAY",
            hours:"9:00 - 22:00",
        },{
            day:"SATURDAY ",
            pos:"*",
            hours:"Saturday 11am to midnight",
        },{
            day:"SUNDAY",
            hours:"9:00 - 22:00",
        },],
        //Questo array contiene le immagini dell'hero
        imagesHero:[{
            image:"img/h3-rev-img-6.png",
            word:"img/h3-rev-img-5.png",
        },{
            image:"img/h3-rev-img-4.png",
            word:"img/h3-rev-img-3.png",
        },{
            image:"img/h3-rev-img-2.png",
            word:"img/h3-rev-img-1.png",
        },],
        activeImgHero: 0,
    }, 
    methods:{
        changeImg(direction){
            let newIndex = this.activeImgHero + direction;
            if(newIndex < 0){
                newIndex = this.imagesHero.length-1;
            }else if(newIndex > ( this.imagesHero.length-1)){
                newIndex = 0
            }
   
            this.activeImgHero = newIndex
        }
    }
   
})