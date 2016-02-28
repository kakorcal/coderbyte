//######## HARD CHALLENGES

// 45.
// Using the JavaScript language, have the function ArrayRotation(arr) take the arr parameter being passed which will be an array of non-negative integers and circularly rotate the array starting from the Nth element where N is equal to the first integer in the array. For example: if arr is [2, 3, 4, 1, 6, 10] then your program should rotate the array starting from the 2nd position because the first element in the array is 2. The final array will therefore be 
// [4, 1, 6, 10, 2, 3], and your program should return the new array as a string, so for this example your program would return 4161023. The first element in the array will always be an integer greater than or equal to 0 and less than the size of the array. 
// Input = 3,2,1,6    Output = 6321
// Input = 4,3,4,3,1,2    Output = 124343

// function ArrayRotation(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 44.
// Using the JavaScript language, have the function CountingAnagrams(str) take the str parameter and determine how many anagrams exist in the string. An anagram is a new word that is produced from rearranging the characters in a different word, for example: cars and arcs are anagrams. Your program should determine how many anagrams exist in a given string and return the total number. For example: if str is "cars are very cool so are arcs and my os" then your program should return 2 because "cars" and "arcs" form 1 anagram and "so" and "os" form a 2nd anagram. The word "are" occurs twice in the string but it isn't an anagram because it is the same word just repeated. The string will contain only spaces and lowercase letters, no punctuation, numbers, or uppercase letters.
// Input = "aa aa odg dog gdo"    Output = 2
// Input = "a c b c run urn urn"    Output = 1

// function CountingAnagrams(str) { 

//   // code goes here  
//   return str; 
         
// }

// 43.
// Using the JavaScript language, have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5.
// Input = 3  Output = 5
// Input = 2  Output = 2

// function BracketCombinations(num) { 

//   // code goes here  
//   return num; 
         
// }

// 42.
// Using the JavaScript language, have the function ArrayCouples(arr) take the arr parameter being passed which will be an array of an even number of positive integers, and determine if each pair of integers, [k, k+1], [k+2, k+3], etc. in the array has a corresponding reversed pair somewhere else in the array. For example: if arr is [4, 5, 1, 4, 5, 4, 4, 1] then your program should output the string yes because the first pair 4, 5 has the reversed pair 5, 4 in the array, and the next pair, 1, 4 has the reversed pair 4, 1 in the array as well. But if the array doesn't contain all pairs with their reversed pairs, then your program should output a string of the integer pairs that are incorrect, in the order that they appear in the array. 
// For example: if arr is [6, 2, 2, 6, 5, 14, 14, 1] then your program should output the string 5,14,14,1 with only a comma separating the integers. 

// Input = 2,1,1,2,3,3    Output = 3,3
// Input = 5,4,6,7,7,6,4,5    Output = yes

// function ArrayCouples(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 41.
// Using the JavaScript language, have the function SimpleSAT(str) read str which will be a string consisting of letters, parenthesis, logical operators and tilde's representing a Boolean formula. For example: str may be "(a&b)|c" which means (a AND b) OR c. Your program should output the string yes if there is some arrangement of replacing the letters with TRUE or FALSE in such a way that the formula equates to TRUE. If there is no possible way of assigning TRUE or FALSE to the letters, then your program should output the string no. In the example above, your program would return yes because a=TRUE, b=TRUE and c=FALSE would make the formula TRUE. Another example: if str is "((a&c)&~a)" which means ((a AND c) AND NOT a) then your program should output no because it is not possible to assign TRUE or FALSE values to the letters to produce a TRUE output. 

// A Boolean formula will always have at most 5 letters, i.e. a, b, c, d and e. A tilde will never appear outside of a parenthesis, i.e. ~(a&b).

// Input = "(a&b&c)|~a"   Output = yes
// Input = "a&(b|c)&~b&~c"    Output = no

// function SimpleSAT(str) { 

//   // code goes here  
//   return str; 
         
// }

// 40.
//Using the JavaScript language, have the function ApproachingFibonacci(arr) take the arr parameter being passed which will be an array of integers and determine the smallest positive integer (including zero) that can be added to the array to make the sum of all of the numbers in the array add up to the next closest Fibonacci number. For example: if arr is [15, 1, 3], then your program should output 2 because if you add up 15 + 1 + 3 + 2 you get 21 which is the closest Fibonacci number. 
// Input = 5,2,1    Output = 0
// Input = 1,20,2,5   Output = 6

// function ApproachingFibonacci(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 39.
// Using the JavaScript language, have the function MatchingCouples(arr) take the arr parameter being passed which will be an array of integers in the following format: [B, G, N] where B represents the number of boys, G represents the number of girls, and N represents how many people you want to pair together. Your program should return the number of different ways you can match boys with girls given the different arguments. For example: 
// if arr is [5, 3, 2], N=2 here so you want to pair together 2 people, so you'll need 1 boy and 1 girl. You have 5 ways to choose a boy and 3 ways to choose a girl, so your program should return 15. Another example: if arr is [10, 5, 4], here N=4 so you need 2 boys and 2 girls. We can choose 2 boys from a possible 10, and we can choose 2 girls from a possible 5. Then we have 2 different ways to pair the chosen boys and girls. Our program should therefore return 900 

// N will always be an even number and it will never be greater than the maximum of (B, G). B and G will always be greater than zero. 

// Input = 5,5,4    Output = 200
// Input = 2,2,2    Output = 4

// function MatchingCouples(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 38.
// Using the JavaScript language, have the function ChessboardTraveling(str) read str which will be a string consisting of the location of a space on a standard 8x8 chess board with no pieces on the board along with another space on the chess board. The structure of str will be the following: "(x y)(a b)" where (x y) represents the position you are currently on with x and y ranging from 1 to 8 and (a b) represents some other space on the chess board with a and b also ranging from 1 to 8 where a > x and b > y. Your program should determine how many ways there are of traveling from (x y) on the board to (a b) moving only up and to the right. For example: if str is (1 1)(2 2) then your program should output 2 because there are only two possible ways to travel from space (1 1) on a chessboard to space (2 2) while making only moves up and to the right. 
// Input = "(1 1)(3 3)"   Output = 6
// Input = "(2 2)(4 3)"   Output = 3

// function ChessboardTraveling(str) { 

//   // code goes here  
//   return str; 
         
// }

// 37.
// Using the JavaScript language, have the function MaxHeapChecker(arr) take arr which represents a heap data structure and determine whether or not it is a max heap. A max heap has the property that all nodes in the heap are either greater than or equal to each of its children. For example: if arr is [100,19,36,17] then this is a max heap and your program should return the string max. If the input is not a max heap then your program should return a list of nodes in string format, in the order that they appear in the tree, that currently do not satisfy the max heap property because the child nodes are larger than their parent. For example: if arr is [10,19,52,13,16] then your program should return 19,52. 

// Another example: if arr is [10,19,52,104,14] then your program should return 19,52,104

// Input = 73,74,75,7,2,107   Output = 74,75,107
// Input = 1,5,10,2,3,10,1    Output = 5,10

// function MaxHeapChecker(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 36.
// Using the JavaScript language, have the function ReversePolishNotation(str) read str which will be an arithmetic expression composed of only integers and the operators: +,-,* and / and the input expression will be in postfix notation (Reverse Polish notation), an example: (1 + 2) * 3 would be 
// 1 2 + 3 * in postfix notation. Your program should determine the answer for the given postfix expression. For example: if str is 2 12 + 7 / then your program should output 2.

// Input = "1 1 + 1 + 1 +"    Output = 4
// Input = "4 5 + 2 1 + *"    Output = 27

// function ReversePolishNotation(str) { 

//   // code goes here  
//   return str; 
         
// }

// 35.
// Using the JavaScript language, have the function PascalsTriangle(arr) take arr which will be a partial row from Pascal's triangle. Pascal's triangle starts with a [1] at the first row of the triangle. Then the second row is [1,1] and the third row is [1,2,1]. The next row begins with 1 and ends with 1, and the inside of the row is determined by adding the k-1 and kth elements from the previous row. The next row in the triangle would then be [1,3,3,1], and so on. The input, arr will be some almost completed row from the triangle, for example [1,4,6,4] and your program should return the next element in that row. In this example your program should return 1. Another example: if arr is [1,5,10] your program should return 10. If the whole row is entered as input and there is no next number, your program should return -1. 

// The input array will contain at least 3 elements so [1] and [1,1] will not occur as inputs.

// Input = 1,3    Output = 3
// Input = 1,5,10,10    Output = 5

// function PascalsTriangle(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 34.
// Using the JavaScript language, have the function NimWinner(arr) take the array of integers stored in arr which will represent the amount of coins in each pile. For example: [2, 4, 1, 3] means there are 4 piles of coins and there are 2 coins in the first pile, 4 in the second pile, etc. Nim is played by each player removing any number of coins from only one pile, and the winner is the player who picks up the last coin. For example: if arr is [1, 2, 3] then for example player 1 can remove 2 coins from the last pile which results in [1, 2, 1]. Then player 2 can remove 1 coin from the first pile which results in [0, 2, 1], etc. The player that has the last possible move taking the last coin(s) from a pile wins the game. Your program should output either 1 or 2 which represents which player has a guaranteed win with perfect play for the Nim game.
// Input = 1,2,3      Output = 2
// Input = 1,1,1,4,5,4      Output = 1

// function NimWinner(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 33.
// Using the JavaScript language, have the function LCS(strArr) take the strArr parameter being passed which will be an array of two strings containing only the characters {a,b,c} and have your program return the length of the longest common subsequence common to both strings. A common subsequence for two strings does not require each character to occupy consecutive positions within the original strings. For example: if strArr is ["abcabb","bacb"] then your program should return 3 because one longest common subsequence for these two strings is "bab" and there are also other 3-length subsequences such as "acb" and "bcb" but 3 is the longest common subsequence for these two strings. 
// Input = "abc","cb"   Output = 1
// Input = "bcacb","aacabb"   Output = 3

