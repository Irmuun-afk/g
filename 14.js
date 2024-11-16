// Javascript -> tootsoolol hiih
// variable/huvisagch -> ugugdul hadgalna;
// if else -> nuhtsul shalgah / tentsuu bnu?, ih bnu ,baga bnu
// for -> neg uilseliig olon davtah ued ashiglana
// function -> olon kodnii tsugluulga/ dahij ashiglah bolomjtoi
// massive/array -> [], index/olon utga zereg hadgalah
// object -> {}, key:value
// api -> tusgai beldsen datag holboh
// .innerText -> tag dotorh vgiig uurchluh
// document -> html buh code
// addEventListener -> websited hiigdeh uildel
// html, css -> text zurag gargaj irdeg
const questionEl = document.querySelector('.question');
const result = document.querySelector('.result');
const choice = document.querySelector('.choice');
const nextBtn = document.querySelector('.next');
let quizData = [
    {
        "question":"what color is apple ?",
        "choice":["red","green","black","white","pink"],
        "answer":"red",
    },
    {
        "question":"what color is banana ?",
        "choice":["red","green","black","white","pink","yellow"],
        "answer":"yellow",
    },
    {
        "question":"what color is avocado ?",
        "choice":["red","green","black","white","pink"],
        "answer":"green",
    },
    {
        "question":"what color is sky ?",
        "choice":["red","green","black","white","pink","blue"],
        "answer":"blue",
    },
    {
        "question":"what color is sun ?",
        "choice":["red","green","black","white","pink","yellow"],
        "answer":"yellow",
    },
    {
        "question":"what color is moon ?",
        "choice":["red","green","grey","white","pink","black"],
        "answer":"grey",
    },
];
let now=0;
let count=0;
console.log(quizData[now].question);
function display(){
    questionEl.innerText = quizData[now].question;
    quizData[now].choice.forEach(data=>{
        console.log(data);
        let btn = document.createElement('button');
        btn.innerText = data;
        console.log(btn);   
        choice.append(btn);
        btn.addEventListener('click',()=> checkAnswer(data));
    });
}
function checkAnswer(data){
    console.log(data);
    if(data==quizData[now].answer){
        result.innerText="Correct!!!!!!!!!!!!"
        count++;
    }else{
        result.innerText="wrong!!! Answer is "+quizData[now].answer;
    }
}
nextBtn.addEventListener('click',()=>{
    questionEl.innerText="";
    result.innerText="";
    choice.innerHTML="";
    now++;
    if(now==quizData.length){
        result.innerText="Done!!!!"+count+"/"+quizData.length;
        nextBtn.style.display="none";
    }else{
        display();
    }
      
});
display(); 
