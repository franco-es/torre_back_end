"use strict"
const axios = require('axios')


const controller = {
  getUser: async (req, res) => {
    const { user } = req.query
    await axios.get(`https://bio.torre.co/api/bios/${user}`)
      .then(result => {
        res.status(200).send(result.data)
      })
      .catch(err => res.status(500).send(err))
  }
}

module.exports = controller