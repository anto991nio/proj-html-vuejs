const app = new Vue({
    el: "#app",
    data: {
        searchInput: false,
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
        },]
    }, 
   
})