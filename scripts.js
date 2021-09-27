let emailData

const email = document.querySelector('#email').addEventListener('keyup', (e) => {
    emailData = e.target.value;
});

const confirm = document.querySelector('#submit').addEventListener('click', () => {
    handleContact(emailData)
});

const handleContact = (props) => {
    swal("Obrigado!", `${props}\nEntraremos em contato! `, "success");
}
