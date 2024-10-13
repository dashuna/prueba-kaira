import FormPage from "../pages/formPage";
import formData from '../fixtures/formData.json';

describe('Verificación del formulario Kaira Digital', () => {
    const formPage = new FormPage;

    beforeEach(() => {
        formPage.visit();
    });

    // Carga de la página -> carga correcta del form
    it('Carga del formulario', () => {
        cy.url().should('include', '/viewform');
        cy.get('form').should('be.visible');
    });

    // Envío del formulario
    it('Rellenar y enviar el formulario', () => {
        formPage.fillName(formData.name);
        formPage.fillSurname(formData.surname);
        formPage.fillEmail(formData.email);
        formPage.fillDate(formData.date);
        formPage.fillLanguage(formData.language);
        formPage.fillHowDidYouHear(formData.howDidYouHear);
        formPage.rateAllSurveys(formData.IArating, formData.digitalizationRating, formData.developmentRating);
        formPage.submitForm();
    });

    // Comprobar todos los Títulos y mensajes -> ahora mismo hay errores
    // Campos requeridos -> mensajes de error cuando hay campo obligatorio
    // Campos de texto -> diferentes caracteres en los campos de texto, validación del email, ...
    // Borrar selección -> comprobar que aparece el botón al seleccionar una opción
    // Borrar formulario -> todos los campos se quedan vacíos y recarga la página
})