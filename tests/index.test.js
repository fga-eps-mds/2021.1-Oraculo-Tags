const app = require("../src/index");

describe("Main tests", () => {
    it("Check if we have express defined", async () => {
        expect(app).toBeDefined();
    });
});
