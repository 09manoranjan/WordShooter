
alert("Time limit is set to 45 sec..!!\nGame will reset after this time limit..!!\nClick ok to continue !!")
setInterval(Timer,1000);

create_button();

    //user defined word
    var word="";
    var limit=46;
    var count=0;
    
    //intial score=0 for user 
    score=0;
    document.getElementById("score").innerHTML = score;

    //words list
    words=['apple','microsoft','pen','school','losers','winner','black','pass','singer','letter','random','zip','fanal','okara','soak']
    

    //live functions
    function add(page) //Users word
    {
        word=word+page;
        document.getElementById("demo").innerHTML="Your current word is <b>"+word+"</b>";
        console.log("word-->",word);
    }

    function create_button() //random generating buttons / shuffled letters
    {
        var totalButtons = parseInt(Math.random()*11)+3;
        document.getElementById("main_content").innerHTML="";
        var navButtons = document.getElementById("main_content");
        var page='';
        var word='';
        
        console.log(totalButtons)
        for (var b=0; b<totalButtons;b++)
        {
            var button = document.createElement("button");
            var ran=String.fromCharCode(Math.floor(Math.random() * 26) + 97); //Generating random alphabets
            button.setAttribute("pageto", ran);
            button.innerHTML=ran;
            navButtons.appendChild(button);
           
      
             button.addEventListener("click", function(event) {
                var btn = event.target;
                page = btn.getAttribute("pageto");
                navButtons.appendChild(btn);
                add(page);
                });
        }
    }

    function submit() //submit the user word and generating score
     {
        for( i = 0; i < words.length; i++) {
        if(word.match(words[i])){
        var len = word.length;
        score = score +  5;
        document.getElementById("score").innerHTML="";
        alert("Correct Word..!!\nBonus (+"+(5)+")..!!");
        document.getElementById("demo").innerHTML = '';
        break;
        }
        }
        if(i == words.length)
        {
            score = score - 5;
            alert("Wrong Word..!!\nPenalty (-5)..!!");
            document.getElementById("demo").innerHTML = '';
            
        }
        word = '';
        document.getElementById("score").innerHTML = score;
    }
    function Timer() {   //Timer function
        limit = limit - 1;
        count = count + 1;
        document.getElementById("time").innerHTML = limit+" secs";
        if(limit == 0) {
        alert('GAME OVER..!!\nYour score is: '+score);
        document.location.reload(true)  //Reloading the page
        }
    }