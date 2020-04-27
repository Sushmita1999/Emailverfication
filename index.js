const express=require("express")

const app=express()

const sendmail=require("./routes/sendmail")
const verify=require("./routes/verify")


app.use(express.json());
app.use(express.urlencoded({
    extended:'true'
}));

app.use("/",sendmail)
app.use("/",verify)

app.listen(process.env.PORT || 6000,function(){
   console.log("Started on port 6000");
});

