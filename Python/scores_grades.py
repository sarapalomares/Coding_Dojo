# Create a program that prompts the user ten times for a test score between 60 and 100. Each time a score is generated, your program should display what the grade is for a particular score.

from random import randint

print "Scores and Grades"
for count in range(0, 10):
	score = randint(60, 100)

	if(score <= 69):
		grade = "D"
	elif(score <= 79):
		grade = "C"
	elif(score <= 89):
		grade = "B"
	else:
		grade = "A"

	print "Score: %d; Your grade is %s" %(score, grade)

print "End of program. Bye!"
