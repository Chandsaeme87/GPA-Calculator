function calculateGPA(arr) {
    const gradeEquivalents = {
        'A': 100,
        'B': 80,
        'C': 70,
    };
    let totalNumericValue = 0;
    for (const grade of arr) {
        if (grade in gradeEquivalents) {
            totalNumericValue += gradeEquivalents[grade];
        } else {
            console.error(`Invalid grade: ${grade}`);
        }
    }
    if (arr.length === 0) {
        console.error('No grades provided.');
        return;
    }
    const averageNumericValue = totalNumericValue / arr.length;
    let alphabeticGPA;
    if (averageNumericValue >= 90) {
        alphabeticGPA = 'A';
    } else if (averageNumericValue >= 80) {
        alphabeticGPA = 'B';
    } else if (averageNumericValue >= 70) {
        alphabeticGPA = 'C';
    } else {
        alphabeticGPA = 'F';
    }
    return alphabeticGPA;
}