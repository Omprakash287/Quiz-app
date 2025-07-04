    let count1 = 0 - 1;
    let Question = document.getElementById("Question");
    let Answer = document.getElementById("Answer");
    let next = document.getElementById("next");
    let realans = document.getElementById("realans");
    let show = document.getElementById("show");
    let score1=document.getElementById("quiz-container")
    let count = 0;
    
    let score=0;

    let arr = [
      
      {
        question: "Q1.Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
      },
      {
        question: "Q2.Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
      },
      {
        question: "Q3.Which is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
      },
      {
        question: "Q4.What is the main language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "French", "English"],
        answer: "Portuguese"
      },
     
      {
        question: "Q5.Which instrument is used to measure temperature?",
        options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        answer: "Thermometer"
      },
     
      {
        question: "Q6.Who was the first person to walk on the moon?",
        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
        answer: "Neil Armstrong"
      },
      {
        question: "Q7.Which part of the plant conducts photosynthesis?",
        options: ["Root", "Stem", "Leaf", "Flower"],
        answer: "Leaf"
      },
      {
        question: "Q8.Which is the fastest land animal?",
        options: ["Lion", "Cheetah", "Tiger", "Horse"],
        answer: "Cheetah"
      },
      {
        question: "Q9.What is the freezing point of water?",
        options: ["0°C", "32°C", "50°C", "100°C"],
        answer: "0°C"
      },
      {
        question: "Q10.Which gas is essential for us to breathe?",
        options: ["Hydrogen", "Oxygen", "Carbon Dioxide", "Nitrogen"],
        answer: "Oxygen"
      }
    ];
    const abc = () => {
        const q=arr[count]
        
         
      if (count < arr.length) {
         show.style.display = "inline";
        Question.innerText = arr[count].question;
              Answer.innerHTML=""; 

        q.options.forEach(element => {
          const btn =document.createElement("button")
        
            btn.classList.add("option");
           
           btn.innerHTML= element ;
            // btn.style.display = "block"; 
            btn.style.margin="0px 5px";
         
            Answer.appendChild(btn)
           
     let scorecount=()=>{
          if(element === q.answer){
           
             score++;
             
             abc()  
          }
          else{
            
           abc()
          }
          
       }

             
           btn.onclick=scorecount;
          
        });
        // Answer.innerHTML = arr[count].options;
      
        //call,apply and Bind 
        


        count1 = count;
        realans.innerHTML = "";
     

        count++;
      }
      else {
        console.log("bye");
        next.disabled = true;

        
       score1.innerText = `Final Score: ${score} out of ${arr.length}`;

      }
    }
    const showans = () => {

      
      realans.innerHTML = arr[count1].answer;

    }

    
    

