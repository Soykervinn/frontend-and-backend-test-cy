const url = 'https://www.demoblaze.com/'

class demoBlazeFlow {
    constructor(){
        this.signBttn = '#signin2'
        this.signUsername = '#sign-username'
        this.signPassword = '#sign-password'
        this.signUp = '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
        this.loginBttn = '#login2'
        this.usernameBox = '#loginusername'
        this.passwordBox = '#loginpassword'
        this.logInUser = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
        this.userSession = '#nameofuser'
        this.product1 = ':nth-child(1) > .card > .card-block > .card-title > .hrefch'
        this.addProduct1 = '.col-sm-12 > .btn'
        this.homeBttn = '.active > .nav-link'
        this.product2 = ':nth-child(2) > .card > :nth-child(1) > .card-img-top'
        this.addProduct2 = '.col-sm-12 > .btn'
        this.cartur = '#cartur'
        this.placeOrder = '.col-lg-1 > .btn'
        this.name = '#name'
        this.country = '#country'
        this.city = '#city'
        this.card = '#card'
        this.month = '#month'
        this.year = '#year'
        this.purchase = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
        this.successPurchase = '.lead'
        this.okButton = '.confirm'  
    }

    get VisitPage(){
        return cy.visit(url)
        .wait(2000)
    }
    get SignUp(){
        return cy
        .wait(500)
        .get(this.signBttn).click()
    }
    get userCreation(){
        return cy
        .wait(500)
        .get(this.signUsername).type("Kervinn13")
        .get(this.signPassword).type("123456")
        .get(this.signUp).click()
        .wait(2000)
    }

    get loginUser(){
        return cy
        .wait(500)
        .get(this.loginBttn).click()
        .wait(1000)
        .get(this.usernameBox).type("Kervinn13")
        .wait(500)
        .get(this.passwordBox).type("123456")
        .wait(500)
        .get(this.logInUser).click()
        .wait(2000)
        .get(this.userSession).should('exist');
    }

    get shoppingAction(){
        return cy
        .wait(500)
        .get(this.product1).click()
        .wait(1000)
        .get(this.addProduct1).click()
        .wait(500)
        .get(this.homeBttn).click()
        .get(this.product2).click()
        .get(this.addProduct2).click()
        .get(this.cartur).click()
        .get(this.placeOrder).click() 
    }

    get shoppingForm(){
        return cy
        .wait(500)
        .get(this.name).type("Kervinn Aguilera")
        .wait(1000)
        .get(this.country).type("Argentina")
        .wait(500)
        .get(this.city).type("Buenos Aires")
        .get(this.card).type("1014345677880987")
        .wait(500)
        .get(this.month).type("Diciembre")
        .get(this.year).type("2023")
        .get(this.purchase).click()
        .wait(3000)
        .get(this.successPurchase).should('exist');
    }

    get shoppingConfirmation(){
        return cy
        .wait(500)
        .get(this.okButton).click()
    }

    get windowAlert(){
        return cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added.'); 
          });
    }
}
export default new demoBlazeFlow();
