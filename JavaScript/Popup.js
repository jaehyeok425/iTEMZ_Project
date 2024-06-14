    function openPopup(title, imageUrl, itemTitle, price) {
        document.getElementById("popup-title").innerText = title;
        document.getElementById("popup-image").src = imageUrl;
        document.getElementById("popup-image").alt = title;
        document.getElementById("popup-title-info").innerText = itemTitle;
        document.getElementById("popup-price").innerText = price;
        document.getElementById("price-input").value = price.replace(/[^0-9]/g, '');
        document.getElementById("popup").style.display = "flex";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }
