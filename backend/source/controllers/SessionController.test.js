const SessionController = require("./SessionController")
// @ponicode
describe("SessionController.create", () => {
    test("0", async () => {
        await SessionController.create({ body: "Edmond" }, { status: () => 200, json: () => "\"[3,\"false\",false]\"" })
    })

    test("1", async () => {
        await SessionController.create({ body: "Michael" }, { status: () => 500, json: () => "\"[3,\"false\",false]\"" })
    })

    test("2", async () => {
        await SessionController.create({ body: "Jean-Philippe" }, { status: () => 429, json: () => "\"{\"x\":5,\"y\":6}\"" })
    })

    test("3", async () => {
        await SessionController.create({ body: "George" }, { status: () => 429, json: () => "\"[3,\"false\",false]\"" })
    })

    test("4", async () => {
        await SessionController.create({ body: "George" }, { status: () => 404, json: () => "\"{\"x\":[10,null,null,null]}\"" })
    })

    test("5", async () => {
        await SessionController.create(undefined, undefined)
    })
})
