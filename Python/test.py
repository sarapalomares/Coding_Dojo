hcount=0
tcount=0
for i in range(1,5001):
    import random
    random_num = random.random()
    random_num = round(random_num)
    if (random_num % 2 == 0):
        tcount= tcount + 1
        print("Attempt #" + str(i) + ": Throwing a coin... It's a tail!... Got " + str(hcount) + " head(s) so far and " + str(tcount) + " tail(s) so far")
    else:
        hcount= hcount + 1
    print("Attempt #" + str(i) + ": Throwing a coin... It's a head!... Got " + str(hcount) + " head(s) so far and " + str(tcount) + " tail(s) so far")
