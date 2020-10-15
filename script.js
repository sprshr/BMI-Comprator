var markMass, markHeight, johnMass, johnHeight;
markMass = prompt('Enter Mark\'s mass in kg')
markHeight = prompt('Enter Mark\'s height in m')
johnMass = prompt('Enter John\'s mass in kg')
johnHeight = prompt('Enter John\'s height in m')
var markBMI = markMass/(markHeight * markHeight)
var johnBMI = johnMass/(johnHeight * johnHeight)
var markVSjohn = markBMI > johnBMI
console.log('Is Mark\'s BMI higher than Jon\'s? ',markVSjohn)