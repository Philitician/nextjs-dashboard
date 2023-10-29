import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
});

export const invoices = pgTable("invoices", {
  id: serial("id").primaryKey(),
  customer_id: integer("customer_id").references(() => customers.id),
  name: text("name"),
  email: varchar("email", { length: 256 }),
  image_url: varchar("image_url", { length: 256 }),
  date: text("date"),
  amount: integer("amount"),
  status: varchar("status", { length: 256 }),
});

export const customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: varchar("email", { length: 256 }),
  image_url: varchar("image_url", { length: 256 }),
  total_invoices: integer("total_invoices"),
  total_pending: integer("total_pending"),
  total_paid: integer("total_paid"),
});
