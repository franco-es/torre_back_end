"use strict";
const axios = require("axios");

const controller = {
  getUser: async (req, res) => {
    const { user } = req.query;
    await axios
      .get(`https://bio.torre.co/api/bios/${user}`)
      .then((result) => {
        const persona = result.data;
        delete persona.professionalCultureGenomeResults;
        res.status(200).json(persona);
      })
      .catch((err) => res.status(500).send(err));
  },
};

module.exports = controller;
