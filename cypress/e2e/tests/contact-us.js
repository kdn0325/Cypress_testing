/// <reference types = "Cypress" />


/* describe의 두번째 인자는 callback  */

describe("Test Contack Us form via WebdriverUni",()=> {
    /* 개별 테스트는 it */
    it("Should be able to submit a successful submisson via contact us form",()=>{
        //cypress code
        cy.visit('http://www.webdriveruniversity.com/ ');
        cy.get('#contact-us > .thumbnail').click();


    });
    it("Should not be able to submit a successful submisson via contact us form as all field required",()=>{
        //cypress code
    });

});

describe('', () => {
    it('', () => {
        
    });
})