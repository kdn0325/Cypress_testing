/// <reference types = "Cypress" />


/* describe의 두번째 인자는 callback  */

describe("Test Store에서 자동화 테스트 요소 검사",()=> {
    /* 개별 테스트는 it */
    it("제목을 이용하여 첫번째 제품 클릭 테스트",()=>{
        //cypress code
        cy.visit('https://automationteststore.com/');
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    });
    it("텍스트를 이용하여 첫번째 제품 클릭 테스트",()=>{
        //cypress code
        cy.visit('https://automationteststore.com/');
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
    });
    it("인덱스를 이용하여 첫번째 제품 클릭 테스트",()=>{
        //cypress code
        cy.visit('https://automationteststore.com/');
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();
    });
});