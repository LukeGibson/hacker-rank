def count_moves(word):

  bCount = 0
  aCount = 0
  nCount = 0

  for i in range(0, len(word)):
    if word[i] == 'N':
      nCount = nCount + 1
    if word[i] == 'B':
      bCount = bCount + 1
    if word[i] == 'A':
      aCount = aCount + 1

  aRem = aCount % 3
  nRem = nCount % 2
  
  aMoves = (aCount - aRem) / 3
  nMoves = (nCount - nRem) / 2

  smallest = bCount
  if aMoves < smallest:
    smallest = aMoves
  if nMoves < smallest:
    smallest = nMoves

  return smallest

print(count_moves('BANANABANANa'))
