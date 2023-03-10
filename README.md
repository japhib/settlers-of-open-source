# Settlers of Open Source (working title)

## Development

How to run the server:

```bash
cd soos-server

# Required for first time setup, and each time dependencies are changed.
# Default to running it each time you pull the repo.
npm install

# start the server
npm start
```

How to run the client:

```bash
cd soos-client

# Required for first time setup, and each time dependencies are changed.
# Default to running it each time you pull the repo.
npm install

# start the client (opens http://localhost:5173 in browser.)
npm start
```

Note that both the client and server will automatically pick up changes you make as you're editing code. Changes in `soos-gamelogic` should be automatically hot-reloaded by both client and server.

## Naming conventions

Filenames are in `kebab-case`, class names are `UpperCamelCase`, and function/variable names are in `lowerCamelCase`. For example:

```ts
// Filename: hex-coords.ts

class HexCoords {
    someMethod() { }
}

function someFunction() { }
```

Unit test files live alongside the regular files, and just have a `test.ts` extension. For example, the test file for `hex-coords.ts` would be `hex-coords.test.ts` in the same directory.

## Unit Testing

Each sub-project (client, server, and gamelogic) has its own `test` npm script. So just `cd` into the folder of the subproject, and run `npm run test`.

Ideally, each file in the `gamelogic` and `server` portions would be pretty well unit-tested. Client stuff is a bit harder to unit test and probably changes the most anyway, so it's okay if it has low/no coverage.

# Architecture

`soos-client`: client-specific stuff only. Anything that will happen in the browser but not on the server.

`soos-server`: server-specific stuff only. Anything that will happen on the server but not in the browser.

`soos-gamelogic`: anything that needs to happen on both the client and the server -- this will mainly be the game logic, but it's not limited to that.

# TODO

Everything!

... But actually, here's a short list of what to get started on:

- Map generation
- Displaying the map hexes in the client
- Placing/displaying settlements, roads, etc.

Most of the gamelogic/client stuff is good to start on now. Once you can sort of play a game against yourself in the client, we can work on implementing AI and multiplayer.

## High-level goals:

1. Multiplayer Settlers of Catan w/ official rules
2. A bunch of customizations on top of that
3. Expansions (mainly Cities & Knights)
4. Customizations for the expansions
