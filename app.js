const form = document.querySelector("#number-form");
const response = document.querySelector("#message");
const advert = document.querySelector("#ad");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    let x = form.elements.query.value;
    if (isNaN(x)) {
        response.innerText = `${x} is not a number!`;
        form.elements.query.value = "";
        advert.innerText = "";
        return;
    }
    try {
        const result = await fetch(
            `https://api.isevenapi.xyz/api/iseven/${x}/`
        );
        const data = await result.json();
        if (data.iseven) {
            response.innerText = `${x} is even!`;
        } else {
            response.innerText = `${x} is odd :(`;
        }
        advert.innerText = `Ad: ${data.ad}`;
    } catch (e) {
        response.innerText = ("Something went wrong:", e);
        advert.innerText = "";
    }
    form.elements.query.value = "";
});
