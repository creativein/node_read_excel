const XlsxPopulate = require('xlsx-populate');
XlsxPopulate.fromFileAsync(process.argv[2], {password: process.argv[3]})
    .then(workbook => {
		let dataObj = {
			"AA2":workbook.sheet("Examination Certification").cell("AA2").value(),
			"AA3":workbook.sheet("Examination Certification").cell("AA3").value()
		}
		process.stdout.write(JSON.stringify(dataObj)+"\n");
    });

	
	
	