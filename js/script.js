window.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.querySelector('.section-form__container'),
          form = document.querySelectorAll('.section-form__form');

    formContainer.addEventListener('click', (event) => {
        if (event.target.hasAttribute('data-back') || event.target.hasAttribute('data-next')) {
            form.forEach((el)=>{
                el.classList.toggle('form_active')
            })
        }
    });
});