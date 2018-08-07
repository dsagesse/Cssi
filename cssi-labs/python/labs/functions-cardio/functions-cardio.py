print("longest_word")
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
