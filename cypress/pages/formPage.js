class FormPage {
    elements = {
        nameInput: () => cy.get('div[role="listitem"] input[type="text"]').eq(0),
        surnameInput: () => cy.get('div[role="listitem"] input[type="text"]').eq(1),
        emailInput: () => cy.get('div[role="listitem"] input[type="text"]').eq(2),
        dateInput: () => cy.get('input[type="date"]'),
        languageSelect: () => cy.get('div[role="listbox"]'),
        languageOption: (lang) => cy.get(`div[role="option"][data-value="${lang}"]`),
        howDidYouHearCheckbox: (value) => cy.get('div[role="checkbox"]').eq(`${value}`), //falta definir cuál queremos indicar
        IArating: (value) => cy.get(`[data-ratingscale="${value}"]`),
        digitalizationRating: (value) => cy.get(`[data-params*="Digitalización"] [role="radio"][aria-label="${value}"]`),
        developmentRating: (value) => cy.get(`[data-params*="Desarrollo"] [role="radio"][aria-label="${value}"]`),
        submitButton: () => cy.get('div[role="button"][aria-label="Submit"]')
    }

    visit() {
        cy.visit('https://docs.google.com/forms/d/e/1FAIpQLSe-K-EdIVtFdhM-CoGB5XIJ7hy7DAc14V2SXzEig1HkzyeJgQ/viewform');
    }

    fillName(name) {
        this.elements.nameInput().clear().type(name);
    }

    fillSurname(lastname) {
        this.elements.surnameInput().clear().type(lastname);
    }

    fillEmail(email) {
        this.elements.emailInput().clear().type(email);
    }

    fillDate(date) {
        this.elements.dateInput().clear().type(date);
    }

    fillLanguage(language) {
        this.elements.languageSelect().click();
        this.elements.languageOption(language).click();
        this.elements.languageOption(language).should('have.attr', 'aria-selected', 'true');
    }

    fillHowDidYouHear(position) {
        this.elements.howDidYouHearCheckbox(position)
            .click()
            .should('have.attr', 'aria-checked', 'true');
    }

    // próximamente se hará por separado
    rateAllSurveys(ia, digitalization, development) {
        this.elements.IArating(ia).click();
        this.elements.digitalizationRating(digitalization).click();
        this.elements.developmentRating(development).click();
    }

    submitForm() {
        this.elements.submitButton().click();
        cy.url().should('include', 'formResponse');
    }
}

export default FormPage;