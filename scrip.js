const name = document.getElementById('name');
const img = document.getElementById('img');
const about = document.getElementById('about');
const code = document.getElementById('code');
const totalItem = document.getElementById('totalItem');
const presentItem = document.getElementById('presentItem');
const storeLink = document.getElementById('storeLink');
const reloadBtn = document.getElementById('reloadBtn');

let indexNumber = 0;
const fetchData = (index) => {
    fetch('https://arabcoupondaily-ext.onrender.com/coupons')
        .then(res => res.json())
        .then(data => {
            if (index + 1 === data.length) {
                indexNumber = -1;
            }
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
reloadBtn.addEventListener('click', () => {
    indexNumber += 1;
    fetchData(indexNumber);
})