document.getElementById('CSE').style.display = "block";
document.getElementById('IT').style.display = "none";
document.getElementById('CSE1').style.display = "block";

// Function to open the specified department
function openDepartment(evt, departmentName) {
  var i, department, tablinks;
  department = document.getElementsByClassName("department");
  for (i = 0; i < department.length; i++) {
    department[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(departmentName).style.display = "block";
  evt.currentTarget.className += " active";
};

// Function to open the specified semester for CSE or IT
function openSemester(evt, semesterName) {
  var i, semester, tablinks;
  semester = document.getElementsByClassName("semester");
  for (i = 0; i < semester.length; i++) {
    semester[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(semesterName).style.display = "block";
  evt.currentTarget.className += " active";
};