// function LCS(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 32.
// Using the JavaScript language, have the function ParallelSums(arr) take the array of integers stored in arr which will always contain an even amount of integers, and determine how they can be split into two even sets of integers each so that both sets add up to the same number. If this is impossible return -1. If it's possible to split the array into two sets, then return a string representation of the first set followed by the second set with each integer separated by a comma and both sets sorted in ascending order. The set that goes first is the set with the smallest first integer. 

// For example: if arr is [16, 22, 35, 8, 20, 1, 21, 11], then your program should output 1,11,20,35,8,16,21,22 

// Input = 1,2,3,4    Output = 1,4,2,3
// Input = 1,2,1,5    Output = -1

// function ParallelSums(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 31.
// Using the JavaScript language, have the function RomanNumeralReduction(str) read str which will be a string of roman numerals in decreasing order. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000. Your program should return the same number given by str using a smaller set of roman numerals. For example: if str is "LLLXXXVVVV" this is 200, so your program should return CC because this is the shortest way to write 200 using the roman numeral system given above. If a string is given in its shortest form, just return that same string. 
// Input = "XXXVVIIIIIIIIII"    Output = "L"
// Input = "DDLL"   Output = "MC"

// function RomanNumeralReduction(str) { 

//   // code goes here  
//   return str; 
         
// }

// 30.
// Using the JavaScript language, have the function MatrixBorder(strArr) read the strArr parameter being passed which will represent an NxN matrix filled with 1's and 0's. Your program should determine the number of swaps between two rows or two columns that must be made to change the matrix such that the border of the matrix contains all 1's and the inside contains 0's. The format of strArr will be: ["(n,n,n...)","(...)",...] where n represents either a 1 or 0. The smallest matrix will be a 3x3 and the largest will be a 6x6 matrix. 

// For example: if strArr is: ["(0,1,1)","(1,1,1)","(1,1,1)"] then you can swap the first two columns and then swap the first two rows to create a matrix with the 1's on the border and the 0 on the inside, therefore your program should output 2. 
// Input = "(0,1,1)","(1,1,1)","(1,1,1)"    Output = 2
// Input = "(0,1,0,1)","(1,1,1,1)","(0,1,0,1)","(1,1,1,1)"    Output = 2

// function MatrixBorder(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 29.
//Using the JavaScript language, have the function ArrayJumping(arr) take the array of numbers stored in arr and first determine the largest element in the array, and then determine whether or not you can reach that same element within the array by moving left or right continuously according to whatever integer is in the current spot. If you can reach the same spot within the array, then your program should output the least amount of jumps it took. For example: if the input is [2, 3, 5, 6, 1] you'll start at the spot where 6 is and if you jump 6 spaces to the right while looping around the array you end up at the last element where the 1 is. Then from here you jump 1 space to the left and you're back where you started, so your program should output 2. If it's impossible to end up back at the largest element in the array your program should output -1. The largest element in the array will never equal the number of elements in the array. The largest element will be unique.
// Input = 1,2,3,4,2    Output = 3
// Input = 1,7,1,1,1,1    Output = 2

// function ArrayJumping(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 28.
// Using the JavaScript language, have the function ConnectFourWinner(strArr) read the strArr parameter being passed which will represent a 6x7 Connect Four board. The rules of the game are: two players alternate turns and place a colored disc down into the grid from the top and the disc falls down the column until it hits the bottom or until it hits a piece beneath it. The object of the game is to connect four of one's own discs of the same color next to each other vertically, horizontally, or diagonally before your opponent. The input strArr will represent a Connect Four board and it will be structured in the following format: ["R/Y","(R,Y,x,x,x,x,x)","(...)","(...)",...)] where R represents the player using red discs, Y represents the player using yellow discs and x represents an empty space on the board. The first element of strArr will be either R or Y and it represents whose turn it is. Your program should determine, based on whose turn it is, whether a space exists that can give that player a win. If a space does exist your program should return the space in the following format: (RxC) where R=row and C=column. If no space exists, return the string none. The board will always be in a legal setup. 

// For example, if strArr is: ["R","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,R,x,x,x)","(x,x,x,R,x,x,x)","(x,x,x,R,Y,Y,Y)"] then your program should return (3x4). 

// Another example, if strArr is: ["Y","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,Y,Y,x,x,x)","(x,R,R,Y,Y,x,R)","(x,Y,R,R,R,Y,R)"] then your program should return (3x3). 

// function ConnectFourWinner(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 27.
// Using the JavaScript language, have the function SquareFigures(num) read num which will be an integer. Your program should return the smallest integer that when squared has a length equal to num. For example: if num is 6 then your program should output 317 because 317^2 = 100489 while 316^2 = 99856 which does not have a length of six. 
// Input = 2  Output = 4
// Input = 1  Output = 0

// function SquareFigures(num) { 

//   // code goes here  
//   return num; 
         
// }

// 26.
// Using the JavaScript language, have the function QuickKnight(str) read str which will be a string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board and another space on the chess board. The structure of str will be the following: "(x y)(a b)" where (x y) represents the position of the knight with x and y ranging from 1 to 8 and (a b) represents some other space on the chess board with a and b also ranging from 1 to 8. Your program should determine the least amount of moves it would take the knight to go from its position to position (a b). For example if str is "(2 3)(7 5)" then your program should output 3 because that is the least amount of moves it would take for the knight to get from (2 3) to (7 5) on the chess board. 
// Input = "(1 1)(8 8)"   Output = 6
// Input = "(2 2)(3 3)"   Output = 2

// function QuickKnight(str) { 

//   // code goes here  
//   return str; 
         
// }

// 25.
// Using the JavaScript language, have the function LineOrdering(strArr) read the strArr parameter being passed which will represent the relations among people standing in a line. The structure of the input will be ["A>B","B>C","A<D",etc..]. The letters stand for different people and the greater than and less than signs stand for a person being in front of someone or behind someone. A>B means A is in front of B and B<C means that B is behind C in line. For example if strArr is: ["J>B","B<S","D>J"], these are the following ways you can arrange the people in line: DSJB, SDJB and DJSB. Your program will determine the number of ways people can be arranged in line. So for this example your program should return the number 3. It also may be the case that the relations produce an impossible line ordering, resulting in zero as the answer. 

// Only the symbols <, >, and the uppercase letters A...Z will be used. The maximum number of relations strArr will contain is ten. 

// Input = "A>B","A<C","C<Z"    Output = 1
// Input = "A>B","B<R","R<G"    Output = 3

// function LineOrdering(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 24.
// Using the JavaScript language, have the function FarthestNodes(strArr) read strArr which will be an array of hyphenated letters representing paths between those two nodes. For example: ["a-b","b-c","b-d"] means that there is a path from node a to b (and b to a), b to c, and b to d. Your program should determine the longest path that exists in the graph and return the length of that path. So for the example above, your program should return 2 because of the paths a-b-c and d-b-c. The path a-b-c also means that there is a path c-b-a. No cycles will exist in the graph and every node will be connected to some other node in the graph. 
// Input = "b-e","b-c","c-d","a-b","e-f"      Output = 4
// Input = "b-a","c-e","b-c","d-c"      Output = 3

// function FarthestNodes(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 23.
// Using the JavaScript language, have the function KnightJumps(str) read str which will be a string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board. The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging from 1 to 8. Your program should determine the number of spaces the knight can move to from a given location. For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces from position x=4 and y=5.
// Input = "(1 1)"    Output = 2
// Input = "(2 8)"    Output = 3

// function KnightJumps(str) { 

//   // code goes here  
//   return str; 
         
// }

// 22.
// Using the JavaScript language, have the function VertexCovering(strArr) take strArr which will be an array of length three. The first part of the array will be a list of vertices in a graph in the form (A,B,C,...), the second part of the array will be the edges connecting the vertices in the form 
// (A-B,C-D,...) where each edge is bidirectional. The last part of the array will be a set of vertices in the form (X,Y,Z,...) and your program will have to determine whether or not the set of vertices given covers every edge in the graph such that every edge is incident to at least one vertex in the set. For example: if strArr is ["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(A,B)"] then the vertices (A,B) are in fact one of the endpoints of every edge in the graph, so every edge has been accounted for. Therefore your program should return the string yes. But, if for example the last part of the array was (C,B) then these vertices don't cover all the edges because the edge connecting A-D is left out. If this is the case your program should return the edges given in the second part of the array that are left out in the same order they were listed, so for this example your program should return (A-D). 

// The graph will have at least 2 vertices and all the vertices in the graph will be connected. The third part of the array listing the vertices may be empty, where it would only contain the parenthesis with no values within it: "()" 

// Input = "(A,B,C,D)","(A-B,A-D,B-D,A-C)","(C)"      Output = (A-B,A-D,B-D)
// Input = "(X,Y,Z,Q)","(X-Y,Y-Q,Y-Z)","(Z,Y,Q)"      Output = yes

// function VertexCovering(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 21.
// Using the JavaScript language, have the function AlphabetRunEncryption(str) read the str parameter being passed which will be an encrypted string and your program should output the original decrypted string. The encryption being used is the following: For every character i in str up to the second to last character, take the i and i+1 characters and encode them by writing the letters of the alphabet, in order, that range in the same direction between those chosen characters. For example: if the original string were bo then it would be encoded as cdefghijklmn, but if the string were boa then bo is encoded as cdefghijklmn and oa is encoded as nmlkjihgfedcb with the final encrypted string being cdefghijklmnnmlkjihgfedcb. So str may be something like the encrypted string just written, and your program should decrypt it and output the original message. 

// The input string will only contains lowercase characters (a...z). There are also three important rules to this encryption based on specific character sequences. 

// 1) If the original string contains only one letter between two chosen characters, such as the string ac then this would be encrypted as bR with R standing for what direction in the alphabet to go in determining the original characters. The encrypted string bR represents ac but the encrypted string bL represents ca (R = right, L = left). 

