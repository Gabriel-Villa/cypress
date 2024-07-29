describe("Dashboard page", () => {
    beforeEach(() => {
        cy.login("dev@gmail.com", "soSO$QUISlx6nRxH");
    });

    it("Debería poder acceder a la ruta protegida", () => {
        cy.visit("/dashboard");
        cy.contains("Dashboard");
    });
});
