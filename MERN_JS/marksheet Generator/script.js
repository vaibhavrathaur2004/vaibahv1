const form = document.getElementById('marksForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get values
    const math = parseFloat(document.getElementById('math').value);
    const physics = parseFloat(document.getElementById('physics').value);
    const chemistry = parseFloat(document.getElementById('chemistry').value);
    const english = parseFloat(document.getElementById('english').value);
    const computer = parseFloat(document.getElementById('computer').value);

    // Calculate total and percentage
    const total = math + physics + chemistry + english + computer;
    const percentage = (total / 500) * 100;

    // Determine grade
    let grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display result
    output.innerHTML = `
        <h3>Result:</h3>
        <p><strong>Total Marks:</strong> ${total} / 500</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
});
