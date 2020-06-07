const fullName = document.getElementById('fullName');
const jobRole = document.getElementById('jobRole');
const website = document.getElementById('website');
const interest = document.getElementById('interest');
const objective = document.getElementById('objective');
const address = document.getElementById('address');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const social = document.getElementById('social');
const education = document.getElementById('education');
const project = document.getElementById('project');
const work = document.getElementById('work');
const techSkill = document.getElementById('techSkill');
const personalSkill = document.getElementById('personalSkill');

const socialError = document.querySelector('.social-error')
const educationError = document.querySelector('.education-error')
const projectError = document.querySelector('.project-error')

let socialInput = [];
let educationInput = [];
let projectInput = [];

const socialAdd = document.getElementById('social-add-button');
const educationAdd = document.getElementById('education-add-button');
const projectAdd = document.getElementById('project-add-button');
const workAdd = document.getElementById('work-add-button');

const form = document.getElementById('form');

// data validation
isFilled = (e) => {
    if (e.value === '') {
        // to set the required attribute
        // e.setAttribute('required', true);

        //the following line is to invoke html5 invalid attribute
        e.setCustomValidity('Must not be empty');

        e.parentNode.lastElementChild.innerText = 'Must not be empty';

        //to use span elements as error message bubble
        e.parentNode.lastElementChild.style.visibility = 'visible'

        //the following line is to display the validity message
        // e.reportValidity();
        return false;
    }

    return true;     
}

isMidFilled = (e) => {
    console.log(e.id)

    switch(e.id) {
        case 'social':
            socialInput = document.querySelectorAll(`.social`);
            if (socialInput.length > 1) return true;
            social.setCustomValidity('Must not be empty');
            social.parentNode.lastElementChild.innerText = 'Must not be empty';
            social.parentNode.lastElementChild.style.visibility = 'visible';
            return false;

        case 'education':
            educationInput = document.querySelectorAll(`.education`);
            if (educationInput.length > 1) return true;
            education.setCustomValidity('Must not be empty');
            education.parentNode.lastElementChild.innerText = 'Must not be empty';
            education.parentNode.lastElementChild.style.visibility = 'visible';
            return false;

        case 'project':
            projectInput = document.querySelectorAll(`.project`);
            if (projectInput.length > 1) return true;
            project.setCustomValidity('Must not be empty');
            project.parentNode.lastElementChild.innerText = 'Must not be empty';
            project.parentNode.lastElementChild.style.visibility = 'visible';
            return false;

        default:
            return false;
    }
}


isValid = (e) => {
    if (/^[a-zA-Z ]*$/.test(`${e.value}`)) return true;
    e.setCustomValidity('Must only contains alphabets');
    e.parentNode.lastElementChild.innerText = 'Must only contains alphabets';
    e.parentNode.lastElementChild.style.visibility = 'visible';
    return false;
}

isObjectiveValid = (e) => {
    if (/^[a-zA-Z .]*$/.test(`${e.value}`)) return true;
    e.setCustomValidity('Must only contains alphabets and periods');
    e.parentNode.lastElementChild.innerText = 'Must only contains alphabets and periods';
    e.parentNode.lastElementChild.style.visibility = 'visible';
    return false;
}

isUnderMaxLength = (e, minLength=0, maxLength=30) => {
    if(e.value.length <= maxLength && e.value.length >= minLength) return true;

    e.setCustomValidity(`Must be between ${minLength} & ${maxLength} characters`);
    e.parentNode.lastElementChild.innerText = `Must be between ${minLength} & ${maxLength} characters`;
    e.parentNode.lastElementChild.style.visibility = 'visible';
    return false;
}

isAddressValid = (e) => {
    if(/^[a-zA-z0-9 ]*$/.test(`${e.value}`)) return true;
    e.setCustomValidity('Must only contains alphabets and digits');
    e.parentNode.lastElementChild.innerText = 'Must only contains alphabets and digits';
    e.parentNode.lastElementChild.style.visibility = 'visible';
    return false;
}

isMobileValid = (e) => {
    if( /^[0-9]*$/.test(e.value)) return true;
    e.setCustomValidity('Must only contains alphabets and digits');
    e.parentNode.lastElementChild.innerText = 'Must only contains digits';
    e.parentNode.lastElementChild.style.visibility = 'visible';
    return false;
}

isProjectValid = (e) => {
    if( /^[a-zA-z0-9.,/\-_ ]*$/.test(e.value)) return true;
    e.setCustomValidity('Must only contains alphabets period, comma and digits');
    e.parentNode.lastElementChild.innerText = 'Must only contains alphabets period, comma and digits';
    e.parentNode.lastElementChild.style.visibility = 'visible';
    return false;
}

isSkillValid = (e) => {
    if(/^[a-zA-z0-9, ]*$/.test(`${e.value}`)) return true;
    e.setCustomValidity('Must only contains alphabets and digits');
    e.parentNode.lastElementChild.innerText = 'Must only contains alphabets, comma and digits';
    e.parentNode.lastElementChild.style.visibility = 'visible';
    return false;
}

//data sanitization
capitalize = (field) => {
    let dataArray = field.value.toLowerCase().split(' ')

    let sanitisedDataArray = dataArray.map(e => {
        return e.charAt(0).toUpperCase()+e.slice(1);
    })
    field.value = sanitisedDataArray.join(' ')
}

trimHandler = (e) => {
    e.target.value = e.target.value.trim();
    // isFilled(e.target)
}

