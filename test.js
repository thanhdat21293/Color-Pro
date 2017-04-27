const elas = require("./elastic/index");
const moment = require("moment");
const shortid = require("shortid");
const data = require("./data.json");
const async = require("async");

// elas.searchAll("color","collection",(err, stt)=>{
//     console.log(stt[0]["array"][0]);
// });

let colors = [];
for(let count in data){
    delete data[count].key;
    delete data[count].key1;
    data[count].id = shortid.generate();
    data[count].name = data[count]['string'];
    data[count].author = "nguyenpham93";
    data[count].author_email = "s3408985@gmail.com";
    data[count].date = moment().format("DD/MM/YYYY");
    data[count].description = "Color collection";
    data[count].like = 0;
    data[count].dislike = 0;
    data[count].share = 0;
    colors.push(data[count]);
}
async.mapSeries(colors, merge, (err, rs) => {
    console.log("completed");
});

function merge(item, cb){
    elas.insertDocument("color","collection",item,(err,stt)=>{
        console.log(stt);
        cb(null, "succeed");
    });
}
// elas.createIndex("color",()=>{
//
// });
// elas.deleteIndex("color",()=>{

// });

// colors.forEach((color)=>{
//     elas.insertDocument("color","collection",color,(err,stt)=>{
//         console.log(stt);
//     });
// });
// elas.searchAll("color","collection",(err,stt)=>{
//     console.log(stt);
// });