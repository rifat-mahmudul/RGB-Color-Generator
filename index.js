const generateRGBColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

const updateColor = () =>{
    const colorBox = document.getElementById("colorBox");
    const color = generateRGBColor();
    colorBox.style.backgroundColor = color;

    const colorCode = document.getElementById("colorCode");

    colorCode.innerText = color;
}

const CopyColorCode = () =>{
    const colorCode = document.getElementById("colorCode");
    const inputTag = document.createElement("input");
    document.body.appendChild(inputTag);
    inputTag.value = colorCode.innerText;

    inputTag.select();
    document.execCommand("copy");
    document.body.removeChild(inputTag);
    alert("Color Code Copied");
}

const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {
    CopyColorCode();
})

function generateNewColor(){
    updateColor();
}