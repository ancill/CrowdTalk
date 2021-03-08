import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { makeExecutableSchema } from "graphql-tools";
import faker from "faker";
import { testGraphQLQuery } from "./testGraphQLQuery";
import { addMockFunctionsToSchema } from "apollo-server-express";

// set up our test using describe and then we create our query for getUser
// with the fields that we want:
describe("Testing getting a user", () => {
    const GetUser = `
            query GetUser($id: ID!) {
                getUser(id: $id) {
                id
                username
                email
                }
            }`;

    // we first create our schema from the merger of typeDefs and
    // resolvers and then we set up our fake data fields for our mocked User object
    it("gets the desired user", async () => {
        const schema = makeExecutableSchema({
            typeDefs,
            resolvers
        });
        const userId = faker.random.alphaNumeric(20);
        const username = faker.internet.userName();
        const email = faker.internet.email();
        const mocks = {
            User: () => ({
                id: userId,
                username,
                email,
            }),
        };
        console.log("id", userId);
        console.log("username", username);
        console.log("email", email);

        // Using addMockFunctionsToSchema, we add our mocked User object to the
        // schema so that it will be returned when relevant queries are made:
        addMockFunctionsToSchema({ schema, mocks });

        // function to get back our mocked data:
        const queryResponse = await testGraphQLQuery({
            schema,
            source: GetUser,
            variableValues: {
                id: faker.random.alphaNumeric(20)
            },
        });

        const result = queryResponse.data ? queryResponse.
            data.getUser : null;

        console.log("result", result);
        expect(result).toEqual({
            id: userId,
            username,
            email,
        });
    });
});