var { dbConnect } = require('./dbConfig');

describe("test db connector", () => {
    it("should return a db handle", () => {
        var db = dbConnect('./db.sqlite');
        expect(db).toBeDefined();
    });
});