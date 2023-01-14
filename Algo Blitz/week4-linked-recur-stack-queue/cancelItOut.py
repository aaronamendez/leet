"""
Given a string of random words, figure out if each word cancels itself out.
For example, what no no what cancels itself out (and is balanced). For every word in this arrangement, there is a word that cancels it out, in order.

For example, "what no no what" cancels itself out (and is balanced). For every word in this arrangement, there is a word that cancels it out, in order.

Function Signature: 
function theLastWord(str)

Engineering Method
1. 
"what no no what" => True
"what no what no what" => False

Empty strings
Capitalizations
Numbers
Punctuation

2. Solutions
- Single Stack
    split input into words by spaces
    create stack
    iterate over each word
    add to stack if empty
    else see if peek equals word
        if it does, pop the stack
        if it doesnt, add the word
    return whether stack is empty

- Dictionary
- Midpoint Stack Approach
# split input into words by ' '
# calculate midpoint of words array
# create stack
# iterate up to midpoint, popping last word in words into stack
# reverse words
# return true if stack equals words, or reversed words
""
"""

def the_last_word(str):
    words = str.split(' ')
    word_stack = []

    for word in words:
        if len(word_stack) == 0:
            word_stack.append(word)
        else:
            peek_word = word_stack[-1]
            if peek_word == word:
                word_stack.pop()
            else:
                word_stack.append(word)

    return len(word_stack) == 0


print(the_last_word('what what what what what what')) # => true
print(the_last_word('what')) # => false
print(the_last_word('what what what what what')) # => false
print(the_last_word('what what no no yes yes')) # => true
print(the_last_word('what no no what')) # => true