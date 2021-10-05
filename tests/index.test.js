const app = require("../src/index");
const request = require("supertest");
const { initializeDatabase } = require("../src/Database");

const validTag1 = {
    name: "tag 1",
    color: "#ff00ff",
};

const validTag2 = {
    name: "tag 2",
    color: "#ff00ff",
};

describe("Main tests", () => {
    let someTagId = 0;

    beforeAll(async () => {
        await initializeDatabase();
    });

    it("Check if we have express defined", async () => {
        expect(app).toBeDefined();
    });

    it("POST /tags - should create a tag", async () => {
        const res = await request(app).post("/tags").send(validTag1);
        expect(res.statusCode).toEqual(200);
        someTagId = res.body.id;
    });

    it("POST /tags - should not create a tag with same color", async () => {
        const res = await request(app).post("/tags").send(validTag2);
        expect(res.statusCode).toEqual(500);
    });

    it("GET /tags/all - should return all registered tags", async () => {
        const res = await request(app).get("/tags/all");
        expect(res.statusCode).toEqual(200);
    });

    it("POST /tags/:id - should edit the specified tag", async () => {
        const res = await request(app)
            .post(`/tags/${someTagId}`)
            .send({ name: "new name", color: "new color" });

        expect(res.statusCode).toEqual(200);
    });
});
