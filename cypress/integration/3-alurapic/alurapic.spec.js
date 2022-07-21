describe('Login e resgistro de usuarios alura pic', () => {
    beforeEach(() => {
        cy.visit('http://alura-fotos.herokuapp.com')
    })
    it('verificar mensagens validacao', ()=> {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','User name is required').should('be.visible');
        cy.contains('ap-vmessage','Password is required!').should('be.visible');
        cy.contains('ap-vmessage','Full name is required!').should('be.visible');
    })
    it('verificar mensagens de email invalido', ()=> {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('renato');
        cy.contains('ap-vmessage','Invalid e-mail').should('be.visible');
        
    })
    it('verificar mensagens de senha com menos de 8', ()=> {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage','Mininum length is 8').should('be.visible');
        
    })
    it.only('Fazer login de usuario invalido', () =>{
        cy.login('Renato', '1234')
        cy.on('windows:alert',(str)=>{
            expect(str).to.equal('Invalid user name or passoword')
    })
})
})