'''
Given an integer maxLen, print all binary strings of size maxLen that don't have 1s next to each other. That is, no string should contain the substring 11, 111, 1111, 11111, etc. You can assume maxLen > 0.
Function Signature: 
'''

def printBinaryWithoutConsecutive1s(maxLen:int):
    if maxLen == 0:
        return

    frameList = []
    def helper():
        nonlocal frameList
        if len(frameList) == maxLen:
            print(frameList)
        else:
            frameList.append(0)
            helper()
            frameList.pop()
            if len(frameList) == 0 or frameList[-1] == 0:
                frameList.append(1)
                helper()
                frameList.pop()
    helper()
    return

def get_permutations(l: list[int]) -> list[list[int]]:
    if l is None:
        return []
    solution = []

    def helper(sub):
        nonlocal solution
        if len(sub) == len(l):
            solution.append(sub[:])
            return
        for item in l:
            if item not in sub:
                sub.append(item)
                helper(sub)
                sub.pop()
    helper([])
    return solution

# print(get_permutations([0, 1, 2, 3]))
    
# printBinaryWithoutConsecutive1s(maxLen=2)
'''
00
01
10
'''
# printBinaryWithoutConsecutive1s(maxLen=4)
'''
000
001
010
100
101
'''

(lambda np,rand:(lambda d,ml,r,ff: (lambda l:lambda k:l(l,k))(lambda p,f:"YOU WON!" if len(list(filter(lambda x:x[1]==2048,np.ndenumerate(f))))>0 else "YOU LOSE!" if all([np.array_equal(f,n) for n in [np.rot90(list(map(ml,np.rot90(f,x[0]))), x[1]) for x in d.values()]]) else (lambda x:p(p,r(np.rot90(list(map(ml,np.rot90(f,x[0]))),x[1]))))(d[input("\033[2J"+str(f)+"\nwasd? ")]))(r(ff)))({"a":(0,0),"w":(1,-1),"s":(-1,1),"d":(2,2)},(lambda l:(lambda x: x+[0]*(4-len(x)))((lambda a:lambda v:a(a,v))(lambda rec,n:(n if len(n)<2 else [n[0]+n[1]]+rec(rec,n[2:]) if n[0]==n[1] else [n[0]]+rec(rec,n[1:])))(list(filter(lambda a:a!=0,l))))),(lambda f: ((lambda a,i,v: a.itemset(i, v) or a)(f,rand.choice(list(map(lambda x:x[0],filter(lambda x:x[1]==0,np.ndenumerate(f))))),2**rand.randint(1,2))) if len(list(filter(lambda x:x[1]==0,np.ndenumerate(f))))>0 else f),np.zeros((4,4),dtype=np.int)))(__import__("numpy"),__import__("random"))
