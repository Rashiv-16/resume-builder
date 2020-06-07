validationFunction = (data) => {
    dataInterestArray = data.interest.split(',');
    dataInterest = dataInterestArray.map(element => {
        return element.trim()
    });
    data.interest = dataInterest;

    dataPersonalSkillArray = data.personalSkill.split(',')
    dataPersonalSkill = dataPersonalSkillArray.map(element => {
        return element.trim()
    });
    data.personalSkill = dataPersonalSkill;

    dataTechSkillArray = data.techSkill.split(',')
    dataTechSkill = dataTechSkillArray.map(element => {
        return element.trim()
    });
    data.techSkill = dataTechSkill;

    initialsArray = data.fullName.split(" ");
    initA = initialsArray[0].charAt(0);
    if (initialsArray.length > 1) {
        initB = initialsArray[initialsArray.length - 1].charAt(0);
    } else {initB = ""}
    initials = initA + initB;
    data.initials = initials;

    if(data.work) data.work.shift();

    return data
}

module.exports = validationFunction