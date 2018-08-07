print("Exercise 1 - longest_word")
def longest_word(w1,w2,w3):
    wordList="In the given words, the longest word(s) are:"
    if len(w1) == max(len(w1),len(w2),len(w3)):
        wordList = wordList +" %s"%(w1)
    if len(w2) == max(len(w1),len(w2),len(w3)):
        wordList = wordList+" %s"%(w2)
    if len(w3) == max(len(w1),len(w2),len(w3)):
        wordList = wordList+" %s"%w3
    return wordList

print(longest_word("wow","funny","meme"))

print("Exercise 2 - reverse_string")
def reverse_string(string):
    return string[::-1]

print(reverse_string("hello!"))

print("Exercise 3 - sum_to_n")
def sum_to_n(num):
    total = 0
    for i in range(num+1):
        total = total + i
        if i == num:
            return total

print(sum_to_n(5))

print("Exercise 4 - is_triangle")
def is_triangle(s1,s2,s3):
    if s1**2 + s2**2 == s3**2 or s2**2 + s3**2 == s1**2 or s1**2 + s3**2 == s2**2:
        return True
    else:
        return False

print(is_triangle(3,4,5))
print(is_triangle(1,2,3))
