class Progressbar {
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
    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            return false;
        }
        return true;
    }

    isValidData() {
        if (!Array.isArray(this.data) ||
            this.data.length === 0) {
            return false;
        }
        return true;
    }

    render() {
        let HTML = '';

        for (const bar of this.data) {
            HTML += `<div class="progress-bar">
                        <div class="top">
                            <div class="title">${bar.title}</div>
                            <div class="value">${bar.value}%</div>
                        </div>
                        <div class="bottom">
                            <div class="progress" style="width: ${bar.value}%;">
                                <div class="value"></div>
                            </div>
                        </div>
                    </div>`;
        }

        this.DOM.innerHTML += HTML;
    }
}

export { Progressbar }