var express = require('express');
var router = express.Router();
const { convertDataToJSON, convertJSONToXlsx } = require('../Controller/excelController')

// read File and convert to JSON.

router.post('/toJson', async (req, res) => {
  try {
    const result = await convertDataToJSON(req.files)
    res.json(result)
  } catch (error) {
    res.sendStatus(500).send(error)
  }
})

router.post('/toXlsx', async (req,res) => {
  try {
    const result = await convertJSONToXlsx(req.body)
    res.send(result)
  } catch (error) {
    res.sendStatus(500).send(error)
  }
})


module.exports = router;
