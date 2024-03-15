function calculateAge(birthDate) {
    const today = new Date();
    const birthDate = new Date(birthDate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month == 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const myBrirthday = "2003-03-15";
const myAge = calculateAge(myBrirthday);
const ageDisplayElement = document.getElementById("ageDisplay");
ageDisplayElement.textContent = myAge;
