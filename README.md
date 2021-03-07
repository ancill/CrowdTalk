# CrowdTalk

## Overview of some package inside this project

### Node part

• faker is a fake data generator for testing and mocking.
• ts-node-dev will help our Node server to restart when any TypeScript code is
changed.
The ts-jest package allows us to write our tests in TypeScript.

### GraphQL part

• graphql
This package is the reference implementation for JavaScript of GraphQL. It is
created by the GraphQL foundation and we will be using it to do some of our
GraphQL query testing.
• graphql-middleware
This is a package that allows us to inject our code either before or after a resolver
runs. Some possible actions include, but are not limited to, authentication checks
and logging.
• graphql-tools
This package provides some helpers for testing and mocking our GraphQL queries
when needed.
• apollo-server-express
This is the main library we will use to create our Express GraphQL
