/*class Form {
    constructor(selector, toastObject) {
        this.selector = selector;
        this.toastObject = toastObject;

        this.DOM = null;
        this.allInputsDOM = [];
        this.submitButtonDOM = null;

        this.init()
    }

    init() {
        // patikrinti, ar validus selector
        // jei ne, baigiam darba
        if (!this.isValidSelector()) {
            console.error('ERROR: nevalidus selektorius!')
            return false;
        }
        // susirasti DOM elementa
        this.DOM = document.querySelector(this.selector);
        // jei rasti nepavyksta, baigiam darba
        if (!this.DOM) {
            console.error('ERROR: Element not found!');
            return false;
        }
        // susirasti visus formos laukus: input, textarea
        this.allInputsDOM = this.DOM.querySelectorAll('input, textarea');
        //console.log(this.allInputsDOM);

        // susirasti formos submit mygtuka
        this.submitButtonDOM = this.DOM.querySelector('button');

        // uzregistruojame mygtuko paspaudimo ivyki
        this.addEvents();
    }
    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: Selector must be a non empty string');
            return false;
        }

        return true
    }

    isValidEmail(email) {
        if (typeof email !== 'string' ||
            email.length < 6 ||
            email.indexOf('@') === -1 || //reiskia @ stringe nerasta(-1)
            email[0] === '@' ||         // pirma string reiksme yra@
            email.slice(-4).indexOf('@') > -1 || //paima 4 paskutinius email simbolius ir iesko @
            this.countSimbols(email, '@') > 1) { //tikrina kiek stringe yra atitinkamu simboliu!
            return false;
        }
        return true;
    }

    countSimbols(text, letter) {
        let count = 0;

        for (const t of text) {
            if (t === letter) {
                count++;
            }
        }
        return count;
    }
    isValidName(name) {
        if (name === undefined ||
            typeof name !== 'string' ||
            name.length < 2 ||
            !this.isUpperCase(name[0])) {
            return false;
        }
        return true;
    }
    isUpperCase(letter) {
        return letter === letter.toUpperCase();
    }
    isValidMessage(msg) {
        if (typeof msg !== 'string' ||
            msg === '') {
            return false;
        }
        return true;
    }
    addEvents() {
        // submit mygtuko paspaudimo metu reikia isjungti default veikima
        this.submitButtonDOM.addEventListener('click', (e) => {
            e.preventDefault();
            //console.log('sdfghj');

            // issitraukti is visu formos lauku informacija
            // eiti per visus laukus ir atpazinus informacijos tipa atlikti tos informacijos validacija
            let allGood = true;
            for (let element of this.allInputsDOM) {
                const validationRule = element.dataset.validation; // sukuriam taisykle --> html prie input ivesta'data-validation'

                // jei patikrinus visus laukus, nerasta nei vienos klaidos, tai "siunciam pranesima"
                // jei patikrinus visus laukus, nerasta bent viena klaida, tai parodome visu klaidos pranesimus (kol kas, viskas pateikiama i console)
                if (validationRule === 'email') {
                    if (this.isValidEmail(element.value) === false) {
                        console.error('ERROR: invalid email!');
                        allGood = false;
                        break;  // jei randam klaida, baigiam darba, toliau neinam 
                    }
                }
                if (validationRule === 'name') {
                    if (this.isValidName(element.value) === false) {
                        allGood = false;
                        console.error('ERROR: invalid name!');
                        break;
                    }
                }
                if (validationRule === 'text') {
                    if (this.isValidMessage(element.value) === false) {
                        allGood = false;
                        console.error('ERROR: message box cant be empty!');
                        break;
                    }
                }
            }
            console.log('All Good?', allGood)
        });
    }
}
export { Form }
*/
class Form {
    constructor(selector, toastObject) {
        this.selector = selector;
        this.toastObject = toastObject;

        this.formDOM = null;
        this.allInputsDOM = [];
        this.submitButtonDOM = null;
        this.validations = {
            name: this.isValidName,
            email: this.isValidEmail,
            text: this.isValidText,
        };

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            console.error('ERROR: nevalidus selector');
            return false;
        }

        this.formDOM = document.querySelector(this.selector);
        if (!this.formDOM) {
            console.error('ERROR: nerastas formos elementas');
            return false;
        }

        this.allInputsDOM = this.formDOM.querySelectorAll('input, textarea');
        this.submitButtonDOM = this.formDOM.querySelector('button[type="submit"]');

        this.addEvents();
    }

    isValidSelector() {
        return true;
    }

    isValidName(name) {
        const maxNameLength = 50;
        if (typeof name !== 'string' || name === '') {
            return 'Vardas turi buti ne tuscias tekstas';
        }
        if (name.length > maxNameLength) {
            return `Vardas negali buti ilgesnis nei ${maxNameLength} simboliu`;
        }
        if (name[0].toUpperCase() !== name[0]) {
            return 'Vardo pirmoji raide turi buti didzioji';
        }
        return true;
    }

    isValidEmail(email) {
        const maxEmailLength = 100;
        if (typeof email !== 'string' || email === '') {
            return 'Email turi buti ne tuscias tekstas';
        }
        if (email.length > maxEmailLength) {
            return `Email negali buti ilgesnis nei ${maxemailLength} simboliu`;
        }
        if (email.indexOf('@') === -1) {
            return 'Email turi tureti @ simboli';
        }
        return true;
    }

    isValidText(text) {
        const maxTextLength = 1000;
        if (typeof text !== 'string' || text === '') {
            return 'Zinute turi buti ne tuscias tekstas';
        }
        if (text.length > maxTextLength) {
            return `Zinute negali buti ilgesne nei ${maxemailLength} simboliu`;
        }
        return true;
    }

    addEvents() {
        this.submitButtonDOM.addEventListener('click', (event) => {
            // submit mygtuko paspaudimo metu reikia isjungti default veikima
            event.preventDefault();

            // issitraukti is visu formos lauku informacija
            // eiti per visus laukus ir atpazinus informacijos tipa atlikti tos informacijos validacija
            let allGood = true;

            for (const inputDOM of this.allInputsDOM) {
                const validationRule = inputDOM.dataset.validation;
                const value = inputDOM.value;

                const validationResult = this.validations[validationRule](value);
                if (validationResult !== true) {
                    this.toastObject.error(validationResult);
                    allGood = false;
                    break;
                }
            }


            // jei patikrinus visus laukus:
            // nerasta nei vienos klaidos, tai "siunciam pranesima"
            // nerasta bent viena klaida, tai parodome visu klaidos pranesimus (kol kas, viskas pateikiama i console)
            if (allGood) {
                this.toastObject.success('Tavo formos informacija buvo issiusta!');
            }
        })
    }
}

export { Form }