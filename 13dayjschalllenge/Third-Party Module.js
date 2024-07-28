// 3. Third-Party Module Script: Write a script that installs, imports, and uses functions from third-party modules like lodash and axios.



let lodash = require("lodash")
let arr = [1,2,3,4,5]

console.log("using chunk method",lodash.chunk(arr,1))

arr = [0,false,2,5,7,8]

console.log("using compact method",lodash.compact(arr))


// import axios  from 'axios'
let axios = require("axios")

axios.get("htps://dog.ceo/api/breeds/image/random").then((res)=>{
    console.log("Result",res.data)
}).catch((err)=>{
    console.log("Error:",err.message)
})



