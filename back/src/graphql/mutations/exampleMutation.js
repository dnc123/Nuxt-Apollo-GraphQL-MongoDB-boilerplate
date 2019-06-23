export const TYPE = `
    exampleMutation(requestInput: String): Boolean
`;

export function resolve(parent, args) {
    console.log(`Hello from mutation, requestInput = "${args.requestInput}"`);

    return true;
}