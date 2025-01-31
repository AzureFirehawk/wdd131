// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        { 
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        { 
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        }  
    ] ,
    enrollStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (typeof sectionIndex != 'undefined') 
        {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        } else {
            console.log('Section not found');
        }
    },
    dropStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
        if (typeof sectionIndex != 'undefined') 
        {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        } else {
            console.log('Section not found');
        }
    }
};

function setCourseInfo(course) {
    const courseName = document.getElementById("courseName");
    const courseCode = document.getElementById("courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate).join('');
    document.getElementById('sections').innerHTML = html;
}

document.getElementById('enrollStudent').addEventListener('click', function() {
    const sectionNum = document.getElementById('sectionNumber').value;
    aCourse.enrollStudent(sectionNum);
}); 

document.getElementById('dropStudent').addEventListener('click', function() {
    const sectionNum = document.getElementById('sectionNumber').value;
    aCourse.dropStudent(sectionNum);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);



