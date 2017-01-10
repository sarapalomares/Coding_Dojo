# Create a function called 'multiply' that reads each value in the list (e.g. a = [2, 4, 10, 16]) and returns a list where each value has been multiplied by 5. The function should multiply each value in the list by the second argument.

a = [2, 4, 10, 16]
multiply = []
for item in a:
    multiply.append(item*5)
print(multiply)
