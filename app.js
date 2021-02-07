const generateBtn = document.querySelector(".generate-btn");
const character = document.querySelector(".character-placeholder");
const mbtn = document.querySelector(".gm-btn");
const fmbtn = document.querySelector(".gfm-btn");

const maleCharsGoffSport = [
  "003",
  "013",
  "019",
  "025",
  "027",
  "035",
  "034",
  "036",
  "038",
  "042",
  "050",
  "052",
  "067",
  "081",
  "084",
  "099",
];

const femaleChars = [
  "009",
  "011",
  "014",
  "018",
  "021",
  "022",
  "028",
  "031",
  "032",
  "037",
  "041",
  "045",
  "046",
  "049",
  "051",
  "054",
  "055",
  "057",
  "063",
  "066",
  "069",
  "070",
  "072",
  "074",
  "078",
  "082",
  "095",
];

const maleCharsGoffNormal = [
  "004",
  "023",
  "024",
  "030",
  "033",
  "040",
  "044",
  "056",
  "058",
  "076",
  "079",
  "085",
  "087",
  "092",
  "093",
  "094",
];

const maleCharsGonNormal = [
  "005", //
  "007", //
  "008", //
  "010", //
  "012", //
  "015", //
  "017", //
  "020", //
  "026", //
  "029", //
  "039", //
  "048", //
  "053", //
  "060", //
  "064", //
  "071", //
  "073", //
  "075", //
  "083", //
  "086", //
  "088", //
  "089", //
  "090", //
  "091", //
  "096", //
  "097", //
  "100", //
];

const maleCharsGonSport = [
  "001",
  "006",
  "016",
  "043",
  "047",
  "059",
  "062",
  "065",
  "077",
  "080",
  "098",
];

const maleCharsGon = [
  "001",
  "005",
  "006",
  "007",
  "008",
  "010",
  "012",
  "015",
  "016",
  "017",
  "020",
  "026",
  "029",
  "039",
  "043",
  "047",
  "048",
  "053",
  "059",
  "060",
  "062",
  "064",
  "065",
  "071",
  "073",
  "075",
  "077",
  "080",
  "083",
  "086",
  "088",
  "089",
  "090",
  "091",
  "096",
  "097",
  "098",
  "100",
];

const maleCharsGoff = [
  "003",
  "004",
  "013",
  "023",
  "019",
  "024",
  "025",
  "027",
  "030",
  "033",
  "035",
  "034",
  "036",
  "038",
  "040",
  "042",
  "044",
  "050",
  "052",
  "056",
  "058",
  "067",
  "076",
  "079",
  "081",
  "084",
  "085",
  "087",
  "092",
  "093",
  "094",
  "099",
];

const maleChars = [
  "001",
  "003",
  "004",
  "005",
  "006",
  "007",
  "008",
  "010",
  "012",
  "013",
  "015",
  "016",
  "017",
  "019",
  "020",
  "023",
  "024",
  "025",
  "026",
  "027",
  "029",
  "030",
  "033",
  "034",
  "035",
  "036",
  "038",
  "039",
  "040",
  "042",
  "043",
  "044",
  "047",
  "048",
  "050",
  "052",
  "053",
  "056",
  "058",
  "059",
  "060",
  "061",
  "062",
  "064",
  "065",
  "067",
  "068",
  "071",
  "073",
  "075",
  "076",
  "077",
  "079",
  "080",
  "081",
  "083",
  "084",
  "085",
  "086",
  "087",
  "088",
  "089",
  "090",
  "091",
  "092",
  "093",
  "094",
  "096",
  "097",
  "098",
  "099",
  "100",
];

const sportbtn = document.querySelector(".sp-btn");
const normalbtn = document.querySelector(".nr-btn");

const gon = document.querySelector(".gon");
const goff = document.querySelector(".goff");

let gbtn = 0;
let sbtn = 0;
let glbtn = 0;

function getRandomNumber(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

let clicks = 0;
gon.addEventListener("click", function () {
  glbtn = 1;
  gon.classList.add("btn-active");
  goff.classList.remove("btn-active");
});

goff.addEventListener("click", function () {
  glbtn = 2;
  goff.classList.add("btn-active");
  gon.classList.remove("btn-active");
});

mbtn.addEventListener("click", function () {
  gbtn = 1;
  mbtn.classList.add("btn-active");
  fmbtn.classList.remove("btn-active");
  const glasses = (document.querySelector(".glasses").style.display = "block");
  const style = (document.querySelector(".style").style.display = "block");
});

fmbtn.addEventListener("click", function () {
  const glasses = (document.querySelector(".glasses").style.display = "none");
  const style = (document.querySelector(".style").style.display = "none");

  gbtn = 2;
  fmbtn.classList.add("btn-active");
  mbtn.classList.remove("btn-active");
});

sportbtn.addEventListener("click", function () {
  sbtn = 1;
  sportbtn.classList.add("btn-active");
  normalbtn.classList.remove("btn-active");
});

normalbtn.addEventListener("click", function () {
  sbtn = 2;
  normalbtn.classList.add("btn-active");
  sportbtn.classList.remove("btn-active");
});

generateBtn.addEventListener("click", function () {
  if (gbtn === 1) {
    let index = getRandomNumber(0, maleChars.length - 1);
    character.src = "./Characters/Male/gee_me_" + maleChars[index] + ".svg";
  }

  if (gbtn === 2) {
    let index = getRandomNumber(0, femaleChars.length - 1);
    character.src = "./Characters/Female/gee_me_" + femaleChars[index] + ".svg";
  }

  if (gbtn === 1 && glbtn === 1) {
    let index = getRandomNumber(0, maleCharsGon.length - 1);
    character.src = "./Characters/Male/gee_me_" + maleCharsGon[index] + ".svg";
    console.log(character.src);
  }

  if (gbtn === 1 && glbtn === 2) {
    let index = getRandomNumber(0, maleCharsGoff.length - 1);
    character.src = "./Characters/Male/gee_me_" + maleCharsGoff[index] + ".svg";
  }

  if (gbtn === 1 && glbtn === 2 && sbtn === 1) {
    let index = getRandomNumber(0, maleCharsGoffSport.length - 1);
    character.src =
      "./Characters/Male/gee_me_" + maleCharsGoffSport[index] + ".svg";
  }

  if (gbtn === 1 && glbtn === 2 && sbtn === 2) {
    let index = getRandomNumber(0, maleCharsGoffNormal.length - 1);
    character.src =
      "./Characters/Male/gee_me_" + maleCharsGoffNormal[index] + ".svg";
  }

  if (gbtn === 1 && glbtn === 1 && sbtn === 1) {
    let index = getRandomNumber(0, maleCharsGonSport.length - 1);
    character.src =
      "./Characters/Male/gee_me_" + maleCharsGonSport[index] + ".svg";
  }

  if (gbtn === 1 && glbtn === 1 && sbtn === 2) {
    let index = getRandomNumber(0, maleCharsGonNormal.length - 1);
    character.src =
      "./Characters/Male/gee_me_" + maleCharsGonNormal[index] + ".svg";
  }
});
