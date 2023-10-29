import { env } from "@/env";
import postgres from "postgres";

// for query purposes
export const db = postgres(env.DATABASE_URL);
