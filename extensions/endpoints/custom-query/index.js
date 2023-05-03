"use strict";
module.exports = (e, { database: s }) => {
  e.get("/", async (e, t) => {
    if ((console.log("inside res", e.query), e.query && e.query.query))
      try {
        const e = await s.raw("select * from directus_users");
        t.json(e);
      } catch (e) {
        t.status(500), t.send({ data: "Something went wrong." });
      }
    else t.send({ data: "No query passed" });
  });
};
