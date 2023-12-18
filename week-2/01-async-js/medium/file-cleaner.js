const fs=require('fs');
let str;
fs.readFile("a.txt", "utf8", (err, data)=>{
    if(err){
        console.log("error found", +err.message);
        return;
    }
    console.log("Data:"+data);
    for(let i=1;i<data.length;i++){
        if(data[i-1]==data[i] && data[i]==' '){
            continue;
        }
        str+=data[i];
    }
    console.log(str);
    fs.writeFile("a.txt", str, 'utf8', (err)=>{
        if(err){
            console.log("error in writing", +err.message);
            return;
        }
        console.log("File cleaned succesfully");
    });
});
