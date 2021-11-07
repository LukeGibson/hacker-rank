# https://www.hackerrank.com/challenges/python-string-formatting/problem

def print_formatted(number):
    if number > 0:
        maxLength = len(bin(number).split('0b')[1])
        
        for i in range(1, number + 1):
            a = str(i)
            b = oct(i).split('0o')[1]
            c = hex(i).split('0x')[1].upper()
            d = bin(i).split('0b')[1]
            
            adif = maxLength - len(a)
            bdif = maxLength - len(b)
            cdif = maxLength - len(c)
            ddif = maxLength - len(d)
            
            for i in range(0, adif):
                a = ' ' + a
            for i in range(0, bdif):
                b = ' ' + b
            for i in range(0, cdif):
                c = ' ' + c
            for i in range(0, ddif):
                d = ' ' + d
            
            print(f"{a} {b} {c} {d}")
            
# print_formatted(17)

test = '0b001010'
print(test.split('0b')[1])

