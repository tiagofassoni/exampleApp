function createHomework(operator,minNum,maxNum,numberOfProblems) {
  let homeworkArray = [];
  let random1 = 0;
  let random2 = 0;
  for (let i = 0; i < numberOfProblems; i ++) {
    random1 = Math.floor(Math.random() * (+maxNum - +minNum) + +minNum);
    random2 = Math.floor(Math.random() * (+maxNum - +minNum) + +minNum);
    homeworkArray.push(random1 + ' ' + operator + ' ' + random2 + ' = ☐');
  }
  return(homeworkArray);
}

createHomework('+',1,7,10);
createHomework('-',1,13,10);
createHomework('×',22,40,10);
createHomework('÷',10,21,10);