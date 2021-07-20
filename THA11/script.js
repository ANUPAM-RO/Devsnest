const quizedb = [
        {

            question:"Q1.Ethernet, Token Ring and token Bus are all different types of",
            a:"LANs",
            b:"MANs",
            c:"WANs",
            d:"VANs",
            ans:"ans3"
        },{
            question:"Q2.Which topology requires a multipoint connection?Which topology requires a multipoint connection?",
            a:"mesh",
            b:"star",
            c:"ring",
            d:"bus",
            ans:"ans1"
            
        },{
            question:"Q3.Which topology requires a central controller or hub?",
            a:"Mesh",
            b:"star",
            c:"ring",
            d:"bus",
            ans:"ans2"  
            
        },{
            question:"Q4.A Token Ring frame can be identified as a token frame by a bit in the field",
            a:"SD",
            b:"AC",
            c:"FC",
            d:"ED",
            ans:"ans2"
        },{
            question:"Q5.A subnet mask in class A has fourteen 1s. How many subnets does it define?",
            a:"32",
            b:"8",
            c:"64",
            d:"128",
            ans:"ans3"
        }];

    


const question = document.querySelector('.question');
const option1 = document.querySelector('#options1');
const option2 = document.querySelector('#options2');
const option3 = document.querySelector('#options3');
const option4 = document.querySelector('#options4');
const submit = document.querySelector('#btn');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showScore');
let score = 0;
let questionCount = 0;
const loadquestions = () => {
    const questionList = quizedb[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadquestions();

getCheckAnswer = () =>{
    let answer;

    answers.forEach((currAnsele) => {
        if(currAnsele.checked){
            answer = currAnsele.id;
        }
        
    });
    return answer;
};
submit.addEventListener('click', () =>{
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

if(checkAnswer === quizedb[questionCount].ans){
    score++;
};

questionCount++;
if(questionCount < quizedb.length)
{
    loadquestions();
}else{
    showscore.innerHTML = `
    <h3> Your Score ${score}/${quizedb.length} </h3>
    <button class="btn-1" onclick ="location.reload()">Play Again</button>
    `;
     
    showscore.classList.remove('scoArea');

}
});

