const app = require ('./app');

//configuração para funcionar tanto em dev como em prd
var PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log(`App listen on PORT ${PORT}`)
})