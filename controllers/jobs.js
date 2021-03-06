"use strict";
const axios = require("axios");

const controller = {
  getJobs: async (req, res) => {
    const { size, aggregate, offset } = req.query;
    await axios({
      method: "POST",
      url: `https://search.torre.co/opportunities/_search?size=${size}&aggregate=${aggregate}&offset=${offset}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        res.status(200).send(result.data);
      })
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = controller;
