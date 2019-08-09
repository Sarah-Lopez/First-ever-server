$(document).ready(function () {
    let reservationForm;


    $('#submit').click(function (e) {
        e.preventDefault();
        let inputName = $('#name').val();
        let inputNumber = $('#number').val();
        let inputEmail = $('#email').val();
        let inputID = $('#identifier').val();
        console.log(
            inputName,
            inputEmail,
            inputNumber,
            inputID
        );
        
        reservationForm = {
            name: inputName,
            email: inputEmail,
            number: inputNumber,
            ID: inputID
        };

        console.log(reservationForm);
    
    });
});



