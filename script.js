

const nextbtn = document.querySelector(".next");
const adviceIdEL = document.getElementById("advice-id");
const adviceEL = document.getElementById("advice");

const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => displayData(data))
    .then((err) => console.log(err));
}

const displayData = (data) => {
    console.log(data);

    const { id } = data.slip;
    const { advice } = data.slip;

    adviceIdEL.innerHTML = `ADVICE  #${id}`;
    adviceEL.innerHTML = `"${advice}"`;
}

nextbtn.addEventListener("click", ()=> {
    getAdvice();
});

getAdvice();