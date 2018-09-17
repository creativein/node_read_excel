const xlsxPopulate = require('xlsx-populate');
const fs = require('fs');
const path = require('path');

exports.readFile = (req, res, next) => {
    const fileName = path.resolve(`./././${req.body.filename}`);
    const password = req.body.password || ''; // TODO: Need to be hashed 
    const isFile = fs.existsSync(fileName);
    console.log(fileName);

    if (isFile) {
        xlsxPopulate.fromFileAsync(fileName, { password: password })
            .then(workbook => {
                let dataObj = {
                    "AA2": workbook.sheet("Examination Certification").cell("AA2").value(),
                    "AA3": workbook.sheet("Examination Certification").cell("AA3").value()
                }
                res.status(200)
                    .json({
                        status: true,
                        message: dataObj,
                    })
            });
    } else {
        res.status(200)
            .json({
                status: true,
                message: 'File does not exist',
            })
    }


}