// 2) If the original string contains zero letters between two chosen characters, such as the string ab then this would be encrypted as abS, with S representing the fact that no decryption is needed on the two letters preceding S. For example, if the original string were aba then the encryption would be abSbaS, but be careful because decrypting this you get abba, but the actual original string is aba. 

// 3) If the original string contains a repeat of letters, such as the string acc then this would be encrypted as bRcN, with N representing the fact that no change in characters occurred on the character preceding N. The input string will never only be composed of repeated characters. 

// Input = "bcdefghijklmnopqrstN"     Output = "att"
// Input = "abSbaSaNbR"     Output = "abaac"

// function AlphabetRunEncryption(str) { 

//   // code goes here  
//   return str; 
         
// }

// 20.
// Using the JavaScript language, have the function BlackjackHighest(strArr) take the strArr parameter being passed which will be an array of numbers and letters representing blackjack cards. Numbers in the array will be written out. So for example strArr may be ["two","three","ace","king"]. The full list of possibilities for strArr is: two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, ace. Your program should output below, above, or blackjack signifying if you have blackjack (numbers add up to 21) or not and the highest card in your hand in relation to whether or not you have blackjack. If the array contains an ace but your hand will go above 21, you must count the ace as a 1. You must always try and stay below the 21 mark. So using the array mentioned above, the output should be below king. The ace is counted as a 1 in this example because if it wasn't you would be above the 21 mark. Another example would be if strArr was ["four","ten","king"], the output here should be above king. If you have a tie between a ten and a face card in your hand, return the face card as the "highest card". If you have multiple face cards, the order of importance is jack, queen, then king. 
// Input = "four","ace","ten"   Output = "below ten"
// Input = "ace","queen"    Output = "blackjack ace"

// function BlackjackHighest(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 19.
// Using the JavaScript language, have the function NoughtsDeterminer(strArr) take the strArr parameter being passed which will be an array of size eleven. The array will take the shape of a Tic-tac-toe board with spaces strArr[3] and strArr[7] being the separators ("<>") between the rows, and the rest of the spaces will be either "X", "O", or "-" which signifies an empty space. So for example strArr may be ["X","O","-","<>","-","O","-","<>","O","X","-"]. This is a Tic-tac-toe board with each row separated double arrows ("<>"). Your program should output the space in the array by which any player could win by putting down either an "X" or "O". In the array above, the output should be 2 because if an "O" is placed in strArr[2] then one of the players wins. Each board will only have one solution for a win, not multiple wins. You output should never be 3 or 7 because those are the separator spaces. 
// Input = "X","-","O","<>","-","-","O","<>","-","-","X"  Output = 5
// Input = "X","O","X","<>","-","O","O","<>","X","X","O"  Output = 4

// function NoughtsDeterminer(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 18.
// Using the JavaScript language, have the function QueenCheck(strArr) read strArr which will be an array consisting of the locations of a Queen and King on a standard 8x8 chess board with no other pieces on the board. The structure of strArr will be the following: ["(x1,y1)","(x2,y2)"] with (x1,y1) representing the position of the queen and (x2,y2) representing the location of the king with x and y ranging from 1 to 8. Your program should determine if the king is in check based on the current positions of the pieces, and if so, return the number of spaces it can move to in order to get out of check. If the king is not in check, return -1. For example: if strArr is ["(4,4)","(6,6)"] then your program should output 6. Remember, because only the queen and king are on the board, if the queen is checking the king by being directly adjacent to it, technically the king can capture the queen. 
// Input = "(1,1)","(1,4)"    Output = 3
// Input = "(3,1)","(4,4)"    Output = -1

// function QueenCheck(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 17.
// Using the JavaScript language, have the function MatrixDeterminant(strArr) read strArr which will be an array of integers represented as strings. Within the array there will also be "<>" elements which represent break points. The array will make up a matrix where the (number of break points + 1) represents the number of rows. Here is an example of how strArr may look: ["1","2","<>","3","4"]. The contents of this array are row1=[1 2] and row2=[3 4]. Your program should take the given array of elements, create the proper matrix, and then calculate the determinant. For the example above, your program should return -2. If the matrix is not a square matrix, return -1. The maximum size of strArr will be a 6x6 matrix. The determinant will always be an integer.
// Input = "5","0","<>","0","5"   Output = 25
// Input = "1","2","4","<>","2","1","1","<>","4","1","1"    Output = -4

// function MatrixDeterminant(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 16.
// Using the JavaScript language, have the function SwitchSort(arr) take arr which will be an an array consisting of integers 1...size(arr) and determine what the fewest number of steps is in order to sort the array from least to greatest using the following technique: Each element E in the array can swap places with another element that is arr[E] spaces to the left or right the chosen element. You can loop from one end of the array to the other. For example: if arr is the array [1, 3, 4, 2] then you can choose the second element which is the number 3, and if you count 3 places to the left you'll loop around the array and end up at the number 4. Then you swap these elements and arr is then [1, 4, 3, 2]. From here only one more step is required, you choose the last element which is the number 2, count 2 places to the left and you'll reach the number 4, then you swap these elements and you end up with a sorted array [1, 2, 3, 4]. Your program should return an integer that specifies the least amount of steps needed in order to sort the array using the following switch sort technique. 

// The array arr will at most contain five elements and will contain at least two elements. 
// Input = 3,1,2    Output = 2
// Input = 1,3,4,2    Output = 2

// function SwitchSort(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 15.
// Using the JavaScript language, have the function SymmetricMatrix(strArr) read strArr which will be an array of integers represented as strings. Within the array there will also be "<>" elements which represent break points. The array will make up a matrix where the (number of break points + 1) represents the number of rows. Here is an example of how strArr may look: ["1","0","1","<>","0","1","0","<>","1","0","1"]. There are two "<>", so 2 + 1 = 3. Therefore there will be three rows in the array and the contents will be row1=[1 0 1], row2=[0 1 0] and row3=[1 0 1]. Your program should take the given array of elements, create the proper matrix, and then determine whether the matrix is symmetric, in other words, if matrix M is equal to M transpose. If it is, return the string symmetric and if it isn't return the string not symmetric. A matrix may or may not be a square matrix and if this is the case you should return the string not possible. For the example above, your program should return symmetric. 
// Input = "5","0","<>","0","5"     Output = "symmetric"
// Input = "1","2","4","<>","2","1","1","<>","-4","1","-1"      Output = "not symmetric"

// function SymmetricMatrix(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 14.
// Using the JavaScript language, have the function GasStation(strArr) take strArr which will be an an array consisting of the following elements: N which will be the number of gas stations in a circular route and each subsequent element will be the string g:c where g is the amount of gas in gallons at that gas station and c will be the amount of gallons of gas needed to get to the following gas station. For example strArr may be: ["4","3:1","2:2","1:2","0:1"]. Your goal is to return the index of the starting gas station that will allow you to travel around the whole route once, otherwise return the string impossible. For the example above, there are 4 gas stations, and your program should return the string 1 because starting at station 1 you receive 3 gallons of gas and spend 1 getting to the next station. Then you have 2 gallons + 2 more at the next station and you spend 2 so you have 2 gallons when you get to the 3rd station. You then have 3 but you spend 2 getting to the final station, and at the final station you receive 0 gallons and you spend your final gallon getting to your starting point. Starting at any other gas station would make getting around the route impossible, so the answer is 1. If there are multiple gas stations that are possible to start at, return the smallest index (of the gas station). N will be >= 2. 
// Input = "4","1:1","2:2","1:2","0:1"  Output = "impossible"
// Input = "4","0:1","2:2","1:2","3:1"  Output = "4"

// function GasStation(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 13.
// Using the JavaScript language, have the function StepWalking(num) take the num parameter being passed which will be an integer between 1 and 15 that represents the number of stairs you will have to climb. You can climb the set of stairs by taking either 1 step or 2 steps, and you can combine these in any order. So for example, to climb 3 steps you can either do: (1 step, 1 step, 1 step) or (2, 1) or (1, 2). So for 3 steps we have 3 different ways to climb them, so your program should return 3. Your program should return the number of combinations of climbing num steps. 
// Input = 1    Output = 1
// Input = 3    Output = 3

// function StepWalking(num) { 

//   // code goes here  
//   return num; 
         
// }

// 12.
// Using the JavaScript language, have the function HamiltonianPath(strArr) take strArr which will be an array of length three. The first part of the array will be a list of vertices in a graph in the form (A,B,C,...), the second part of the array will be the edges connecting the vertices in the form 
// (A-B,C-D,...) where each edge is bidirectional. The last part of the array will be a set of vertices in the form (X,Y,Z,...) and your program will have to determine whether or not the set of vertices given forms a Hamiltonian path on the graph which means that every vertex in the graph is visited only once in the order given. For example: if strArr is ["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(C,A,D,B)"] then the vertices (C,A,D,B) in this order do in fact form a Hamiltonian path on the graph so your program should return the string yes. If for example the last part of the array was (D,A,B,C) then this doesn't form a Hamiltonian path because once you get to B you can't get to C in the graph without passing through the visited vertices again. Here your program should return the vertex where the path had to terminate, in this case your program should return B. 

// The graph will have at least 2 vertices and all the vertices in the graph will be connected.

// Input = "(A,B,C)","(B-A,C-B)","(C,B,A)"        Output = yes
// Input = "(X,Y,Z,Q)","(X-Y,Y-Q,Y-Z)","(Z,Y,Q,X)"        Output = Q

// function HamiltonianPath(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 11.
// Using the JavaScript language, have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 
// Input = 2111   Output = 5
// Input = 9831   Output = 7

// function KaprekarsConstant(num) { 

//   // code goes here  
//   return num; 
         
// }

