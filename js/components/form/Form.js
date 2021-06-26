class Form {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
        this.allInputsDOM = [];
        this.submitButtonDOM = null;

        this.init();
    }

    init() {
        // patikrinti, ar validus selector
        // jei ne, baigiam darba

        // susirasti DOM elementa
        // jei rasti nepavyksta, baigiam darba

        // susirasti visus formos laukus: input, textarea
        // susirasti formos submit mygtuka

        // uzregistruojame mygtuko paspaudimo ivyki
        this.addEvents();
    }

    addEvents() {
        // submit mygtuko paspaudimo metu reikia isjungti default veikima

        // issitraukti is visu formos lauku informacija
        // eiti per visus laukus ir atpazinus informacijos tipa atlikti tos informacijos validacija

        // jei patikrinus visus laukus, nerasta nei vienos klaidos, tai "siunciam pranesima"
        // jei patikrinus visus laukus, nerasta bent viena klaida, tai parodome visu klaidos pranesimus (kol kas, viskas pateikiama i console)
    }
}

export { Form }