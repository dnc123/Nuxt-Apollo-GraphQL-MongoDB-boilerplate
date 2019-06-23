export const TYPE = `
    exampleQuery(someInput: String, anotherInput: Int): ExampleResponseObject
`;

export function resolve(parent, args) {
    console.log('Hello from example query!');

    return {
        message: 'successful response :)',
    };
}