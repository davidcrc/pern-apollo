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

### add nodemon

```bash
yarn add nodemon
```

### add cors

```bash
yarn add cors
yarn add -D @types/cors
```

### Add Apollo

```bash
yarn add @apollo/server graphql graphql-tag
```

### Add Prisma

```bash
yarn add prisma -D @prisma/client
```

```bash
npx prisma generate
```

```bash
npx prisma migrate dev --name init
```

- to package.json

```json
"scripts": {
    "migrate:dev": "npx prisma migrate dev",
    "reset-db": "npx prisma migrate reset --force",
}
```
