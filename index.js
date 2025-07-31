const quotes = [
    {
      id: 1,   
      quote:" You only live once, but if you do it right, once is enough",
      writer: "victor tonye",
      type: "funny",
    },

{
    quote:`"Life is like riding a bicycle. To keep your balance, you must keep moving." - Albert Einstein 
`,
    writer:`- Albert Einstein`
},{
    quote:`" Life isn't about finding yourself,Life is about creating yourself"`,
    writer:`- victor tonye`
},{
    quote:`" Like the river, keep on flowing "`,
    writer:`- victor tonye`,
    writer: "victor tonye",
    type: "funny",
},{
    quote:`" Who ever gave the notion that javascript is hard was wrong"`,
    writer:`- Prince Lee`,
    writer: "victor tonye",
    type: "motivation",
},{
    quote:`" Stop listening to these voices, u are already a super developer"`,
    writer:`- Prince Lee`,
    writer: "victor tonye",
    type: "motivation",
},{
    quote:`" You have great potential,Dont let these thought limit you "`,
    writer:`- Prince Lee`,
    writer: "victor tonye",
    type: "funny",
},]

let btn = document.querySelector("#qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");
let type = document.querySelector(".type");
let id = document.querySelector(".id");


btn.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})