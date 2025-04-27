
  document.getElementById("idForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const admission = document.getElementById('admission').value;
    const dob = document.getElementById('dob').value;
    const blood = document.getElementById('blood').value;
    const valid = document.getElementById('valid').value;
    const photoInput = document.getElementById('photoInput').files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
      const imageData = e.target.result;
      document.getElementById('cardPhoto').src = imageData;
    };
    reader.readAsDataURL(photoInput);

    document.getElementById('cardName').textContent = name;
    document.getElementById('cardCourse').textContent = course;
    document.getElementById('cardAdmission').textContent = admission;
    document.getElementById('cardDOB').textContent = dob;
    document.getElementById('cardBlood').textContent = blood;
    document.getElementById('cardValid').textContent = valid;

    document.getElementById('idCard').style.display = 'flex';
  });

