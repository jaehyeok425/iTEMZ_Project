function showPopup(method, imageUrl) {
    document.getElementById('popupMessage').innerText = method + ' 결제가 완료되었습니다.';
    document.getElementById('popupImage').src = imageUrl;
    document.getElementById('popup').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closePopup() {
    document.getElementById('popup').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    goToCart();
}

function goToCart() {
    window.location.href = 'ShoppingBasket.html';
}