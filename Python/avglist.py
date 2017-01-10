# Create a program that prints the average of the values in the list.

a = [1, 2, 5, 10, 255, 3]
sum = 0
for x in a:
    sum = sum + x
print sum/len(a)
