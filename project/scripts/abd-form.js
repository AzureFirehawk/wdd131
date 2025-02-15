const cityList = [
    "Norman",
    "Noble",
    "Oklahoma City",
    "Tulsa",
    "Broken Arrow",
    "Edmond",
    "Stillwater",
    "Tahlequah"
]

const cityListSelect = document.getElementById("citylist")
for (let i = 0; i < cityList.length; i++) {
    let option = document.createElement("option")
    option.value = cityList[i]
    option.text = cityList[i]
    cityListSelect.appendChild(option)
}

const classInterest = document.getElementById("class")
const preferredContact = document.getElementById("prefered")
const emailPreferred = document.getElementById("email-message")
const phonePreferred = document.getElementById("call")
const textPreferred = document.getElementById("text")
const emailBox = document.getElementById("email")
const phoneBox = document.getElementById("phone")
const phoneLabel = document.getElementById("phone-label")
const emailLabel = document.getElementById("email-label")

emailPreferred.addEventListener("change", function() {
    if (emailPreferred.checked) {
        emailLabel.textContent = "Email:*"
        phoneLabel.textContent = "Phone:"
        phoneBox.required = false
        emailBox.required = true
    } 
})

phonePreferred.addEventListener("change", function() {
    if (phonePreferred.checked) {
        emailLabel.textContent = "Email:"
        phoneLabel.textContent = "Phone:*"
        phoneBox.required = true
        emailBox.required = false
    }
})

textPreferred.addEventListener("change", function() {
    if (textPreferred.checked) {
        emailLabel.textContent = "Email:"
        phoneLabel.textContent = "Phone:*"
        phoneBox.required = true
        emailBox.required = false
    }
})

classInterest.addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("classlist").innerHTML =
        `<legend>Class of Interest:</legend>
        <label for="pregnant"><input type="checkbox" name="preg-parent" id="pregnant">Pregnancy Class</label>
        <label for="parent"><input type="checkbox" name="preg-parent" id="parent">Parenting Class</label>`
    } else {
        document.getElementById("classlist").innerHTML = ""
    }
})

window.addEventListener('load', () => {
    const phoneInput = document.querySelector('#phone');
    phoneInput.addEventListener('keydown', disallowNonNumericInput);
    phoneInput.addEventListener('keyup', formatToPhone);
  });
  
  const disallowNonNumericInput = (evt) => {
    if (evt.ctrlKey) { return; }
    if (evt.key.length > 1) { return; }
    if (/[0-9.]/.test(evt.key)) { return; }
    evt.preventDefault();
  }
  
  const formatToPhone = (evt) => {
    const digits = evt.target.value.replace(/\D/g,'').substring(0,10);
    const areaCode = digits.substring(0,3);
    const prefix = digits.substring(3,6);
    const suffix = digits.substring(6,10);
  
    if(digits.length > 6) {evt.target.value = `${areaCode}-${prefix}-${suffix}`;}
    else if(digits.length > 3) {evt.target.value = `${areaCode}-${prefix}`;}
    else if(digits.length > 0) {evt.target.value = `${areaCode}`;}
  };