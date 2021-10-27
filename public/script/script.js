const ToggleMenuApp = Vue.createApp({
  data() {
    return {
      menuOpen: false,
      insiderMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    DragMenu(e) {
      if (e.target.hasAttribute("ul")) this.menuOpen = false;
    },
    ToggleInsiderMenu(e) {
      e.preventDefault();
      this.insiderMenuOpen = !this.insiderMenuOpen;
    },
  },

  computed: {
    ToggleMenu() {
      if (this.menuOpen) return { bottom: "0px" };
      else return { bottom: "-300px" };
    },
  },
});
ToggleMenuApp.mount(".index");
