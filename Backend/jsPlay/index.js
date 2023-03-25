const express= require("express");
const cors=require("cors")
const bodyParser = require("body-parser");
const {Configuration, OpenAIApi} = require("openai");

const config =new Configuration({
    apiKey:"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",
})
const openai=new OpenAIApi(config);
const app=express();

app.use(bodyParser.json());
app.use(cors());

app.post(("/chat"), async(req,res)=>{
    const{prompt} = req.body;
    const completion = await openai.createCompletion({
        model:"text-davinci-003",
        max_tokens:1000,
        temperature:0,
        prompt:prompt,
    });
    res.send(completion.data.choices[0].text);
})

const port=8080;
app.listen(port,()=>{
    console.log(`Server listening to port ${port}`);
});