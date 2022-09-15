const name = document.getElementById('name');
const img = document.getElementById('img');
const about = document.getElementById('about');
const code = document.getElementById('code');
const totalItem = document.getElementById('totalItem');
const presentItem = document.getElementById('presentItem');
const storeLink = document.getElementById('storeLink');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const copy = document.getElementById('copy');
const myTooltip = document.getElementById('myTooltip');

let indexNumber = 0;
let totalCoupon = 0;
const fetchData = (index) => {
    fetch('https://arabcoupondaily-ext.onrender.com/coupons')
        .then(res => res.json())
        .then(data => {
            totalCoupon = data.length;
            const coupon = data[index];

            name.innerText = coupon?.name;
            about.innerText = coupon?.about;
            code.innerText = coupon?.code;
            presentItem.innerText = `${index + 1}`;
            totalItem.innerText = `${data.length}`;
            img.setAttribute('src', coupon?.picture);
            storeLink.setAttribute('href', coupon?.link);
        })
}
setTimeout(() => {
    fetchData(indexNumber);
}, 1)
// previous button event listener
prevBtn.addEventListener('click', () => {
    console.log(totalCoupon);
    if (indexNumber === 0) {
        indexNumber = totalCoupon - 1;
    } else {
        indexNumber -= 1;
    }
    fetchData(indexNumber);
})
// next button event listener
nextBtn.addEventListener('click', () => {
    if (indexNumber + 1 === totalCoupon) {
        indexNumber = 0;
    } else {
        indexNumber += 1;
    }
    fetchData(indexNumber);
})
// copy text
copy.addEventListener('click', () => {
    const selectedCode = code.innerText;
    navigator.clipboard.writeText(selectedCode).then(() => {
        myTooltip.innerText = `${selectedCode} is copied!`
    })
})