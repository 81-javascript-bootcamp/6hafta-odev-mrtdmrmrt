describe('Pomodore APP', function () {
  context('Pomodore Pause', function () {
    it('Localhost Site', function () {
      cy.visit('http://localhost:8080/');
    });
    it('Click pause button', function () {
      cy.get('[id="start"]').wait(2000).click();
      cy.wait(10000);
      cy.get('[id="pause"]').wait(2000).click();
    });
  });
});
