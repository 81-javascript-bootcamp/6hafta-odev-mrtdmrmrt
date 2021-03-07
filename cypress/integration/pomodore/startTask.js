describe('Pomodore APP', function () {
  context('Pomodore Started', function () {
    it('Localhost Site', function () {
      cy.visit('http://localhost:8080/');
    });
    it('Click start button', function () {
      cy.get('[id="start"]').wait(2000).click();
    });
  });
});
