describe('Pomodore APP', function () {
  context('Task Added', function () {
    it('Localhost Site', function () {
      cy.visit('http://localhost:8080/');
    });
    it('Type valid task name', function () {
      cy.get('[type="text"]').wait(2000).type('Saire');
    });
    it('Click submit button', function () {
      cy.get('[type="submit"]').wait(2000).click();
    });
  });
});
