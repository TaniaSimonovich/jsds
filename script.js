function Enter(name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
};

let user = null;

function SignUp(){
    const main = document.querySelector('.main');
    main.classList.toggle('none')
    const newDiv = document.createElement('div');
    document.body.appendChild(newDiv);
    newDiv.classList.add('mainTwo')
    newDiv.innerHTML = `
    <img class ="img" src="./img/logo.png">`
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Create a new EcoMarket account';
    // document.body.appendChild(h1);
    newDiv.appendChild(h1);
    const p = document.createElement('p');
    p.innerHTML = 'Already have an account?';
    // document.body.appendChild(p);
    newDiv.appendChild(p);
    const href = document.createElement('div');
    href.innerHTML = `<a href="#" onclick="main()">Login</a>`
    href.appendChild(p);
    href.classList.add('flex');
    // document.body.appendChild(href);
    newDiv.appendChild(href);
    const div = document.createElement('div');

    div.innerHTML = `<p>Name & Surname</p> <input type="text" name="Name&Surname" class = "name">
    <p>Email</p> <input type="email" name="email" class = "email"> 
    <p>Password</p> <input type="password" name="password" class = "password">
    <br><button onclick = "cons(this)">CREATE ACCOUNT</button>`;
    newDiv.appendChild(div);
}

function cons(element){
    const name = element.parentElement.children[1].value;
    const email = element.parentElement.children[3].value;
    const password = element.parentElement.children[5].value;
    // const enter = new Object();
// function enter(name, email, password){
//     enter.name = name;
//     enter.email = email;
//     enter.password = password;
// }
    user = new Enter(element.parentElement.children[1].value, element.parentElement.children[3].value, element.parentElement.children[5].value);
    console.log(user);
}

// const enter = new Object();
// const enter = {};
//     enter.name = name;
//     enter.email = email;
//     enter.password = password;
// console.log(enter);

function LogIn(element){
    const emailLogin = element.parentElement.children[2].value;
    const passwordLogin = element.parentElement.children[4].value;
    console.log(element.parentElement.children[5].value);
    if(user.email === element.parentElement.children[3].value && user.password === element.parentElement.children[5].value){
        alert('verno')
        shop();
    } else{
        alert('ne verno')
    }
    
}

function main(){
    const mainTwo = document.querySelector('.mainTwo');
    mainTwo.remove();
    const main = document.querySelector('.main');
    main.classList.toggle('none');
}


const tovari = [
    {
    img: 'https://api.ecomarket.ru/imgs/products_w/13647/thumb/mango-sochnoe---600-g-1.jpg',
    title: 'Манго',
    sale: '15p',
},
{
    img: '	https://api.ecomarket.ru/imgs/products/344/thumb/mandariny-premium---500-g-1.jpg',
    title: 'Мандарины',
    sale: '10p',
},
{
    img: 'https://api.ecomarket.ru/imgs/products/261/thumb/banany-spelye---1-kg-1.1636037767.jpg',
    title: 'Бананы',
    sale: '8p',
},
{
    img: '	https://api.ecomarket.ru/imgs/products_w/586/thumb/avokado-hass-2-sht--v-upakovke---300-g-1.jpg',
    title: 'Авокадо',
    sale: '18p',
},
{
    img: 'https://api.ecomarket.ru/imgs/products/458/thumb/apelsiny---500-g-1.jpg',
    title: 'Апельсины',
    sale: '6p',
},
{
    img: 'https://api.ecomarket.ru/imgs/products_w/276/thumb/laym---80-g-1.jpg',
    title: 'Лайм',
    sale: '14,99p',
},
{
    img: 'https://api.ecomarket.ru/imgs/products_w/2116/thumb/hurma-sharon---400-g-1.jpg',
    title: 'Хурма',
    sale: '5,50p',
},
{
    img: '	https://api.ecomarket.ru/imgs/products_w/2085/thumb/granat-importnyy---550-g-1.1642690352.jpg',
    title: 'Гранат',
    sale: '9p',
},
{
    img: 'https://api.ecomarket.ru/imgs/products_w/1308/thumb/inzhir-korichnevyy-sladkiy---200-g-1.jpg',
    title: 'Инжир',
    sale: '20,10p',
},
{
    img: '	https://api.ecomarket.ru/imgs/products_w/341/thumb/kivi---300-g-1.jpg',
    title: 'Киви',
    sale: '8p',
}
];

function product (array, containerForProducts){
    array.forEach((element, index) => {
        let container = document.createElement('div');
        container.setAttribute('id', String(index));
        
        container.innerHTML = `
        <img class = "imgTovari" src="${element.img}" alt='img'/>
        <p class = "title">${element.title}</p>
        <span class = "sale">${element.sale}</span>
        <button class = "elemSale" onclick="getTovari(this)">купить</button>
        `;
        
        containerForProducts.appendChild(container);
    })
}

function shop(){
    const main = document.querySelector('.main');
    main.classList.toggle('none');
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('flex');
    document.body.appendChild(mainDiv);
    const logo = document.createElement('div');
    logo.innerHTML = `<img onclick = "mainT()" src="./img/logo_top_1.png">`
    mainDiv.appendChild(logo);
    const input = document.createElement('input');
    input.innerHTML = `<input type="text" name="text" placeholder = "Enter product name">`
    mainDiv.appendChild(input);
    const img = document.createElement('div');
    img.innerHTML = `<img class = "icon" src="./img/svgexport-5.svg">`
    mainDiv.appendChild(img);
    // const p = document.querySelector('p');
    // p.innerHTML =`${user.name}`
    // mainDiv.appendChild(p);
    // p.classList.add('text');
    const basket = document.createElement('div');
    basket.innerHTML = `<img class = "bas" onclick = "showTovariBasket()" src = "https://cdn-icons-png.flaticon.com/512/3081/3081797.png">`
    basket.classList.add('basTov');
    mainDiv.appendChild(basket);
    const btn = document.createElement('button');
    btn.innerHTML = `exit`
    mainDiv.appendChild(btn);
    const tovarDiv = document.createElement('div');
    tovarDiv.classList.toggle('tovarDiv');
    tovarDiv.classList.toggle('grid');
    document.body.appendChild(tovarDiv);
    product(tovari, tovarDiv);
}

const busket = [];
function getTovari(element){
    const id = element.parentElement.getAttribute('id');
    busket.push(tovari[id]);
    console.log(tovari[id]);
    updateBasket();
}

function updateBasket(){
    const divBsket = document.createElement('div');
    divBsket.classList.add('position');
    const basket = document.querySelector('.basTov');
    basket.appendChild(divBsket);
    divBsket.innerHTML = busket.length;
}

function showTovariBasket(){
    const main = document.querySelector('.grid');
    main.classList.toggle('grid');
    main.classList.toggle('none');
    const tovarDiv = document.createElement('div');
    tovarDiv.classList.add('grid');
    document.body.appendChild(tovarDiv);
    product (busket, tovarDiv);
}

function mainT(){
    const mainT = document.querySelector('.grid');
    mainT.classList.toggle('grid');
    mainT.classList.toggle('none');
    const div = document.querySelector('.tovarDiv');
    div.classList.toggle('none');
    div.classList.toggle('grid');
    // const login = document.querySelector('.main');
    // login.classList.toggle('grid');
    // login.classList.toggle('none');
}
