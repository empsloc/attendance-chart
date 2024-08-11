

import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./utils/schema.ts",
  dialect: 'mysql',
  dbCredentials: {
    host: "mysql-204bbace-atharva0bokade-aefd.c.aivencloud.com",
     user: "avnadmin",
     database: "defaultdb",
      password:process.env.DBPASSWORD,
     port:25709,
  },
  verbose: true,
  strict: true,
})