// 10.
// Using the JavaScript language, have the function IntersectingLines(strArr) take strArr which will be an array of 4 coordinates in the form: (x,y). Your program should take these points where the first 2 form a line and the last 2 form a line, and determine whether the lines intersect, and if they do, at what point. For example: if strArr is ["(3,0)","(1,4)","(0,-3)","(2,3)"], then the line created by (3,0) and (1,4) and the line created by (0,-3) (2,3) intersect at (9/5,12/5). Your output should therefore be the 2 points in fraction form in the following format: (9/5,12/5). If there is no denominator for the resulting points, then the output should just be the integers like so: (12,3). If any of the resulting points is negative, add the negative sign to the numerator like so: (-491/63,-491/67). If there is no intersection, your output should return the string "no intersection". The input points and the resulting points can be positive or negative integers. 
// Input = "(9,-2)","(-2,9)","(3,4)","(10,11)"    Output = "(3,4)"
// Input = "(1,2)","(3,4)","(-5,-6)","(-7,-8)"    Output = "no intersection"

// function IntersectingLines(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 9. 
// Using the JavaScript language, have the function RREFMatrix(strArr) take strArr which will be an array of integers represented as strings. Within the array there will also be "<>" elements which represent break points. The array will make up a matrix where the (number of break points + 1) represents the number of rows. Here is an example of how strArr may look: ["5","7","8","<>","1","1","2"]. There is one "<>", so 1 + 1 = 2. Therefore there will be two rows in the array and the contents will be row1=[5 7 8] and row2=[1 1 2]. Your program should take the given array of elements, create the proper matrix, and then through the process of Gaussian elimination create a reduced row echelon form matrix (RREF matrix). For the array above, the resulting RREF matrix would be: row1=[1 0 3], row2=[0 1 -1]. Your program should return that resulting RREF matrix in string form combining all the integers, like so: "10301-1". The matrix can have any number of rows and columns (max=6x6 matrix and min=1x1 matrix). The matrix will not necessarily be a square matrix. If the matrix is an nx1 matrix it will not contain the "<>" element. The integers in the array will be such that the resulting RREF matrix will not contain any fractional numbers. 
// Input = "2","4","8","<>","6","12","14"     Output = "120001"
// Input = "2","2","4","<>","1","1","8","<>","7","6","5"      Output = "100010001"

// function RREFMatrix(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 8. 
// Using the JavaScript language, have the function WeightedPath(strArr) take strArr which will be an array of strings which models a non-looping weighted Graph. The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes along with their weights (integers) separated by the pipe symbol (|). They will look like this: (A|B|3, B|C|12 .. Brick Street|Main Street|14 .. etc.). Although, there may exist no connections at all. 

// An example of strArr may be: ["4","A","B","C","D","A|B|1","B|D|9","B|C|3","C|D|4"]. It may help to visualize the Graph by drawing out the nodes and their connections. Your program should return the shortest path when the weights are added up from node to node from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-C-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A|B|1","A|E|9","B|C|2","C|D|1","D|F|2","E|D|6","F|G|2"]. The output for this array should be A-B-C-D-F-G. There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A. A path may not go through any Node more than once. 
// Input = "4","A","B","C","D", "A|B|2", "C|B|11", "C|D|3", "B|D|2"   Output = "A-B-D"
// Input = "4","x","y","z","w","x|y|2","y|z|14", "z|y|31"   Output = -1

// function WeightedPath(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 7.
// Using the JavaScript language, have the function PatternChaser(str) take str which will be a string and return the longest pattern within the string. A pattern for this challenge will be defined as: if at least 2 or more adjacent characters within the string repeat at least twice. So for example "aabecaa" contains the pattern aa, on the other hand "abbbaac" doesn't contain any pattern. Your program should return yes/no pattern/null. So if str were "aabejiabkfabed" the output should be yes abe. If str were "123224" the output should return no null. The string may either contain all characters (a through z only), integers, or both. But the parameter will always be a string type. The maximum length for the string being passed in will be 20 characters. If a string for example is "aa2bbbaacbbb" the pattern is "bbb" and not "aa". You must always return the longest pattern possible. 
// Input = "da2kr32a2"    Output = "yes a2"
// Input = "sskfssbbb9bbb"    Output = "yes bbb"

// function PatternChaser(str) { 

//   // code goes here  
//   return str; 
         
// }

// 6.
// Using the JavaScript language, have the function Calculator(str) take the str parameter being passed and evaluate the mathematical expression within in. For example, if str were "2+(3-1)*3" the output should be 8. Another example: if str were "(2-0)(6/2)" the output should be 6. There can be parenthesis within the string so you must evaluate it properly according to the rules of arithmetic. The string will contain the operators: +, -, /, *, (, and ). If you have a string like this: #/#*# or #+#(#)/#, then evaluate from left to right. So divide then multiply, and for the second one multiply, divide, then add. The evaluations will be such that there will not be any decimal operations, so you do not need to account for rounding and whatnot. 
// Input = "6*(4/2)+3*1"    Output = "15"
// Input = "6/3-1"    Output = "1"

// function Calculator(str) { 

//   // code goes here  
//   return str; 
         
// }

// 5.
// Using the JavaScript language, have the function PolynomialExpansion(str) take str which will be a string representing a polynomial containing only (+/-) integers, a letter, parenthesis, and the symbol "^", and return it in expanded form. For example: if str is "(2x^2+4)(6x^3+3)", then the output should be "12x^5+24x^3+6x^2+12". Both the input and output should contain no spaces. The input will only contain one letter, such as "x", "y", "b", etc. There will only be four parenthesis in the input and your output should contain no parenthesis. The output should be returned with the highest exponential element first down to the lowest. 

// More generally, the form of str will be: ([+/-]{num}[{letter}[{^}[+/-]{num}]]...[[+/-]{num}]...)(copy) where "[]" represents optional features, "{}" represents mandatory features, "num" represents integers and "letter" represents letters such as "x". 
// Input = "(1x)(2x^-2+1)"    Output = "x+2x^-1"
// Input = "(-1x^3)(3x^3+2)"    Output = "-3x^6-2x^3"

// function PolynomialExpansion(str) { 

//   // code goes here  
//   return str; 
         
// }

// 4.
// Using the JavaScript language, have the function ShortestPath(strArr) take strArr which will be an array of strings which models a non-looping Graph. The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes. They will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist no connections at all. 

// An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. It may help to visualize the Graph by drawing out the nodes and their connections. Your program should return the shortest path from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. The output for this array should be A-E-D-F-G. There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A.
// Input = "5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"    Output = "A-C-D-F"
// Input = "4","X","Y","Z","W","X-Y","Y-Z","X-W"    Output = "X-W"

// function ShortestPath(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 3.
// Using the JavaScript language, have the function TransitivityRelations(strArr) read the strArr parameter being passed which will make up an NxN matrix where the rows are separated by each pair of parentheses (the matrix will range from 2x2 to 5x5). The matrix represents connections between nodes in a graph where each node corresponds to the Nth element in the matrix (with 0 being the first node). If a connection exists from one node to another, it will be represented by a 1, if not it will be represented by a 0. For example: suppose strArr were a 3x3 matrix with input 
// ["(1,1,1)","(1,0,0)","(0,1,0)"], this means that there is a connection from node 0->0, 0->1, and 0->2. For node 1 the connections are 1->0, and for node 2 the connections are 2->1. This can be interpreted as a connection existing from node X to node Y if there is a 1 in the Xth row and Yth column. Note: a connection from X->Y does not imply a connection from Y->X. 

// What your program should determine is whether or not the matrix, which represents connections among the nodes, is transitive. A transitive relation means that if the connections 0->1 and 1->2 exist for example, then there must exist the connection 0->2. More generally, if there is a relation xRy and yRz, then xRz should exist within the matrix. If a matrix is completely transitive, return the string transitive. If it isn't, your program should return the connections needed, in the following format, in order for the matrix to be transitive: (N1,N2)-(N3,N4)-(...). So for the example above, your program should return (1,2)-(2,0). You can ignore the reflexive property of nodes in your answers. Return the connections needed in lexicographical order [e.g. (0,1)-(0,4)-(1,4)-(2,3)-(4,1)].

// Input = "(1,1,1)","(0,1,1)","(0,1,1)"        Output = "transitive"
// Input = "(0,1,0,0)","(0,0,1,0)","(0,0,1,1)","(0,0,0,1)"        Output = "(0,2)-(0,3)-(1,3)"

// function TransitivityRelations(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 2.
// Using the JavaScript language, have the function OptimalAssignments(strArr) read strArr which will represent an NxN matrix and it will be in the following format: ["(n,n,n...)","(...)",...] where the n's represent integers. This matrix represents a machine at row i performing task at column j. The cost for this is matrix[i][j]. Your program should determine what machine should perform what task so as to minimize the whole cost and it should return the pairings of machines to tasks in the following format: (i-j)(...)... Only one machine can perform one task. For example: if strArr is ["(5,4,2)","(12,4,3)","(3,4,13)"] then your program should return (1-3)(2-2)(3-1) because assigning the machines to these tasks gives the least cost. The matrix will range from 2x2 to 6x6, there will be no negative costs in the matrix, and there will always be a unique answer. 
// Input = "(1,2,1)","(4,1,5)","(5,2,1)"      Output = "(1-1)(2-2)(3-3)"
// Input = "(13,4,7,6)","(1,11,5,4)","(6,7,2,8)","(1,3,5,9)"      Output = "(1-2)(2-4)(3-3)(4-1)"

// function OptimalAssignments(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 1.
//Using the JavaScript language, have the function SudokuQuadrantChecker(strArr) read the strArr parameter being passed which will represent a 9x9 Sudoku board of integers ranging from 1 to 9. The rules of Sudoku are to place each of the 9 integers integer in every row and column and not have any integers repeat in the respective row, column, or 3x3 sub-grid. The input strArr will represent a Sudoku board and it will be structured in the following format: ["(N,N,N,N,N,x,x,x,x)","(...)","(...)",...)] where N stands for an integer between 1 and 9 and x will stand for an empty cell. Your program will determine if the board is legal; the board also does not necessarily have to be finished. If the board is legal, your program should return the string legal but if it isn't legal, it should return the 3x3 quadrants (separated by commas) where the errors exist. The 3x3 quadrants are numbered from 1 to 9 starting from top-left going to bottom-right. 

