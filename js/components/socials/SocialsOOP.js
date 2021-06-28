class SocialsOOP {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        //console.log(this);

        this.DOM = null;

        this.init();
    }

    init() {
        // patikrinti, ar validus selektorius
        // patikrinti, ar validus data
        // jei bent vienas nevalidus, baigiam darba
        if (!this.isValidSelector() ||
            !this.isValidData()) {
            console.error('ERROR: nepraejo pirmines patikros');
            return false;
        }
        // susirandanme reikiame vieta pagal peteikta selektoriu 
        this.DOM = document.querySelector(this.selector);
        // jei vieta neegzistuoja, baigiam darba
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: nerastas elementas, pagal duota selector');
            return false;
        }
        // generuojam turini ir istatome i reikiama vieta
        this.render();
    }
    // tikrinam, ar selektorius validus
    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }
    isValidData() {
        //tikrinam, ar arejus yra arejus ir ar ne tuscias
        if (!Array.isArray(this.data) ||
            this.data.length === 0) {
            return false;
        }
        return true;
    }

    render() {
        let HTML = '';

        for (const social of this.data) {
            HTML += `<a href="${social.href}"
                    target="_blank"
                    class="social fa fa-${social.icon}"></a>`;
        }
        // istatom surasta turini
        this.DOM.innerHTML += HTML;
    }
}

export { SocialsOOP }