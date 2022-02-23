const questionBtns = document.querySelectorAll(".question-btn");

questionBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        // close any other open items
        const currentlyActive = document.querySelector(".question-btn.active");
        if (currentlyActive && currentlyActive!=btn){
            currentlyActive.classList.remove('active');
            currentlyActive.nextElementSibling.style.maxHeight = 0;
        }

        btn.classList.toggle('active');
        // get accordion answer element
        const answerBody = btn.nextElementSibling;
        if (btn.classList.contains('active')){
            answerBody.style.maxHeight = answerBody.scrollHeight + 'px';
        } else {
            answerBody.style.maxHeight = 0;
        }
    })
})