// For example, if strArr is: ["(1,2,3,4,5,6,7,8,1)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(1,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)"] then your program should return 1,3,4 since the errors are in quadrants 1, 3 and 4 because of the repeating integer 1. 

// Another example, if strArr is: ["(1,2,3,4,5,6,7,8,9)","(x,x,x,x,x,x,x,x,x)","(6,x,5,x,3,x,x,4,x)","(2,x,1,1,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,9)"] then your program should return 3,4,5,9.

// function SudokuQuadrantChecker(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

//######## MEDIUM CHALLENGES

// 33.
// Using the JavaScript language, have the function StockPicker(arr) take the array of numbers stored in arr which will contain integers that represent the amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on day x and selling stock on day y where y > x. For example: if arr is [44, 30, 24, 32, 35, 30, 40, 38, 15] then your program should return 16 because at index 2 the stock was worth $24 and at index 6 the stock was then worth $40, so if you bought the stock at 24 and sold it at 40, you would have made a profit of $16, which is the maximum profit that could have been made with this list of stock prices. 

// If there is not profit that could have been made with the stock prices, then your program should return -1. For example: arr is [10, 9, 8, 2] then your program should return -1. 

// Input = 10,12,4,5,9      Output = 5
// Input = 14,20,4,12,5,11      Output = 8

// function StockPicker(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 32.
//Using the JavaScript language, have the function NumberEncoding(str) take the str parameter and encode the message according to the following rule: encode every letter into its corresponding numbered position in the alphabet. Symbols and spaces will also be used in the input. For example: if str is "af5c a#!" then your program should return 1653 1#!.
// Input = "hello 45"   Output = 85121215 45
// Input = "jaj-a"     Output = 10110-1

// function NumberEncoding(str) { 

//   // code goes here  
//   return str; 
         
// }

// 31.
// Using the JavaScript language, have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries. For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements.
// Input = 0,-2,-2,5,5,5    Output = 3
// Input = 100,2,101,4    Output = 0

// function DistinctList(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 30.
// Using the JavaScript language, have the function LookSaySequence(num) take the num parameter being passed and return the next number in the sequence according to the following rule: to generate the next number in a sequence read off the digits of the given number, counting the number of digits in groups of the same digit. For example, the sequence beginning with 1 would be: 1, 11, 21, 1211, ... The 11 comes from there being "one 1" before it and the 21 comes from there being "two 1's" before it. So your program should return the next number in the sequence given num. 
// Input = 1211   Output = 111221
// Input = 2466   Output = 121426

// function LookSaySequence(num) { 

//   // code goes here  
//   return num; 
         
// }

// 29.
// Using the JavaScript language, have the function OverlappingRectangles(strArr) read the strArr parameter being passed which will represent two rectangles on a Cartesian coordinate plane and will contain 8 coordinates with the first 4 making up rectangle 1 and the last 4 making up rectange 2. It will be in the following format: ["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"] Your program should determine the area of the space where the two rectangles overlap, and then output the number of times this overlapping region can fit into the first rectangle. For the above example, the overlapping region makes up a rectangle of area 2, and the first rectangle (the first 4 coordinates) makes up a rectangle of area 4, so your program should output 2. The coordinates will all be integers. If there's no overlap between the two rectangles return 0. 
// Input = "(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)"    Output = 6
// Input = "(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"     Output = 3

// function OverlappingRectangles(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 28.
// Using the JavaScript language, have the function MostFreeTime(strArr) read the strArr parameter being passed which will represent a full day and will be filled with events that span from time X to time Y in the day. The format of each event will be hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. Your program will have to output the longest amount of free time available between the start of your first event and the end of your last event in the format: hh:mm. The start event should be the earliest event in the day and the latest event should be the latest event in the day. The output for the previous input would therefore be 01:30 (with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). The input will contain at least 3 events and the events may be out of order. 
// Input = "12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:00PM"    Output = "00:30"
// Input = "12:15PM-02:00PM","09:00AM-12:11PM","02:02PM-04:00PM"    Output = "00:04"

// function MostFreeTime(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 27.
// Using the JavaScript language, have the function MultipleBrackets(str) take the str parameter being passed and return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello [world])(!)", then the output should be 1 3 because all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" the the output should be 0 because the brackets do not correctly match up. Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1. 
// Input = "(coder)[byte)]"Output = 0
// Input = "(c([od]er)) b(yt[e])"Output = 1 5

// function MultipleBrackets(str) { 

//   // code goes here  
//   return str; 
         
// }

// 26.
// Using the JavaScript language, have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no. 
// Input = 34   Output = "yes"
// Input = 54   Output = "no"

// function FibonacciChecker(num) { 

//   // code goes here  
//   return num; 
         
// }

// 25.
// Using the JavaScript language, have the function CoinDeterminer(num) take the input, which will be an integer ranging from 1 to 250, and return an integer output that will specify the least number of coins, that when added, equal the input integer. Coins are based on a system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the output should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins. 
// Input = 6    Output = 2
// Input = 16   Output = 2

// function CoinDeterminer(num) { 

//   // code goes here  
//   return num; 
         
// }

// 24.
// Using the JavaScript language, have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5 that are below num. For example: if num is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, so your program should return 23. The integer being passed will be between 1 and 100.
// Input = 6    Output = 8
// Input = 1    Output = 0

// function ThreeFiveMultiples(num) { 

//   // code goes here  
//   return num; 
         
// }

// 23.
// Using the JavaScript language, have the function StringReduction(str) take the str parameter being passed and return the smallest number you can get through the following reduction method. The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third. For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted. For example: if str is "cab", "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.
// Input = "abcabc"   Output = 2
// Input = "cccc"   Output = 4

// function StringReduction(str) { 

//   // code goes here  
//   return str; 
         
// }

// 22.
// Using the JavaScript language, have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.
  // Input = "(coder)(byte))"     Output = 0
  // Input = "(c(oder)) b(yte)"     Output = 1

  // function BracketMatcher(str) { 

  //   // code goes here  
  //   return str; 
           
  // }
  
// 21.
// Using the JavaScript language, have the function TripleDouble(num1,num2) take both parameters being passed, and return 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2. For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because in the first parameter you have the straight triple 999 and you have a straight double, 99, of the same number in the second parameter. If this isn't the case, return 0. 
// Input = 465555 & num2 = 5579   Output = 1
// Input = 67844 & num2 = 66237   Output = 0

// function TripleDouble(num1,num2) { 

//   // code goes here  
//   return num1 + num2; 
         
// }

// 20.
// Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole string (So this won't ever be the case: hello44444 world). Each string will also have at least one letter. 
  // Input = "H3ello9-9"      Output = 4
  // Input = "One Number*1*"      Output = 0

  // function NumberSearch(str) { 

  //   // code goes here  
  //   return str; 
           
  // }

// 19.
// Using the JavaScript language, have the function SwapII(str) take the str parameter and swap the case of each character. Then, if a letter is between two numbers (without separation), switch the places of the two numbers. For example: if str is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3. 
// Input = "Hello -5LOL6"   Output = "hELLO -6lol5"
// Input = "2S 6 du5d4e"    Output = "2s 6 DU4D5E"

// function SwapII(str) { 

//   // code goes here  
//   return str; 
         
// }

// 18.
// Using the JavaScript language, have the function DashInsertII(str) insert dashes ('-') between each two odd numbers and insert asterisks ('*') between each two even numbers in str. For example: if str is 4546793 the output should be 454*67-9-3. Don't count zero as an odd or even number. 
// Input = 99946    Output = 9-9-94*6
// Input = 56647304   Output = 56*6*47-304

// function DashInsertII(num) { 

//   // code goes here  
//   return num; 
         
// }

// 17.
// Using the JavaScript language, have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0. For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes.
// Input = 98   Output = 1
// Input = 598    Output = 1

// function PrimeChecker(num) { 

//   // code goes here  
//   return num; 
         
// }

// 16.
// Using the JavaScript language, have the function PermutationStep(num) take the num parameter being passed and return the next number greater than num using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999). 
// Input = 11121    Output = 11211
// Input = 41352    Output = 41523

// function PermutationStep(num) { 

//   // code goes here  
//   return num; 
         
// }

// 15.
// Using the JavaScript language, have the function CountingMinutes(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 
// Input = "12:30pm-12:00am"    Output = 690
// Input = "1:23am-1:08am"    Output = 1425

// function CountingMinutes(str) { 

//   // code goes here  
//   return str; 
         
// }

// 14.
// Using the JavaScript language, have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero. 
// Input = 2 & num2 = 3   Output = "0.6667"
// Input = 10 & num2 = 10   Output = "1.0000"

// function FormattedDivision(num1,num2) { 

//   // code goes here  
//   return num1 + num2; 
         
// }

// 13.
//Using the JavaScript language, have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements. 
// Input = 5,10,15    Output = 8
// Input = -2,10,4    Output = 10

// function Consecutive(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 12.
// Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. 
// Input = 5,5,2,2,1  Output = 5
// Input = 3,4,1,6,10   Output = -1

// function SimpleMode(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 11. 
// Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 
// Input = "Hello" & num = 4  Output = "Lipps"
// Input = "abc" & num = 0  Output = "abc"

// function CaesarCipher(str,num) { 

//   // code goes here  
//   return str + num; 
         
// }

// 10.
// Using the JavaScript language, have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 
// Input = "Hello apple pie"    Output = Hello
// Input = "No words"   Output = -1

// function LetterCount(str) { 

//   // code goes here  
//   return str; 
         
// }

// 9.
// Using the JavaScript language, have the function BinaryConverter(str) return the decimal form of the binary value. For example: if 101 is passed return 5, or if 1000 is passed return 8.
// Input = "100101"   Output = "37"
// Input = "011"    Output = "3"

