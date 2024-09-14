const get = document.getElementById("button")

get.addEventListener("click", async function() {
    const qrText = document.getElementById("QR_text_part").value;
    console.log(qrText)

    const qrCode = document.getElementById("QR_img_part");
    // const qr_Url = `http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100`;
    const qr_Url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(QR_text_part)}&size=150x150`;
    console.log(qr_Url)

    qrCode.src = qr_Url;
});



