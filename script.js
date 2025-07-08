let data = [{
    url:'./1.webp',
    name:'dedpool',
    rating:17,
    ganre:'urush',
    button:'korish'
       
 
},
{
    url:'./1.webp',
    name:'kalmar oyini',
    rating:100,
    ganre:'urush, drama',
    button:'korish'
       
    
     
},
{
    url:'./1.webp',
    name:'Tarot',
    rating:65,
    ganre:'ujas',
    button:'korish'
       
     
},
{
    url:'./1.webp',
    name:'kobra kai',
    rating:35,
    ganre:'jangari ,drama',
       button:'korish'
     
},
{
    url:'./1.webp',
    name:'Tor 4',
    rating:83,
    ganre:'urush , drama',
       button:'korish'
    
     
},
{
    url:'./1.webp',
    name:'qora pantera',
    rating:91,
    ganre:'urush , drama',
       button:'korish'
    
     
},
{
    url:'./1.webp',
    name:'jinoyat shahri',
    rating:27,
    ganre:'urush',
       button:'korish'
     
},
{
    url:'./1.webp',
    name:'supermen',
    rating:55,
    ganre:'urush',
       button:'korish'
     
},
{
    url:'./1.webp',
    name:'choqintirgan ota',
    rating:79 ,
    ganre:'urush , drama',
       button:'korish'
    
     
},
{
    url:'./1.webp',
    name:'tashrif',
    rating: 44 ,
    ganre:'ujas',
       button:'korish'
    
     
},]



console.log(data);




let main = document.querySelector('main');


  




let myFunction = (filtered)=>{

main.innerHTML = ''
    filtered.map((item)=>{
        main.innerHTML  +=`
           <div>
      <img src='${item.url}' alt="">
      <h2>${item.name}</h2>
      <h3>${item.rating}</h3>
      <h4>${item.ganre}</h4>
      <button>${item.button}</button>
    </div>
        `
    });
};

  myFunction(data);



let select = document.querySelector('select');




select.addEventListener('change',()=>{
       
        let newData =[...data]


        if(select.value === "name"){
            newData.sort((a,b)=>  a.name.localeCompare(b.name));
        }else if((select.value === "name2")){
           newData.sort((a,b)=>  b.name.localeCompare(a.name));
        }else if((select.value === "rating")){
        newData.sort((a,b)=> a.rating - b.rating);
     }else if((select.value === "rating2")){
        newData.sort((a,b) => b.rating - a.rating);
     };



     myFunction(newData)
})



let inp = document.querySelector('input')

inp.addEventListener('input',()=>{
        let filterlangan = data.filter((item)=>{
            return item.name.toLowerCase().includes(inp.value.toLowerCase())
        })

        myFunction(filterlangan)
})

