var gui = new dat.gui.GUI();

const initialsID = document.getElementById('initials');
const fullNameID = document.getElementById('full-name');
const jobTitleID = document.getElementById('job-title');
const paraLeftNodes = document.querySelectorAll('.left p')
const paraRightNodes = document.querySelectorAll('.right p')

const downloadBtn = document.getElementById('download')

let options = {
  initialsLetter: 200,
  name: 50,
  jobTitle: 20,
  paragraphLeft: 18,
  paragraphRight: 14,

  initialsWeight: 400,
  fullNameWeight: 400,
  jobTitleWeight: 500
}

let f1 = gui.addFolder('Font Size');
let initialsSize = f1.add(options, 'initialsLetter', 150, 400);
let fullNameSize = f1.add(options, 'name', 30, 70);
let jobTitleSize = f1.add(options, 'jobTitle', 10, 30);
let paraLeftSize = f1.add(options, 'paragraphLeft', 10, 20);
let paraRightSize = f1.add(options, 'paragraphRight', 10, 20);
f1.open();

let f2 = gui.addFolder('Font Boldness');
let initialsWt = f2.add(options, 'initialsWeight', 300, 700).step(100);
let fullNameWt = f2.add(options, 'fullNameWeight', 300, 700).step(100);
let jobTitleWt = f2.add(options, 'jobTitleWeight', 300, 700).step(100);
f2.open();

initialsSize.onChange((value) => {  
  localStorage.setItem('initialsLetter', 100)
  initialsID.style.fontSize = `${options.initialsLetter}px`;
})

fullNameSize.onChange((value) => {
  fullNameID.style.fontSize = `${options.name}px`;
})

jobTitleSize.onChange((value) => {
  jobTitleID.style.fontSize = `${options.jobTitle}px`;
})

paraLeftSize.onChange((value) => {
  paraLeftNodes.forEach((para) => {
    para.style.fontSize = `${options.paragraphLeft}px`;
  })
})

paraRightSize.onChange((value) => {
  paraRightNodes.forEach((para) => {
    para.style.fontSize = `${options.paragraphRight}px`;
  })
})

initialsWt.onChange((value) => {
  initialsID.style.fontWeight = `${options.initialsWeight}`;
})

fullNameWt.onChange((value) => {
  fullNameID.style.fontWeight = `${options.fullNameWeight}`;
})

jobTitleWt.onChange((value) => {
  jobTitleID.style.fontWeight = `${options.jobTitleWeight}`;
})

let guiContainer = document.querySelector('.dg')

window.addEventListener('beforeprint', (e) => {
  guiContainer.style.display = 'none';
  downloadBtn.style.display = 'none';

})

downloadBtn.addEventListener('click', (e) => {
  fetch('/templates/1', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(options)
  }).then( res => res.json()).catch()
})