# Create a function called  draw_stars() that takes a list of numbers and prints out  *

x = [4,6,1,3,5,7,25]
def draw_starsI(num_list):
    for num in num_list:
        output = ''
        for i in range(num):
            output += '*'
        print output

draw_starsI(x)
