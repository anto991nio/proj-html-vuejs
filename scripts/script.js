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
        },]
    }, 
   /*  activeMenu: "",
    methods: {
        onMenuClick(clickedMenu) {
            this.activeMenu = clickedMenu;
        }
    },
    
    mounted() {
        this.activeMenu = this.menuLeft[0]
    } */
})