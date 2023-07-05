# pern-apollo - backend

client: https://github.com/davidcrc/nextjs-client

## setup

```bash
yarn init -y
```

```bash
yarn add typescript ts-node-dev -D
```

### first tsconfig

```bash
npx tsc --init
```

### add in package.json

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
},
```

### add express

```bash
yarn add express
```

```bash
yarn add -D @types/express
```

```bash
yarn add dotenv
yarn add -D @types/dotenv

```