// function BinaryConverter(str) { 

//   // code goes here  
//   return str; 
         
// }

// 8.
// Using the JavaScript language, have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. 
// Input = 5,7,16,1,2   Output = "false"
// Input = 3,5,-1,8,12    Output = "true"

// function ArrayAddition(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 7.
// Using the JavaScript language, have the function ArithGeoII(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
// Input = 5,10,15    Output = "Arithmetic"
// Input = 2,4,16,24    Output = -1

// function ArithGeoII(arr) { 

//   // code goes here  
//   return arr; 
         
// }

// 6.
// Using the JavaScript language, have the function StringScramble(str1,str2) take both parameters being passed 
//and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return 
//the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. 
//Punctuation and symbols will not be entered with the parameters. 
// Input = "cdore" & str2= "coder"      Output = "true"
// Input = "h3llko" & str2 = "hello"      Output = "false"

function StringScramble(str1,str2) { 
  var result = [];
  var split = str1.match(/[coderbyte]/g);
  var regex = new RegExp('[' + str2 + ']' , 'g');
  var match = str1.match(regex);

  for(var i = 0; i < str2.length; i++){
    for(var j = 0; j < str1.length; j++){
      if(str1[j] === str2[i]){
        result.push(str1[j]); break;
      }
    }
  }

  return split;

  return match.length === str2.length && result.join('') === str2;
}

console.log(StringScramble("coodrebtqqkye", "coderbyte"));

// function StringScramble(str1,str2) {
//   var result = [];
//   var one = str1.split('');
//   var two = str2.split('');
//   for(var i=0;i<one.length;i++){
//     for(var j=0;j<two.length;j++){
//       if(one[i] === two[j]){
//         result.push(one[i])
//         two.splice(j,1);
//       }
//     }
//   }
//   return result.length === str2.length;
// }

// 5.
// Using the JavaScript language, have the function Division(num1,num2) take both parameters being passed and 
//return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers 
//with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The 
//range for both parameters will be from 1 to 10^3.
// Input = 7 & num2 = 3   Output = 1
// Input = 36 & num2 = 54   Output = 18

// function Division(num1,num2) { 
//   var count = 1;
//   var arr1 = [], arr2 = [], result = [];
//   var max = Math.max(num1, num2);
 
//   while(count <= max){
//     if(num1 % count === 0){
//       arr1.push(count);
//     }
//     if(num2 % count === 0){
//       arr2.push(count);
//     }
//     count++;
//   }

//   arr1.length >= arr2.length ? 
//     arr1.forEach(function(el1){
//       arr2.forEach(function(el2){
//         if(el1 === el2) result.push(el1);
//       });
//     }) : arr2.forEach(function(el2){
//       arr1.forEach(function(el1){
//         if(el2 === el1) result.push(el2);
//       });
//     });

//   return result[result.length-1]; 
// }

// console.log(Division(7, 3));


// function Division(num1,num2) { 

//   var gcd = function (a, b) {
//     return b == 0 ? a : gcd(b, a % b);
//   };
  
//   // code goes here
//   return gcd(num1, num2);
            
// }

// function Division(num1,num2) { 
//   var min = Math.min(num1, num2);
//   for (var i = min; i > 0; i--) {
//     if ((num1 / i % 1 === 0) && (num2 / i % 1 === 0)) {
//       return i;
//     }
//   }
// }

// function Division(num1,num2) { 
//   var nums = [];
//   for(var i=1;i<=num1;i++){
//     if(num1%i===0 && num2%i===0)nums.push(i);
//   }
//   return nums.pop();
// }

// 4.
// Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter being passed and 
//return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) 
//otherwise return the string false. The parameter entered may have punctuation and symbols but they should not 
//affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" 
//should return true. 
// Input = "Noel - sees Leon"   Output = "true"
// Input = "A war at Tarawa!"   Output = "true"

// function PalindromeTwo(str) { 
//   var string = str.toLowerCase().match(/\w/g); 
//   return string.join('') === string.reverse().join('');
// }

// console.log(PalindromeTwo("A war at Tarawa!"));

// 3.
// Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. The range will 
//be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 
// Input = 9    Output = 23
// Input = 100    Output = 541

// function PrimeMover(num) { 
//   var primes = [];
//   var number = 2;
//   while(primes.length < num){
//     if(PrimeTime(number)){
//       primes.push(number);
//     }
//     number++;
//   }
//   return primes[primes.length - 1];
// }

// function PrimeTime(num) {
//   var count = 2;
//   var bool = true;
//   while(count < num){
//     if(num % count === 0){
//       bool = false;
//     }
//     count++;
//   }
//   return bool;
// }

// console.log(PrimeMover(9));

// 2.
//Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return 
// compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the 
//occurrence of each repeating character and outputting that number along with a single character of the repeating
// sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation,
// or symbols. 
// Input = "aabbcde"    Output = "2a2b1c1d1e"
// Input = "wwwbbbw"    Output = "3w3b1w"

// function RunLength(str){
//   var runlength = '';
//   for(var i = 0; i < str.length; i++){
//     if(str[i] !== str[i-1]){
//       var regex = new RegExp(str[i] + '+'); 
//       var substr = str.substr(i, str.length);
//       var match = substr.match(regex)[0];
//       var count = match.length;
//       runlength = runlength + count + match[0];
//     }
//   }
//   return runlength;
// }

// // function RunLength(str) { 
// //   return str.split('')
// //             .filter((cur, idx) => str.indexOf(cur) === idx)
// //             .map(function(cur){
// //               var regex = new RegExp('['+cur+']+', 'g');
// //               return str.match(regex);
// //             });
// // }

// console.log(RunLength("wwwggopp"));

// 1.
// Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed and return
// the string true if the parameter is a prime number, otherwise return the string false. The range will be between
// 1 and 2^16. 
// Input = 19     Output = true
// Input = 110      Output = false

// function PrimeTime(num) {
//   var count = 2;
//   var bool = true;
//   while(count < Math.ceil(Math.sqrt(num))){
//     if(num % count === 0){
//       bool = false;
//     }
//     count++;
//   }
//   return bool;
// }

// console.log(PrimeTime(2));

//######## EASY CHALLENGES

// 34.
// Using the JavaScript language, have the function RectangleArea(strArr) take the array of strings stored in 
//strArr, which will only contain 4 elements and be in the form (x y) where x and y are both integers, and return
// the area of the rectangle formed by the 4 points on a Cartesian grid. The 4 elements will be in arbitrary 
//order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] then your program should return 6 
//because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal to the 
//width * height. 

// Input = "(1 1)","(1 3)","(3 1)","(3 3)"      Output = 4
// Input = "(0 0)","(1 0)","(1 1)","(0 1)"      Output = 1

// function RectangleArea(strArr) { 

//   // code goes here  
//   return strArr; 
         
// }

// 33.
// Using the JavaScript language, have the function HammingDistance(strArr) take the array of strings stored in 
//strArr, which will only contain two strings of equal length and return the Hamming distance between them. The 
//Hamming distance is the number of positions where the corresponding characters are different. For example: if 
//strArr is ["coder", "codec"] then your program should return 1. The string will always be of equal length and 
//will only contain lowercase characters from the alphabet and numbers. 
// Input = "10011", "10100"     Output = 3
// Input = "helloworld", "worldhello"     Output = 8

// function HammingDistance(strArr) { 
//   var count = 0;
//   var first = strArr[0];
//   var second = strArr[1];

//   for(var i = 0; i < first.length; i++){
//     if(first[i] !== second[i]){
//       count++;
//     }
//   }
//   return count; 
// }

// console.log(HammingDistance(["helloworld", "worldhello"]));

// 32.
// Using the JavaScript language, have the function Superincreasing(arr) take the array of numbers stored in arr 
//and determine if the array forms a superincreasing sequence where each element in the array is greater than the 
//sum of all previous elements. The array will only consist of positive integers. For example: if arr is 
//[1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing 
//sequence. If a superincreasing sequence isn't formed, then your program should return the string "false"
// Input = 1,2,3,4    Output = "false"
// Input = 1,2,5,10   Output = "true"

// function Superincreasing(arr) { 
//   var bool = null;
//   var sumarr = [];
//   var obj = arr.reduce(function(acc, curr, idx){
//     if(!acc[idx]){
//       var subarr = arr.slice(0, arr.indexOf(curr)+1);
//       acc[idx] = subarr.reduce((a,b) => a+b);
//     }
//     return acc;
//   }, {});

//   for(var prop in obj){
//     sumarr.push(obj[prop]);
//   }

//   for(var i = 1; i < arr.length; i++){
//     if(bool !== false){
//       if(arr[i] <= sumarr[i-1]){
//         bool = false;
//       }else{
//         bool = true;
//       }
//     }
//   }

//   return bool;
// }

// console.log(Superincreasing([0,2,3,10,11,50,200]));

// 31. 
// Using the JavaScript language, have the function OverlappingRanges(arr) take the array of numbers stored in 
//arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next
// 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a 
//positive integer, and return the string true if both sets of ranges overlap by at least x numbers. For example:
// if arr is [4, 10, 2, 6, 3] then your program should return the string true. The first range of numbers 
//are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 
//3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at 
//least x numbers, then your program should return the string false. 
// Input = 5,11,1,5,1   Output = true
// Input = 1,8,2,4,4    Output = false

// function OverlappingRanges(arr) { 
//   var range1 = arr.slice(0,2);
//   var range2 = arr.slice(2,4);
//   var x = arr[arr.length-1];
//   var count = null;

//   for(var i = range1[0]; i <= range1[1]; i++){
//     for(var j = range2[0]; j <= range2[1]; j++){
//       if(i === j){
//         count++;
//       }
//     }
//   } 

//   if(count >= x){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(OverlappingRanges([1,8,2,4,4]));

