// template_zpq8n8s
// service_s73jo8f
// KzE_yJSwsksIXweUp

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_s73jo8f',
            'template_zpq8n8s',
            event.target,
            'KzE_yJSwsksIXweUp'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly at youngisaiahm@gmail.com."
        );
    })
}