export const TYPE = `
    anotherExampleQuery: Boolean
`;

export function resolve(parent, args) {
    console.log('Another example query!');

    return true;
}