// 30.
// Using the JavaScript language, have the function ChangingSequence(arr) take the array of numbers stored in arr 
//and return the index at which the numbers stop increasing and begin decreasing or stop decreasing and begin
//increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the 
//last point in the array where the numbers were increasing and the next number begins a decreasing sequence. 
//The array will contain at least 3 numbers and it may contains only a single sequence, increasing or decreasing. 
//If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0.

// Input = -4, -2, 9, 10        Output = -1
// Input = 5, 4, 3, 2, 10, 11       Output = 3 

// function ChangingSequence(arr) {  
//   var change = arr.map(function(curr, idx, arr){
//     if(curr < arr[idx+1]){
//       return 'inc';
//     }else if(arr[idx+1] === undefined){
//       if(curr > arr[idx-1]){
//         return 'inc';
//       }else{
//         return 'dec';
//       }
//     }else{
//       return 'dec';
//     }
//   });

//   if(change.every(curr => curr === 'inc')
//   || change.every(curr => curr === 'dec')){
//     return -1;
//   }else{
//     if(change[0] === 'inc'){
//       return change.indexOf('dec');
//     }else{
//       return change.indexOf('inc');
//     }
//   }
// }
  
// console.log(ChangingSequence([-4, -2, 9, 10]));

// 29.
// Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed 
//which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on 
//the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's 
//stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your
// program should return that new set with integers separated by commas. For example: if strArr is 
//["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5

// Input = "1","2","E","E","3"              Output = "1,2"
// Input = "4","E","1","E","2","E","3","E"              Output = "4,1,2,3"

// function OffLineMinimum(strArr){ 
//  var result = [];
//  var arr = strArr.map(el => el);
//  var ecount = strArr.filter(e => e === 'E').length;

//  for(var i = 0; i < ecount; i++){
//    var min = arr.slice(0, arr.indexOf('E'))
//                 .map(num => Number(num))
//                 .reduce((a,b) => a < b ? a : b);

//    arr.splice(arr.indexOf(String(min)),1);
//    arr.splice(arr.indexOf('E'),1);
//    result.push(String(min));
//  }

//  return result.join(',');
// }

// console.log(OffLineMinimum(["1","2","E","E","3"]));

// 28.
// Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 

// Input = 4    Output = 0
// Input = 19   Output = 2

// function AdditivePersistence(num) { 
//  console.log('arg param value: ' + arguments[1]);
//  var count = arguments[1] || 0;
//   var sum = num.toString().split('')
//    .map(str => Number(str))
//    .reduce((a,b) => a+b); 

//   if(num >= 10){
//    return AdditivePersistence(sum, count+1);
//   }else if(num < 10){
//    return count;
//  }
// }

// console.log(AdditivePersistence(25));

// function AdditivePersistence(num) { 

//  var strArr = num.toString().split('');
//  var numArr = [];
//  var counter = 0;
//  for(var i = 0; i < strArr.length; i++){
//    numArr.push(Number(strArr[i]));
//  }

//  if(numArr.length === 1){
//    return counter;
//  }

//  while(counter < 1000){
//    sum = numArr.reduce(function(prev, curr){
//      return prev + curr;
//    }).toString().split('');

//    console.log(sum);

//    numArr = sum.map(function(curr, indx ,sum){
//      return Number(sum[indx]);
//    });

//    counter++;

//    if(sum.length === 1){
//      break;
//    }
//    console.log(numArr);
//    console.log('----------')
//  }
    
//    return counter;      
// }

// 27.
// Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.

// Input = "coder","byte","code"      Output = "code"
// Input = "abc","defg","z","hijk"      Output = "abc"

// function ThirdGreatest(strArr) { 
//  var arr = []; strArr.map(el => arr.push(el));
//  var first = popmax(arr);
//  var second = popmax(arr);
  
//  return second.reduce(function(a,b){
//    if(a.length === b.length){
//      return a;
//    }else if(a.length < b.length){
//      return b;
//    }else if(a.length > b.length){
//      return a;
//    }
//  });
// }

// function popmax(arr){
//  var max = arr.reduce(function(a,b){
//    if(a.length === b.length){
//      return a;
//    }else if(a.length < b.length){
//      return b; 
//    }else if(a.length > b.length){
//      return a;
//    }
//  });
//  arr.splice(arr.indexOf(max),1);
//  return arr;
// }

// console.log(ThirdGreatest(["hello", "world", "before", "all"]));

// function ThirdGreatest(arr) { 
//   var strArr = [];
//   for(var i = 0; i < arr.length; i++){
//     var strObj = {};
//     strObj.Word = arr[i];
//     strObj.Value = arr[i].length;
//     strArr.push(strObj);
    
//   }

//   strArr.sort(function (a, b) {
//     return b.Value - a.Value;
//   });

//   var third = strArr[2].Word;
//   return third;
// }

// 26.
// Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 

// Input = "75Number9"      Output = 84
// Input = "10 2One Number*1*"      Output = 13

// function NumberAddition(str) {  
//  var str = str.replace(/\D+/g, ' ').match(/\d+/g);
//  if(str !== null){
//    return str.reduce(function(acc, curr){
//      return acc += Number(curr);
//    }, 0);
//  }else{
//    return 0;
//  }
// }

// console.log(NumberAddition('On1e * Number*^'));

// 25.
// Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 

// Input = "Hello-LOL"      Output = "hELLO-lol"
// Input = "Sup DUDE!!?"      Output = "sUP dude!!?"

// function SwapCase(str) { 
//  return str.split('').map(function(el){
//    if(el.match(/[a-z]/)){
//      return el.toUpperCase();
//    }else if(el.match(/[A-Z]/)){
//      return el.toLowerCase();
//    }else{
//      return el;
//    }
//  }).join('');           
// }

// console.log(SwapCase("Sup DUDE!!?"));

// function SwapCase(str) { 
//   // take the str parameter and swap the case of each character. 
//   //For example: if str is "Hello World" the output should be hELLO wORLD. 
//   //Let numbers and symbols stay the way they are. 
//   //Input = "Hello-LOL" Output = "hELLO-lol"
//   //Input = "Sup DUDE!!?" Output = "sUP dude!!?"

//   var strObj = {};
//   var swapStr = [];

//   for(var i = 0; i < str.length; i++){
//    strObj[i] = str[i].charCodeAt(0);
//   } 

//   for(var prop in strObj){
//    if(strObj[prop] >= 65   && strObj[prop] <= 90){
//      strObj[prop] = String.fromCharCode(strObj[prop]).toLowerCase();
//    }else if(strObj[prop] >= 97 && strObj[prop] <= 122){
//      strObj[prop] = String.fromCharCode(strObj[prop]).toUpperCase();
//    }else {
//      strObj[prop] = String.fromCharCode(strObj[prop]);
//    }
//   }

//   for(var prop in strObj){
//    swapStr.push(strObj[prop]);
//   }
  
//   return swapStr.join(''); 
         
// }

// 24.
// Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 

// Input = 99946    Output = 9-9-946
// Input = 56730    Output = 567-30

// function DashInsert(str) { 
//   return str.toString().split('').reduce(function(acc, curr, idx, arr){
//    var next = arr[idx+1];
//    if(curr % 2 !== 0 && next % 2 !== 0 && next !== undefined){
//      return acc = acc + curr + '-';
//    }else{
//      return acc = acc + curr;
//    }
//   }, ""); 
// }

// console.log(DashInsert("454793"));

// function DashInsert(str) { 

//   // insert dashes ('-') between each two odd numbers in str. 
//   //For example: if str is 454793 the output should be 4547-9-3. 
//   //Don't count zero as an odd number.
//   //Input = 99946 Output = 9-9-946
//   //Input = 56730 Output = 567-30
//   var numArr = [];
//   var oddEven = {};
//   var dashArr = [];

//   for(var i = 0; i < str.length; i++){
//    numArr.push(Number(str[i]));
//   }

//   for(var i = 0; i < numArr.length; i++){
//    if(numArr[i] % 2 !== 0 && numArr[i+1] % 2 !== 0 && numArr[i+1] !== undefined){
//      oddEven[i] = numArr[i] + '-';
//    }else{
//      oddEven[i] = numArr[i] + '';
//    }
//   }

//   for(var prop in oddEven){
//    dashArr.push(oddEven[prop]);
//   }
//   return dashArr.join(''); 
         
// }

// 23.
// Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode. 

// Input = 1, 2, 3    Output = 0
// Input = 4, 4, 4, 6, 2    Output = 1

// function MeanMode(arr) { 
//  var avg = arr.reduce((a,b) => a+b) / arr.length;
//  var mode = typeof arr.mode() === 'object' ? arr.mode().mode[0].number : 0; 
//  return avg === mode ? 1 : 0;             
// }

// Array.prototype.mode = function(){
//     var that = this;

//     //Returns an object with a number and its associated count
//     var arr = that.filter(function(curr, indx){
//       return that.indexOf(curr) === indx; //Eliminate duplicate numbers
//     }).map(function(i){
//       var count = 0;
//       that.forEach(function(j){ 
//           if(i === j){
//               count++;
//           } 
//       });
//       return { number: i, count: count };
//     });

//     //Returns the highest count from the object in arr
//     var highestFrequency = arr.reduce(function(acc,curr){
//       if(acc.count > curr.count){
//           return acc;
//       }else{
//           return curr;
//       }
//     }).count;

//     if(highestFrequency <= 1){
//       return 'Mode Does Not Exist';
//     }else{
//       //Returns object with the initial array and the mode object
//       var mode = arr.filter(function(curr){
//           return curr.count === highestFrequency;
//       });

//       // .map(function(curr){
//       //   return curr.number;
//       // });

//       return { word: that, mode: mode };
//     }
//   }

// console.log(MeanMode([5, 3, 3, 3, 1]));

// 22.
// Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

// Input = "12:30pm-12:00am"    Output = 690
// Input = "1:23am-1:08am"    Output = 1425

