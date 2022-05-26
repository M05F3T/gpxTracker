
const res = require('express/lib/response');
const fs = require('fs');
const xml2js = require('xml2js');


 function convertGpxToJsonFile(filename) {
    fs.readFile(`./database/gpxData/${filename}.gpx`, 'utf8', function (err, data) {
        if(err) {
            console.log("File read error: " + err);
        }


        xml2js.parseString(data,{ mergeAttrs: true }, (err, result) => {
            if (err) {
                console.log(err);
                throw err;
            }



            const json = JSON.stringify(result, null, 4);

            fs.writeFile(`./database/jsonData/${filename}.json`,json,{flag: 'wx'},(err) =>{
                if(err) {
                    console.log(err);
                }
            });

        })





    });
}


module.exports = {convertGpxToJsonFile};