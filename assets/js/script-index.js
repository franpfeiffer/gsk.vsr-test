window.addEventListener("load", function () {
    const siBox = document.querySelector('.main-container__content__section-question__box-answer_si');
    const noBox = document.querySelector('.main-container__content__section-question__box-answer_no');

    siBox.addEventListener('click', function () {
        siBox.classList.add('active');
        noBox.classList.remove('active');
    });

    noBox.addEventListener('click', function () {
        noBox.classList.add('active');
        siBox.classList.remove('active');
    });
    const responseSi = document.querySelector('.main-container__content__section-question__box-answer_si');
    const responseNo = document.querySelector('.main-container__content__section-question__box-answer_no');
    const responseTextSi = document.querySelector('.response-si');
    const responseTextNo = document.querySelector('.response-no');
    const hrQuestion = document.querySelector('.hr-question');

    responseSi.addEventListener('click', function () {
        responseTextNo.classList.remove('active');
        hrQuestion.classList.add('active');
        responseTextSi.classList.add('active');
    });

    responseNo.addEventListener('click', function () {
        responseTextSi.classList.remove('active');
        hrQuestion.classList.add('active');
        responseTextNo.classList.add('active');
    });
});
