let config = {}
config.brower = "Chrome"
config.timeout = 3000
config.timeout = 5000 //it will take the latest one
console.log(config) //{ brower: 'Chrome', timeout: 5000 }
delete config.brower
console.log(config) //{ timeout: 5000 }