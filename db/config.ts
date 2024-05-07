import { column, defineDb, defineTable, NOW } from "astro:db";

export const Test = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    defaultTimestamp: column.date({ default: NOW }),
    timestamp: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Test,
  },
});
