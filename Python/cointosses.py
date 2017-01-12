# You're going to create a program that simulates tossing a coin 5,000 times. Your program should display how many times the head/tail appears.

import random
numhead = 0
numtail = 0

for count in range(1, 5001):
    random_num = random.random()
    throw = round(random_num)
    # print throw

    if (throw == 0):
        side = "tail"
        numtail = numtail + 1
    if (throw == 1):
        side = "head"
        numhead = numhead + 1

    # print count
    # print side
    print "Attempt #",count,": Throwing a coin... It's a ",side,"! ... Got ",numhead," head(s) so far and %d %s(s) so far" %(throw, side)

print "Ending the program, thank you!"
