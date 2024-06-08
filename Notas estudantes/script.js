const students = [
  {
    name: "Luiz",
    firstExam: 8,
    secondExam: 7,
  },
  {
    name: "Alexandra",
    firstExam: 6,
    secondExam: 5,
  },
  {
    name: "Carlos",
    firstExam: 9,
    secondExam: 8,
  },
];

function calculateAverage(student) {
  return (student.firstExam + student.secondExam) / 2;
}

for (let student of students) {
  const average = calculateAverage(student);
  const message = average >= 7 
    ? `Parabéns, ${student.name}, você foi aprovado(a)!` 
    : `Infelizmente, ${student.name}, você não foi aprovado(a).`;
  alert(`A média do(a) aluno(a) ${student.name} é: ${average}\n${message}`);
}