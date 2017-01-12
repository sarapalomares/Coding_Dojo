#part 1 ----------------------------
students = [
    {'first_name': 'Michael', 'last_name' : 'Jordan'},
    {'first_name': 'John', 'last_name' : 'Rosales'},
    {'first_name': 'Mark', 'last_name' : 'Guillen'},
    {'first_name': 'KB', 'last_name' : 'Tonel'},
]


# for student in students:
#     print student['first_name'], student['last_name']

#below code will print each item on a separate line
# for student in students:
#     for key, val in student.items():
#         print val

#below code will print each name on it's own line
# for student in students:
#     string = ""
#     for key, val in student.items():
#         string += val+" "
#     print string

#part 2 ----------------------------
for key in users:
    print key
    for counter, person in enumerate(users[key]):
        length = len(person['first_name']+person['last_name'])
        print "{} - {} {} - {}".format(counter, person['first_name']+person['last_name'])
