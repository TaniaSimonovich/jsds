// const enter = new Object();
// const enter = {};
//     enter.name = name;
//     enter.email = email;
//     enter.password = password;

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
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Create a new MeITSchool account';
    // document.body.appendChild(h1);
    newDiv.appendChild(h1);
    const p = document.createElement('p');
    p.innerHTML = 'Already have an account?';
    // document.body.appendChild(p);
    newDiv.appendChild(p);
    const href = document.createElement('div');
    href.innerHTML = `<a href="#" onclick="main()">Login</a>`
    // document.body.appendChild(href);
    newDiv.appendChild(href);
    const div = document.createElement('div');

    div.innerHTML = `<p>Name & Surname</p> <input type="text" name="Name&Surname" class = "name">
    <p>Email</p> <input type="email" name="email" class = "email"> 
    <p>Password</p> <input type="password" name="password" class = "password">
    <button onclick = "cons(this)">CREATE ACCOUNT</button>`;
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
    console.log(Enter.email);
    if(user.email === element.parentElement.children[2].value && user.password === element.parentElement.children[4].value){
        alert('verno')
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