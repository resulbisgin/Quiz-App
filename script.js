const quizData=[
    {
        question:'Aşağıdakilerden hangisi iş çevresi ile ilgili önemli bilgi kaynağı değildir?',
        a:'Belediyeler',
        b:'Ulusal Yayınlar',
        c:'Profosyonel Danışmanlık Firmaları',
        d:'Pazarlama Görevleri',
        correct:'a'
    },{
        question:'Aşağıdakilerden hangisi bir sistemin genel modeline örnek olur ?',
        a:'Araba-Boya-Sac',
        b:'Lehimleme-Direnç',
        c:'Buğday-Pişirme-Ekmek',
        d:'Sulama-Fide-Domates ',
        correct:'c'
    },{
        question:'Aşağıdakilerden hangisi işletmenin yakın iş  çevresinde yer almaz?',
        a:'Sendikalar',
        b:'İkame Mallar',
        c:'Ekonomik Çevre Sorunları',
        d:'Tüketiciler',
        correct:'c'
    },{
        question:'Yapılacak görev veya işletmenin var oluş nedeni nedir?',
        a:'Amaç',
        b:'Vizyon',
        c:'Girdi',
        d:'Misyon',
        correct:'d'
    },{
        question:'Madde,enerji ve enformasyon alışverişi yapılabilceği bir çevresi olmayan sistemlere nedir?',
        a:'Açık Sistemler',
        b:'Kapalı Sistemler',
        c:'Dinamik Sistemler',
        d:'Statik Sistemler',
        correct:'b'
    }
];
const answerEls=document.querySelectorAll(".answer");
const quiz=document.getElementById("quiz");
const questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submitBtn');
let currentQuiz=0;
let scrore=0;

loadQuiz();
   function loadQuiz(){
       deselectAnswers();
    const currentQuizData=quizData[currentQuiz];
    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
}
function getSelected(){
    
    let answer=undefined;
    answerEls.forEach((answerEl) =>{
         if(answerEl.checked){
             answer= answerEl.id;
         }
    });
    return answer;
}
function deselectAnswers(){
    answerEls.forEach((answerEl) =>{
        answerEl.checked=false;
   });
}
submitBtn.addEventListener('click' , ()=> {
    const answer =   getSelected();
    console.log(answer)
    if(answer){
       if(answer===quizData[currentQuiz].correct){
        scrore++;
       }
        currentQuiz++;  
        if(currentQuiz<quizData.length){
            loadQuiz();
         }
         else{
            quiz.innerHTML=`<h2>Doğru Cevap Sayısı ${scrore}/${quizData.length}sorular.</h2>
            <button onclick="location.reload();">Reload</button>` ;
         }
    }

});