// Placeholder for actual namespaces data
const namespaces = {
    exampleNamespace: {
        name: 'Example Namespace',
        routes: {
            '/example': {
                name: 'Example Route',
                radar: [],
                maintainers: ['maintainer1', 'maintainer2'],
                categories: ['category1'],
            },
        },
        categories: ['category1'],
    },
};

// Define namespacesPromise
export const namespacesPromise = new Promise((resolve) => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
        resolve(namespaces);
    }, 1000); // Adjust the delay as needed
});
