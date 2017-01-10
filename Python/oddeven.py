# Create a function that counts from 1 to 2000. As it loops through each number, have your program generate the number and specify whether it's an odd or even number.

count = 0
while count < 2000:
    count +=1
    if (count % 2 == 1):
        print "Number is {}. This is an odd number.".format(count)
    else:
        print "Number is {}. This is an even number.".format(count)
