import db from "../db/client";

export const config = {
  db: () => db,
};
