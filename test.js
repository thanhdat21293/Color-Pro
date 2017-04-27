const elas = require("./elastic/index");
const moment = require("moment");
const shortid = require("shortid");
const data = require("./data.json");
let color= {
        "key": "data",
        "array": [
            "#69D2E7",
            "#A7DBD8",
            "#E0E4CC",
            "#F38630",
            "#FA6900"
        ],
        "key1": "name",
        "string": "Giant Goldfish"
    };
// elas.insertDocument("color","collection",color, ()=>{

// });

// elas.searchAll("color","collection",(err, stt)=>{
//     console.log(stt[0]["array"][0]);
// });

// let colors = []; 
// for(let count in data){
//     delete data[count].key;
//     delete data[count].key1;
//     data[count].id = shortid.generate();
//     data[count].name = data[count]['string'];
//     data[count].author = "nguyenpham93";
//     data[count].author_email = "s3408985@gmail.com";
//     data[count].date = moment().format("DD/MM/YYYY");
//     data[count].description = "Color collection";
//     data[count].like = 0;
//     data[count].dislike = 0;
//     data[count].share = 0;
//     elas.insertDocument("color","collection",data[count],(err,stt)=>{
//         console.log(stt);
//     });
// }
// elas.createIndex("color",()=>{
    
// });
// elas.deleteIndex("color",()=>{

// });

// colors.forEach((color)=>{
//     elas.insertDocument("color","collection",color,(err,stt)=>{
//         console.log(stt);
//     });
// });
elas.searchAll("color","collection",(err,stt)=>{
    console.log(stt);
});