threeHandler = (e) => {
    if (isValid(e.target) && isUnderMaxLength(e.target)) {
        e.target.setCustomValidity('');
        e.target.parentNode.lastElementChild.style.visibility = 'hidden';
        capitalize(e.target);
    }    
}


objectiveHandler = (e) => {
    if (isObjectiveValid(e.target) && isUnderMaxLength(e.target, 300, 500)) {
        e.target.setCustomValidity('');
        e.target.parentNode.lastElementChild.style.visibility = 'hidden';
    }    
}

addressHandler = (e) => {
    if (isProjectValid(e.target) && isUnderMaxLength(e.target, 10, 100)) {
        e.target.setCustomValidity('');
        e.target.parentNode.lastElementChild.style.visibility = 'hidden';
    } 
}

emailHandler = (e) => {
    if (isUnderMaxLength(e.target, 0, 30)) {
        e.target.setCustomValidity('');
        e.target.parentNode.lastElementChild.style.visibility = 'hidden';
    }
}

mobileHandler = (e) => {
    if (isMobileValid(e.target) && isUnderMaxLength(e.target, 0, 10)) {
        e.target.setCustomValidity('');
        e.target.parentNode.lastElementChild.style.visibility = 'hidden';
    } 
}

skillHandler = (e) => {
    if (isSkillValid(e.target) && isUnderMaxLength(e.target, 0, 100)) {
        e.target.setCustomValidity('');
        e.target.parentNode.lastElementChild.style.visibility = 'hidden';
        capitalize(e.target);
    } 
}

removeHandler = (e) => {
    e.target.parentNode.remove();
    // console.log(e.parentNode)
}

createInputElement = (element, value) => {
    let div = document.createElement('div')
    let input = document.createElement('input');
    let btn = document.createElement('button')
    div.classList.add('parent-element')
    div.classList += ` ${element.previousElementSibling.id}`
    div.style.width = '100%'
    div.appendChild(input)
    div.appendChild(btn)
    input.classList.add('element-added')
    input.setAttribute('name', `${element.previousElementSibling.id}`)
    input.setAttribute('readonly', 'true');
    input.value = value;
    btn.innerText = 'X'
    btn.style.padding = 'var(--global-padding-button)'
    btn.style.backgroundColor = 'rgba(107, 16, 0, 0.493)'
    btn.setAttribute('type', 'button')
    if (value !== '') element.parentNode.append(div);
    element.previousElementSibling.value = '';
    element.previousElementSibling.focus()

    btn.addEventListener('click', removeHandler)
}

socialHandler = (e) => {
    if (isProjectValid(e.target) && isUnderMaxLength(e.target, 0, 50)) {
        e.target.setCustomValidity('');
        socialError.style.visibility = 'hidden';
    } 
}

educationHandler = (e) => {
    if (isProjectValid(e.target) && isUnderMaxLength(e.target, 0, 100)) {
        e.target.setCustomValidity('');
        educationError.style.visibility = 'hidden';
    }
}

projectHandler = (e) => {
    if (isProjectValid(e.target) && isUnderMaxLength(e.target, 0, 100)) {
        e.target.setCustomValidity('');
        projectError.style.visibility = 'hidden';
    } 
}

addHandler = (e) => {
    // e.preventDefault()
    let value = e.target.previousElementSibling.value;
    createInputElement(e.target, value);
}


fullName.addEventListener('focusout', trimHandler)
fullName.addEventListener('input', threeHandler)
jobRole.addEventListener('focusout', trimHandler)
jobRole.addEventListener('input', threeHandler)
interest.addEventListener('focusout', trimHandler)
interest.addEventListener('input', skillHandler)
objective.addEventListener('focusout', trimHandler)
objective.addEventListener('input', objectiveHandler)
address.addEventListener('focusout', trimHandler)
address.addEventListener('input', addressHandler)
email.addEventListener('focusout', trimHandler)
email.addEventListener('input', emailHandler)
mobile.addEventListener('focusout', trimHandler)
mobile.addEventListener('input', mobileHandler)
social.addEventListener('focusout', trimHandler)
social.addEventListener('input', socialHandler)
education.addEventListener('focusout', trimHandler)
education.addEventListener('input', educationHandler)
project.addEventListener('focusout', trimHandler)
project.addEventListener('input', projectHandler)
techSkill.addEventListener('focusout', trimHandler)
techSkill.addEventListener('input', skillHandler)
personalSkill.addEventListener('focusout', trimHandler)
personalSkill.addEventListener('input', skillHandler)
   
socialAdd.addEventListener('click', addHandler)
educationAdd.addEventListener('click', addHandler)
projectAdd.addEventListener('click', addHandler)
workAdd.addEventListener('click', addHandler)
socialAdd.addEventListener('touchend', addHandler)
educationAdd.addEventListener('touchend', addHandler)
projectAdd.addEventListener('touchend', addHandler)
workAdd.addEventListener('touchend', addHandler)

formSubmitHandler = (e) => {
    e.preventDefault()
    if (isFilled(fullName) && isFilled(jobRole) && isFilled(interest) && isFilled(objective) && isFilled(address) && isFilled(email) && isFilled(mobile) && isMidFilled(social) && isMidFilled(education) && isMidFilled(project) && isFilled(techSkill) && isFilled(personalSkill)) form.submit();

}

form.addEventListener('submit', formSubmitHandler)
form.addEventListener('touchend', formSubmitHandler)
