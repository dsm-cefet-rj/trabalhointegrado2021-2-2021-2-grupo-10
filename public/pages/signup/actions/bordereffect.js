async function changeBorderEffect(opt) {
    if (!opt.target.checked) {
        opt.target.parentElement.style.boxShadow = '1px 1px 0em 0em rgba(50, 130, 221, 0.0)';
    } else {
        opt.target.parentElement.style.boxShadow = '2px 3px 0em 0.2em rgba(50, 130, 221, 0.7)';
    }
    opt.stopPropagation()
}

async function changeCheckBoxesBorderEffect() {
    let svcOptions = document.querySelectorAll('div[class$="-step-3--option"]')
    await Promise.all(
        Array.from(svcOptions).map((opt) => {opt.addEventListener('change', changeBorderEffect)}
        )
    );
};

changeCheckBoxesBorderEffect();