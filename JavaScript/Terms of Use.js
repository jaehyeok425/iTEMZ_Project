document.addEventListener('DOMContentLoaded', () => {
    const allAgreeCheckbox = document.getElementById('all-agree');
    const individualCheckboxes = Array.from(document.querySelectorAll('.individual-agree'));

    allAgreeCheckbox.addEventListener('change', function() {
        individualCheckboxes.forEach(checkbox => {
            checkbox.checked = allAgreeCheckbox.checked;
        });
    });

    individualCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (!this.checked) {
                allAgreeCheckbox.checked = false;
            } else if (individualCheckboxes.every(checkbox => checkbox.checked)) {
                allAgreeCheckbox.checked = true;
            }
        });
    });
});
