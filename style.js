let text_box=document.getElementById("in");
var screenWidth = window.innerWidth;
let key=document.getElementsByClassName("btn");
let btn=document.getElementsByClassName("btn");
let cal=document.getElementById("cal");
let text="";
let text2="";
let head=document.getElementById("head");
let change=true;
let founder=false;
let store_variable;
let checker=true;
let count=0;
let counter=0;
let incrementer=0;
let data;
let store_operation;



function checking(value)
{
  let found=false;
  let starter=0;
  console.log("data = ",data);
  for(let i=0;i<data.length;i++)
  {
    if(data[i]==value)
    {
        starter++
       
    }
  }

  if(starter==1)
  {
    found=true;
  }
return found;
}

for(let i=0;i<key.length;i++)
{
key[i].addEventListener("click", function() {

  if(key[i].innerHTML=="cos" || key[i].innerHTML=="sin"||key[i].innerHTML=="tan"|| key[i].innerHTML=="log10")
  {
          store_variable=key[i].innerHTML;
          checker=false;
          count=0;
  }



    if(key[i].innerHTML!="=" && key[i].innerHTML!="AC")
    {
    
if(key[i].innerHTML=="+"||key[i].innerHTML=="-"||key[i].innerHTML=="/"||key[i].innerHTML=="*")
  {    store_operation=key[i].innerHTML;
    counter++;
  }


  if(store_operation=="+"||store_operation=="-"||store_operation=="/"||store_operation=="*")
  {
    data=" ";
    if(counter>=2)
    {
    store_operation="";
  }
  }



if(counter>2)
{
  counter=0;
}


  text+=key[i].innerHTML;
 
 
  if(text[text.length-1]==text[text.length-2]&&incrementer>=1&&text[text.length-1]==".")
  {   
     text=data;
     alert("You can't (1) operate Number with multiple points ")
    } 
else if(key[i].innerHTML=="."&&checking(key[i].innerHTML)&&incrementer>=1)
{
  alert("You can't (2) operate Number with multiple points ")
  text=data;
}


if(store_operation!="+"||store_operation!="-"||store_operation!="/"||store_operation!="*")
{
  data=text;

}



console.log("data = ",data);
console.log("store_operation = ",store_operation);
if(store_operation=="+"||store_operation=="-"||store_operation=="/"||store_operation=="*")
{
  data=" ";
  if(counter>=2)
  {
  store_operation="";
}
}
console.log("data = ",data);
incrementer++;
  

  text_box.value=text;

    if(!checker)
    {
      if(count>=1)
      {
        
      text2+=key[i].innerHTML;
      }
    }
    count++;

    } 
    
    if(key[i].innerHTML=="=")
    {
      head.style.color="rgba(50, 105, 38, 0.938)";
      if(checker)
      {
        text_box.value=eval(text);
      }
      else{
        
        const angleInDegrees = Number.parseInt(text2);
        const angleInRadians = angleInDegrees * (Math.PI / 180); // Convert to radians
        

let Value;

if(store_variable=="cos")
{
  Value = Math.cos(angleInRadians);
}
else if(store_variable=="sin")
{
  Value = Math.sin(angleInRadians);
}
else if(store_variable=="tan")
{
  Value = Math.tan(angleInRadians);
}
else if(store_variable=="log10")
{
  Value = Math.log10(angleInRadians);
}


        text_box.value=eval(Value);
    

        value=0; 
        text2=" ";
        checker=true;
      }
      
      text_box.style.backgroundColor = "rgba(50, 105, 38, 0.938)";
      text_box.style.color = "yellow";
        cal.style.backgroundColor="black";
        for(let i=1;i<18;i++)
        {
        btn[i].style.backgroundColor="rgba(50, 105, 38, 0.938)"
         btn[i].style.color="black"
         btn[i].style.borderRadius="50%";
         btn[i].style.border="";
        }
        change=false;
        
        for(let i=18;i<21;i++)
        {
          btn[i].style.backgroundColor="rgba(50, 105, 38, 0.938)"
          btn[i].style.color="black";
          btn[i].style.border="";
        }

        btn[0].style.backgroundColor="rgba(50, 105, 38, 0.938)"
          btn[0].style.color="black";
          btn[0].style.border="";
        text="";
        data="";
      }


      if(key[i].innerHTML=="AC")
      { text_box.value="";
      text="";
      change=true;
      text2=" ";
      data="";
      store_operation="";
      counter=0;
        }
        

    
    founder=true;
  

  });

  
  if(founder)
  {
  break;
  }
 
}




setInterval(() => {

  if(change){
  cal.style.backgroundColor="rgb(181, 181, 61)";
  cal.style.border="solid 2px rgb(181, 181, 61)";
  for(let i=1;i<19;i++)
  {
  btn[i].style.backgroundColor="black"
   btn[i].style.color="white"
   btn[i].style.height="120";
   btn[i].style.width="105";
   btn[i].style.borderRadius="30%";
   btn[i].style.border="rgb(181, 181, 61)";

}

for(let i=18;i<21;i++)
{
  btn[i].style.backgroundColor="black"
  btn[i].style.color="white"
   btn[i].style.height="120";
   btn[i].style.width="105";
   btn[i].style.border="rgb(181, 181, 61)";
}
  btn[0].style.backgroundColor="black"
   btn[0].style.color="white"
   btn[0].style.height="120";
   btn[0].style.width="105";
   btn[0].style.border="rgb(181, 181, 61)";


text_box.style.backgroundColor="black";
text_box.style.color="white";
text_box.style.border="black 2px solid";
head.style.color="rgb(181, 181, 61)";
}

}, 1000);




setInterval(()=>{

  
  if(change)
  {
  cal.style.backgroundColor="rgb(24, 3, 39)";
  cal.style.border="solid 2px rgb(24, 3, 39)";
  for(let i=1;i<19;i++)
  {
  btn[i].style.backgroundColor="rgb(24, 3, 39)"
  if(screenWidth>900)
  {
  btn[i].style.border="solid 4px rgb(195, 195, 249)"
}
else if(screenWidth<=900)
{
  btn[i].style.border="";

}
   btn[i].style.color="rgb(195, 195, 249)"
   btn[i].style.height="120";
   btn[i].style.width="105";
   btn[i].style.borderRadius="50%";
}
  
for(let i=19;i<21;i++)
{
btn[i].style.backgroundColor="rgb(24, 3, 39)"
   btn[i].style.color="rgb(195, 195, 249)"
   btn[i].style.height="120";
   btn[i].style.width="105";
   if(screenWidth>900)
   {
   btn[i].style.border="solid 4px rgb(195, 195, 249)"
  }
else if(screenWidth<=900)
{
  btn[i].style.border="";

}
}
  btn[0].style.backgroundColor="rgb(24, 3, 39)"
   btn[0].style.color="rgb(195, 195, 249)"
   btn[0].style.height="120";
   btn[0].style.width="105";
   if(screenWidth>900)
   {
   btn[0].style.border="solid 4px rgb(195, 195, 249)"
   }
else if(screenWidth<=900)
{
  btn[0].style.border="";

}
  text_box.style.border="solid 4px rgb(195, 195, 249)";
text_box.style.backgroundColor="rgb(24, 3, 39)";
text_box.style.color="rgb(195, 195, 249)";
head.style.color="rgb(195, 195, 249)";
  }

},1500)




