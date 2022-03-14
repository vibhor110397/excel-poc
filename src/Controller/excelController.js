const { readExcelFile, parseDataJson, convertDataToXlsx } = require('../helper/excelHelper')

const convertDataToJSON = async (params) => {
    let fileData = readExcelFile(params.file.data)
    let parsedData = parseDataJson(fileData)
    return parsedData;
}

const convertJSONToXlsx = async (params) => {
    let fileData = await convertDataToXlsx(params)
    return fileData;
}

module.exports = {
    convertDataToJSON,
    convertJSONToXlsx
}