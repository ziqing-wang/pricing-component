const pageviews = document.querySelector('.pageviews');
const price = document.querySelector('.price__span');
const priceSlider = document.querySelector('.pricing-slider-bar');
const toggleBtn = document.querySelector('.toggle__btn');
const toggleContainer = document.querySelector('.pricing-billing-toggle');

let yearlyBilling = false;
let slider = parseInt(priceSlider.value) ; // Default silder value
console.log(slider);

const updatePrice = (price) => {
    const discount = 0.25;
    const resultString = yearlyBilling ? `$${price * 12 * discount}.00` : `$${price}.00`;
    return resultString;
}

const displayPrice = () => {
    switch (slider) {
        case 1:
            price.innerText = updatePrice(8);
            break;
        case 5:
            price.innerText = updatePrice(12);
            break;
        case 10:
            price.innerText = updatePrice(16);
            break;
        case 15:
            price.innerText = updatePrice(24);
            break;
        case 20:
            price.innerText = updatePrice(36);
            break;
        default:
            break;
    }
}

priceSlider.oninput = function () {
    const slideValue = parseInt(this.value);
    slider = slideValue;
    if (slideValue <= 10)
        pageviews.innerText = `${slideValue * 10}k Pageviews`;
    if (slideValue > 10 && slideValue < 20)
        pageviews.innerText = `${(slideValue - 10) * 100}k Pageviews`;
    if (slideValue === 20)
        pageviews.innerText = '1M Pageviews';
    displayPrice();
}

priceSlider.addEventListener('input', () => {
    const sliderValue = `${priceSlider.value * 5}%`;
    priceSlider.style.background = `linear-gradient(90deg, var(--color-cyan-soft) ${sliderValue}, var(--color-grayish-blue-light-1) ${sliderValue})`
});

toggleBtn.addEventListener('click', () => {
    yearlyBilling = !yearlyBilling;
    toggleContainer.style.backgroundColor = yearlyBilling ? 'var(--color-cyan-soft)' : 'var(--color-grayish-blue-light-2)';
    toggleBtn.style.transform = yearlyBilling ? 'translate(120%, -50%)' : 'translate(0,-50%)';
    displayPrice();
})