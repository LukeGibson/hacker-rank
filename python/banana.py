# how many times can the letters of the word banana be removed from the string

def number_move_banana(word):
  moveCount = 0

  bCount = 0
  aCount = 0
  nCount = 0

  for i in range(len(word)):
    letter = word[i].upper()

    if letter == 'B':
      bCount = bCount + 1
    if letter == 'A':
      aCount = aCount + 1
    if letter == 'N':
      nCount = nCount + 1
  
  while (bCount >= 1) and (aCount >= 3) and (nCount >= 2):
    moveCount = moveCount + 1
    bCount = bCount - 1
    aCount = aCount - 3
    nCount = nCount - 2

  return moveCount


test1 = 'BANANA' #1
test2 = 'BANAN' #0
test3 = '' #0
test4 = 'BANANABANANA' #2
test5 = 'BBBBAAAABABABABABABABN' #0

print(number_move_banana(test4))
