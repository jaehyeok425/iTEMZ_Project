function redirectToURL(checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    if (checkbox.checked) {
        if (checkboxId === 'checkbox1') {
            window.location.href = "file:///C:/HomePage/DiscountProduct.html";
        } else if (checkboxId === 'checkbox2') {
            window.location.href = "file:///C:/HomePage/NewProduct.html";
        }
    }
}
