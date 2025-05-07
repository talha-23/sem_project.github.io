function postAd() {
    const model = document.getElementById('carModel').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const contact = document.getElementById('contact').value;

    document.getElementById('previewModel').textContent = model;
    document.getElementById('previewYear').textContent = year;
    document.getElementById('previewPrice').textContent = `${price}`;
    document.getElementById('previewDescription').textContent = description;
    document.getElementById('previewContact').textContent = contact;

    document.getElementById('adreview').style.display = 'block';
}
