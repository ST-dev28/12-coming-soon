class Progressbar {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        //console.log(this);

        this.DOM = null;
        this.allBarDOM = null;

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
        this.addEvents();
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
        this.allBarDOM = document.querySelectorAll('.progress-bar');
        console.log(this.allBarDOM);
    }
    addEvents() {
        window.addEventListener('scroll', () => {
            //const scrollHigh = window.scrollY;
            //const screenHigh = window.innerHeight;
            const barHigh = window.innerHeight + window.scrollY;
            for (let i = 0; i < this.allBarDOM.length; i++) {
                const el = this.allBarDOM[i];
                const barBottom = el.offsetHeight + el.offsetTop;
                if (barHigh >= barBottom) {
                    el.classList.add('loading');
                    console.log('animuojame');
                }
            }
            console.log('cvbnmasdfgh');
        })
    }
}

export { Progressbar }