describe('Pomodore APP', function () {
  context('Task Deleted', function () {
    it('Localhost Site', function () {
      cy.visit('http://localhost:8080/');
    });
    it('Click deleted button', function () {
      cy.get('[id="2"]').wait(2000).click();
    });
  });
});
