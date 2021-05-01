import React, {useState  } from 'react';
import './App.css';
import words from "./word";


const App = () => {

const[check,setIsCheck]=useState(true);
function colorArr(){
let arr=["blue","grey","green","black"]
const wordList = words;
let newArr=[];
let colorGreen=0;
let colorBlue=0;
let colorGrey=0;
let colorBlack=0;


while(newArr.length < 16){
  let newItem=Math.floor(Math.random() * 4);
  let newWord=Math.floor(Math.random() * 360);
  let wordArr=[];
  console.log(newWord,"newWord");
  if(arr[newItem]=="blue" && colorBlue <= 4 && !wordArr.includes(wordList[newWord])){
  colorBlue++
  console.log("aaya kya")
  wordArr.push(wordList[newWord])
  newArr.push({"color":arr[newItem],"word":wordList[newWord]});
  }
  if(arr[newItem]=="green" && colorGreen <= 4 && !wordArr.includes(wordList[newWord])){
    colorGreen++
    wordArr.push(wordList[newWord])
  newArr.push({"color":arr[newItem],"word":wordList[newWord]});


    }
    if(arr[newItem]=="grey" && colorGrey <= 4 && !wordArr.includes(wordList[newWord])){
      colorGrey++
      wordArr.push(wordList[newWord])
  newArr.push({"color":arr[newItem],"word":wordList[newWord]});


      }
      if(arr[newItem]=="black" && colorBlack != 1 && !wordArr.includes(wordList[newWord])){
        colorBlack++
        wordArr.push(wordList[newWord])
  newArr.push({"color":arr[newItem],"word":wordList[newWord]});


        }
}

 return newArr;
}

// height: 30px;
// margin-left: 30px;
// margin-top: 68px;



  return (
    <div style={{width:"100%",display:"flex",flexWrap:"wrap"}}>
      {
        colorArr
        ().map((value,index)=>{
          return(
          <p style={{background:value.color,height:"100px",width:"350px",paddingTop:"30px",textAlign:"center",color:"white"}}>{value.word}</p>
        )})
      }

      <button style={{height:"30px",marginLeft:"30px",marginTop:"68px"}} onClick={()=>{colorArr()
      console.log("click")
      setIsCheck(!check)
      }}>Generate</button>
    </div>
  )
}

export default App


