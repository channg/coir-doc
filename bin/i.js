let colors = require("../../../node_modules/colors/lib/index.js")
let allow = ">>".green

console.log(allow+` cd __1____2____3__`)
console.log(allow+` npm install `)
console.log(allow+` npm run start`)
console.log("-----------------------".green)
if("__0__"==="docute"){
  console.log(`${allow} Read the document in https://docsify.js.org/`)
}else if ("__0__"==="gitbook"){
  console.log(`${allow} Read the document in https://www.gitbook.com/`)
}else{
  console.log(`${allow} Read the document in https://docute.js.org/`)
}