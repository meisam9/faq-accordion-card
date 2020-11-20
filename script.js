const questions=document.querySelectorAll('.question')
const icons=document.querySelectorAll('.arrow')
const answers=document.querySelectorAll('.answer')

questions.forEach((question, index)=>{

    question.addEventListener('click',(e)=>{
        answers[index].classList.toggle('show')
        icons[index].classList.toggle('rotate')
        question.classList.toggle('bold')
    })
})