//  24 * 60 = 1440 
// function CountingMinutesI(str) { 
//   return str.replace(/[m]/g, '').split('-').map(function(time){
//    var colon = time.indexOf(':');
//    return {
//      hours: Number(time.slice(0, colon)),
//      minutes: Number(time.slice(colon + 1, colon + 3)),
//      ampm: time[time.length - 1],
//      total: null
//    };
//   }).map(function(obj){
//    if(obj.ampm === 'a' && obj.hours === 12){
//      obj.hours = obj.hours - 12; 
//    }
//    if(obj.ampm === 'p' && obj.hours !== 12){
//      obj.hours = obj.hours + 12;
//    }
//    return obj;
//   }).map(function(obj){
//    obj.total = (obj.hours * 60) + obj.minutes;
//    return obj;
//   }).reduce(function(acc, curr){
//    if(acc.total > curr.total){
//      return (1440 - acc.total) + curr.total;
//    }else{
//      return curr.total - acc.total;
//    }
//   }); 
// }

// console.log(CountingMinutesI("1:00pm-11:00am"));

// 21. 
// Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346".

// Input = 5 & num2 = 2       Output = "3"
// Input = 6874 & num2 = 67       Output = "103"

// function DivisionStringified(num1, num2){
//  var div = String(Math.round(num1 / num2));

//  if(div.length <= 3){
//    return div;
//  }else{
//    var result = div.split('').reverse(); 
//    for(var i = 0; i < div.length; i += 3){
//      if(i !== 0){
//        result[i] = result[i] + ',';
//      }
//    }
//    return result.reverse().join('');
//  }
// }

// console.log(DivisionStringified(6874, 67));

// 20.
// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!  

// Input = 1, 42, 42, 180   Output = "42 42"
// Input = 4, 90          Output = "90 4"

// function SecondGreatLow(arr){
//  var arr = arr.sort(function(a,b){ 
//    return a-b; 
//  }).filter(function(curr, indx){
//    return arr.indexOf(curr) === indx;
//  });

//  if(arr.length <= 2){
//    return arr[arr.length - 1] + ' ' + arr[0];
//  }else{
//    return arr[arr.length - 2] + ' ' + arr[1];
//  }
// }

// function SecondGreatLow(arr){
//  var arr = arr.sort(function(a,b){ 
//    return a-b; 
//  }).filter(function(curr, indx){
//    return arr.indexOf(curr) === indx;
//  }).map(function(i){
//    var count = 0;
//    arr.forEach(function(j){ 
//      if(i === j){
//        count++;
//      } 
//    });
//    return { number: i, count: count };
//  });

//  function arrayToList(arr){
//      var list;
//      if(arr.length > 0){
//        list = {};
//        list.value = arr.shift();
//        list.rest = arrayToList(arr);
//      }else{
//        list = null;
//      }
//      return list;
//  }

//  return arrayToList(arr);
// }

// console.log(SecondGreatLow([-4, -5, 10, 2]));

// 19.
// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. Complete the challenge using functional programming (ie, using native String and Array methods).

// Input = "Hello apple pie"    Output = "Hello"
// Input = "No words"         Output = -1


// function LetterCountI(str) {
//  function maxRepeatedLettersInWord(word) {
//    var letterArr = word.split(''); //break word into letters
//    var highestMatch = 0; //keep tally of highest occurance of a letter in given word
//    for (var i = 0; i < letterArr.length; i++) {
//      var letter = letterArr[i];
//      var letterCount = word.match( new RegExp(letter, 'g') );
//      if (letterCount.length > highestMatch) {
//        highestMatch = letterCount.length;
//      }
//    };
//    return highestMatch;
//  }

//  var strArr = str.split(' '); //break str into arr of words
//  var charCountArr = []; //store repeated letter count for each word
//  for (var i = 0; i < strArr.length; i++) {
//    var word = strArr[i];
//    charCountArr.push(maxRepeatedLettersInWord(word));
//  };
//  var maxCount = Math.max.apply(null, charCountArr);
//  if (maxCount < 2) {
//    return -1;
//  } else {
//    var index = charCountArr.indexOf(maxCount);
//    return strArr[index];
//  }
// }

// console.log(LetterCountI('Today, is the greatest day ever'));

// Array.prototype.mode = function(){
//   var that = this;

//   //Returns an object with a number and its associated count
//   var arr = that.filter(function(curr, indx){
//    return that.indexOf(curr) === indx; //Eliminate duplicate numbers
//   }).map(function(i){
//    var count = 0;
//    that.forEach(function(j){ 
//      if(i === j){
//        count++;
//      } 
//    });
//    return { number: i, count: count };
//   });

//   //Returns the highest count from the object in arr
//   var highestFrequency = arr.reduce(function(acc,curr){
//    if(acc.count > curr.count){
//      return acc;
//    }else{
//      return curr;
//    }
//   }).count;

//   if(highestFrequency <= 1){
//    return 'Mode Does Not Exist';
//   }else{
//    //Returns object with the initial array and the mode object
//    var mode = arr.filter(function(curr){
//      return curr.count === highestFrequency;
//    });

//    // .map(function(curr){
//    //  return curr.number;
//    // });

//    return { word: that, mode: mode };
//   }
// }

// var string = 'Hello apple pie';

// function LetterCountI(str) { 
//  //Returns words with duplicate letters
//  var result = str.split(' ').map(function(curr){
//    return curr.split('').map(function(curr){
//      return curr.charCodeAt(0);
//    }).mode();
//  }).filter(function(curr){
//    return curr !== 'Mode Does Not Exist';
//  }); 

//  if(result.length === 0){
//    return -1;
//  }else{
//    //Returns object with highest count and converts the word property into a string
//    return result.reduce(function(acc, curr){
//      if(acc.mode.count > curr.mode.count){
//        return acc;
//      }else if(acc.mode.count === curr.mode.count){
//        return acc;
//      }else{
//        return curr;
//      }
//    }).word.map(function(curr){
//      return String.fromCharCode(curr);
//    }).join('');
//  }         
// }

// console.log(LetterCountI(string));

// var arr = [1,2,4,5].mode();

// console.log(arr);

// for(var i = 0; i < this.length; i++){
//  var count = 0;
//  for(var j = 0; j < this.length; j++){
//    if(this[j] === this[i]){
//      count++;
//    }
//  }
//  if(count > current){
//    mode.push({count: count, number: this[i]});
//    current = count;
//  }
// }

// that.forEach(function(first){
//  var count = 0;
//  that.forEach(function(second){
//    if(first === second){count++;}
//  });
//  if(count >= current){
//    mode.push(first);
//    current = count;
//  }
// });

// 18. NOT DONE
// Take the array of numbers stored in arr and return the string true if any combination of numbers in the 
//array can be added up to equal the largest number in the array, otherwise return the string false. 
//For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23.

// function PowerSet(arr){
//   var ps=[[]];
//   for(var i=0;i<arr.length;i++){
//     for(var j=0,len=ps.length;j<len;j++){
//       ps.push(ps[j].concat(arr[i]));
//       console.log(ps);
//       // console.log('powerset: ' + ps + '\n' + 'arr[i]: ' + arr[i]);
//     }
//   }
//   return ps;
// }
// console.log(PowerSet([1,2,20]));

// function ArrayAdditionI(arr) { 
//  var sum = arr.reduce(function(acc, curr){ return acc > curr ? acc : curr; }); 
//  var set = arr.filter(function(curr){ return curr !== sum; });
//  var ps = [];

//  set.forEach(function(){

//  });
//   // code goes here  
//   return set;
         
// }

// console.log(ArrayAdditionI([1,2,200,903,8]));

// 17.
// Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

// function ArithGeo(arr) { 

//   // code goes here
//   if(arr.arith() === 'Arithmetic'){
//     return 'Arithmetic';
//   }else if(arr.geo() === 'Geometric'){
//     return 'Geometric';
//   }else{
//     return -1;
//   }      
// }

// Array.prototype.arith = function(){
//   var diff = this[1]-this[0];
//   var output = 'Arithmetic';
//     for(var i = 0; i < this.length; i++){
//       if(this[i+1] !== undefined){
//         var currentDiff = this[i+1]-this[i];
//     if(diff !== currentDiff){
//           output = -1;
//         }
//       }
//     }
//     return output;
// };

// Array.prototype.geo = function(){
//   var ratio = this[1]/this[0]; 
//   var output = 'Geometric';
//     for(var i = 0; i < this.length; i++){
//       if(this[i+1] !== undefined){
//         var currentRatio = this[i+1]/this[i];
//     if(ratio !== currentRatio){
//           output = -1;
//         }
//       }
//     }
//     return output;
// };

// 12.
// Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 

// function ABCheck(str) { 

//   // code goes here  
//   return str.split('').abCheck(3);
         
// }

// Array.prototype.abCheck = function(distance){
//   var a = 'a';
//   var b = 'b';
//   var dist = distance + 1;
//   var bool = false;

//   for(var i = 0; i < this.length; i++){
//     if(this[i] === a){
//       if(this[i+dist] === b){
//         bool = true;
//       }
//     }else if(this[i] === b){
//       if(this[i+dist] === a){
//         bool = true;
//       }
//     }
//   }
//   return bool;
// }

// 11.
// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string. 

// function AlphabetSoup(str) { 
//     // code goes here  
//     return str.split('').map(function(lett){
//       return lett.charCodeAt(0);
//     }).arrangeMin().map(function(num){
//       return String.fromCharCode(num);
//     }).join('');
         
// }

// Array.prototype.arrangeMin = function(){
//   var arr = [];
//   var that = this;
//   while(that.length > 0){
//     var min = that[0]; 
//     var indx = 0;
//     for(var i = 0; i < that.length; i++){
//       if(min > that[i]){
//         min = that[i];
//         indx = i; 
//       }
//     }
//     arr.push(min);
//     that.splice(indx, 1);
//   }
//   return arr;
// };

// 10.
// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 

// function TimeConvert(num) { 

//   // code goes here  
//   return Math.floor((num/60))+':'+(num%60); 
         
// }