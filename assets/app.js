function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextParent = parent.nextElementSibling;

            if (input.type === "text" && validateUser(input)) {
                nextForm(parent, nextParent);
            } else {
                parent.style.animation = "shake 0.75s ease";
                parent.addEventListener('animationend', () => {
                    parent.style.animation = '';
                    document.body.classList.remove('bg-error', 'bg-success');
                });
            }
        });
    });
}

function validateUser(user) {
    if (user.value.length < 6) {
        console.log("Not enough characters");
        document.body.classList.add('bg-error');
    } else {
        document.body.classList.add('bg-success');
        return true;
    }
}

function nextForm(parent, nextParent) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextParent.classList.add('active');
}


animatedForm();