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
    