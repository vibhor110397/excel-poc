const xlsx = require('xlsx')


const readExcelFile = (file) => {
    return xlsx.read(file)
}

const parseDataJson = (workbook) => {
    const sheetsData = []
    for (sheet of workbook['SheetNames']) {
        if (workbook['Sheets'][sheet]['!ref']) {
            sheetsData.push({
                "sheetName": sheet,
                "data": xlsx.utils.sheet_to_json(workbook['Sheets'][sheet])
            })
        }
    }
    return sheetsData
}

const convertDataToXlsx = async (params) => {
    let workbook = xlsx.utils.book_new()
    let filepath =  `Files/data/${new Date().getTime()}.xlsx`
    for (sheetData of params) {
        let ws = xlsx.utils.json_to_sheet(sheetData.data)
        xlsx.utils.book_append_sheet(workbook, ws, sheetData.sheetName)
    }
    xlsx.writeFile(workbook, filepath)
    return filepath
}

module.exports = {
    readExcelFile,
    parseDataJson,
    convertDataToXlsx
}