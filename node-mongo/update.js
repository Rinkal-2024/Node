const dbConnect = require('./mongodb');

const updateData =async()=>{
    let data = await dbConnect();
    let result = await data.updateOne(  //for many update update()
        {name :'note-6'},
        {$set :{name :'note 5' ,price:311}}
    );
    console.log(result);
}
updateData();