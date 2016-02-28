//######## HARD CHALLENGES

// 45.
// Using the JavaScript language, have the function ArrayRotation(arr) take the arr parameter being passed which will be an array of non-negative integers and circularly rotate the array starting from the Nth element where N is equal to the first integer in the array. For example: if arr is [2, 3, 4, 1, 6, 10] then your program should rotate the array starting from the 2nd position because the first element in the array is 2. The final array will therefore be 
// [4, 1, 6, 10, 2, 3], and your program should return the new array as a string, so for this example your program would return 4161023. The first element in the array will always be an integer greater than or equal to 0 and less than the size of the array. 
// Input = 3,2,1,6    Output = 6321
// Input = 4,3,4,3,1,2    Output = 124343

// function ArrayRotation(arr) {
//   var temp = arr.splice(0, arr[0]);
//   return arr.concat(temp).join("");
// }

// 44.
// Using the JavaScript language, have the function CountingAnagrams(str) take the str parameter and determine how many anagrams exist in the string. An anagram is a new word that is produced from rearranging the characters in a different word, for example: cars and arcs are anagrams. Your program should determine how many anagrams exist in a given string and return the total number. For example: if str is "cars are very cool so are arcs and my os" then your program should return 2 because "cars" and "arcs" form 1 anagram and "so" and "os" form a 2nd anagram. The word "are" occurs twice in the string but it isn't an anagram because it is the same word just repeated. The string will contain only spaces and lowercase letters, no punctuation, numbers, or uppercase letters.
// Input = "aa aa odg dog gdo"    Output = 2
// Input = "a c b c run urn urn"    Output = 1

// function CountingAnagrams(str) {
//   var arr = str.split(" ").filter(function(c, i, a) {
//     return a.slice(i+1).indexOf(c) === -1; }).map(function(c) {
//       return c.split("").sort().join(""); });
//   var temp = [], x = arr.length, count = 0;
//   for (var i = 0; i < x; i++) {
//     if (temp.indexOf(arr[i]) !== -1) {
//       count++;
//     } else {
//       temp.push(arr[i]);
//     }
//   }
//   return count;
// }

// 43.
// Using the JavaScript language, have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, and return the number of valid combinations that can be formed with num pairs of parentheses. For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). There are 5 total combinations when the input is 3, so your program should return 5.
// Input = 3  Output = 5
// Input = 2  Output = 2


// 42.
// Using the JavaScript language, have the function ArrayCouples(arr) take the arr parameter being passed which will be an array of an even number of positive integers, and determine if each pair of integers, [k, k+1], [k+2, k+3], etc. in the array has a corresponding reversed pair somewhere else in the array. For example: if arr is [4, 5, 1, 4, 5, 4, 4, 1] then your program should output the string yes because the first pair 4, 5 has the reversed pair 5, 4 in the array, and the next pair, 1, 4 has the reversed pair 4, 1 in the array as well. But if the array doesn't contain all pairs with their reversed pairs, then your program should output a string of the integer pairs that are incorrect, in the order that they appear in the array. 
// For example: if arr is [6, 2, 2, 6, 5, 14, 14, 1] then your program should output the string 5,14,14,1 with only a comma separating the integers. 

// Input = 2,1,1,2,3,3    Output = 3,3
// Input = 5,4,6,7,7,6,4,5    Output = yes

// function ArrayCouples(arr) { 
//     var obj = {};
//     string = "";
//     for(var i = 1; i <= arr.length; i+=2){
//         if(!obj.hasOwnProperty(arr[i-1]) ){
//             if(obj.hasOwnProperty(arr[i])){
//                 if(obj[arr[i]][0] === arr[i-1]){
//                     obj[arr[i]][1] = true;
//                 }
//             }
//             else{
//                 obj[arr[i - 1]] = [arr[i], false];
//             }
//         }
//     }
//     for(var key in obj){
//         if(!obj[key][1]){
//             string += key + "," + obj[key][0] + ",";
//         }
//     }
//   return string === "" ? "yes" : string.slice(0, string.length-1);  
// }

// function ArrayCouples(arr) { 
//   // scan the array one pair at a time
//   for (var i = 0; i < arr.length; i += 2) {
//     // if we have not already eliminated this pair
//     if (arr[i] > -1) {
//       // scan the remaining pairs 
//       for (var o = i + 2; o < arr.length; o += 2) {
//         // check if a matching pair
//         if (arr[o] === arr[i + 1] && arr[o + 1] === arr[i]) {
//           // eliminate the pairs
//           arr[o] = -1;
//           arr[o + 1] = -1;
//           arr[i] = -1;
//           arr[i + 1] = -1;
//           break;
//         }
//       }
//     }
//   }
//   // remove all eliminated pairs
//   arr = arr.filter(function (e) { return e > -1; }); 
//   // if no pairs remain then output 'yes'
//   if (arr.length === 0) {
//     return 'yes';
//   }
//   // otherwise output the remaining pairs
//   return arr.join(',');
// }

// 41.
// Using the JavaScript language, have the function SimpleSAT(str) read str which will be a string consisting of letters, parenthesis, logical operators and tilde's representing a Boolean formula. For example: str may be "(a&b)|c" which means (a AND b) OR c. Your program should output the string yes if there is some arrangement of replacing the letters with TRUE or FALSE in such a way that the formula equates to TRUE. If there is no possible way of assigning TRUE or FALSE to the letters, then your program should output the string no. In the example above, your program would return yes because a=TRUE, b=TRUE and c=FALSE would make the formula TRUE. Another example: if str is "((a&c)&~a)" which means ((a AND c) AND NOT a) then your program should output no because it is not possible to assign TRUE or FALSE values to the letters to produce a TRUE output. 

// A Boolean formula will always have at most 5 letters, i.e. a, b, c, d and e. A tilde will never appear outside of a parenthesis, i.e. ~(a&b).

// Input = "(a&b&c)|~a"   Output = yes
// Input = "a&(b|c)&~b&~c"    Output = no

// function SimpleSAT(str) { 
//   // convert the formula into something we can eval
//   var formula = str.replace(/&/g, '&&').replace(/\|/g, '||').replace(/~/g, '!');
//   // make letters be a string containing each of the letters only once
//   var letters = str.match(/[a-z]/g);
//   var uniq = {};
//   for (var ii=0; ii < letters.length; ii += 1) {
//     uniq[letters[ii]] = false;
//   }
//   letters = Object.keys(uniq);
//   // cycle through all the possible combinations of letter values
//   for (var pp = 0; pp < Math.pow(2, letters.length); pp += 1) {
//     // generate some javascript that assigns the combination of values
//     // to variables with the letter names
//     var setup = '';
//     for (ii = 0; ii < letters.length; ii += 1) {
//     setup += letters[ii] + '=' + ((pp & Math.pow(2, ii)) == 0) + ';';
//     }
//     // evaluate the formula with the setup to determine if it returns true
//     if (eval(setup + formula)) {
//       // found a combination that yeilded true
//       return 'yes';
//     };
//   }
//   // no combination yeilded true so return no'
//   return 'no';
// }

// 40.
//Using the JavaScript language, have the function ApproachingFibonacci(arr) take the arr parameter being passed which will be an array of integers and determine the smallest positive integer (including zero) that can be added to the array to make the sum of all of the numbers in the array add up to the next closest Fibonacci number. For example: if arr is [15, 1, 3], then your program should output 2 because if you add up 15 + 1 + 3 + 2 you get 21 which is the closest Fibonacci number. 
// Input = 5,2,1    Output = 0
// Input = 1,20,2,5   Output = 6


// 39.
// Using the JavaScript language, have the function MatchingCouples(arr) take the arr parameter being passed which will be an array of integers in the following format: [B, G, N] where B represents the number of boys, G represents the number of girls, and N represents how many people you want to pair together. Your program should return the number of different ways you can match boys with girls given the different arguments. For example: 
// if arr is [5, 3, 2], N=2 here so you want to pair together 2 people, so you'll need 1 boy and 1 girl. You have 5 ways to choose a boy and 3 ways to choose a girl, so your program should return 15. Another example: if arr is [10, 5, 4], here N=4 so you need 2 boys and 2 girls. We can choose 2 boys from a possible 10, and we can choose 2 girls from a possible 5. Then we have 2 different ways to pair the chosen boys and girls. Our program should therefore return 900 

// N will always be an even number and it will never be greater than the maximum of (B, G). B and G will always be greater than zero. 

// Input = 5,5,4    Output = 200
// Input = 2,2,2    Output = 4

// var factorial = (i) => {
//     if (i == 1)
//         return 1;
//     return i * factorial(i - 1);
// }
// function MatchingCouples(arr) {

//     var boys = arr[2]/2;
    
//     return arr.slice(0, 2).map(e=> factorial(e) / (factorial(boys)*(factorial(e - boys)))).reduce((a, b) => a * b, 1)*factorial(boys)
  
// }

// function MatchingCouples(arr) { 
//   var BOYS=0, GIRLS=1, COUPLES=2;
//   var boyCombinations=nCr(arr[BOYS], (arr[COUPLES]/2));
//   var girlCombinations=nCr(arr[GIRLS], (arr[COUPLES]/2));
//   var coupleCombinations=nPr(arr[COUPLES]/2,arr[COUPLES]/2);
  
//   return boyCombinations*girlCombinations*coupleCombinations;
// }
   
// function nCr(n,r){ return (1/factorial(r)) * nPr(n, r) }

// function nPr(n,r){ return factorial(n) / factorial((n-r)) }

// function factorial(n){
//     var list=[1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000, 355687428096000, 6402373705728000, 121645100408832000, 2432902008176640000, 51090942171709440000, 1124000727777607680000, 25852016738884976640000, 620448401733239439360000, 15511210043330985984000000, 403291461126605635584000000, 10888869450418352160768000000, 304888344611713860501504000000, 8841761993739701954543616000000, 265252859812191058636308480000000, 8222838654177922817725562880000000, 263130836933693530167218012160000000, 8683317618811886495518194401280000000, 295232799039604140847618609643520000000, 10333147966386144929666651337523200000000, 371993326789901217467999448150835200000000, 13763753091226345046315979581580902400000000, 523022617466601111760007224100074291200000000, 20397882081197443358640281739902897356800000000, 815915283247897734345611269596115894272000000000, 33452526613163807108170062053440751665152000000000, 1405006117752879898543142606244511569936384000000000, 60415263063373835637355132068513997507264512000000000, 2658271574788448768043625811014615890319638528000000000, 119622220865480194561963161495657715064383733760000000000, 5502622159812088949850305428800254892961651752960000000000, 258623241511168180642964355153611979969197632389120000000000, 12413915592536072670862289047373375038521486354677760000000000, 608281864034267560872252163321295376887552831379210240000000000, 30414093201713378043612608166064768844377641568960512000000000000, 1551118753287382280224243016469303211063259720016986112000000000000, 80658175170943878571660636856403766975289505440883277824000000000000, 4274883284060025564298013753389399649690343788366813724672000000000000, 230843697339241380472092742683027581083278564571807941132288000000000000, 12696403353658275925965100847566516959580321051449436762275840000000000000, 710998587804863451854045647463724949736497978881168458687447040000000000000, 40526919504877216755680601905432322134980384796226602145184481280000000000000, 2350561331282878571829474910515074683828862318181142924420699914240000000000000, 138683118545689835737939019720389406345902876772687432540821294940160000000000000, 8320987112741390144276341183223364380754172606361245952449277696409600000000000000, 507580213877224798800856812176625227226004528988036003099405939480985600000000000000, 31469973260387937525653122354950764088012280797258232192163168247821107200000000000000, 1982608315404440064116146708361898137544773690227268628106279599612729753600000000000000, 126886932185884164103433389335161480802865516174545192198801894375214704230400000000000000, 8247650592082470666723170306785496252186258551345437492922123134388955774976000000000000000, 544344939077443064003729240247842752644293064388798874532860126869671081148416000000000000000, 36471110918188685288249859096605464427167635314049524593701628500267962436943872000000000000000, 2480035542436830599600990418569171581047399201355367672371710738018221445712183296000000000000000, 171122452428141311372468338881272839092270544893520369393648040923257279754140647424000000000000000, 11978571669969891796072783721689098736458938142546425857555362864628009582789845319680000000000000000, 850478588567862317521167644239926010288584608120796235886430763388588680378079017697280000000000000000, 61234458376886086861524070385274672740778091784697328983823014963978384987221689274204160000000000000000, 4470115461512684340891257138125051110076800700282905015819080092370422104067183317016903680000000000000000, 330788544151938641225953028221253782145683251820934971170611926835411235700971565459250872320000000000000000, 24809140811395398091946477116594033660926243886570122837795894512655842677572867409443815424000000000000000000, 1885494701666050254987932260861146558230394535379329335672487982961844043495537923117729972224000000000000000000, 145183092028285869634070784086308284983740379224208358846781574688061991349156420080065207861248000000000000000000, 11324281178206297831457521158732046228731749579488251990048962825668835325234200766245086213177344000000000000000000, 894618213078297528685144171539831652069808216779571907213868063227837990693501860533361810841010176000000000000000000, 71569457046263802294811533723186532165584657342365752577109445058227039255480148842668944867280814080000000000000000000, 5797126020747367985879734231578109105412357244731625958745865049716390179693892056256184534249745940480000000000000000000, 475364333701284174842138206989404946643813294067993328617160934076743994734899148613007131808479167119360000000000000000000, 39455239697206586511897471180120610571436503407643446275224357528369751562996629334879591940103770870906880000000000000000000, 3314240134565353266999387579130131288000666286242049487118846032383059131291716864129885722968716753156177920000000000000000000, 281710411438055027694947944226061159480056634330574206405101912752560026159795933451040286452340924018275123200000000000000000000, 24227095383672732381765523203441259715284870552429381750838764496720162249742450276789464634901319465571660595200000000000000000000, 2107757298379527717213600518699389595229783738061356212322972511214654115727593174080683423236414793504734471782400000000000000000000, 185482642257398439114796845645546284380220968949399346684421580986889562184028199319100141244804501828416633516851200000000000000000000, 16507955160908461081216919262453619309839666236496541854913520707833171034378509739399912570787600662729080382999756800000000000000000000, 1485715964481761497309522733620825737885569961284688766942216863704985393094065876545992131370884059645617234469978112000000000000000000000, 135200152767840296255166568759495142147586866476906677791741734597153670771559994765685283954750449427751168336768008192000000000000000000000, 12438414054641307255475324325873553077577991715875414356840239582938137710983519518443046123837041347353107486982656753664000000000000000000000, 1156772507081641574759205162306240436214753229576413535186142281213246807121467315215203289516844845303838996289387078090752000000000000000000000, 108736615665674308027365285256786601004186803580182872307497374434045199869417927630229109214583415458560865651202385340530688000000000000000000000, 10329978488239059262599702099394727095397746340117372869212250571234293987594703124871765375385424468563282236864226607350415360000000000000000000000, 991677934870949689209571401541893801158183648651267795444376054838492222809091499987689476037000748982075094738965754305639874560000000000000000000000, 96192759682482119853328425949563698712343813919172976158104477319333745612481875498805879175589072651261284189679678167647067832320000000000000000000000, 9426890448883247745626185743057242473809693764078951663494238777294707070023223798882976159207729119823605850588608460429412647567360000000000000000000000, 933262154439441526816992388562667004907159682643816214685929638952175999932299156089414639761565182862536979208272237582511852109168640000000000000000000000, 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000]
//     return list[n];
// }

// 38.
// Using the JavaScript language, have the function ChessboardTraveling(str) read str which will be a string consisting of the location of a space on a standard 8x8 chess board with no pieces on the board along with another space on the chess board. The structure of str will be the following: "(x y)(a b)" where (x y) represents the position you are currently on with x and y ranging from 1 to 8 and (a b) represents some other space on the chess board with a and b also ranging from 1 to 8 where a > x and b > y. Your program should determine how many ways there are of traveling from (x y) on the board to (a b) moving only up and to the right. For example: if str is (1 1)(2 2) then your program should output 2 because there are only two possible ways to travel from space (1 1) on a chessboard to space (2 2) while making only moves up and to the right. 
// Input = "(1 1)(3 3)"   Output = 6
// Input = "(2 2)(4 3)"   Output = 3

// function perms(start, target) {
//   var p = [start];
//   var mt = 0;

//   while (p.length > 0) {
//     var c = p.shift();
//     if (c[0] == target[0] && c[1] == target[1]) {
//       mt += 1;
//     } else {
//       if (c[0] < target[0]) {
//         p.push([c[0] + 1, c[1]]);
//       }
//       if (c[1] < target[1]) {
//         p.push([c[0], c[1] + 1]);
//       }
//     }
//   }

//   return(mt);
// }

// function ChessboardTraveling(str) {
//     var d = str.match(/\d/g);
//   return perms([d[0]*1, d[1]*1], [d[2]*1, d[3]*1]);
// }

// function ChessboardTraveling(str) { 
//   var oldX=Number(str[1]),oldY=Number(str[3]),xEnd=Number(str[6]),yEnd=Number(str[8]);
//   var testPath = [],paths = [],x=oldX,y=oldY,count=0,vert=false,horz=false;
//   function findPaths(){
//     count++;
//     if(Math.random()>0.5){
//       x++;
//     }
//     else{
//       y++;
//     }
//     if(x > xEnd){
//       x--;
//       y++
//     }
//     else if(y > yEnd){
//       x++;
//       y--;
//     }
//     if(count % 15 === 0){
//       testPath = [];
//       x = oldX;
//       y = oldY;
//       return findPaths();
//     }
//     testPath.push(x,y);
//     if(x===xEnd&&y===yEnd){
//       if(paths.indexOf(testPath.join('')) == -1){
//         paths.push(testPath.join('')); 
//         testPath = [];
//         x = oldX;
//         y = oldY;
//       }
//       else{
//         testPath = [];
//         x = oldX;
//         y = oldY;
//       }
//     }
//     if(count > 2050)return paths.length;
//     return findPaths();
//   }
//   for(var i=0;i<500;i++){
//     findPaths();
//     count = 0;
//   }
//   var multiply = findPaths();
//   return multiply;
// }

// 37.
// Using the JavaScript language, have the function MaxHeapChecker(arr) take arr which represents a heap data structure and determine whether or not it is a max heap. A max heap has the property that all nodes in the heap are either greater than or equal to each of its children. For example: if arr is [100,19,36,17] then this is a max heap and your program should return the string max. If the input is not a max heap then your program should return a list of nodes in string format, in the order that they appear in the tree, that currently do not satisfy the max heap property because the child nodes are larger than their parent. For example: if arr is [10,19,52,13,16] then your program should return 19,52. 

// Another example: if arr is [10,19,52,104,14] then your program should return 19,52,104

// Input = 73,74,75,7,2,107   Output = 74,75,107
// Input = 1,5,10,2,3,10,1    Output = 5,10

// function MaxHeapChecker(arr) {
//   var r = [];
//   for(var i = 0; i < arr.length; i++) {
//     var parent = Math.floor((i-1)/2);
//     if (parent >= 0 && arr[parent] < arr[i]) {
//       r.push(arr[i]);
//     }
//   }
//   if (r.length == 0) {
//     return 'max';
//   } else {
//     return r.join(',');
//   }
// }

// 36.
// Using the JavaScript language, have the function ReversePolishNotation(str) read str which will be an arithmetic expression composed of only integers and the operators: +,-,* and / and the input expression will be in postfix notation (Reverse Polish notation), an example: (1 + 2) * 3 would be 
// 1 2 + 3 * in postfix notation. Your program should determine the answer for the given postfix expression. For example: if str is 2 12 + 7 / then your program should output 2.

// Input = "1 1 + 1 + 1 +"    Output = 4
// Input = "4 5 + 2 1 + *"    Output = 27

// function ReversePolishNotation(str) { 
//   var tokens = str.match(/\d+|[\*\+\-\/]/g);
//   var theStack = [];

  
//   function operation(a, b, op) {
//     if(op === '+')
//       return a + b;
//     else if(op === '-')
//       return a - b;
//     else if(op === '*')
//       return a * b;
//     else if(op === '/')
//       return a / b;
//     else
//       return Number.NaN;
//   };
  
//   while(tokens.length > 0) {
//     var thisToken = tokens.shift();
//     var intVal = parseInt(thisToken);
//     if(!intVal) {
//       var b = theStack.pop();
//       var a = theStack.pop();
//       var op = thisToken;
//       theStack.push(operation(a, b, op));
//     } else {
//       theStack.push(intVal);
//     }
//   }
  
//   return theStack[0];
// }

// function ReversePolishNotation(str) { 
//   var numbers = [];
//   var terms = str.split(' ');
  
//   for(var key in terms){
//     var value = terms[key]
//     if(isNaN(value)){
//       var a=numbers.pop();
//       var b=numbers.pop();
//       numbers.push(eval(b+value+a))
//     }else{
//       numbers.push(value);
//     }
//   }
//   return numbers[0]
// }

// 35.
// Using the JavaScript language, have the function PascalsTriangle(arr) take arr which will be a partial row from Pascal's triangle. Pascal's triangle starts with a [1] at the first row of the triangle. Then the second row is [1,1] and the third row is [1,2,1]. The next row begins with 1 and ends with 1, and the inside of the row is determined by adding the k-1 and kth elements from the previous row. The next row in the triangle would then be [1,3,3,1], and so on. The input, arr will be some almost completed row from the triangle, for example [1,4,6,4] and your program should return the next element in that row. In this example your program should return 1. Another example: if arr is [1,5,10] your program should return 10. If the whole row is entered as input and there is no next number, your program should return -1. 

// The input array will contain at least 3 elements so [1] and [1,1] will not occur as inputs.

// Input = 1,3    Output = 3
// Input = 1,5,10,10    Output = 5

// function PascalsTriangle(arr) { 
//   var n = arr[1];
//   var k = arr.length - 1;
//   if (arr[k] == 1) return -1;
//   return arr[k]*(n-k)/(k+1)
// }

// function PascalsTriangle(arr) { 
//   function make_new_row(row){
//     var result = [];
//     var prev = 0;
//     for(var i=0;i<row.length;i++){
//       result.push(prev+row[i])
//       prev = row[i]
//     }
//     result.push(prev)
//     return result
//   }
  
//   function make_triangle(rows){
//     var result = [];
//     var current = [1];
//     for(var i=0;i<rows;i++){
//       result.push(current);
//       current = make_new_row(current);
//     }
//     return result;
//   }
//   function find_next_num(){
//     var triangle = make_triangle(20);
//     var found_row = true;
//     for(var i=0;i<triangle.length;i++){
//       for(var j=0;j<arr.length;j++){
//         if(triangle[i][j] != arr[j]){
//           found_row = false 
//         }
//       }
//       if(found_row === true){
//         if(triangle[i].length === arr.length){
//           return -1 
//         }
//         return triangle[i][j];
//       }
//       found_row = true;
//     }
//     return -1
//   }
//   return find_next_num();
  
// }

// 34.
// Using the JavaScript language, have the function NimWinner(arr) take the array of integers stored in arr which will represent the amount of coins in each pile. For example: [2, 4, 1, 3] means there are 4 piles of coins and there are 2 coins in the first pile, 4 in the second pile, etc. Nim is played by each player removing any number of coins from only one pile, and the winner is the player who picks up the last coin. For example: if arr is [1, 2, 3] then for example player 1 can remove 2 coins from the last pile which results in [1, 2, 1]. Then player 2 can remove 1 coin from the first pile which results in [0, 2, 1], etc. The player that has the last possible move taking the last coin(s) from a pile wins the game. Your program should output either 1 or 2 which represents which player has a guaranteed win with perfect play for the Nim game.
// Input = 1,2,3      Output = 2
// Input = 1,1,1,4,5,4      Output = 1

// function NimWinner(arr) { 
//   var binaryArr,tempArr,binary,strArr=arr.join(','),totalSum=0;
//   for(var i=0;i<arr.length;i++){
//     totalSum += arr[i]; 
//   }
//   function findBinArr(myArr){
//     binaryArr = [];
//     for(var i=0;i<myArr.length;i++){
//       tempArr = [];
//       binary = myArr[i].toString(2);
//       tempArr.push(binary);
//       for(var j=0;j<3-binary.length;j++){
//         tempArr.unshift(0);
//       }
//       binaryArr.push(tempArr);
//     }
//     var binArr = [];
//     for(var i=0;i<myArr.length;i++){
//       binArr.push(binaryArr[i].join(''));
//       binArr[i] = binArr[i].split('');
//     }
    
//     return binArr;
//   }
//   binArr = findBinArr(arr);
//   var firstTurn = true,column=0,current=arr[0],count=0;
//   function findNimSum(binArr){
//     count++;
//     var nimSum1 = 0,nimSum2=0,nimSum3=0;
//     for(var i=0;i<binArr.length;i++){
//       for(var j=0;j<3;j++){
//         if(binArr[i][j] == 1 && j==0){ 
//           nimSum1++;
//         }
//         if(binArr[i][j] == 1 && j==1){ 
//           nimSum2++;
//         }
//         if(binArr[i][j] == 1 && j==2){ 
//           nimSum3++;
//         }
//       }
//     }
//     if(nimSum1 % 2 == 0 && nimSum2 % 2 == 0 && nimSum3 % 2 == 0 && firstTurn){
//       return 2; 
//     }
//     else if(nimSum1 % 2 == 0 && nimSum2 % 2 == 0 && nimSum3 % 2 == 0){
//       return 1; 
//     }
//     firstTurn = false;
//     if(current == 0){
//       arr = strArr.split(',');
//       column++;
//     }
//     for(var i=0;i<arr.length;i++){
//       if(i==column){
//         arr[i]--;
//         current = arr[i];
//       }
//     }
//     if(count === totalSum+1){
//       return 2; 
//     }
//     binArr = findBinArr(arr);
//     return findNimSum(binArr);
//   }
//   return findNimSum(binArr);
// }

// 33.
// Using the JavaScript language, have the function LCS(strArr) take the strArr parameter being passed which will be an array of two strings containing only the characters {a,b,c} and have your program return the length of the longest common subsequence common to both strings. A common subsequence for two strings does not require each character to occupy consecutive positions within the original strings. For example: if strArr is ["abcabb","bacb"] then your program should return 3 because one longest common subsequence for these two strings is "bab" and there are also other 3-length subsequences such as "acb" and "bcb" but 3 is the longest common subsequence for these two strings. 
// Input = "abc","cb"   Output = 1
// Input = "bcacb","aacabb"   Output = 3

// function LCS(strArr) {
//     var s1 = strArr[0], s2 = strArr[1];
//     var possChars = ['a', 'b', 'c'];
//     function longest(len, start1, start2) {
//         var p = [len];
//         for (var i = 0; i < possChars.length; i += 1) {
//             var n1 = s1.indexOf(possChars[i], start1),
//           n2 = s2.indexOf(possChars[i], start2);
//             if (n1 > -1 && n2 > -1) {
//                 p.push(longest(len + 1, n1 + 1, n2 + 1));
//             }
//         }
//         return Math.max.apply(null, p);
//     }
//     return longest(0);
// }

// function LCS(strArr) { 
//   var row1 = [],left=strArr[0].split(''),right=strArr[1].split('');
//   for(var i=0;i<right.length+1;i++){
//     row1.push(0);
//   }
//   right.unshift(0);
//   function createNextRow(){
//     var row2 = [],sum=0,oldSum;
//     for(var i=0;i<left.length;i++){
//       row2 = [];
//       row2.push(0); 
//       oldSum = 0;
//       for(var j=1;j<right.length;j++){
//         if(left[i]==right[j]){
//           sum = 1 + row1[j-1]; 
//         }
//         else{
//           sum = row1[j-1] 
//         }
        
//         if(sum < oldSum){
//           sum  = oldSum;
//         }
//         if(sum < row1[j]){
//           sum = row1[j]; 
//         }
//         row2.push(sum);
//         oldSum = sum;
//       }
//       row1 = row2;
//     }
//     return row1.pop();
//   }
//   return createNextRow();    
// }

// 32.
// Using the JavaScript language, have the function ParallelSums(arr) take the array of integers stored in arr which will always contain an even amount of integers, and determine how they can be split into two even sets of integers each so that both sets add up to the same number. If this is impossible return -1. If it's possible to split the array into two sets, then return a string representation of the first set followed by the second set with each integer separated by a comma and both sets sorted in ascending order. The set that goes first is the set with the smallest first integer. 

// For example: if arr is [16, 22, 35, 8, 20, 1, 21, 11], then your program should output 1,11,20,35,8,16,21,22 

// Input = 1,2,3,4    Output = 1,4,2,3
// Input = 1,2,1,5    Output = -1

// function sortNumeric(a,b) {
//   return a-b;
// }
// function PNKIterator(n, k) {
//   var self = this, a = [];
//   this.hasNext = true;
//   for (var i = 0; i < n; i += 1) {
//     a.push(i);
//   }
//   this.next = function() {
//     if (!self.hasNext) return false;
//     var result = a.slice(0/*, k*/);
//     computeNext();
//     return result;
//   }
//   var computeNext = function() {
//     var i = k - 1, j = k;
//     while (j < n && a[i] >= a[j]) {
//       j += 1;
//     }
//     if (j < n) {
//       swap(i, j);
//     } else {
//       reverseRightOf(i);
//       i -= 1;
//       while (i >= 0 && a[i] >= a[i + 1]) {
//         i -= 1;
//       }
//       if (i < 0) {
//         self.hasNext = false;
//         return;
//       }
//       j -= 1;
//       while (j > i && a[i] >= a[j]) {
//         j -= 1;
//       }
//       swap(i, j);
//       reverseRightOf(i);
//     }
//   }
//   var reverseRightOf = function (start) {
//     var i = start + 1;
//     var j = n - 1;
//     while (i < j) {
//       swap(i, j);
//       i += 1;
//       j -= 1;
//     }
//   }
//   var swap = function (x, y) {
//     var t = a[x];
//     a[x] = a[y];
//     a[y] = t;
//   }
// }
// function ParallelSums(arr) {
//   var p = new PNKIterator(arr.length, arr.length / 2);
//   while (p.hasNext) {
//     var idx = p.next(), 
//         a = [], b = [];
//     for (var i = 0; i < arr.length; i += 1) {
//       if (i < arr.length / 2) {
//         a.push(arr[idx[i]]);
//       } else {
//         b.push(arr[idx[i]]);
//       }
//     }
//     if (eval(a.join('+')) === eval(b.join('+'))) {
//       var ans;
//       a.sort(sortNumeric);
//       b.sort(sortNumeric);
//       if (a[0] < b[0]) {
//         ans = a.concat(b);
//       } else {
//         ans = b.concat(a);
//       }
//       return ans.join(',');
//     }
//   }
//   return -1;
// }

// function ParallelSums(arr) { 
//   var randArr1,randArr2,rand,bigCount=0,count,sum1,sum2,myArr,winnerArr=[],randIndex,half;
//   var myStr =  arr.join(' ');
//   function recur(){
//     bigCount++;
//     arr = myStr.split(' ');
//     half = arr.length/2
//     randArr1 = [];
//     randArr2 = [];
//     while(arr.length > 0){
//       rand = Math.floor(Math.random()*arr.length);
//       randIndex = arr[rand];
//       if(randArr1.length < half){
//         randArr1.push(randIndex); 
//         arr.splice(rand, 1);       
//       }
//       else{
//         randArr2.push(randIndex);
//         arr.splice(rand, 1);
//       }
//     }
//     sum1 = 0
//     for(var i=0;i<randArr1.length;i++){
//       sum1 += Number(randArr1[i]);
//     }
//     sum2 = 0
//     for(var i=0;i<randArr2.length;i++){
//       sum2 += Number(randArr2[i]);
//     }
//     if(sum1 === sum2){
//       randArr1 = randArr1.sort(function(a,b){return a-b});
//       randArr2 = randArr2.sort(function(a,b){return a-b});
//       if(randArr1[0] < randArr2[0]){
//         return randArr1.join(',') + ',' + randArr2.join(',');
//       }
//       else{
//         return randArr2.join(',') + ',' + randArr1.join(','); 
//       }
//     }
//     if(bigCount > 3000){
//       return -1; 
//     }
//     return recur();
//   }
//   return recur();       
// }

// 31.
// Using the JavaScript language, have the function RomanNumeralReduction(str) read str which will be a string of roman numerals in decreasing order. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000. Your program should return the same number given by str using a smaller set of roman numerals. For example: if str is "LLLXXXVVVV" this is 200, so your program should return CC because this is the shortest way to write 200 using the roman numeral system given above. If a string is given in its shortest form, just return that same string. 
// Input = "XXXVVIIIIIIIIII"    Output = "L"
// Input = "DDLL"   Output = "MC"

// var rOrder = ['M', 'D', 'C', 'L', 'X', 'V', 'I'], 
//     rMap = {
//   'I': 1,
//   'V': 5,
//   'X': 10,
//   'L': 50,
//   'C': 100,
//   'D': 500,
//   'M': 1000
// };

// function RomanNumeralReduction(str) { 
//   var n = 0;
//   for (var i = 0; i < str.length; i++) {
//     n += rMap[str[i]];
//   }
//   var r = '';
//   while (n > 0) {
//     for (i = 0; i < rOrder.length; i++) {
//       if (n >= rMap[rOrder[i]]) {
//         n -= rMap[rOrder[i]];
//         r += rOrder[i];
//         break;
//       }
//     }
//   }
//   return r;
// }

// function RomanNumeralReduction(str) { 
//   var values={M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
//   var total=sumRomanNumbers(str, values);
//   return printRomanNumerals(total, values);
// }


// function sumRomanNumbers(str, values){
//   var letters=str.split('');
//   var sum=0;
  
//   letters.forEach(function(letter){
//     sum+=values[letter];
//   });
//   return sum;
// }

// function printRomanNumerals(number, values){
//   var numeralStr='';
  
//   for(numeral in values){
//     while(number >= values[numeral]){
//       number -= values[numeral];
//       numeralStr += numeral;
//     }
//   }
//   return numeralStr;
// }

// function RomanNumeralReduction(str) { 
//   var num = 0;
//   function findNum(){
//     for(var i=0;i<str.length;i++){
//       if(str[i] === 'I') num+=1;
//       if(str[i] === 'V') num+=5;
//       if(str[i] === 'X') num+=10;
//       if(str[i] === 'L') num+=50;
//       if(str[i] === 'C') num+=100;
//       if(str[i] === 'D') num+=500;
//       if(str[i] === 'M') num+=1000;
//     }
//   }
//   findNum();
//   var myRoman = [];
//   function minRomanNumerals(){
//     if(num >= 1000){
//       myRoman.push('M'); 
//       num -= 1000;
//     }
//     else if(num >= 500){
//       myRoman.push('D');
//       num -= 500;
//     }
//     else if(num >= 100){
//       myRoman.push('C');
//       num -= 100;
//     }
//     else if(num >= 50){
//       myRoman.push('L');
//       num -= 50;
//     }
//     else if(num >= 10){
//       myRoman.push('X');
//       num -= 10;
//     }
//     else if(num >= 5){
//       myRoman.push('V');
//       num -= 5;
//     }
//     else if(num >= 1){
//       myRoman.push('I');
//       num -= 1;
//     }
//     if(num === 0){
//       return myRoman.join(''); 
//     }
//     return minRomanNumerals();
//   }
//   return minRomanNumerals();
// }

// 30.
// Using the JavaScript language, have the function MatrixBorder(strArr) read the strArr parameter being passed which will represent an NxN matrix filled with 1's and 0's. Your program should determine the number of swaps between two rows or two columns that must be made to change the matrix such that the border of the matrix contains all 1's and the inside contains 0's. The format of strArr will be: ["(n,n,n...)","(...)",...] where n represents either a 1 or 0. The smallest matrix will be a 3x3 and the largest will be a 6x6 matrix. 

// For example: if strArr is: ["(0,1,1)","(1,1,1)","(1,1,1)"] then you can swap the first two columns and then swap the first two rows to create a matrix with the 1's on the border and the 0 on the inside, therefore your program should output 2. 
// Input = "(0,1,1)","(1,1,1)","(1,1,1)"    Output = 2
// Input = "(0,1,0,1)","(1,1,1,1)","(0,1,0,1)","(1,1,1,1)"    Output = 2

// function MatrixBorder(strArr) { 
//   var m = [],
//       n = strArr.length;
  
//   for (var i = 0; i < n; i += 1) {
//     m.push(strArr[i].match(/\d/g));
//   }
  
//   var cols = [], rows = [];
  
//   for (i = 0; i < n; i += 1) {
//     var r = true, c = true;
//     for (var o = 0; o < n; o += 1) {
//       c = c && m[i][o] === '1';
//       r = r && m[o][i] === '1';
//     }
//     if (r) {
//       rows.push(i);
//     }
//     if (c) {
//       cols.push(i);
//     }
//   }
  
//   var count = 0;
//   count += rows.indexOf(0) < 0 ? 1 : 0;
//   count += rows.indexOf(n - 1) < 0 ? 1 : 0;
//   count += cols.indexOf(0) < 0 ? 1 : 0;
//   count += cols.indexOf(n - 1) < 0 ? 1 : 0;
//   return count;
// }

// function MatrixBorder(strArr) { 
//   var numString = strArr.join('').match(/1|0/g).join('');
//   var numsArr = numString.split('');
//   if(strArr.length === 3){
//     var goal = [1,1,1,
//                 1,0,1,
//                 1,1,1];
//   }
//   else if(strArr.length === 4){
//     var goal = [1,1,1,1,
//                 1,0,0,1,
//                 1,0,0,1,
//                 1,1,1,1];
//   }
//   else if(strArr.length === 5){
//     var goal = [1,1,1,1,1,
//                 1,0,0,0,1,
//                 1,0,0,0,1,
//                 1,0,0,0,1,
//                 1,1,1,1,1];
//   }
//   else if(strArr.length === 6){
//     var goal = [1,1,1,1,1,1,
//                 1,0,0,0,0,1,
//                 1,0,0,0,0,1,
//                 1,0,0,0,0,1,
//                 1,0,0,0,0,1,
//                 1,1,1,1,1,1];
//   }
//     var rows = [];
//     function findRows(){
//       for(var i=0;i<strArr.length;i++){
//         var row = strArr[i].match(/1|0/g);
//         rows.push(row);
//       }
//     }
//     findRows();
//     function rowChange(){
//       var nums = [];
//       var myRows = [];
//       for(var i=0;i<strArr.length;i++){
//         nums.push(i);
//         myRows.push([]);
//       }
//       var rand = Math.floor(Math.random() * nums.length);
//       var one = Number(nums.splice(rand, 1));
//       var rand2 = Math.floor(Math.random() * nums.length);
//       var two = Number(nums.splice(rand2,1));
//       myRows[two] = rows[one];
//       myRows[one] = rows[two];
//       for(var i=0;i<nums.length;i++){
//         myRows[nums[i]] = rows[nums[i]];
//       }
//       rows = myRows;
//     }
//     function columnChange(){
//       var nums = [];
//       var myColumns = [];
//       for(var i=0;i<strArr.length;i++){
//         nums.push(i);
//         myColumns.push([]);
//         for(var j=0;j<strArr.length;j++){
//           myColumns[i].push(9);
//         }
//       }
//       var rand = Math.floor(Math.random() * nums.length);
//       var one = Number(nums.splice(rand,1));
//       var rand2 = Math.floor(Math.random() * nums.length);
//       var two = Number(nums.splice(rand2,1));
//       //return nums;
//       for(var i=0;i<strArr.length;i++){
//         myColumns[i][one] = rows[i][two];
//         myColumns[i][two] = rows[i][one];
//       }
//       for(var i=0;i<strArr.length;i++){
//         for(var j=0;j<nums.length;j++){
//           myColumns[i][nums[j]] = rows[i][nums[j]];
//         }
//       }
//       rows = myColumns;
//     }
//     var count = 0;
//     var count2 = 0;
//     var winners = [];
//     var rand;
//     function recur(){
//       count++;
//       count2++;
//       rand = Math.random();
//       if(rand > 0.5){
//         columnChange();
//       }
//       else{
//         rowChange();
//       }
//       if(rows.join('').match(/1|0/g).join('') === goal.join('')){
//         winners.push(count);
//         count = 0;
//         rows = [];
//         findRows();
//       }
//       if(count === 10){
//         count = 0;
//         rows = [];
//         findRows();
//       }
//       if(count2 === 15000){
//         return winners.sort(function(a,b){
//           return a - b;
//         }).shift();
//       }
//       return recur();
//     }
//     return recur();
// }

// 29.
//Using the JavaScript language, have the function ArrayJumping(arr) take the array of numbers stored in arr and first determine the largest element in the array, and then determine whether or not you can reach that same element within the array by moving left or right continuously according to whatever integer is in the current spot. If you can reach the same spot within the array, then your program should output the least amount of jumps it took. For example: if the input is [2, 3, 5, 6, 1] you'll start at the spot where 6 is and if you jump 6 spaces to the right while looping around the array you end up at the last element where the 1 is. Then from here you jump 1 space to the left and you're back where you started, so your program should output 2. If it's impossible to end up back at the largest element in the array your program should output -1. The largest element in the array will never equal the number of elements in the array. The largest element will be unique.
// Input = 1,2,3,4,2    Output = 3
// Input = 1,7,1,1,1,1    Output = 2

// function ArrayJumping(arr) {
//   var startingStr = arr.join('');
//   var startingArr = startingStr.split('');
//   var sortedArr = arr.sort(function(a,b){
//     return b - a; 
//   });
//   var largest = sortedArr[0];
//   var current = largest;
//   var spot = Number(startingArr.indexOf(current + ''));
//   var startingSpot = spot;
//   var count = 0;
//   var count2 = 0;
//   var foundLargestCount = [];
//   function recur(arr){
//     count++;
//     count2++;  
//     if(Math.random() > 0.5){
//       spot = (Number(spot) + Number(current)) % arr.length;
//       current = arr[spot];
//     }
//     else{
//       for(var i=0;i<current;i++){
//         spot = spot-1;
//         if(spot < 0){
//         spot = arr.length-1; 
//         }
//       }
//       current = arr[spot];
//     }
//     if(startingSpot === spot){
//       foundLargestCount.push(count);
//       count = 0;
//       spot = startingSpot;
//       current = arr[spot]; 
//     }
//     else if(count === 10){
//       count = 0;
//       spot = startingSpot;
//       current = arr[spot];
//     }
//     if(count2 === 2500){
//       if(foundLargestCount.length !== 0){
//         return foundLargestCount.sort(function(a,b){
//           return a - b;
//         }).shift();
//       }
//       else{
//         return -1;
//       }
//     }
//     return recur(arr);
//   }
//   return recur(startingArr);
// }

// var N_MOVES = 0, INDEX = 1, VISITED = 2;

// function addMove(moves, nMoves, index, visited) {
//   if ((visited & Math.pow(2, index)) === 0) {
//     visited = visited | Math.pow(2, index);
//     moves.push([nMoves + 1, index, visited]);
//   }
// }

// function addPossible(arr, moves, nMoves, index, visited) {
//   var jump = arr[index];
//   // right
//   addMove(moves, nMoves, (index + jump) % arr.length, visited);
//   // left
//   addMove(moves, nMoves, (index + arr.length - (jump % arr.length)) % arr.length, visited);
// }

// function ArrayJumping(arr) { 
//   var largest = arr[0];
//   var index = 0;
//   for (var i = 1; i < arr.length; i += 1) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//       index = i;
//     }
//   }
//   var moves = [];
//   addPossible(arr, moves, 0, index, 0);
//   while (moves.length > 0 && moves[0][INDEX] != index) {
//     var move = moves.shift();
//     addPossible(arr, moves, move[N_MOVES], move[INDEX], move[VISITED]);
//   }
//   if (moves.length === 0) {
//     return -1;
//   }
//   return moves[0][N_MOVES];
// }



// 28.
// Using the JavaScript language, have the function ConnectFourWinner(strArr) read the strArr parameter being passed which will represent a 6x7 Connect Four board. The rules of the game are: two players alternate turns and place a colored disc down into the grid from the top and the disc falls down the column until it hits the bottom or until it hits a piece beneath it. The object of the game is to connect four of one's own discs of the same color next to each other vertically, horizontally, or diagonally before your opponent. The input strArr will represent a Connect Four board and it will be structured in the following format: ["R/Y","(R,Y,x,x,x,x,x)","(...)","(...)",...)] where R represents the player using red discs, Y represents the player using yellow discs and x represents an empty space on the board. The first element of strArr will be either R or Y and it represents whose turn it is. Your program should determine, based on whose turn it is, whether a space exists that can give that player a win. If a space does exist your program should return the space in the following format: (RxC) where R=row and C=column. If no space exists, return the string none. The board will always be in a legal setup. 

// For example, if strArr is: ["R","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,R,x,x,x)","(x,x,x,R,x,x,x)","(x,x,x,R,Y,Y,Y)"] then your program should return (3x4). 

// Another example, if strArr is: ["Y","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,x,x,x,x,x)","(x,x,Y,Y,x,x,x)","(x,R,R,Y,Y,x,R)","(x,Y,R,R,R,Y,R)"] then your program should return (3x3). 

// function countDir(player, board, move, dir) {
//   var count = -1;
//   var r = move[0], c = move[1];
//   do {
//     count += 1;
//     r += dir[0];
//     c += dir[1];
//   } while (r >= 0 && r < 6 && c >= 0 && c < 7 && board[r][c] === player);
//   return count;
// }
// function winDown(player, board, move) {
//   return countDir(player, board, move, [1, 0]) >= 3;
// }
// function winHoriz(player, board, move) {
//   return countDir(player, board, move, [0, -1])
//     + countDir(player, board, move, [0, 1]) >= 3;
// }
// function winDiagTLBR(player, board, move) {
//   return countDir(player, board, move, [-1, -1])
//     + countDir(player, board, move, [1, 1]) >= 3;
// }
// function winDiagTRBL(player, board, move) {
//   return countDir(player, board, move, [-1, 1])
//     + countDir(player, board, move, [1, -1]) >= 3;
// }
// function winner(player, board, move) {
//   return winDown(player, board, move) || winHoriz(player, board, move)
//     || winDiagTLBR(player, board, move) || winDiagTRBL(player, board, move);
// }
// function ConnectFourWinner(strArr) { 
//   var board = [];
//   var player = strArr[0];
//   for (var r = 1; r < strArr.length; r++) {
//     board.push(strArr[r].match(/R|Y|x/g));
//   }
//   var possMoves = [];
//   for (var c = 0; c < 7; c++) {
//     var r = 5;
//     while (r >= 0 && board[r][c] !== 'x') {
//       r -= 1;
//     }
//     if (r > -1) {
//       possMoves.push([r, c]);
//     }
//   }
//   for (var i = 0; i < possMoves.length; i++) {
//     if (winner(player, board, possMoves[i])) {
//       return '(' + (possMoves[i][0] + 1) + 'x' + (possMoves[i][1] + 1) + ')';
//     }
//   }
//   return 'none';
// }

// function ConnectFourWinner(strArr) { 
//   var player=strArr.shift();
//   var board =parseBoard(strArr);
  
//   var matches=[];
//   matches=matches.concat(horizontals(board,player+player+player));
//   matches=matches.concat(verticals(board,player+player+player));
//   matches=matches.concat(diagonals(board,player+player+player,'left'));
//   matches=matches.concat(diagonals(board,player+player+player,'right'));
  
//   for(i in matches){
//     if(validPlay(matches[i],board)){
//       return '('+(parseInt(matches[i].r)+1)+'x'+(parseInt(matches[i].c)+1)+')';
//     }
//   }
//   return 'none';
//   // code goes here  
         
// }

// function parseBoard(input){
//   var board=[];
//   for(i in input){
//     var row=input[i].replace(/[\(\)]/g,'');
//     board[i]=row.split(',');
//   }
//   return board;
// }

// function horizontals(board,turn){
//   var matches=[];
//   for(i in board){
//     var row=board[i].join('');
//     var match=row.match(turn);
//     if(match){
//       matches.push({r:i,c:match['index']-1});
//       matches.push({r:i,c:match['index']+3});                    
//     }
//   }
//   return matches;
// }

// function verticals(board,turn){
//   var matches=[];
//   for(ci in board[0]){
//     var column='';
//     for(row in board){
//       column+=board[row][ci];
//     }
//     var match=column.match(turn);
//     if(match){
//       matches.push({c:ci,r:match['index']-1});
//       matches.push({c:ci,r:match['index']+3});                    
//     }
//   }
//   return matches;
// }

// function diagonals(board,turn,dir){
//   var start=0;
//   var top=3;
//   var matches=[];
//   for(var i=0;i<board.length;i++){
//     var diagonal='';
//     for(var j=0;j<=top;j++){
//       if((j+start)<=board.length){
//         var k=(dir=='left')?start+j:board.length-(start+j);
//         diagonal+=board[top-j][k];
//       }
//     }
//     if(top<board[0].length-2){
//       top++;
//     }else{
//       start++;
//     }
//     var match=diagonal.match(turn);
//     if(match){
//       var ttop=top-match['index'];
//       if(dir=='left'){
//         var tstart=(start-1)+match['index'];
//         matches.push({r:ttop+1,c:tstart-1});
//         matches.push({r:ttop-3,c:tstart+3});                    
//       }else{
//         var tstart=(board.length-(start-1))+match['index'];
//         matches.push({r:ttop+1,c:tstart+1});
//         matches.push({r:ttop-3,c:tstart-3});                    
//       }
//     }
//   }
//   return matches;
// }
   
// function validPlay(coord,board){
//   var x=coord.c;
//   var y=coord.r;
//   if(!(y in board) || !(x in board[y])) return false; 
//   if(board[y][x]!='x') return false; //if not blank
//   if((y==board.length-1) || board[y+1][x]!='x'){
//     return true;
//   }  
// }

// 27.
// Using the JavaScript language, have the function SquareFigures(num) read num which will be an integer. Your program should return the smallest integer that when squared has a length equal to num. For example: if num is 6 then your program should output 317 because 317^2 = 100489 while 316^2 = 99856 which does not have a length of six. 
// Input = 2  Output = 4
// Input = 1  Output = 0

// function SquareFigures(num) { 
//   var myNum;
//   for(var i=0;i<110000;i++){
//     myNum = i * i;
//     if(myNum.toString().length === num){
//       return i; 
//     }
//   }
// }

// function SquareFigures(num) { 
//   var d = Math.pow(10, num - 1);
//   if (d === 1) return 0;
//   var i = Math.floor(Math.sqrt(d)) - 1;
//   while (i * i < d) {
//     i += 1;
//   }
//   return i;
// }

// 26.
// Using the JavaScript language, have the function QuickKnight(str) read str which will be a string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board and another space on the chess board. The structure of str will be the following: "(x y)(a b)" where (x y) represents the position of the knight with x and y ranging from 1 to 8 and (a b) represents some other space on the chess board with a and b also ranging from 1 to 8. Your program should determine the least amount of moves it would take the knight to go from its position to position (a b). For example if str is "(2 3)(7 5)" then your program should output 3 because that is the least amount of moves it would take for the knight to get from (2 3) to (7 5) on the chess board. 
// Input = "(1 1)(8 8)"   Output = 6
// Input = "(2 2)(3 3)"   Output = 2

// function QuickKnight(str) {
//   function Coordinate(string) {
//     var coords = string.match(/[1-8]/g);
//     this.x = parseInt(coords[0]);
//     this.y = parseInt(coords[1]);
//   };
  
//   function isPieceOnBoard(piece) {
//     if(piece.x < 1 || piece.x > 8 || piece.y < 1 || piece.y > 8) {
//       return 0;
//     } else {
//       return 1;
//     }
//   };
  
//   function findKnightMoves(knight) {
//     var knight_move_1 = {
//       x: knight.x - 1,
//       y: knight.y + 2,
//     };
//     var knight_move_2 = {
//       x: knight.x - 2,
//       y: knight.y + 1,
//     };
//     var knight_move_3 = {
//       x: knight.x + 1,
//       y: knight.y + 2,
//     };
//     var knight_move_4 = {
//       x: knight.x + 2,
//       y: knight.y + 1,
//     };
//     var knight_move_5 = {
//       x: knight.x + 2,
//       y: knight.y - 1,
//     };
//     var knight_move_6 = {
//       x: knight.x + 1,
//       y: knight.y - 2,
//     };
//     var knight_move_7 = {
//       x: knight.x - 1,
//       y: knight.y - 2,
//     };
//     var knight_move_8 = {
//       x: knight.x - 2,
//       y: knight.y - 1,
//     };
    
//     var results = [];
//     if(isPieceOnBoard(knight_move_1))
//       results.push(knight_move_1);
//     if(isPieceOnBoard(knight_move_2))
//       results.push(knight_move_2);
//     if(isPieceOnBoard(knight_move_3))
//       results.push(knight_move_3);
//     if(isPieceOnBoard(knight_move_4))
//       results.push(knight_move_4);
//     if(isPieceOnBoard(knight_move_5))
//       results.push(knight_move_5);
//     if(isPieceOnBoard(knight_move_6))
//       results.push(knight_move_6);
//     if(isPieceOnBoard(knight_move_7))
//       results.push(knight_move_7);
//     if(isPieceOnBoard(knight_move_8))
//       results.push(knight_move_8);
//     return results;
//   };
  
//   function findKnightPath(depth,initial_position,final_position) {
//     var maxDepth = 8;
//     if(initial_position.x === final_position.x && 
//        initial_position.y === final_position.y)
//       return depth;
//     if(depth > maxDepth)
//       return 10000;
//     var moves = findKnightMoves(initial_position);
//     var moveDepths = [];
//     for(var i = 0; i < moves.length; i++) {
//       moveDepths[i] = findKnightPath(depth + 1, moves[i], final_position);
//     }
//     return Math.min.apply(Math, moveDepths);
//   };
  
//   var matches = str.match(/\([1-8]\ [1-8]\)/g);
//   var initial_position = new Coordinate(matches[0]);
//   var final_position   = new Coordinate(matches[1]);
//   return findKnightPath(0,initial_position,final_position);
// }

// function QuickKnight(str) { 

//   var knight = [Number(str[1]), Number(str[3])];
//   var target = [Number(str[6]), Number(str[8])];
//   var positions = [knight];
//   var moves = 0;
//   var donePos = {};
//   var knighstr = JSON.stringify(knight);
//   var targetstr = JSON.stringify(target);
//   if (knighstr==targetstr)
//   return 0;
//   donePos[knighstr]=true;
  
//   var getPossiblePositions = function(pos){
//     var jumps = [
//             [-2,-1],
//             [-2,1],
//             [-1,-2],
//             [-1,2],
//             [2,-1],
//             [2,1],
//             [1,-2],
//             [1,2]
//         ] ;
//     var newpositions = [];
//     for(var j of jumps){        
//         var newpos = [pos[0]+j[0], pos[1]+j[1]];
//         if (newpos[0]<1 || newpos[0]>8 || newpos[1]<1|| newpos[1]>8)
//         continue;
//         var posstr = JSON.stringify(newpos);
//         if (donePos[posstr])
//         continue;
//         donePos[posstr] = true;
//         newpositions.push(newpos)
//     }
//     return newpositions;
//   }
  
//   var testAnotherMove = function(){
//       var oldPositions = positions;
//       positions = [];
//       for(var pos of oldPositions){
//         var newPossblePos = getPossiblePositions(pos);
//         for(var newpos of newPossblePos){
//             if (newpos[0]==target[0] && newpos[1]==target[1])
//                 return true;
//             positions.push(newpos);          
//         }
//       }
//       return false;
//   }
  
//   while(!testAnotherMove()){
//       moves++;
//   }
//   // code goes here  
//   return moves+1; 
         
// }

// 25.
// Using the JavaScript language, have the function LineOrdering(strArr) read the strArr parameter being passed which will represent the relations among people standing in a line. The structure of the input will be ["A>B","B>C","A<D",etc..]. The letters stand for different people and the greater than and less than signs stand for a person being in front of someone or behind someone. A>B means A is in front of B and B<C means that B is behind C in line. For example if strArr is: ["J>B","B<S","D>J"], these are the following ways you can arrange the people in line: DSJB, SDJB and DJSB. Your program will determine the number of ways people can be arranged in line. So for this example your program should return the number 3. It also may be the case that the relations produce an impossible line ordering, resulting in zero as the answer. 

// Only the symbols <, >, and the uppercase letters A...Z will be used. The maximum number of relations strArr will contain is ten. 

// Input = "A>B","A<C","C<Z"    Output = 1
// Input = "A>B","B<R","R<G"    Output = 3

// function LineOrdering(strArr) { 
//     var lineMap = {
//     twoManArrays: [],
//     people: [],
//     orderedLines: []
//   }
//     for(var i=0;i<strArr.length;i++){
//       if(/>/.test(strArr[i])){
//         lineMap.twoManArrays.push([strArr[i][0],strArr[i][2]]);
//       }
//       else if(/</.test(strArr[i])){
//         lineMap.twoManArrays.push([strArr[i][2],strArr[i][0]]);
//       }
//     }
//     lineMap.people = lineMap.twoManArrays.join('').match(/([A-Z])(?!.*\1)/g);
  
//   function applyTwoManOrder(){
//     for(var i=0;i<10000;i++){
//       var freshLine = lineMap.people.slice(0);
//       var randArr = [];
//       while(freshLine.length > 0){
//         var randNum = Math.floor(Math.random()*freshLine.length);
//         var randPerson = freshLine.splice(randNum,1)[0];
//         randArr.push(randPerson);
//       }
//       var tempArr = [];
//       var twoMan = lineMap.twoManArrays;
//       var goodSoFar = true
//       for(var j=0;j<randArr.length;j++){
//         tempArr.push(randArr[j]);
//         for(var k=0;k<twoMan.length;k++){
//           if(twoMan[k][0] === randArr[j] &&
//              tempArr.indexOf(twoMan[k][1]) != -1){
//              goodSoFar = false;
//           }       
//         }
//       }
//       if(goodSoFar && lineMap.orderedLines.indexOf(randArr.join(''))== -1){
//         lineMap.orderedLines.push(randArr.join(''));
//       }
//     }
//     return lineMap.orderedLines.length;
//   }
//   return applyTwoManOrder();  
        
// }

// function getAllPerms(s) {
//   var perms = [];
//   if (s.length === 1) {
//     perms.push(s);
//   } else {
//     for (var i = 0; i < s.length; i++) {
//       var sub = s.slice(0);
//       sub.splice(i, 1);
//       var sp = getAllPerms(sub);
//       for (var o = 0; o < sp.length; o++) {
//         sp[o].unshift(s[i]);
//         perms.push(sp[o]);
//       }
//     }
//   }
//   return perms;
// }

// function ruleMet(rule, line) {
//   return line.indexOf(rule[0]) < line.indexOf(rule[1]);
// }

// function LineOrdering(strArr) { 
//   var rules = [];
//   var people = '';
//   for (var i = 0; i < strArr.length; i++) {
//     var rule = strArr[i].split(/>|</);
//     if (strArr[i].indexOf('>') > -1) {
//       rules.push([rule[1], rule[0]]);
//     } else {
//       rules.push([rule[0], rule[1]]);
//     }
//     if (people.indexOf(rule[0]) === -1) {
//       people += rule[0];
//     }
//     if (people.indexOf(rule[1]) === -1) {
//       people += rule[1];
//     }
//   }
//   var perms = getAllPerms(people.split(''));
//   var count = 0;
//   for (i = 0; i < perms.length; i++) {
//     var allMet = true;
//     for (var r = 0; r < rules.length; r++) {
//       if (!ruleMet(rules[r], perms[i])) {
//         allMet = false;
//         break;
//       }
//     }
//     if (allMet) {
//       count += 1;
//     }
//   }
//   return count;
// }

// 24.
// Using the JavaScript language, have the function FarthestNodes(strArr) read strArr which will be an array of hyphenated letters representing paths between those two nodes. For example: ["a-b","b-c","b-d"] means that there is a path from node a to b (and b to a), b to c, and b to d. Your program should determine the longest path that exists in the graph and return the length of that path. So for the example above, your program should return 2 because of the paths a-b-c and d-b-c. The path a-b-c also means that there is a path c-b-a. No cycles will exist in the graph and every node will be connected to some other node in the graph. 
// Input = "b-e","b-c","c-d","a-b","e-f"      Output = 4
// Input = "b-a","c-e","b-c","d-c"      Output = 3

// function FarthestNodes(strArr) { 
//   var graph=strToNodes(strArr);
//   var maxDistances=traverseGraph(graph);
//   maxDistances.sort(function(a,b){return b-a});
//   // code goes here  
//   return maxDistances[0]; 
         
// }

// function node(key){
//   return {'children':[],'id':key};
// }
// function traverseGraph(graph){
//   var distances=[];
//   for(var node in graph){
//     distances.push(depthFirst(graph,graph[node],[]));
//   }
//   return distances;
// }
// function strToNodes(strArr){
//   var nodes=[];
//   for(var i=0;i<strArr.length;i++){
//     var keys=strArr[i].split('-');
//     for(var j=0;j<keys.length;j++){
//       if(!nodes[keys[j]]){
//         nodes[keys[j]]=new node(keys[j]);
//       }
//       nodes[keys[j]].children.push(keys[(j+1)%2]);
//     }
//   }
//   return nodes;
// }
// function depthFirst(graph,node,visited){
//   var toVisit=[];
//   for(var i=0;i<node.children.length;i++){
//     if(visited.indexOf(node.children[i])==-1){
//       toVisit.push(node.children[i]);
//     }
//   }
//   if(toVisit.length==0) return 0;
//   visited.push(node.id);
//   var max=0;
//   for(var child in toVisit){
//     var val=depthFirst(graph,graph[toVisit[child]],visited);
//     if(val>max) max=val;
//   }
//   return max+1;
// }

// function FarthestNodes(strArr) {
//     var cons = {};
//     var points = [];
//     for (c of strArr) {
//         var p = c.split('-');
//         if (!cons[p[0]]) {
//             cons[p[0]] = [];
//             points.push(p[0])
//         }
//         if (!cons[p[1]]) {
//             cons[p[1]] = [];
//             points.push(p[1])
//         }
//         cons[p[1]].push(p[0]);
//         cons[p[0]].push(p[1]);
//     }

//     var longuest = function (choices, last, beforelast) {
//         var maxPath = 0;
//         for (c of choices) {
//             if (c == beforelast)
//                 continue;
//             maxPath = Math.max(maxPath, longuest(cons[c], c, last) + 1)
//         }
//         return maxPath;
//     }
//     // code goes here  
//     return longuest(points, '', '')-1;
// }

// 23.
// Using the JavaScript language, have the function KnightJumps(str) read str which will be a string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board. The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging from 1 to 8. Your program should determine the number of spaces the knight can move to from a given location. For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces from position x=4 and y=5.
// Input = "(1 1)"    Output = 2
// Input = "(2 8)"    Output = 3

// function onBoard(x, y) {
//   return (x > 0 && x < 9 && y > 0 && y < 9) ? 1 : 0;
// }
// function KnightJumps(str) { 
//   var xy = str.match(/\d/g),
//       x = xy[0]*1,
//       y = xy[1]*1,
//       c = 0;
//   c += onBoard(x-2, y-1);
//   c += onBoard(x-2, y+1);
//   c += onBoard(x-1, y-2);
//   c += onBoard(x+1, y-2)
//   c += onBoard(x+2, y-1);
//   c += onBoard(x+2, y+1);
//   c += onBoard(x-1, y+2);
//   c += onBoard(x+1, y+2);
//   return c;
// }

// function KnightJumps(str) { 
//   var x=Number(str.substring(1,2));
//   var y=Number(str.substring(3,4));
//   var valid=0;
  
//   valid+=(x+2<=8&&y+1<=8)?1:0;//right
//   valid+=(x+2<=8&&y-1>0)?1:0;
//   valid+=(x-2>0&&y+1<=8)?1:0;//left
//   valid+=(x-2>0&&y-1>0)?1:0;
//   valid+=(y+2<=8&&x+1<=8)?1:0;//up
//   valid+=(y+2<=8&&x-1>0)?1:0;
//   valid+=(y-2>0&&x+1<=8)?1:0;//down
//   valid+=(y-2>0&&x-1>0)?1:0;
  
//   // code goes here  
//   return valid;        
// }

// 22.
// Using the JavaScript language, have the function VertexCovering(strArr) take strArr which will be an array of length three. The first part of the array will be a list of vertices in a graph in the form (A,B,C,...), the second part of the array will be the edges connecting the vertices in the form 
// (A-B,C-D,...) where each edge is bidirectional. The last part of the array will be a set of vertices in the form (X,Y,Z,...) and your program will have to determine whether or not the set of vertices given covers every edge in the graph such that every edge is incident to at least one vertex in the set. For example: if strArr is ["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(A,B)"] then the vertices (A,B) are in fact one of the endpoints of every edge in the graph, so every edge has been accounted for. Therefore your program should return the string yes. But, if for example the last part of the array was (C,B) then these vertices don't cover all the edges because the edge connecting A-D is left out. If this is the case your program should return the edges given in the second part of the array that are left out in the same order they were listed, so for this example your program should return (A-D). 

// The graph will have at least 2 vertices and all the vertices in the graph will be connected. The third part of the array listing the vertices may be empty, where it would only contain the parenthesis with no values within it: "()" 

// Input = "(A,B,C,D)","(A-B,A-D,B-D,A-C)","(C)"      Output = (A-B,A-D,B-D)
// Input = "(X,Y,Z,Q)","(X-Y,Y-Q,Y-Z)","(Z,Y,Q)"      Output = yes

// function VertexCovering(strArr) { 
//   var edges = strArr[1].match(/[A-Z]\-[A-Z]/g);
//   var verts = strArr[2].match(/[A-Z]/g);
//   var regex = new RegExp('[' + (verts === null ? '_' : verts.join('')) + ']');
//   var uncovered = [];
//   for (var i = 0; i < edges.length; i++) {
//     if (!regex.test(edges[i])) {
//       uncovered.push(edges[i]);
//     }
//   }
//   if (uncovered.length === 0) {
//     return 'yes';
//   }
//   return '(' + uncovered.join(',') + ')';
// }

// function VertexCovering(strArr) { 
//   var last = strArr[2].match(/[A-Z]/g);
//   var mid = strArr[1].match(/[A-Z]-[A-Z]/g);
//   if(last == null) return '(' + mid.join(',') + ')'; 
//   var connectingArrs = [];
//   for(var i=0;i<mid.length;i++){
//     var myArr = mid[i].match(/[A-Z]/g);
//     connectingArrs.push(myArr);
//   }
//   var covered = [];
//   for(var i=0;i<connectingArrs.length;i++){
//     for(var j=0;j<last.length;j++){
//       if(connectingArrs[i][0] == last[j] &&
//         covered.indexOf(connectingArrs[i][0] + '-' + connectingArrs[i][1]) == -1){
//         covered.push(connectingArrs[i][0] + '-' + connectingArrs[i][1]);
//       }
//       else if(connectingArrs[i][1] == last[j] &&
//               covered.indexOf(connectingArrs[i][0] + '-' + connectingArrs[i][1]) == -1){
//         covered.push(connectingArrs[i][0] + '-' + connectingArrs[i][1]);
//       }
//     }
//   }
//   var uncovered = [];
//   for(var i=0;i<mid.length;i++){
//     if(covered.indexOf(mid[i]) == -1){
//       uncovered.push(mid[i]);
//     }
//   }
//   if(uncovered.length === 0)return 'yes';

//   return '(' + uncovered.join(',') + ')';
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
//   var decrypted = '';
  
//   var groups = [];
  
//   var strArr = str.split("").reverse();
  
//   var start = 0; // track start of current group of characters to slice
//   for(var i = 0; i < strArr.length; i ++) {
//     if(i !== start) {
//       if(strArr[i] === 'N' ||
//          strArr[i] === 'R' ||
//          strArr[i] === 'L' ||
//          strArr[i] === 'S')
//       {
//         groups.push(strArr.slice(start, i));
//         start = i;
//       }
//     }
    
//     if(strArr[i] === 'N' || strArr[i] === 'R' || strArr[i] === 'L') {
//       groups.push(strArr.slice(start, i + 2));
//       i += 1;
//       start = i + 1;
//       continue;
//     }
    
//     if(strArr[i] === 'S') {
//       groups.push(strArr.slice(start, i + 3));
//       i += 2;
//       start = i + 1;
//       continue;
//     }
    
//     if(i !== start &&
//        Math.abs(strArr[i].charCodeAt(0) - strArr[i - 1].charCodeAt(0)) !== 1)
//     {
//       groups.push(strArr.slice(start, i));
//       start = i;
//       continue;
//     }
//   }
//   if(start < strArr.length)
//     groups.push(strArr.slice(start)); // copy from start to end of strArr
  
  
//   groups = groups.map(function(a) { return a.reverse().join(""); }).reverse();
  
//   groups.forEach(function(a) {
//     if(a[a.length - 1] === 'N') { // repeat
//       decrypted += a[0];
//       return;
//     }
    
//     if(a[a.length - 1] === 'R') { // right
//       if(decrypted.length === 0) {
//         decrypted += String.fromCharCode(a.charCodeAt(0) - 1); // add letter before
//       }
//       decrypted += String.fromCharCode(a.charCodeAt(0) + 1); // add letter after
//       return;
//     }
    
//     if(a[a.length - 1] === 'L') { // left
//       if(decrypted.length === 0) {
//         decrypted += String.fromCharCode(a.charCodeAt(0) + 1); // add letter after
//       }
//       decrypted += String.fromCharCode(a.charCodeAt(0) - 1); // add letter before
//       return;
//     }
    
//     if(a[a.length - 1] === 'S') {
//       if(decrypted.length == 0) {
//         decrypted += a[0]; 
//       }
//       decrypted += a[1];
//       return;
//     }
    
//     var direction = a.charCodeAt(1) - a.charCodeAt(0); // +1 if going RIGHT, -1 LEFT
//     if(decrypted.length == 0) {
//       decrypted += String.fromCharCode(a.charCodeAt(0) - direction);
//     }
//     decrypted += String.fromCharCode(a.charCodeAt(a.length - 1) + direction);
//   });
  
//   return decrypted;
// }

// function AlphabetRunEncryption(str) {
//     var a = 'a';
//     var z = 'z';
//     var R = 'R';
//     var L = 'L';
//     var S = 'S';
//     var N = 'N';

//     var res = "";

//     for (var i = str.length - 1; i >= 0; i--) {
//         var c = str[i];
//         var iStart = i;
//         var nextLetter, previousLetter;
//         if (c == N) {
//             previousLetter = nextLetter = str[i - 1];
//             i--;
//         } else if (c == S) {
//             previousLetter = str[i - 1];
//             nextLetter = str[i - 2];
//             i -= 2;
//         } else if (c == L || c == R) {
//             var l = str[i - 1].charCodeAt(0);
//             var before = String.fromCharCode(l + (c == R ? -1 : 1));
//             var after = String.fromCharCode(l + (c == R ? 1 : -1));
//             previousLetter = after;
//             nextLetter = before;
//             i--;
//         } else {
//             var first = c.charCodeAt(0);
//             var previous = first;
//             i--;
//             var next = str[i].charCodeAt(0);
//             var direction = previous - next;
//             while (i > 0 && previous - next == direction) {
//                 previous = next;
//                 i--;
//                 next = str[i].charCodeAt(0);
//             }
//             if (i>0)
//             i++
//             if (previous - next != direction)
//                 next = previous;
//             previousLetter = String.fromCharCode(first + direction);
//             nextLetter = String.fromCharCode(next - direction);
//         }

//         if (iStart == str.length - 1)
//             res += previousLetter;
//         res += nextLetter;
//     }
    
//     // code goes here  
//     return res.split('').reverse().join('');;

// }

// 20.
// Using the JavaScript language, have the function BlackjackHighest(strArr) take the strArr parameter being passed which will be an array of numbers and letters representing blackjack cards. Numbers in the array will be written out. So for example strArr may be ["two","three","ace","king"]. The full list of possibilities for strArr is: two, three, four, five, six, seven, eight, nine, ten, jack, queen, king, ace. Your program should output below, above, or blackjack signifying if you have blackjack (numbers add up to 21) or not and the highest card in your hand in relation to whether or not you have blackjack. If the array contains an ace but your hand will go above 21, you must count the ace as a 1. You must always try and stay below the 21 mark. So using the array mentioned above, the output should be below king. The ace is counted as a 1 in this example because if it wasn't you would be above the 21 mark. Another example would be if strArr was ["four","ten","king"], the output here should be above king. If you have a tie between a ten and a face card in your hand, return the face card as the "highest card". If you have multiple face cards, the order of importance is jack, queen, then king. 
// Input = "four","ace","ten"   Output = "below ten"
// Input = "ace","queen"    Output = "blackjack ace"

// function BlackjackHighest(strArr) {
// var cards={};
// var sum=0;
// var aceCard=false;
// var list=["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king", "ace"];
// list.forEach(function(a, i){
//   if(!cards[a]){
//     a==="jack"||a==="queen"||a==="king"?cards[a]={value:10,rank:i+2}:a==="ace"?cards[a]={value:11,rank:i+2}:cards[a]={value:i+2,rank:i+2};
//     }
//   });
//   strArr.sort(function(a, b){
//   if(cards[a].rank<cards[b].rank){return -1;}
//   else if(cards[a].rank>cards[b].rank){return 1;}
//   return 0;
//   }).forEach(function(a){
//     a==="ace"?aceCard=true:0;
//     sum+=cards[a].value;
//   });
//   if(sum>21&&aceCard){
//     sum-=10;
//     strArr.pop();
//   }                                                                                                                                                                                                                                      
//   return sum===21?"blackjack"+" "+strArr.pop():sum>21?"above"+" "+strArr.pop():"below"+" "+strArr.pop() ;
// }

// function BlackjackHighest(strArr) { 
//   var cards=['ace','two','three','four','five','six','seven','eight','nine','ten','king','queen','jack','ace'];
//   var values=strArr.map(function(e){return cards.indexOf(e)});
//   values=values.sort(function(a,b){return b-a});
//   var permutations=[values.slice(0)];
//   while(values.indexOf(0)!=-1){
//     values[values.indexOf(0)]=13;
//     values=values.sort(function(a,b){return b-a});
//     permutations.push(values.slice(0));
//   }
//   var valueSummed=getValues(permutations.slice(0));
//   //permutations=permutations.reverse();
  
//   for(var j=valueSummed.length-1;j>=0;j--){
//     if(valueSummed[j]==21)return 'blackjack '+cards[permutations[j][0]];
//     if(valueSummed[j]<21)return 'below '+cards[permutations[j][0]];
//   }
//   return 'above '+cards[permutations[0][0]];
//   //return permutations;
// }
// function getValues(values){
//   for(var i=0;i<values.length;i++){
//     values[i]=values[i].map(function(e){
//       if(e==13)return 11;
//       return Math.min(e+1,10);
//     });
//     values[i]=eval(values[i].join('+'));
//   } 
//   return values;
// }

// 19.
// Using the JavaScript language, have the function NoughtsDeterminer(strArr) take the strArr parameter being passed which will be an array of size eleven. The array will take the shape of a Tic-tac-toe board with spaces strArr[3] and strArr[7] being the separators ("<>") between the rows, and the rest of the spaces will be either "X", "O", or "-" which signifies an empty space. So for example strArr may be ["X","O","-","<>","-","O","-","<>","O","X","-"]. This is a Tic-tac-toe board with each row separated double arrows ("<>"). Your program should output the space in the array by which any player could win by putting down either an "X" or "O". In the array above, the output should be 2 because if an "O" is placed in strArr[2] then one of the players wins. Each board will only have one solution for a win, not multiple wins. You output should never be 3 or 7 because those are the separator spaces. 
// Input = "X","-","O","<>","-","-","O","<>","-","-","X"  Output = 5
// Input = "X","O","X","<>","-","O","O","<>","X","X","O"  Output = 4

// function NoughtsDeterminer(strArr) { 
// var nought=0,cross=0,space=0,holePos=0,it=0;
//  var win=[0,1,2,3,4,5,6,7,8,0,3,6,1,4,7,2,5,8,2,4,6,0,4,8];
//   strArr=strArr.join('').match(/[OX-]/g);
//   var copy=win.slice();
//   win=win.map(function(el, i){
//     return strArr[el];
//   });
//   outer:
//   for(var i=0;i<8;i++){
//     nought=0,space=0,cross=0,holePos=0;
//     for(var j=0;j<3;j++){
//       it=(i*3)+j;
//       win[it]==='-'?(holePos=copy[it]+(Math.floor(copy[it]/3)),space++):win[it]==='X'?cross++:win[it]==='O'?nought++:0;
//     }
//     if((nought===2||cross==2)&&space==1){
//       break outer;
//     }
//   }
//   // code goes here  
//   return holePos;       
// }

// function NoughtsDeterminer(strArr) { 
//   for(var i=0;i<strArr.length;i++){
//     if(strArr[i]!='-') continue;
//     var boardCopy=strArr.slice(0);
//     if(checkWin(boardCopy,i,'X')) return i;
//     if(checkWin(boardCopy,i,'O')) return i;
//   }
//   // code goes here  
//   return 0; 
         
// }
// function checkWin(board,last,type){
//   board[last]=type;
//   var row=Math.floor(last/4);
//   var col=last%4;
//   var diagD=last%5==0;
//   var diagU=(last+1)%3==0;
      
//   if(board[row]==board[row+1]&&board[row]==board[row+2]) return true;
//   if(board[col]==board[col+4]&&board[col]==board[col+8]) return true;
//   if(diagD&&board[0]==board[5]&&board[0]==board[10]) return true;
//   if(diagU&&board[2]==board[5]&&board[2]==board[8]) return true;
        
//   return false;
// }

// 18.
// Using the JavaScript language, have the function QueenCheck(strArr) read strArr which will be an array consisting of the locations of a Queen and King on a standard 8x8 chess board with no other pieces on the board. The structure of strArr will be the following: ["(x1,y1)","(x2,y2)"] with (x1,y1) representing the position of the queen and (x2,y2) representing the location of the king with x and y ranging from 1 to 8. Your program should determine if the king is in check based on the current positions of the pieces, and if so, return the number of spaces it can move to in order to get out of check. If the king is not in check, return -1. For example: if strArr is ["(4,4)","(6,6)"] then your program should output 6. Remember, because only the queen and king are on the board, if the queen is checking the king by being directly adjacent to it, technically the king can capture the queen. 
// Input = "(1,1)","(1,4)"    Output = 3
// Input = "(3,1)","(4,4)"    Output = -1

// function QueenCheck(strArr) { 
//   var queen=parse(strArr[0]);
//   var king=parse(strArr[1]);
 
//   var valid=kingMoves(king,queen);
//   if(valid.indexOf(king.x+','+king.y)!=-1) return -1;//king not in threat
//   if(Math.abs(king.x-queen.x)<=1&&Math.abs(king.y-queen.y)<=1){//1 away
//     valid.push(queen.x+','+queen.y);
//   }
//   // code goes here  
//   return valid.length; 
         
// }
// function parse(str){
//   var strArr=str.replace(/[\(\)]/g,'').split(',');
//   return {x:strArr[0],y:strArr[1]};
// }
// function kingMoves(king,queen){
//   var moves=[];
//   for(var i=(king.x-1);i-1<=king.x;i++){  //x threat
//     if(i<1||i>8||i==queen.x) continue;    //diagonal threat
//     for(var j=(king.y-1);j-1<=king.y;j++){//y threat
//       if(j<1||j>8||j==queen.y) continue;  //diagonal threat
//       if(Math.abs(i-queen.x)==Math.abs(j-queen.y)) continue;
//       moves.push(i+','+j);
//     }
//   }
//   return moves;
// }

// function QueenCheck(strArr) {
//     var getPos = function (str) {
//         return [Number(str[1]), Number(str[3])];
//     };

//     var queen = getPos(strArr[0]);
//     var king = getPos(strArr[1]);

//     var getIsInCheckOrInvalid = function (pos) {
//         if (pos[0] < 1 || pos[0] > 8 || pos[1] < 1 || pos[1] > 8)
//             return true;
//         return queen[0] == pos[0] ||
//             queen[1] == pos[1] ||
//             Math.abs(queen[0] - pos[0]) == Math.abs(queen[1] - pos[1]);
//     };

//     var check = getIsInCheckOrInvalid(king);
//     if (!check)
//         return -1;

//     var validPos = 0;
//     for (var x of [-1, 0, 1]) {
//         for (var y of [-1, 0, 1]) {
//             var newPos = [king[0] + x, king[1] + y];
//             if ((newPos[0] == queen[0] && newPos[1] == queen[1])
//                 || !getIsInCheckOrInvalid(newPos))
//                 validPos++;
//         }
//     }

//     return validPos;

// }

// 17.
// Using the JavaScript language, have the function MatrixDeterminant(strArr) read strArr which will be an array of integers represented as strings. Within the array there will also be "<>" elements which represent break points. The array will make up a matrix where the (number of break points + 1) represents the number of rows. Here is an example of how strArr may look: ["1","2","<>","3","4"]. The contents of this array are row1=[1 2] and row2=[3 4]. Your program should take the given array of elements, create the proper matrix, and then calculate the determinant. For the example above, your program should return -2. If the matrix is not a square matrix, return -1. The maximum size of strArr will be a 6x6 matrix. The determinant will always be an integer.
// Input = "5","0","<>","0","5"   Output = 25
// Input = "1","2","4","<>","2","1","1","<>","4","1","1"    Output = -4

// function MatrixDeterminant(strArr) { 
//   var matrix=inputToMatrix(strArr);
//   if(matrix.length!=matrix[0].length) return -1;
//   return findDeterminant(matrix);
//   // code goes here  
//   return matrix; 
         
// }

// function findDeterminant(matrix){
//   if(matrix.length==2){
//     return matrix[0][0]*matrix[1][1]-matrix[0][1]*matrix[1][0];
//   }
//   var coefficients=matrix.shift();
//   var determinant=0;
//   var sign=1;  
//   for(var i in coefficients){
//     determinant+=sign*coefficients[i]*findDeterminant(removeCol(deepCopy(matrix),i));
//     sign=-sign;
//   }
//   return determinant;
// }

// function removeCol(matrix,col){
//   for(var i in matrix){
//     matrix[i].splice(col,1);
//   }
//   return matrix;
// }

// function deepCopy(matrix){
//   var copy=[];
//   for(var i in matrix){
//     copy[i]=matrix[i].slice(0);
//   }
//   return copy;
// }

// function inputToMatrix(input){
//   var matrix=[];
//   var row=[];
//   for(var i in input){
//     if(input[i]=='<>'){
//       matrix.push(row);
//       row=[];
//     }else{
//       row.push(parseInt(input[i]));
//     }
//   }
//   matrix.push(row);
//   return matrix;
// }

// function det(M) {
//     if (M.length==2) { return (M[0][0]*M[1][1])-(M[0][1]*M[1][0]); }
//     var answer = 0;
//     for (var i=0; i< M.length; i++) { answer += Math.pow(-1,i)*M[0][i]*det(deleteRowAndColumn(M,i)); }
//     return answer;
// }

// function deleteRowAndColumn(M,index) {
//     var temp = [];
//     for (var i=0; i<M.length; i++) { temp.push(M[i].slice(0)); } 
//     temp.splice(0,1); 
//     for (var i=0; i<temp.length; i++) { temp[i].splice(index,1); } 
//     return temp;
// }

// function MatrixDeterminant(strArr) {
//   var r = strArr.join(',').split(',<>,');
//   var m = [];
//   var l = -1;
//   for (i = 0; i < r.length; i++) {
//     var p = r[i].split(',');
//     if (l > 0 && p.length !== l) {
//       return -1;
//     } else {
//       l = p.length;
//     }
//     m.push(p);
//   }
//   return det(m);
// }

// 16.
// Using the JavaScript language, have the function SwitchSort(arr) take arr which will be an an array consisting of integers 1...size(arr) and determine what the fewest number of steps is in order to sort the array from least to greatest using the following technique: Each element E in the array can swap places with another element that is arr[E] spaces to the left or right the chosen element. You can loop from one end of the array to the other. For example: if arr is the array [1, 3, 4, 2] then you can choose the second element which is the number 3, and if you count 3 places to the left you'll loop around the array and end up at the number 4. Then you swap these elements and arr is then [1, 4, 3, 2]. From here only one more step is required, you choose the last element which is the number 2, count 2 places to the left and you'll reach the number 4, then you swap these elements and you end up with a sorted array [1, 2, 3, 4]. Your program should return an integer that specifies the least amount of steps needed in order to sort the array using the following switch sort technique. 

// The array arr will at most contain five elements and will contain at least two elements. 
// Input = 3,1,2    Output = 2
// Input = 1,3,4,2    Output = 2

// function check(arr){
//   for (var i=0,n=arr.length;i<n;i++)
//     if (arr[i]!=i+1) return false;
//   return true;
// }
// function mod(n,m){
//   return (n%m+m)%m;
// }
// function swap(arr,i,j){
//   var aux=arr[i];
//   arr[i]=arr[j];
//   arr[j]=aux;
// }

// function SwitchSort(arr) { 
//   var best=Infinity;
//   var back=(function back(cont){
//     if (check(arr))
//     {
//       if (cont<best)
//       {
//         best=cont;
//       }
//     }
//     else for(var i=0, n=arr.length; i<n; i++)
//     {
//       var nl=mod(i-arr[i],n);
//       var last=arr[nl];

//       var nn=mod(i+arr[i],n);
//       var next=arr[nn]

//       if (last==i+1 || arr[i]==nl+1)
//       {
//         swap(arr,i,nl);
//         back(cont+1);
//         swap(arr,last,i);
//       }
//       if (next==i+1 || arr[i]==nn+1)
//       {
//         swap(arr,i,nn);
//         back(cont+1);
//         swap(arr,next,i);
//       }

//     }
//   })(0);
//   return best;
// }

// function SwitchSort(arr) {
//     var sorted = arr.slice(0).sort((a, b)=>a-b);

//     function isSorted(arr) {
//         for (var i = 0; i < sorted.length; i++) {
//             if (sorted[i] != arr[i])
//                 return false;
//         }
//         return true;
//     }

//     if (isSorted(arr))
//         return 0;
//     var branches = [];
//     branches.push(arr);

//     function swap(b, i) {

//         function swapDirection(branch, e, direction) {
//             var e = b[i];
//             var newPos = (i+e * direction);
//             while (newPos < 0)
//                 newPos += 4;
//             newPos %= branch.length
//             branch[i] = branch[newPos];
//             branch[newPos] = e;
//             return branch;
//         }

//         var newBranchL = b.slice(0);
//         var newBranchR = b.slice(0);
//         return [swapDirection(newBranchL, i, -1), swapDirection(newBranchR, i, 1)]

//     }

//     function doAnotherLevel() {
//         var oldbranches = branches;
//         branches = [];
//         for (b of oldbranches) {
//             for (var i = 0; i < sorted.length; i++) {
//                 var newBranches = swap(b, i);
//                 if (newBranches.some(l=> isSorted(l)))
//                     return true;
//                 branches.push.apply(branches, newBranches);
//             }
//         }

//         return false;
//     }



//     var levels = 1;
//     while (!doAnotherLevel())
//         levels++;

//     return levels;
// }

// 15.
// Using the JavaScript language, have the function SymmetricMatrix(strArr) read strArr which will be an array of integers represented as strings. Within the array there will also be "<>" elements which represent break points. The array will make up a matrix where the (number of break points + 1) represents the number of rows. Here is an example of how strArr may look: ["1","0","1","<>","0","1","0","<>","1","0","1"]. There are two "<>", so 2 + 1 = 3. Therefore there will be three rows in the array and the contents will be row1=[1 0 1], row2=[0 1 0] and row3=[1 0 1]. Your program should take the given array of elements, create the proper matrix, and then determine whether the matrix is symmetric, in other words, if matrix M is equal to M transpose. If it is, return the string symmetric and if it isn't return the string not symmetric. A matrix may or may not be a square matrix and if this is the case you should return the string not possible. For the example above, your program should return symmetric. 
// Input = "5","0","<>","0","5"     Output = "symmetric"
// Input = "1","2","4","<>","2","1","1","<>","-4","1","-1"      Output = "not symmetric"

// function SymmetricMatrix(strArr) { 
//   var w = strArr.indexOf('<>');
//   var m = strArr.join('@').replace(/@<>/g, '').split('@');
//   if (w == -2 || m.length / w !== w) {
//     return "not possible";
//   }
//   var mt = [];
//   for (var x = 0; x < w; x++) {
//     for (var y = 0; y < w; y++) {
//       mt.push(m[y * w + x])
//     }
//   }
//   return (mt.join('|') === m.join('|')) ? "symmetric" : "not symmetric";
// }

// function SymmetricMatrix(strArr) { 
//   var matrix=inputToMatrix(strArr);
//   if(matrix.height!=matrix.width) return 'not possible';
//   return (transpose(matrix))?'symmetric':'not symmetric';
//   // code goes here  
//   return strArr; 
         
// }

// function matrixObj(input){
//   var data=[];
//   var height=0;
//   var width=(input.indexOf('<>')==-1)?input.length:input.indexOf('<>');
//   function addRow(row){
//     this.data.push(row);
//     this.height++;
//   }
//   return {'width':width,'height':height,'data':data,'addRow':addRow};
// }

// function inputToMatrix(input){
//   var matrix=new matrixObj(input);
//   var row=[];
//   for(var i in input){
//     if(input[i]=='<>'){
//       matrix.addRow(row);
//       row=[];
//     }else{
//       row.push(parseInt(input[i]));
//     }
//   }
//   matrix.addRow(row);
//   return matrix;
// }

// function transpose(matrix){
//   for(var i=0;i<matrix.height;i++){
//     for(var j=0;j<matrix.width;j++){
//       if(matrix.data[i][j]!=matrix.data[j][i]) return false;
//     }
//   }
//   return true;
// }

// 14.
// Using the JavaScript language, have the function GasStation(strArr) take strArr which will be an an array consisting of the following elements: N which will be the number of gas stations in a circular route and each subsequent element will be the string g:c where g is the amount of gas in gallons at that gas station and c will be the amount of gallons of gas needed to get to the following gas station. For example strArr may be: ["4","3:1","2:2","1:2","0:1"]. Your goal is to return the index of the starting gas station that will allow you to travel around the whole route once, otherwise return the string impossible. For the example above, there are 4 gas stations, and your program should return the string 1 because starting at station 1 you receive 3 gallons of gas and spend 1 getting to the next station. Then you have 2 gallons + 2 more at the next station and you spend 2 so you have 2 gallons when you get to the 3rd station. You then have 3 but you spend 2 getting to the final station, and at the final station you receive 0 gallons and you spend your final gallon getting to your starting point. Starting at any other gas station would make getting around the route impossible, so the answer is 1. If there are multiple gas stations that are possible to start at, return the smallest index (of the gas station). N will be >= 2. 
// Input = "4","1:1","2:2","1:2","0:1"  Output = "impossible"
// Input = "4","0:1","2:2","1:2","3:1"  Output = "4"

// function GasStation(strArr) { 
//   var c = 1;
//   while (c < strArr.length) {
//     var gas = strArr[c].split(':')[0]*1 - strArr[c].split(':')[1]*1;
//     var t = c + 1;
//     if (t === strArr.length) {
//       t = 1;
//     }
//     while (gas >= 0 && t !== c) {
//       gas += strArr[t].split(':')[0]*1 - strArr[t].split(':')[1]*1;
//       t++;
//       if (t === strArr.length) {
//         t = 1;
//       }
//     }
//     if (t === c) {
//       return t;
//     }
//     c++;
//   }
//   return 'impossible'; 
// }

// function GasStation(strArr) { 
//   var gallonsArr = [],
//       gallons;
//   for(var i=1;i<strArr.length;i++){
//     gallons = strArr[i].match(/\d\d?\d?/g);
//     gallons = gallons[0] - gallons[1];
//     gallonsArr.push(gallons);
//   }
//   var count = 0;
//   function canWeMakeIt(){
//     count++;
//     if(count > gallonsArr.length)return 'impossible';
//     var sum = 0;
//     for(var i=0;i<gallonsArr.length;i++){
//       sum += gallonsArr[i];
//       if(sum < 0){
//         var next = gallonsArr.shift();
//         gallonsArr.push(next);
//         return canWeMakeIt();
//       }
//     }
//     return count;
//   }
//   return canWeMakeIt();
// }

// 13.
// Using the JavaScript language, have the function StepWalking(num) take the num parameter being passed which will be an integer between 1 and 15 that represents the number of stairs you will have to climb. You can climb the set of stairs by taking either 1 step or 2 steps, and you can combine these in any order. So for example, to climb 3 steps you can either do: (1 step, 1 step, 1 step) or (2, 1) or (1, 2). So for 3 steps we have 3 different ways to climb them, so your program should return 3. Your program should return the number of combinations of climbing num steps. 
// Input = 1    Output = 1
// Input = 3    Output = 3

// function StepWalking(num) { 
//   var q = [0, 1];
//   for (var i = 0; i < num; i++) {
//     q = [q[1], q[1] + q[0]];
//   }
//   return q[1];
// }

// function StepWalking(num) { 
//   var step = 0,count=0,winners=[],testPath=[];;
//   function findComb(top){
//     count++;
//     if(Math.random() > 0.5){
//       step++;
//       testPath.push(1);
//     }
//     else {
//       step += 2;
//       testPath.push(2);
//     }
//     if(step === top && winners.indexOf(testPath.join('')) == -1){
//       winners.push(testPath.join('')); 
//       step = 0;
//       testPath = [];
//     }
//     if(count > 1000){
//       return winners;
//     }
//     if(step > top){
//       step = 0; 
//       testPath = [];
//     }
//     return findComb(num);
//   }
//   for(var i=0;i<350;i++){
//     findComb(num);
//     count = 0;
//   }
//   return winners.length;
// }

// 12.
// Using the JavaScript language, have the function HamiltonianPath(strArr) take strArr which will be an array of length three. The first part of the array will be a list of vertices in a graph in the form (A,B,C,...), the second part of the array will be the edges connecting the vertices in the form 
// (A-B,C-D,...) where each edge is bidirectional. The last part of the array will be a set of vertices in the form (X,Y,Z,...) and your program will have to determine whether or not the set of vertices given forms a Hamiltonian path on the graph which means that every vertex in the graph is visited only once in the order given. For example: if strArr is ["(A,B,C,D)","(A-B,A-D,B-D,A-C)","(C,A,D,B)"] then the vertices (C,A,D,B) in this order do in fact form a Hamiltonian path on the graph so your program should return the string yes. If for example the last part of the array was (D,A,B,C) then this doesn't form a Hamiltonian path because once you get to B you can't get to C in the graph without passing through the visited vertices again. Here your program should return the vertex where the path had to terminate, in this case your program should return B. 

// The graph will have at least 2 vertices and all the vertices in the graph will be connected.

// Input = "(A,B,C)","(B-A,C-B)","(C,B,A)"        Output = yes
// Input = "(X,Y,Z,Q)","(X-Y,Y-Q,Y-Z)","(Z,Y,Q,X)"        Output = Q

// function HamiltonianPath(strArr) { 
//   var last = strArr[2].match(/[A-Z]/g);
//   var mid = strArr[1].match(/[A-Z]-[A-Z]/g);
//   if(last == null) return '(' + mid.join(',') + ')'; 
//   var connectingArrs = [];
//   for(var i=0;i<mid.length;i++){
//     var myArr = mid[i].match(/[A-Z]/g);
//     connectingArrs.push(myArr);
//   }
//   var notConnected = [],connected = false,count=0;
//   for(var i=0;i<last.length-1;i++){
//     for(var j=0;j<connectingArrs.length;j++){
//       count++;
//       if(last[i]==connectingArrs[j][0]&&last[i+1]==connectingArrs[j][1]){
//         connected = true;
//       }
//       if(last[i]==connectingArrs[j][1]&&last[i+1]==connectingArrs[j][0]){
//         connected = true;
//       }
//     }
//     if(connected == false){
//       notConnected.push(last[i]); 
//     }
//     connected = false;
//   }
//   if(notConnected.length == 0)return 'yes';
  
//   return notConnected.join(',');
// }

// function HamiltonianPath(strArr) { 
//   var graph = {};
//   var edges = strArr[1].match(/[A-Z]\-[A-Z]/gi);

//   function createVert(name) {
//     if (typeof graph[name] === 'undefined') {
//       graph[name] = [];
//     }
//   }
  
//   for (var i = 0; i < edges.length; i++) {
//     var pair = edges[i].split('-'),
//         a = pair[0],
//         b = pair[1];
//     createVert(a);
//     createVert(b);
//     graph[a].push(b);
//     graph[b].push(a);
//   }
  
//   var path = strArr[2].match(/[A-Z]/gi);
//   var v = path.shift();
//   while (path.length > 0) {
//     var next = path.shift();
//     if (graph[v].indexOf(next) === -1) {
//       return v;
//     }
//     v = next;
//   }
//   return 'yes';
// }

// 11.
// Using the JavaScript language, have the function KaprekarsConstant(num) take the num parameter being passed which will be a 4-digit number with at least two distinct digits. Your program should perform the following routine on the number: Arrange the digits in descending order and in ascending order (adding zeroes to fit it to a 4-digit number), and subtract the smaller number from the bigger number. Then repeat the previous step. Performing this routine will always cause you to reach a fixed number: 6174. Then performing the routine on 6174 will always give you 6174 (7641 - 1467 = 6174). Your program should return the number of times this routine must be performed until 6174 is reached. For example: if num is 3524 your program should return 3 because of the following steps: (1) 5432 - 2345 = 3087, (2) 8730 - 0378 = 8352, (3) 8532 - 2358 = 6174. 
// Input = 2111   Output = 5
// Input = 9831   Output = 7

// function KaprekarsConstant(num) { 
//   // code goes here  
//   return KCrecursive(num);  
// }

// function KCrecursive(num){
//   if(num==6174) return 0;
//   num=leadingZeros(num);
//   var numsAZ=(num).split('').sort(function(a,b){return a-b});
//   var numsZA=numsAZ.slice(0).reverse();
//   var next=parseInt(numsZA.join(''))-parseInt(numsAZ.join(''));
//   return KCrecursive(next)+1;  
// }

// function leadingZeros(num){
//   num=num+'';
//   while(num.length<4){
//     num='0'+num;
//   }
//   return num;
// }

// function KaprekarsConstant(num) {
//   var c = 0;
//   while (num != 6174) {
//     c += 1;
//     var d = num.toString().split('');
//     while (d.length < 4) {
//       d.push('0');
//     }
//     var smaller = d.sort().join('');
//     var bigger = d.reverse().join('');
//     num = bigger - smaller;
//   }
//   return c;
// }

// 10.
// Using the JavaScript language, have the function IntersectingLines(strArr) take strArr which will be an array of 4 coordinates in the form: (x,y). Your program should take these points where the first 2 form a line and the last 2 form a line, and determine whether the lines intersect, and if they do, at what point. For example: if strArr is ["(3,0)","(1,4)","(0,-3)","(2,3)"], then the line created by (3,0) and (1,4) and the line created by (0,-3) (2,3) intersect at (9/5,12/5). Your output should therefore be the 2 points in fraction form in the following format: (9/5,12/5). If there is no denominator for the resulting points, then the output should just be the integers like so: (12,3). If any of the resulting points is negative, add the negative sign to the numerator like so: (-491/63,-491/67). If there is no intersection, your output should return the string "no intersection". The input points and the resulting points can be positive or negative integers. 
// Input = "(9,-2)","(-2,9)","(3,4)","(10,11)"    Output = "(3,4)"
// Input = "(1,2)","(3,4)","(-5,-6)","(-7,-8)"    Output = "no intersection"

// function IntersectingLines(strArr) { 
  
   
//   var nums = strArr.join('').match(/-?\d+/g);
  
//   var slope1,slope2,y1,x1,b1,y2,x2,b2
      
//       slope1 = (parseInt(nums[3])-parseInt(nums[1]))/(parseInt(nums[2])-parseInt(nums[0]));
//       slope2 = (nums[7]-nums[5])/(nums[6]-nums[4]);
  
//   var intx,inty, d
      
//       d = ((parseInt(nums[2])-parseInt(nums[0]))*(parseInt(nums[7])-parseInt(nums[5])))-((parseInt(nums[3])-parseInt(nums[1]))*(parseInt(nums[6])-parseInt(nums[4])));
//   if (d== 0){return "no intersection"}
  
//   else{    

//     intx = (((parseInt(nums[4])-parseInt(nums[6]))*(parseInt(nums[0])*parseInt(nums[3])-parseInt(nums[1])*parseInt(nums[2]))-(parseInt(nums[0])-parseInt(nums[2]))*(parseInt(nums[4])*parseInt(nums[7])-parseInt(nums[5])*parseInt(nums[6]))))/d;
//     inty = (((parseInt(nums[5])-parseInt(nums[7]))*(parseInt(nums[0])*parseInt(nums[3])-parseInt(nums[1])*parseInt(nums[2]))-(parseInt(nums[1])-parseInt(nums[3]))*(parseInt(nums[4])*parseInt(nums[7])-parseInt(nums[5])*parseInt(nums[6]))))/d; 
//   }
//     //intx = ((((parseInt(nums[6])*slope2))+parseInt(nums[3])-parseInt(nums[7])-(parseInt(nums[2])*slope1))/(slope2-slope1));
//   // inty = parseInt(nums[3]) - (slope1*parseInt(nums[2])) + (slope1*intx);
//    // return inty;}
//     //return "("+intx+","+inty+")";}
  
//   function float2rat(x) {
//     var ncount = '';
//     if (Math.abs(x)!==x){
//       x = Math.abs(x);
//       var ncount = "-";}
//     var tolerance = 1.0E-6;
//     var h1=1; var h2=0;
//     var k1=0; var k2=1;
//     var b = x;
//     do {
//         var a = Math.floor(b);
//         var aux = h1; h1 = a*h1+h2; h2 = aux;
//         aux = k1; k1 = a*k1+k2; k2 = aux;
//         b = 1/(b-a);
//     } while (Math.abs(x-h1/k1) > x*tolerance);
    
//     return ncount+h1+"/"+k1;
// }
    
//     if (intx%1!=0){
//       intx = float2rat(intx);}
//     if (inty%1!=0){
//       inty = float2rat(inty);}
  
//   //intx = float2rat(2);
  
//     return "("+intx+","+inty+")";     
    
// }

// function getLineEquation(p1, p2) {
//     if (p2[0] === p1[0])
//         return {
//             x: p1[0]
//         };

//     var a = (p2[1] - p1[1]) / (p2[0] - p1[0]);
//     var b = p1[1] - a * p1[0];
//     return {
//         a: a,
//         b: b
//     };
// }

// function getCoordonate(str) {
//     return str.replace(/[\(\)]/g, '').split(',').map(v=> Number(v));
// }

// function getFraction(val) {
//     var denominator = 1;
//     var numerator = val * denominator;
//     while (Math.abs(numerator - Math.trunc(numerator)) > Math.pow(10, -6)) {
//         denominator++;
        
//         numerator = val * denominator;
//     }

//     if (denominator == 1)
//         return val;
//     return Math.round(numerator) + "/" + denominator;
// }

// function IntersectingLines(strArr) {
//     var p11 = getCoordonate(strArr[0]);
//     var line1 = getLineEquation(p11, getCoordonate(strArr[1]));
//     var line2 = getLineEquation(getCoordonate(strArr[2]), getCoordonate(strArr[3]));

//     var mainline;
//     if (line1.x !== undefined || line2.x !== undefined) {
//         if (line1.x !== undefined && line2.x !== undefined)
//             return "no intersection";
//         var intersect_x;
//         if (line1.x !== undefined) {
//             intersect_x = line1.x;
//             mainline = line2;
//         } else {
//             intersect_x = line2.x;
//             mainline = line1;
//         }
//     } else {
//         var intersect_x = (line2.b - line1.b) / (line1.a - line2.a);
//         mainline = line1;
//     }

//     var intersect_y = mainline.a * intersect_x + mainline.b;
//     if (intersect_x == -Infinity || intersect_x == Infinity)
//         return "no intersection";

//     return '(' + getFraction(intersect_x) + ',' + getFraction(intersect_y) + ')';

// }

// 9. 
// Using the JavaScript language, have the function RREFMatrix(strArr) take strArr which will be an array of integers represented as strings. Within the array there will also be "<>" elements which represent break points. The array will make up a matrix where the (number of break points + 1) represents the number of rows. Here is an example of how strArr may look: ["5","7","8","<>","1","1","2"]. There is one "<>", so 1 + 1 = 2. Therefore there will be two rows in the array and the contents will be row1=[5 7 8] and row2=[1 1 2]. Your program should take the given array of elements, create the proper matrix, and then through the process of Gaussian elimination create a reduced row echelon form matrix (RREF matrix). For the array above, the resulting RREF matrix would be: row1=[1 0 3], row2=[0 1 -1]. Your program should return that resulting RREF matrix in string form combining all the integers, like so: "10301-1". The matrix can have any number of rows and columns (max=6x6 matrix and min=1x1 matrix). The matrix will not necessarily be a square matrix. If the matrix is an nx1 matrix it will not contain the "<>" element. The integers in the array will be such that the resulting RREF matrix will not contain any fractional numbers. 
// Input = "2","4","8","<>","6","12","14"     Output = "120001"
// Input = "2","2","4","<>","1","1","8","<>","7","6","5"      Output = "100010001"

// function RREFMatrix(strArr) {
//   var mtx=[];
//   strArr=strArr.join("@").split("@<>@");
//   for (var i=0;i<strArr.length;i++)
//   {
//     var aux=strArr[i].split("@");
//     for (var j=0;j<aux.length;j++)
//       aux[j]=parseInt(aux[j]);
//     mtx.push(aux);
//   }
//   var exit=false;
//   var lead = 0;
//     for (var r = 0; r < mtx.length; r++) {
//         if (mtx[0].length <= lead) {
//             break;
//         }
//         var i = r;
//         while (mtx[i][lead] == 0) {
//             i++;
//             if (mtx.length == i) {
//                 i = r;
//                 lead++;
//                 if (mtx[0].length == lead) {
//                     exit=true;
//                     break;
//                 }
//             }
//         }
//         if (exit) break;
        
//         var tmp = mtx[i];
//         mtx[i] = mtx[r];
//         mtx[r] = tmp;
 
//         var val = mtx[r][lead];
//         for (var j = 0; j < mtx[0].length; j++) {
//             mtx[r][j] /= val;
//         }
 
//         for (var i = 0; i < mtx.length; i++) {
//             if (i == r) continue;
//             val = mtx[i][lead];
//             for (var j = 0; j < mtx[0].length; j++) {
//                 mtx[i][j] -= val * mtx[r][j];
//             }
//         }
//         lead++;
//     }
  
//   var sol="";
//   for (var i=0;i<mtx.length;i++)
//     for (var j=0;j<mtx[0].length;j++)
//       sol+=mtx[i][j];
//   return sol;
// }                                         

// function RREFMatrix(strArr) { 
//   var matrix=inputToMatrix(strArr);
//   for(var i=0;i<matrix.height;i++){
//     matrix=solveMatrixRow(matrix,i);
//   }
//   return matrix.printOut();
//   // code goes here           
// }

// function solveMatrixRow(matrix,row){
//   var col=row;
//   if(matrix.width<=col) return matrix;
//   if(matrix.data[row][col]==0){
//     for(var j=row;j<matrix.height;j++){
//       if(matrix.data[j][col]!=0){
//         matrix.data=swapRow(matrix.data,row,j);
//         break;
//       }
//     }
//     while(matrix.data[row][col]==0){
//       col++;
//       if(matrix.width<=col) return matrix;
//     }
//   }
//   matrix.data[row]=setIdentityToOne(matrix.data[row],col);
//   for(var i=0;i<matrix.height;i++){
//     if(i==row) continue;
//     matrix.data[i]=equalize(matrix.data[row],matrix.data[i],col);
//   }
//   return matrix;
// }
  
// function matrixObj(input){
//   var data=[];
//   var height=0;
//   var width=(input.indexOf('<>')==-1)?input.length:input.indexOf('<>');
//   function addRow(row){
//     this.data.push(row);
//     this.height++;
//   }
//   function printOut(){
//     var flatData=[].concat.apply([],this.data);
//     return flatData.join('');
//   }
//   return {'width':width,'height':height,'data':data,
//           'addRow':addRow,'printOut':printOut};
// }

// function inputToMatrix(input){
//   var matrix=new matrixObj(input);
//   var row=[];
//   for(var i in input){
//     if(input[i]=='<>'){
//       matrix.addRow(row);
//       row=[];
//     }else{
//       row.push(parseInt(input[i]));
//     }
//   }
//   matrix.addRow(row);
//   return matrix;
// }

// function setIdentityToOne(arr,index){
//   var factor=(1/arr[index])
//   return arr.map(function(a){return Math.round(100*a*factor)/100});
// }

// function equalize(arr1,arr2,index){
//   if(arr2[index]==0) return arr2;
//   var factor=-arr2[index];
//   for(var i=0;i<arr2.length;i++){
//     arr2[i]=Math.round(100*(arr2[i]+factor*arr1[i]))/100;
//   }
//   return arr2;
// }

// function swapRow(matrix,a,b){
//   var temp=matrix[a];
//   matrix[a]=matrix[b];
//   matrix[b]=temp;
//   return matrix;
// }

// 8. 
// Using the JavaScript language, have the function WeightedPath(strArr) take strArr which will be an array of strings which models a non-looping weighted Graph. The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes along with their weights (integers) separated by the pipe symbol (|). They will look like this: (A|B|3, B|C|12 .. Brick Street|Main Street|14 .. etc.). Although, there may exist no connections at all. 

// An example of strArr may be: ["4","A","B","C","D","A|B|1","B|D|9","B|C|3","C|D|4"]. It may help to visualize the Graph by drawing out the nodes and their connections. Your program should return the shortest path when the weights are added up from node to node from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-C-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A|B|1","A|E|9","B|C|2","C|D|1","D|F|2","E|D|6","F|G|2"]. The output for this array should be A-B-C-D-F-G. There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A. A path may not go through any Node more than once. 
// Input = "4","A","B","C","D", "A|B|2", "C|B|11", "C|D|3", "B|D|2"   Output = "A-B-D"
// Input = "4","x","y","z","w","x|y|2","y|z|14", "z|y|31"   Output = -1

// function WeightedPath(strArr) {
//     var nodesCount = Number(strArr[0]);
//     var nodes = new Map();

//     for (var i = 0; i < nodesCount; i++) {
//         nodes.set(strArr[i + 1], []);
//     }

//     for (var i = nodesCount + 1; i < strArr.length; i++) {
//         var points = strArr[i].split('|');
//         nodes.get(points[0]).push([points[1], Number(points[2])]);
//         nodes.get(points[1]).push([points[0], Number(points[2])]);
//     }

//     var toFind = strArr[nodesCount];

//     var shortestPath = null;
//     var shortestCost = Number.MAX_VALUE;

//     function findTarget(currentSet, currentCost, nextNode, cost) {
//         currentCost += cost;
//         if (shortestCost <= currentCost)
//             return;
//         currentSet.add(nextNode);
//             var children = nodes.get(nextNode);
//         if (toFind === nextNode) {
//             shortestPath = currentSet;
//             shortestCost = currentCost;
//             return;
//         } else {
//             for (n of children) {
//                 if (currentSet.has(n[0]))
//                     continue;
//                 findTarget(new Set(currentSet), currentCost, n[0], n[1])
//             }
//         }
//     }

//     findTarget(new Set(), 0, strArr[1], 0);
//     if (!shortestPath)
//         return -1;
//     var res = "";
//     var i = 0;
//     for (n of shortestPath) {
//         if (i > 0)
//             res += '-';
//         i++;
//         res += n;
//     }
//     return res;
// }

// function makeRoute(from, to, weight) {
//   return {
//     from: from,
//     to: to,
//     weight: weight
//   };
// }

// function WeightedPath(strArr) { 
//   var places = {};
//   var nPlaces = strArr[0]*1;
//   for (var i = 1; i <= nPlaces; i++) {
//     places[strArr[i]] = {
//       name: strArr[i],
//       path: '',
//       weight: 0,
//       routes: {}
//     };
//   }
//   for (i = nPlaces + 1; i < strArr.length; i++) {
//     var route = strArr[i].split('|');
//     var placeA = places[route[0]], 
//         placeB = places[route[1]], 
//         weight = route[2]*1;
//     placeA.routes[route[1]] = makeRoute(placeA, placeB, weight);
//     placeB.routes[route[0]] = makeRoute(placeB, placeA, weight);
//   }
//   var start = places[strArr[1]];
//   var finish = places[strArr[nPlaces]];
//   start.path = start.name;
//   var pending = [makeRoute(start, start, 0)];
//   while (pending.length > 0) {
//     var route = pending.shift();
//     var here = route.to;
//     here.weight = route.weight + route.from.weight;
//     if (here.path === '') {
//       here.path = route.from.path + '-' + here.name;
//     }
//     if (here === finish) {
//       return finish.path;
//     }
//     for(var route in here.routes) {
//       if (here.routes[route].to.path === '') {
//         pending.push(here.routes[route]);
//       }
//     }
//     pending.sort(function (a,b) {
//       return (a.from.weight + a.weight) - (b.from.weight + b.weight);
//     });
//   }
//   return -1;
// }

// 7.
// Using the JavaScript language, have the function PatternChaser(str) take str which will be a string and return the longest pattern within the string. A pattern for this challenge will be defined as: if at least 2 or more adjacent characters within the string repeat at least twice. So for example "aabecaa" contains the pattern aa, on the other hand "abbbaac" doesn't contain any pattern. Your program should return yes/no pattern/null. So if str were "aabejiabkfabed" the output should be yes abe. If str were "123224" the output should return no null. The string may either contain all characters (a through z only), integers, or both. But the parameter will always be a string type. The maximum length for the string being passed in will be 20 characters. If a string for example is "aa2bbbaacbbb" the pattern is "bbb" and not "aa". You must always return the longest pattern possible. 
// Input = "da2kr32a2"    Output = "yes a2"
// Input = "sskfssbbb9bbb"    Output = "yes bbb"

// function PatternChaser(str) { 
//   var twice = str.match(/(..+)(?=.*\1)/ig);
//   if(twice === null) return 'no null';
//   twice.sort(function(a,b){return a.length-b.length});
//   return 'yes ' + twice.pop();
// }

// function PatternChaser(str) { 
//   var len = Math.floor(str.length / 2);
//   while (len > 1) {
//     for (var i = 0; i < str.length - len; i++) {
//       var candidate = str.slice(i, i + len);
//       if (str.match(new RegExp(candidate, 'g')).length > 1) {
//         return 'yes ' + candidate;
//       }
//     }
//     len -= 1;
//   }
//   return 'no null';
// }

// 6.
// Using the JavaScript language, have the function Calculator(str) take the str parameter being passed and evaluate the mathematical expression within in. For example, if str were "2+(3-1)*3" the output should be 8. Another example: if str were "(2-0)(6/2)" the output should be 6. There can be parenthesis within the string so you must evaluate it properly according to the rules of arithmetic. The string will contain the operators: +, -, /, *, (, and ). If you have a string like this: #/#*# or #+#(#)/#, then evaluate from left to right. So divide then multiply, and for the second one multiply, divide, then add. The evaluations will be such that there will not be any decimal operations, so you do not need to account for rounding and whatnot. 
// Input = "6*(4/2)+3*1"    Output = "15"
// Input = "6/3-1"    Output = "1"

// function Calculator(str) { 
//   return eval(str.replace(/(\)\()|(\d\()|(\)\d)/g, function (m) {
//     return m.split('').join('*');
//   }));
// }

// function Calculator(str) {
//   var stack = [];
//   var lastToken;
  
//   var performFunc = function(a,b,func) {
//      if(func == "+") {
//       return a + b;
//     } else if(func == "-") {
//       return a - b;
//     } else if(func == "/") {
//       return a / b;
//     } else if(func == "*") {
//       return a * b;
//     }
//   };
//   var processStack = function(stack) {
//     var i = 0;
//     if(stack.length == 0)
//       return NaN;
      
//     if(stack.length == 1)
//       return stack;
      
//     while(i < stack.length && stack.length > 2) {
//       if(stack[i+1] == '*' || stack[i+1] == '/') {
//         var a = stack[i];
//         var b = stack[i+2];
//         var func = stack[i+1];
//         var value = performFunc(a,b,func);
//         stack.splice(i,3,value);
//       } else {i+=2;}
//     }
//     i = 0;
//     while(i < stack.length && stack.length > 2) {
//       if(stack[i+1] == '+' || stack[i+1] == '-') {
//         var a = stack[i];
//         var b = stack[i+2];
//         var func = stack[i+1];
//         var value = performFunc(a,b,func);
//         stack.splice(i,3,value);
//       } else {i+=2;}
//     }
//     return stack;
//   };
  
//   var processChar = function(char) {
//     if(char == "+") {
//       stack.push("+");
//     } else if(char == "-") {
//       stack.push("-");
//     } else if(char == "/") {
//       stack.push("/");
//     } else if(char == "*") {
//       stack.push("*");
//     } else if(char == "(") {
//       if(lastToken === ")" ||
//          ( lastToken !== undefined &&
//            lastToken.match(/\d+/g) != null)) {
//         stack.push("*");
//       }
//       stack.push("(");
//     } else if(char == ")") {
//       var parenStack = [];
//       while( (char = stack.pop()) != "(") {
//         parenStack.unshift(char);
//       }
//       stack.push(processStack(parenStack).pop());
//     } else {
//       stack.push(parseInt(char));
//     }
//   };
  
//   var tokens = str.match(/\d+|[\(\)\+\-\*\/]/g);
//   for(var i = 0; i < tokens.length; i++) {
//     processChar(tokens[i]);
//     lastToken = tokens[i];
//   }
//   stack = processStack(stack);
//   return stack.pop();
// }

// 5.
// Using the JavaScript language, have the function PolynomialExpansion(str) take str which will be a string representing a polynomial containing only (+/-) integers, a letter, parenthesis, and the symbol "^", and return it in expanded form. For example: if str is "(2x^2+4)(6x^3+3)", then the output should be "12x^5+24x^3+6x^2+12". Both the input and output should contain no spaces. The input will only contain one letter, such as "x", "y", "b", etc. There will only be four parenthesis in the input and your output should contain no parenthesis. The output should be returned with the highest exponential element first down to the lowest. 

// More generally, the form of str will be: ([+/-]{num}[{letter}[{^}[+/-]{num}]]...[[+/-]{num}]...)(copy) where "[]" represents optional features, "{}" represents mandatory features, "num" represents integers and "letter" represents letters such as "x". 
// Input = "(1x)(2x^-2+1)"    Output = "x+2x^-1"
// Input = "(-1x^3)(3x^3+2)"    Output = "-3x^6-2x^3"

// function PolynomialExpansion(str) { 
  
//   var variable = str.match(/[a-zA-Z]/gi)[0];
  
//   function clean(str, arr) { // converts str = "ax^b + cx + d" into [[a, c, d], [b, 1 0]] and stored into arr
//     var c = 0; // coefficient
//     var e = 1; // exponential
//     var regex = new RegExp("(\\+|-)?[0-9]+" + variable + "?(\\^(\\+|-)?[0-9]+)?", "i");
//   var match = str.match(regex); // find anything of the form +ax^b
//     var term = match[0];
    
//     var ce; // store array [a, b]
//     if(term.indexOf('^') !== -1)
//       ce = term.split(variable + '^').map(Number);
//     else {
//       ce = term.split(variable).map(Number);
//       if(term.indexOf(variable) !== -1) ce[1] = 1; // if x to power of 1
//     }
//   if(ce.length === 1) ce.push(0); // if no x
    
//     arr[c].push(ce[c]);
//     arr[e].push(ce[e]);
    
//     if(str.length === match[0].length)
//       return;
        
//     clean(str.substring(match.index + match[0].length), arr);
//   }
  
//   function expand(arr) {
//     if(arr.length === 1)
//       return arr[0];
    
//     var first = arr[0];
//     var second = arr[1];
//     var result = [[],[]];
    
//     arr.shift(); // remove first element
//     arr[0] = result;
    
//     for(var i = 0; i < first[0].length; i ++) {
//       for(var j = 0; j < second[0].length; j ++) {
//         var rCoeff = first[0][i] * second[0][j]; // coefficient
//         var rExp = first[1][i] + second[1][j]; // exponent
        
//         var rCoeffIndex = result[1].indexOf(rExp);
//         if(rCoeffIndex === -1) {
//           result[0].push(rCoeff);
//           result[1].push(rExp);
//         } else {
//           result[0][rCoeffIndex] += rCoeff;
//           if(result[0][rCoeffIndex] === 0) { // remove term if coefficient is 0
//             result[0].splice(rCoeffIndex,1);
//             result[1].splice(rCoeffIndex,1);
//           }
//         }
//       }
//     }
    
//     // sort by exponent
//     var sortedExp = result[1].slice().sort(function(a, b) { return b - a; });
//   var sortedCoeff = result[0].slice();
//     sortedCoeff.forEach(function(element, index, array) {
//       array[index] = result[0][result[1].indexOf(sortedExp[index])]; 
//     });
//     arr[0] = [sortedCoeff, sortedExp];
    
//     return expand(arr);   
//   }
  
//   // take input string, convert to array
//   var strArr = str.split(')(').map( function(a) { return a.replace(/[\(\)]/gi, ""); });
//   var arr = [];
//   for(var i = 0; i < strArr.length; i ++) {
//   if(arr[i] === undefined) arr[i] = [[],[]];
//     clean(strArr[i], arr[i], variable);
//   }
  
//   // expand using array
//   var resultArr = expand(arr);
  
//   // convert to proper string
//   var expanded = '';
//   for(var i = 0; i < resultArr[0].length; i ++) {
//     var coeff = resultArr[0][i];
//     var exp = resultArr[1][i];
    
//     if(expanded.length !== 0 && coeff > 0) expanded += '+';
//     if(Math.abs(coeff) > 1) expanded += coeff;
    
//     if(exp !== 0) {
//       expanded += variable;
//       if(exp !== 1)
//       expanded += '^' + exp;
//     }
//   }
  
//   return expanded;
// }

// function PolynomialExpansion(str) {
//     var regex = /[+-]?[0-9][a-z]?(\^-?[0-9]*)?/g;
//     var expRegexp = /([+-]?[0-9])([a-z])?\^?(-?[0-9]*)?/g;
//     var partsStr = str.split(')(');

//     var parts = [[], []];
//     var letterPolynome = '';
//     function getParts(parts, destList) {
//         for (p of parts) {
//             var expParts = new RegExp(expRegexp).exec(p);
//             var mult = expParts[1];
//             var letter = expParts[2];
//             if (!letterPolynome && letter)
//                 letterPolynome = letter;
//             var power = expParts[3];
//             var dest = 0;
//             if (letter && power !== 0) {
//                 dest += Number(power || 1);
//             }
//             destList.push([dest, Number(mult)]);
//         }
//     }
//     getParts(partsStr[0].match(regex), parts[0]);
//     getParts(partsStr[1].match(regex), parts[1]);

//     var map = new Map();
//     for (p1 of parts[0])
//         for (p2 of parts[1]) {
//             var mult = p1[0] + p2[0];
//             var exist = 0
//             if (map.has(mult))
//                 exist = map.get(mult)
//             map.set(mult, p1[1] * p2[1] + exist);
//         }

//     var polynome = [];
//     for (m of map) {
//         polynome.push(m);
//     }
//     polynome.sort((a, b) => b[0] - a[0]);
//     var res = "";
//     for (p of polynome) {
//         if (res != '' && p[1] > 0)
//             res += '+'
//         if (p[1] != 1 || p[0] == 0) {
//             res += p[1]
//         }
//         if (p[0]) {
//             res += letterPolynome;
//             if (p[0] != 1)
//                 res += '^' + p[0];
//         }
//     }

//     // code goes here  
//     return res;

// }

// 4.
// Using the JavaScript language, have the function ShortestPath(strArr) take strArr which will be an array of strings which models a non-looping Graph. The structure of the array will be as follows: The first element in the array will be the number of nodes N (points) in the array as a string. The next N elements will be the nodes which can be anything (A, B, C .. Brick Street, Main Street .. etc.). Then after the Nth element, the rest of the elements in the array will be the connections between all of the nodes. They will look like this: (A-B, B-C .. Brick Street-Main Street .. etc.). Although, there may exist no connections at all. 

// An example of strArr may be: ["4","A","B","C","D","A-B","B-D","B-C","C-D"]. It may help to visualize the Graph by drawing out the nodes and their connections. Your program should return the shortest path from the first Node to the last Node in the array separated by dashes. So in the example above the output should be A-B-D. Here is another example with strArr being ["7","A","B","C","D","E","F","G","A-B","A-E","B-C","C-D","D-F","E-D","F-G"]. The output for this array should be A-E-D-F-G. There will only ever be one shortest path for the array. If no path between the first and last node exists, return -1. The array will at minimum have two nodes. Also, the connection A-B for example, means that A can get to B and B can get to A.
// Input = "5","A","B","C","D","F","A-B","A-C","B-C","C-D","D-F"    Output = "A-C-D-F"
// Input = "4","X","Y","Z","W","X-Y","Y-Z","X-W"    Output = "X-W"

// function ShortestPath(strArr) {  
//   var count = parseInt(strArr[0]);
//   var points = [];
//   var map = {};
//   for(var i=1;i<=count;i++){
//     points.push(strArr[i]); 
//     map[strArr[i]] = [];
//   }
//   for(var i=count+1;i<strArr.length;i++){
//     var left = strArr[i].split('-')[0];
//     var right = strArr[i].split('-')[1];
//     map[left].push(right);
//     map[right].push(left);
//   }
  
//   var start = points[0],
//       target = points[count-1];
//   var pointBin = [];
//   var Q = [{cur:start,str:start}];
//     // map {A:[B,Z],B:[C,A],C:[B,Y,Q],Z:[A,Y],Y:[C,Z],Q:[C]}
//   while(Q.length>0){
//     var cur = Q.shift();
//     if(cur.cur == target) return cur.str;
//     for(var i=0,y=map[cur.cur].length;i<y;i++){
//       var nxt = map[cur.cur][i];
//       if(pointBin.indexOf(nxt) == -1){
//         pointBin.push(nxt);
//         Q.push({cur:nxt,str:cur.str+'-'+nxt});   
//       }
//     }  
//   }
//   return -1;
// }

// function ShortestPath(strArr) { 
//   var places = {};
//   var nPlaces = strArr[0]*1;
//   for (var i = 1; i <= nPlaces; i++) {
//     places[strArr[i]] = {
//       name: strArr[i],
//       path: '',
//       routes: {}
//     };
//   }
//   for (i = nPlaces + 1; i < strArr.length; i++) {
//     var route = strArr[i].split('-');
//     places[route[0]].routes[route[1]] = places[route[1]];
//     places[route[1]].routes[route[0]] = places[route[0]];
//   }
//   var start = places[strArr[1]];
//   var finish = places[strArr[nPlaces]];
//   start.path = start.name;
//   var pending = [start];
//   while (pending.length > 0) {
//     var here = pending.shift();
//     if (here === finish) {
//       return finish.path;
//     }
//     for(var place in here.routes) {
//       if (here.routes[place].path === '') {
//         var next = here.routes[place];
//         next.path = here.path + '-' + next.name;
//         pending.push(next);
//       }
//     }
//   }
//   return -1;
// }

// 3.
// Using the JavaScript language, have the function TransitivityRelations(strArr) read the strArr parameter being passed which will make up an NxN matrix where the rows are separated by each pair of parentheses (the matrix will range from 2x2 to 5x5). The matrix represents connections between nodes in a graph where each node corresponds to the Nth element in the matrix (with 0 being the first node). If a connection exists from one node to another, it will be represented by a 1, if not it will be represented by a 0. For example: suppose strArr were a 3x3 matrix with input 
// ["(1,1,1)","(1,0,0)","(0,1,0)"], this means that there is a connection from node 0->0, 0->1, and 0->2. For node 1 the connections are 1->0, and for node 2 the connections are 2->1. This can be interpreted as a connection existing from node X to node Y if there is a 1 in the Xth row and Yth column. Note: a connection from X->Y does not imply a connection from Y->X. 

// What your program should determine is whether or not the matrix, which represents connections among the nodes, is transitive. A transitive relation means that if the connections 0->1 and 1->2 exist for example, then there must exist the connection 0->2. More generally, if there is a relation xRy and yRz, then xRz should exist within the matrix. If a matrix is completely transitive, return the string transitive. If it isn't, your program should return the connections needed, in the following format, in order for the matrix to be transitive: (N1,N2)-(N3,N4)-(...). So for the example above, your program should return (1,2)-(2,0). You can ignore the reflexive property of nodes in your answers. Return the connections needed in lexicographical order [e.g. (0,1)-(0,4)-(1,4)-(2,3)-(4,1)].

// Input = "(1,1,1)","(0,1,1)","(0,1,1)"        Output = "transitive"
// Input = "(0,1,0,0)","(0,0,1,0)","(0,0,1,1)","(0,0,0,1)"        Output = "(0,2)-(0,3)-(1,3)"

// function TransitivityRelations(strArr) {

//     var rows = [];
//     var mappings = {};
//     var i = 0;
//     for (var r of strArr) {
//         var cols = r.replace(/[\(\)]/g, '').split(',').map(t=> Number(t));
//         rows.push(cols);
//         var validCols = {};
//         mappings[i] = validCols;
//         for (var j = 0; j < cols.length; j++)
//             if (cols[j] == 1)
//                 validCols[j] = true;

//         i++;
//     }

//     var originalMappings = JSON.parse(JSON.stringify(mappings));;
//     var chnagedSomthing;
//     do {
//         chnagedSomthing = false;
//         for (var r = 0; r < rows.length; r++) {
//             for (var c = 0; c < rows.length; c++) {
//                 if (!mappings[r][c])
//                     continue;
//                 for (var r2 = 0; r2 < rows.length; r2++) {
//                     if (r2 == r || r2 == c)
//                         continue;
//                     if (mappings[r2][r] && !mappings[r2][c]) {
//                         mappings[r2][c] = true;
//                         chnagedSomthing = true;
//                     }
//                 }
//             }
//         }
//     } while (chnagedSomthing)

//     var res = "";
//     for (var r in mappings) {
//         for (var c in mappings[r]) {
//             if (!originalMappings[r][c]) {
//                 if (res != '')
//                     res += "-";
//                 res += '(' + r + ',' + c + ')'
//             }
//         }
//     }
//     // code goes here  
//     return res || 'transitive';

// }

// function TransitivityRelations(strArr) { 
//   var size = strArr[0].match(/\d/g).length;
//   var nodes = [], missing = [];
//   for (var i = 0; i < size; i++) {
//     nodes.push({
//       links: []
//     });
//   }
//   for (i = 0; i < strArr.length; i++) {
//     var links = strArr[i].match(/\d/g);
//     for (var o = 0; o < size; o++) {
//       if (links[o] === '1') {
//         nodes[i].links.push(o);
//       }
//     }
//   }
//   function hasLink(a, b) {
//     var pot = [a];
//     var s = 0;
//     while (s < pot.length) {
//       var currentNode = nodes[pot[s]];
//       for (i = 0; i < currentNode.links.length; i++) {
//         var linkedNode = currentNode.links[i];
//         if (linkedNode === b) {
//           return true;
//         }
//         if (pot.indexOf(linkedNode) === -1) {
//           pot.push(linkedNode);
//         }
//       }
//       s+=1;
//     }
//     return false;
//   }
//   for(var a = 0; a < size; a++) {
//     for (var b = 0; b < size; b++) {
//       if (a === b) {
//         continue;
//       }
//       if (hasLink(a, b) && nodes[a].links.indexOf(b) === -1) {
//         missing.push('(' + a + ',' + b + ')');
//       }
//     }
//   }
//   if (missing.length === 0) {
//     return 'transitive';
//   }
//   return missing.join('-');
// }

// 2.
// Using the JavaScript language, have the function OptimalAssignments(strArr) read strArr which will represent an NxN matrix and it will be in the following format: ["(n,n,n...)","(...)",...] where the n's represent integers. This matrix represents a machine at row i performing task at column j. The cost for this is matrix[i][j]. Your program should determine what machine should perform what task so as to minimize the whole cost and it should return the pairings of machines to tasks in the following format: (i-j)(...)... Only one machine can perform one task. For example: if strArr is ["(5,4,2)","(12,4,3)","(3,4,13)"] then your program should return (1-3)(2-2)(3-1) because assigning the machines to these tasks gives the least cost. The matrix will range from 2x2 to 6x6, there will be no negative costs in the matrix, and there will always be a unique answer. 
// Input = "(1,2,1)","(4,1,5)","(5,2,1)"      Output = "(1-1)(2-2)(3-3)"
// Input = "(13,4,7,6)","(1,11,5,4)","(6,7,2,8)","(1,3,5,9)"      Output = "(1-2)(2-4)(3-3)(4-1)"

// function OptimalAssignments(strArr) {
//   for(var i=0;i<strArr.length;i++){
//     strArr[i] = strArr[i].match(/\d+/g);
//   }
//   var indexes = [];
//   for(var i=0;i<strArr[0].length;i++){
//     indexes.push(i);
//   }
//   indexes = indexes.join(',');
//   var workArr = [],leastWork=0,sum,randIndex,column,leastSum=10000,indexes,count=0;
//   function findWork(myArr){ 
//     count++;
//     sum = 0;
//     columns = mixIndexes();
//     for(var i=0;i<myArr.length;i++){
//       sum += Number(myArr[i][columns[i]]); 
//     }
//     if(sum < leastSum){
//       leastSum = sum;
//       leastWork = columns;
//     }
//     if(count > 1000){
//       var answer = "";
//       var hi;
//       for(var i=0;i<leastWork.length;i++){
//         hi = i + 1
//         answer += "(" + hi + "-" + Number(leastWork[i] + 1) + ")"
//       }
//       return answer;
//     }
//     return findWork(strArr);
//   }
//   return findWork(strArr);
//   var newIndexes, myIndexes,num;
//   function mixIndexes(){
//     myIndexes = indexes.split(',');
//     newIndexes = [];
//     while(myIndexes.length > 0){
//       randIndex = Math.floor(Math.random()*myIndexes.length);
//       num = Number(myIndexes.splice(randIndex, 1));
//       newIndexes.push(num);
//     }
//     return newIndexes;
//   }      
// }

// function OptimalAssignments(strArr) { 
//   var m = [];
//   var cols = strArr[0].split(',').length;
//   for (var i = 0; i < strArr.length; i += 1) {
//     var row = strArr[i].match(/\d+/g)
//     m.push(row);
//   }
//   var mr = new Munkres();
//   var ind = mr.compute(m);
//   var r = [];
//   for (i = 0; i < ind.length; ++i) {
//     r.push('(' + (ind[i][0]*1+1) + '-' + (ind[i][1]*1+1) + ')');
//   }
//   return r.join('');
// }
// var MAX_SIZE = parseInt(Number.MAX_SAFE_INTEGER/2) || ((1 << 26)*(1 << 26));

// var DEFAULT_PAD_VALUE = 0;

// function Munkres() {
//   this.C = null

//   this.row_covered = []
//   this.col_covered = []
//   this.n = 0
//   this.Z0_r = 0
//   this.Z0_c = 0
//   this.marked = null
//   this.path = null
// }

// Munkres.prototype.pad_matrix = function(matrix, pad_value) {
//   pad_value = pad_value || DEFAULT_PAD_VALUE;

//   var max_columns = 0;
//   var total_rows = matrix.length;

//   for (var i = 0; i < total_rows; ++i)
//     if (matrix[i].length > max_columns)
//       max_columns = matrix[i].length;

//   total_rows = max_columns > total_rows ? max_columns : total_rows;

//   var new_matrix = [];

//   for (var i = 0; i < total_rows; ++i) {
//     var row = matrix[i] || [];
//     var new_row = row.slice();

//     // If this row is too short, pad it
//     while (total_rows > new_row.length)
//       new_row.push(pad_value);

//     new_matrix.push(new_row);
//   }

//   return new_matrix;
// };

// Munkres.prototype.compute = function(cost_matrix, options) {

//   options = options || {};
//   options.padValue = options.padValue || DEFAULT_PAD_VALUE;

//   this.C = this.pad_matrix(cost_matrix, options.padValue);
//   this.n = this.C.length;
//   this.original_length = cost_matrix.length;
//   this.original_width = cost_matrix[0].length;

//   var nfalseArray = []; /* array of n false values */
//   while (nfalseArray.length < this.n)
//     nfalseArray.push(false);
//   this.row_covered = nfalseArray.slice();
//   this.col_covered = nfalseArray.slice();
//   this.Z0_r = 0;
//   this.Z0_c = 0;
//   this.path =   this.__make_matrix(this.n * 2, 0);
//   this.marked = this.__make_matrix(this.n, 0);

//   var step = 1;

//   var steps = { 1 : this.__step1,
//                 2 : this.__step2,
//                 3 : this.__step3,
//                 4 : this.__step4,
//                 5 : this.__step5,
//                 6 : this.__step6 };

//   while (true) {
//     var func = steps[step];
//     if (!func) // done
//       break;

//     step = func.apply(this);
//   }

//   var results = [];
//   for (var i = 0; i < this.original_length; ++i)
//     for (var j = 0; j < this.original_width; ++j)
//       if (this.marked[i][j] == 1)
//         results.push([i, j]);

//   return results;
// };

// Munkres.prototype.__make_matrix = function(n, val) {
//   var matrix = [];
//   for (var i = 0; i < n; ++i) {
//     matrix[i] = [];
//     for (var j = 0; j < n; ++j)
//       matrix[i][j] = val;
//   }

//   return matrix;
// };

// Munkres.prototype.__step1 = function() {
//   for (var i = 0; i < this.n; ++i) {
//     // Find the minimum value for this row and subtract that minimum
//     // from every element in the row.
//     var minval = Math.min.apply(Math, this.C[i]);

//     for (var j = 0; j < this.n; ++j)
//       this.C[i][j] -= minval;
//   }

//   return 2;
// };

// Munkres.prototype.__step2 = function() {
//   for (var i = 0; i < this.n; ++i) {
//     for (var j = 0; j < this.n; ++j) {
//       if (this.C[i][j] == 0 &&
//         !this.col_covered[j] &&
//         !this.row_covered[i])
//       {
//         this.marked[i][j] = 1;
//         this.col_covered[j] = true;
//         this.row_covered[i] = true;
//       }
//     }
//   }

//   this.__clear_covers();

//   return 3;
// };

// Munkres.prototype.__step3 = function() {
//   var count = 0;

//   for (var i = 0; i < this.n; ++i) {
//     for (var j = 0; j < this.n; ++j) {
//       if (this.marked[i][j] == 1) {
//         this.col_covered[j] = true;
//         ++count;
//       }
//     }
//   }

//   return (count >= this.n) ? 7 : 4;
// };

// Munkres.prototype.__step4 = function() {
//   var done = false;
//   var row = -1, col = -1, star_col = -1;

//   while (!done) {
//     var z = this.__find_a_zero();
//     row = z[0];
//     col = z[1];

//     if (row < 0)
//       return 6;

//     this.marked[row][col] = 2;
//     star_col = this.__find_star_in_row(row);
//     if (star_col >= 0) {
//       col = star_col;
//       this.row_covered[row] = true;
//       this.col_covered[col] = false;
//     } else {
//       this.Z0_r = row;
//       this.Z0_c = col;
//       return 5;
//     }
//   }
// };

// Munkres.prototype.__step5 = function() {
//   var count = 0;

//   this.path[count][0] = this.Z0_r;
//   this.path[count][1] = this.Z0_c;
//   var done = false;

//   while (!done) {
//     var row = this.__find_star_in_col(this.path[count][1]);
//     if (row >= 0) {
//       count++;
//       this.path[count][0] = row;
//       this.path[count][1] = this.path[count-1][1];
//     } else {
//       done = true
//     }

//     if (!done) {
//       var col = this.__find_prime_in_row(this.path[count][0]);
//       count++;
//       this.path[count][0] = this.path[count-1][0];
//       this.path[count][1] = col;
//     }
//   }

//   this.__convert_path(this.path, count);
//   this.__clear_covers();
//   this.__erase_primes();
//   return 3;
// };

// Munkres.prototype.__step6 = function() {
//   var minval = this.__find_smallest();

//   for (var i = 0; i < this.n; ++i) {
//     for (var j = 0; j < this.n; ++j) {
//       if (this.row_covered[i])
//         this.C[i][j] += minval;
//       if (!this.col_covered[j])
//         this.C[i][j] -= minval;
//     }
//   }

//   return 4;
// };

// Munkres.prototype.__find_smallest = function() {
//   var minval = MAX_SIZE;

//   for (var i = 0; i < this.n; ++i)
//     for (var j = 0; j < this.n; ++j)
//       if (!this.row_covered[i] && !this.col_covered[j])
//         if (minval > this.C[i][j])
//           minval = this.C[i][j];

//   return minval;
// };

// Munkres.prototype.__find_a_zero = function() {
//   for (var i = 0; i < this.n; ++i)
//     for (var j = 0; j < this.n; ++j)
//       if (this.C[i][j] == 0 &&
//         !this.row_covered[i] &&
//         !this.col_covered[j])
//         return [i, j];

//   return [-1, -1];
// };

// Munkres.prototype.__find_star_in_row = function(row) {
//   for (var j = 0; j < this.n; ++j)
//     if (this.marked[row][j] == 1)
//       return j;

//   return -1;
// };

// Munkres.prototype.__find_star_in_col = function(col) {
//   for (var i = 0; i < this.n; ++i)
//     if (this.marked[i][col] == 1)
//       return i;

//   return -1;
// };

// Munkres.prototype.__find_prime_in_row = function(row) {
//   for (var j = 0; j < this.n; ++j)
//     if (this.marked[row][j] == 2)
//       return j;

//   return -1;
// };

// Munkres.prototype.__convert_path = function(path, count) {
//   for (var i = 0; i <= count; ++i)
//     this.marked[path[i][0]][path[i][1]] =
//       (this.marked[path[i][0]][path[i][1]] == 1) ? 0 : 1;
// };

// Munkres.prototype.__clear_covers = function() {
//   for (var i = 0; i < this.n; ++i) {
//     this.row_covered[i] = false;
//     this.col_covered[i] = false;
//   }
// };

// Munkres.prototype.__erase_primes = function() {
//   for (var i = 0; i < this.n; ++i)
//     for (var j = 0; j < this.n; ++j)
//       if (this.marked[i][j] == 2)
//         this.marked[i][j] = 0;
// };

// 1.
//Using the JavaScript language, have the function SudokuQuadrantChecker(strArr) read the strArr parameter being passed which will represent a 9x9 Sudoku board of integers ranging from 1 to 9. The rules of Sudoku are to place each of the 9 integers integer in every row and column and not have any integers repeat in the respective row, column, or 3x3 sub-grid. The input strArr will represent a Sudoku board and it will be structured in the following format: ["(N,N,N,N,N,x,x,x,x)","(...)","(...)",...)] where N stands for an integer between 1 and 9 and x will stand for an empty cell. Your program will determine if the board is legal; the board also does not necessarily have to be finished. If the board is legal, your program should return the string legal but if it isn't legal, it should return the 3x3 quadrants (separated by commas) where the errors exist. The 3x3 quadrants are numbered from 1 to 9 starting from top-left going to bottom-right. 

// For example, if strArr is: ["(1,2,3,4,5,6,7,8,1)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(1,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)"] then your program should return 1,3,4 since the errors are in quadrants 1, 3 and 4 because of the repeating integer 1. 

// Another example, if strArr is: ["(1,2,3,4,5,6,7,8,9)","(x,x,x,x,x,x,x,x,x)","(6,x,5,x,3,x,x,4,x)","(2,x,1,1,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,x)","(x,x,x,x,x,x,x,x,9)"] then your program should return 3,4,5,9.

// function SudokuQuadrantChecker(strArr) { 
//   function reformat(sA){
//     var board = [];
//     for(var i=0;i<sA.length;i++){
//       arr = sA[i].match(/[x\d]/g); 
//       board.push(arr);
//     }
//     return board;
//   }
//   var board = reformat(strArr);
  
//   function columnsToRows(brd){
//     var board = [];
//     for(var i=0;i<brd.length;i++){
//       for(var j=0;j<brd[i].length;j++){
//         if(i === 0){
//           board.push([]);
//         }
//         board[j].push(brd[i][j]);
//       }
//     }
//     return board;                  
//   }
  
//   function labelRepeatingNums(brd){
//     var board = [];
//     for(var i=0;i<brd.length;i++){
//       var nums = [];
//       var repeats = [];
//       board.push([]);
//       for(var j=0;j<brd[i].length;j++){
//         if(nums.indexOf(brd[i][j]) != -1 && brd[i][j] != 'x' && brd[i][j] != 'W'){
//           repeats.push(brd[i][j]); 
//         }
//         else if(brd[i][j] != 'x' && brd[i][j] != 'W'){
//           nums.push(brd[i][j]); 
//         }
//       }
//       for(var k=0;k<brd[i].length;k++){
//         if(repeats.indexOf(brd[i][k]) != -1){
//           board[i].push('W');
//         }
//         else{
//           board[i].push(brd[i][k]) 
//         }
//       }
//     }
//     return board;
//   }
//   var label = labelRepeatingNums(board);
//   var vertLabel = labelRepeatingNums(columnsToRows(board));
//   var label2 = columnsToRows(vertLabel);
//   function combineLabels(lab1,lab2){
//     for(var i=0;i<lab1.length;i++){
//       for(var j=0;j<lab1[i].length;j++){
//         if(lab1[i][j] === 'W' || lab2[i][j] === 'W'){
//           lab1[i][j] = 'W';
//         }
//       }
//     }
//     return lab1;
//   }
//   var fullyLabeled = combineLabels(label,label2);
//   function findFaultyQuads(labeledBoard){
//     var count = 1;
//     var addToQuad = 0;
//     var quad = 1;
//     var badQuads = [];
//     for(var i=0;i<labeledBoard.length;i++){
//       for(var j=0;j<labeledBoard[i].length;j++){
//         if(count > 1 && count % 27 === 1){
//           addToQuad += 3; 
//         }
//         if(count > 1 && count % 3 === 1){
//           quad += 1 
//         }
//         if(count > 1 && count % 9 === 1){
//           quad = addToQuad + 1
//         }
//         if(labeledBoard[i][j] === 'W' && badQuads.indexOf(quad) === -1){
//           badQuads.push(quad); 
//         }
//         count++;
//       }
//     }
//     return badQuads;
//   }
//   return findFaultyQuads(fullyLabeled).join(',') || 'legal';
// }

// function setAdd(s, e) {
//   if (s.indexOf(e) === -1) {
//     s.push(e);
//   }
// }
// function mark(q, x, y, c, d) {
//   if (d.indexOf(c) !== -1) {
//     setAdd(q, Math.floor(y / 3) + (Math.floor(x / 3)) * 3 + 1);
//   }
// }
// function SudokuQuadrantChecker(arr) {
//   var b = [];
//   for (var i = 0; i < arr.length; i += 1) {
//     b.push(arr[i].match(/[\dx]/g));
//   }
  
//   var l = [], d1 = [], d2 = [];
  
//   for (i = 0; i < 9; i += 1) {
//     for (var o = 0; o < 9; o += 1) {
//       d1.push(b[i][o]);
//       d2.push(b[o][i]);
//     }
//     l.push(d1);
//     l.push(d2);
//     d1 = [];
//     d2 = [];
//   }
  
//   var l2 = [];
  
//   for (i = 0; i < l.length; i += 1) {
//     var d = [], t = [];
//     for (o = 0; o < 9; o += 1) {
//       var c = l[i][o];
//       if (t.indexOf(c) !== -1) {
//         setAdd(d, c);
//       }
//       if (!isNaN(c*1)) {
//         t.push(c);
//       }
//     }
//     l2.push(d);
//   }
  
//   var q = [];
  
//   for (i = 0; i < 9; i += 1) {
//     for (o = 0; o < 9; o += 1) {
//       mark(q, i, o, l[i * 2][o], l2[i * 2]);
//       mark(q, o, i, l[1 + i * 2][o], l2[1 + i * 2]);
//     }
//   }
  
//   if (q.length === 0) {
//     return 'legal';
//   } else {
//     return q.sort().join(',');
//   }
// }

//######## MEDIUM CHALLENGES

// 33.
// Using the JavaScript language, have the function StockPicker(arr) take the array of numbers stored in arr which will contain integers that represent the amount in dollars that a single stock is worth, and return the maximum profit that could have been made by buying stock on day x and selling stock on day y where y > x. For example: if arr is [44, 30, 24, 32, 35, 30, 40, 38, 15] then your program should return 16 because at index 2 the stock was worth $24 and at index 6 the stock was then worth $40, so if you bought the stock at 24 and sold it at 40, you would have made a profit of $16, which is the maximum profit that could have been made with this list of stock prices. 
// If there is not profit that could have been made with the stock prices, then your program should return -1. For example: arr is [10, 9, 8, 2] then your program should return -1. 

// Input = 10,12,4,5,9      Output = 5
// Input = 14,20,4,12,5,11      Output = 8

// Algorithm

// We'll solve the challenge the following way:

// (1) Iterate through each number in the list.
// (2) At the ith index, get the i+1 index price and check if it is larger than the ith index price.
// (3) If so, set buy_price = i and sell_price = i+1. Then calculate the profit: sell_price - buy_price.
// (4) If a stock price is found that is cheaper than the current buy_price, set this to be the new buying price and continue from step 2.
// (5) Otherwise, continue changing only the sell_price and keep buy_price set.

// This algorithm runs in linear time, making only one pass through the array, so the running time in the worst case is O(n).

// Example

// Here is an example of the values that are set through each iteration of the stock prices.

// input = [45, 24, 35, 31, 40, 38, 11]

// buy_price = 0
// sell_price = 0
// max_profit = -1

// At i = 0
// buy_price = 45
// sell_price = 24
// max_profit = -1

// At i = 1
// buy_price = 24
// sell_price = 35
// max_profit = 11

// At i = 2
// buy_price = 24
// sell_price = 31
// max_profit = 11

// At i = 3
// buy_price = 24
// sell_price = 40
// max_profit = 16

// At i = 4
// buy_price = 24
// sell_price = 38
// max_profit = 16

// At i = 5
// buy_price = 24
// sell_price = 11
// max_profit = 16

// Loop is done
// max_profit = 16

// function StockPicker(arr) { 
  
//   var max_profit = -1;
//   var buy_price = 0;
//   var sell_price = 0;
  
//   // this allows our loop to keep iterating the buying
//   // price until a cheap stock price is found
//   var change_buy_index = true;
  
//   // loop through list of stock prices once
//   for (var i = 0; i < arr.length-1; i++) {
    
//     // selling price is the next element in list
//     sell_price = arr[i+1]; 
    
//     // if we have not found a suitable cheap buying price yet
//     // we set the buying price equal to the current element
//     if (change_buy_index) { buy_price = arr[i]; }
    
//     // if the selling price is less than the buying price
//     // we know we cannot make a profit so we continue to the 
//     // next element in the list which will be the new buying price
//     if (sell_price < buy_price) {
//       change_buy_index = true; 
//       continue;
//     }
    
//     // if the selling price is greater than the buying price
//     // we check to see if these two indices give us a better 
//     // profit then what we currently have
//     else { 
//       var temp_profit = sell_price - buy_price;
//       if (temp_profit > max_profit) { max_profit = temp_profit; }
//       change_buy_index = false;
//     }
    
//   }
  
//   return max_profit;
         
// }

// StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15]);

// https://www.glassdoor.com/Interview/You-have-all-of-the-prices-for-a-given-stock-for-the-next-year-You-can-buy-once-and-sell-once-in-that-year-How-do-you-det-QTN_95351.htm

// 32.
//Using the JavaScript language, have the function NumberEncoding(str) take the str parameter and encode the message according to the following rule: encode every letter into its corresponding numbered position in the alphabet. Symbols and spaces will also be used in the input. For example: if str is "af5c a#!" then your program should return 1653 1#!.
// Input = "hello 45"   Output = 85121215 45
// Input = "jaj-a"     Output = 10110-1

// function NumberEncoding(str) { 
//   var res = "";
//   for (c of str){
//     if (c>='a' && c<='z')
//       res+=c.charCodeAt(0)-'a'.charCodeAt(0)+1
//       else
//         res+=c;
//   }
//   // code goes here  
//   return res; 
         
// }

// var alpha = /[a-z]+/i;
// function NumberEncoding(str) {
//   var a = str.toLowerCase().split('');
//   var r = [];
//   while (a.length > 0) {
//     var t = a.shift();
//     if (t >= 'a' && t <= 'z') {
//       r.push((t.charCodeAt(0)-96).toString());
//     } else {
//       r.push(t);
//     }
//   }
//   return r.join('');
// }

// 31.
// Using the JavaScript language, have the function DistinctList(arr) take the array of numbers stored in arr and determine the total number of duplicate entries. For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements.
// Input = 0,-2,-2,5,5,5    Output = 3
// Input = 100,2,101,4    Output = 0

// function DistinctList(arr) { 
//   var m = {}, c = 0;
//   for (var i = 0; i < arr.length; i += 1) {
//     c += m[arr[i]] || 0;
//     m[arr[i]] = 1;
//   }
//   return c;
// }

// 30.
// Using the JavaScript language, have the function LookSaySequence(num) take the num parameter being passed and return the next number in the sequence according to the following rule: to generate the next number in a sequence read off the digits of the given number, counting the number of digits in groups of the same digit. For example, the sequence beginning with 1 would be: 1, 11, 21, 1211, ... The 11 comes from there being "one 1" before it and the 21 comes from there being "two 1's" before it. So your program should return the next number in the sequence given num. 
// Input = 1211   Output = 111221
// Input = 2466   Output = 121426

// function LookSaySequence(num) {
//   var nums = num.toString().split(''), ans='';
//   var c = 1, i = 1, n = nums[0];
//   while (i <= nums.length) {
//     if (i === nums.length || n !== nums[i]) {
//       ans += c + n;
//       c = 1;
//       n = nums[i];
//     } else {
//       c += 1;
//     }
//     i++;
//   }
//   return ans*1;
// }

// 29.
// Using the JavaScript language, have the function OverlappingRectangles(strArr) read the strArr parameter being passed which will represent two rectangles on a Cartesian coordinate plane and will contain 8 coordinates with the first 4 making up rectangle 1 and the last 4 making up rectange 2. It will be in the following format: ["(0,0),(2,2),(2,0),(0,2),(1,0),(1,2),(6,0),(6,2)"] Your program should determine the area of the space where the two rectangles overlap, and then output the number of times this overlapping region can fit into the first rectangle. For the above example, the overlapping region makes up a rectangle of area 2, and the first rectangle (the first 4 coordinates) makes up a rectangle of area 4, so your program should output 2. The coordinates will all be integers. If there's no overlap between the two rectangles return 0. 
// Input = "(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)"    Output = 6
// Input = "(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"     Output = 3

// function getRectangleCoor(coordStr){
//   var x = [];
//   var y = [];
//   for(var i = 0;i<coordStr.length;i+=2){
//     x.push(Number(coordStr[i]));
//     y.push(Number(coordStr[i+1]));    
//   }
//   x.sort();
//   y.sort();
//  return [
//       [x[0],x[3]],
//       [y[0],y[3]]
//     ];
// }

// function  getIntersectDimension(rect1, rect2, dim){
//   var recta, rectb;
//   if (rect1[dim][0]<rect2[dim][0]){
//       recta = rect1;
//       rectb= rect2;
//   }else{
//       recta = rect2;
//       rectb= rect1;
//   }
  
//   return Math.min(Math.abs(rectb[dim][1]-rectb[dim][0]), Math.max(0, Math.abs(recta[dim][1]-rectb[dim][0])));
// }

// function OverlappingRectangles(strArr) { 
//   var points = strArr[0].replace(/[\(\)]/g, '').split(',');
//   var rect1 = getRectangleCoor(points.slice(0, 8))
//   var rect2 = getRectangleCoor(points.slice(8))
//   var rect1width = Math.abs((rect1[0][1]-rect1[0][0]));
//   var rect1height = Math.abs((rect1[1][1]-rect1[1][0]));
  
//   var x = getIntersectDimension(rect1, rect2, 0);
//   var y = getIntersectDimension(rect1, rect2, 1);
//   var areaIntersect = x*y;
//   if (x == 0 || y==0)
//     return 0;
//   return Math.floor(rect1width/x)*Math.floor(rect1height/y);
         
// }


// 28.
// Using the JavaScript language, have the function MostFreeTime(strArr) read the strArr parameter being passed which will represent a full day and will be filled with events that span from time X to time Y in the day. The format of each event will be hh:mmAM/PM-hh:mmAM/PM. For example, strArr may be ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]. Your program will have to output the longest amount of free time available between the start of your first event and the end of your last event in the format: hh:mm. The start event should be the earliest event in the day and the latest event should be the latest event in the day. The output for the previous input would therefore be 01:30 (with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). The input will contain at least 3 events and the events may be out of order. 
// Input = "12:15PM-02:00PM","09:00AM-10:00AM","10:30AM-12:00PM"    Output = "00:30"
// Input = "12:15PM-02:00PM","09:00AM-12:11PM","02:02PM-04:00PM"    Output = "00:04"

// function timeToMins(t) {
//   return ((t[5] === 'P' ? 12 : 0) + t.substring(0, 2) * 1 % 12) * 60 + t.substring(3, 5)*1;
// }
// function minsToTime(m) {
//   var h = Math.floor(m / 60);
//   m = m % 60;
//   return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
// }
// function MostFreeTime(strArr) { 
//   var apts = [];
//   for (var i = 0; i < strArr.length; i += 1) {
//     var s = strArr[i].split('-');
//     apts.push([timeToMins(s[0]), timeToMins(s[1])]);
//   }
//   apts.sort(function (a, b) {
//     return a[0] - b[0];
//   });
//   var f = 0;
//   for (i = 0; i < apts.length - 1; i += 1) {
//     f = Math.max(f, apts[i + 1][0] - apts[i][1]);
//   }
//   return minsToTime(f);
// }

// function MostFreeTime(strArr) {
//   var times=[];
//   var freetime=[];
//   for(var i=0;i<strArr.length;i++){
//     var startend=strArr[i].split('-');
//     times.push(timeStrConvert(startend[0]));
//     times.push(timeStrConvert(startend[1]));
//   }
//   times.sort(function(a,b){return a-b});
//   for(var j=2;j<times.length;j+=2){
//     freetime.push(times[j]-times[j-1]);
//   }
//   freetime.sort(function(a,b){return b-a});
//   return pad(Math.floor(freetime[0]/60))+':'+pad(freetime[0]%60); 
// }

// function pad(num){
//   if(num<10) return '0'+num;
//   return num;
// }
// function timeStrConvert(str){
//   str2=str.replace(/[A-Z]/g,'');
//   str2=str2.split(':');
//   var minutes=Number(str2[1])+(Number(str2[0])*60);
  
//   if(minutes>=(12*60)){
//     minutes-=(12*60);
//   }
//   if(str.substr(-2)=='PM'){
//       minutes+=(12*60);
//   }
  
//   return minutes;
// }
   
// 27.
// Using the JavaScript language, have the function MultipleBrackets(str) take the str parameter being passed and return 1 #ofBrackets if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello [world])(!)", then the output should be 1 3 because all the brackets are matched and there are 3 pairs of brackets, but if str is "((hello [world])" the the output should be 0 because the brackets do not correctly match up. Only "(", ")", "[", and "]" will be used as brackets. If str contains no brackets return 1. 
// Input = "(coder)[byte)]"Output = 0
// Input = "(c([od]er)) b(yt[e])"Output = 1 5

// function MultipleBrackets(str) { 
//   var str = str.replace(/[^\(\)\[\]]/g, '');
//   var o = '';
//   var c = -1;
//   while (o != str) {
//     o = str;
//     str = str.replace(/(\(\))|(\[\])/, '');
//     c += 1;
//   }
//   if (str === '') {
//     return '1 ' + c;
//   }
//   return '0';
// }

// 26.
// Using the JavaScript language, have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no. 
// Input = 34   Output = "yes"
// Input = 54   Output = "no"

// function FibonacciChecker(num) { 
//   num=num*num*5;
//   if(Math.sqrt(num+4)%1==0){
//     return 'yes';
//   }else if(Math.sqrt(num-4)%1==0){
//     return 'yes';
//   }
//   return 'no';
         
// }

// function FibonacciChecker(n) { 
//   return ((Math.sqrt(5*Math.pow(n,2)+4) % 1 === 0) || (Math.sqrt(5*Math.pow(n,2)-4) % 1 === 0))
//     ? 'yes' : 'no';
// }

// 25.
// Using the JavaScript language, have the function CoinDeterminer(num) take the input, which will be an integer ranging from 1 to 250, and return an integer output that will specify the least number of coins, that when added, equal the input integer. Coins are based on a system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the output should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins. 
// Input = 6    Output = 2
// Input = 16   Output = 2

// function CoinDeterminer(num) { 
//   var best=num;
//   var back=function back(current,cant,coins){
//     if (cant==0)
//     {
//       if (current<best) best=current;
//       return;
//     }
//     for (var i=0;i<coins.length;i++)
//     {
//       var coin=coins.splice(i,1);
//       if (cant>=coin) back(current+Math.floor(cant/coin),cant%coin,coins);
//       coins.splice(i,0,coin);
//     }
//   }(0,num,[11,9,7,5,1]);
//   // code goes here  
//   return best; 
         
// }

// 24.
// Using the JavaScript language, have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5 that are below num. For example: if num is 10, the multiples of 3 and 5 that are below 10 are 3, 5, 6, and 9, and adding them up you get 23, so your program should return 23. The integer being passed will be between 1 and 100.
// Input = 6    Output = 8
// Input = 1    Output = 0

// function ThreeFiveMultiples(num) { 
//   var sum = 0;
//   for (var i = 1; i < num; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// 23.
// Using the JavaScript language, have the function StringReduction(str) take the str parameter being passed and return the smallest number you can get through the following reduction method. The method is: Only the letters a, b, and c will be given in str and you must take two different adjacent characters and replace it with the third. For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. This method is done repeatedly until the string cannot be further reduced, and the length of the resulting string is to be outputted. For example: if str is "cab", "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.
// Input = "abcabc"   Output = 2
// Input = "cccc"   Output = 4

// function StringReduction(str) { 
//   var strArr = str.split('');
//   for(var i=0;i<strArr.length;i++){
//     if(strArr[i+1] != null){
//       if(strArr[i] != strArr[i+1] && strArr[i] != 'a' && strArr[i+1] != 'a'){
//         strArr.splice(i,2,'a');
//         i = -1;
//       }
//       else if(strArr[i] != strArr[i+1] && strArr[i] != 'b' && strArr[i+1] != 'b'){
//         strArr.splice(i,2,'b');
//         i = -1;
//       }
//       else if(strArr[i] != strArr[i+1] && strArr[i] != 'c' && strArr[i+1] != 'c'){
//         strArr.splice(i,2,'c');
//         i = -1;
//       }
//     }
//   }
//   return strArr.length;
// }

// 22.
// Using the JavaScript language, have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.
  // Input = "(coder)(byte))"     Output = 0
  // Input = "(c(oder)) b(yte)"     Output = 1

  // function BracketMatcher(str) { 
  //   var len = str.length + 1;
  //   while (str.length < len) {
  //     len = str.length;
  //     str = str.replace(/([^\(\)])|(\([^\(\)]*\))/g, '');
  //   }
  //   return str.length === 0 ? 1 : 0;      
  // }

// 21.
// Using the JavaScript language, have the function TripleDouble(num1,num2) take both parameters being passed, and return 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2. For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because in the first parameter you have the straight triple 999 and you have a straight double, 99, of the same number in the second parameter. If this isn't the case, return 0. 
// Input = 465555 & num2 = 5579   Output = 1
// Input = 67844 & num2 = 66237   Output = 0

// function freq(num) {
//   var str = num.toString();
//   var res = [];
//   for (var i = 0; i < 10; i++) {
//     var digits = str.match(new RegExp(i.toString() + '*', 'g'));
//     var run = 0;
//     for (var o = 0; o < (digits === null ? 0 : digits.length); o++) {
//       run = Math.max(run, digits[o].length);
//     }
//     res.push(run);
//   }
//   return res;
// }

// function TripleDouble(num1,num2) { 
//   var f1 = freq(num1),
//       f2 = freq(num2);
//   for (var i = 0; i < 10; i++) {
//     if (f1[i] >= 3 && f2[i] >= 2) {
//       return 1;
//     }
//   }
//   return 0;
// }

// 20.
// Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole string (So this won't ever be the case: hello44444 world). Each string will also have at least one letter. 
  // Input = "H3ello9-9"      Output = 4
  // Input = "One Number*1*"      Output = 0

  // function NumberSearch(str) { 
  //   var nums = str.match(/\d/g);
  //   var letters = str.match(/[a-z]/gi);
  //   var tot = 0;
  //   if (nums !== null) {
  //     for (var i = 0; i < nums.length; i++) {
  //       tot += nums[i]*1;
  //     }
  //   }
  //   return Math.round(tot / letters.length);
  // }

  // function NumberSearch(str) { 
  //   var letters=str.match(/[a-zA-Z]/g);
  //   var numbers=str.match(/[0-9]/g);
  //   if(!numbers) return 0;
  //   var sum=eval(numbers.join('+'));
  //   // code goes here  
  //   return Math.round(sum/letters.length); 
           
  // }


// 19.
// Using the JavaScript language, have the function SwapII(str) take the str parameter and swap the case of each character. Then, if a letter is between two numbers (without separation), switch the places of the two numbers. For example: if str is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3. 
// Input = "Hello -5LOL6"   Output = "hELLO -6lol5"
// Input = "2S 6 du5d4e"    Output = "2s 6 DU4D5E"

// function swapCase(str) {
//   var s = '';
//   for (var i = 0; i < str.length; i++) {
//     s += (str[i].toLowerCase() === str[i]) ? str[i].toUpperCase() : str[i].toLowerCase(); 
//   }
//   return s;
// }
// function SwapII(str) { 
//  return swapCase(str).replace(/(\d)[a-z]+(\d)/gi, function (c) { return c[c.length-1] + c.slice(1, c.length-1) + c[0] });
// }

// function SwapII(str) { 
//   var swap = str.replace(/\d[a-z]+\d/ig,function(c){
//     return c[c.length-1] + c.match(/[a-z]+/ig).join('') + c[0];
//   });
//   var fullSwap = swap.replace(/[a-z]/ig,function(c){
//     if(c == c.toUpperCase()) return c.toLowerCase();
//     if(c == c.toLowerCase()) return c.toUpperCase();
//   });
//   return fullSwap;
// }

// 18.
// Using the JavaScript language, have the function DashInsertII(str) insert dashes ('-') between each two odd numbers and insert asterisks ('*') between each two even numbers in str. For example: if str is 4546793 the output should be 454*67-9-3. Don't count zero as an odd or even number. 
// Input = 99946    Output = 9-9-94*6
// Input = 56647304   Output = 56*6*47-304

// function DashInsertII(num) { 
//   var numArr = num.toString().split('');
//   var myArr = [];
//   for(var i=0;i<numArr.length;i++){
//     if(/[13579]/ig.test(numArr[i]) && /[13579]/ig.test(numArr[i+1])){
//       myArr.push(numArr[i]);
//       myArr.push('-');
//     } else if(/[2468]/ig.test(numArr[i]) && /[2468]/ig.test(numArr[i+1])){
//       myArr.push(numArr[i]);
//       myArr.push('*');
//     }
//     else myArr.push(numArr[i]);      
//   }
//   return myArr.join('');
// }

// function DashInsertII(num) { 
//   var num=num+'';
//   var output=[num[0]];
  
//   for(var i=1;i<num.length;i++){
//     if(num[i]%2==num[i-1]%2&&num[i]!=0&&num[i-1]!=0){
//       if(num[i]%2==1){
//         output.push('-');
//       }else{
//         output.push('*');
//       }
//     }
//     output.push(num[i]);
//   }
//   // code goes here  
//   return output.join(''); 
         
// }

// 17.
// Using the JavaScript language, have the function PrimeChecker(num) take num and return 1 if any arrangement of num comes out to be a prime number, otherwise return 0. For example: if num is 910, the output should be 1 because 910 can be arranged into 109 or 019, both of which are primes.
// Input = 98   Output = 1
// Input = 598    Output = 1

// function isPrime(n) {
//   if (n < 2) return false; 
//   for (var i=2; i < n; i++) { 
//     if ((n / i) % 1 === 0) return false; 
//   }
//   return true;
// }

// function getAllPerms(s) {
//   var perms = [];
//   if (s.length === 1) {
//     perms.push(s);
//   } else {
//     for (var i = 0; i < s.length; i++) {
//       var sub = s.slice(0);
//       sub.splice(i, 1);
//       var sp = getAllPerms(sub);
//       for (var o = 0; o < sp.length; o++) {
//         sp[o].unshift(s[i]);
//         perms.push(sp[o]);
//       }
//     }
//   }
//   return perms;
// }

// function PrimeChecker(num) {
//   var digits = num.toString().split(''),
//       perms = [],
//       size = digits.length;
//   perms = getAllPerms(digits);
//   for (var p = 0; p < perms.length; p++) {
//     if (isPrime(perms[p].join('')*1)) {
//       return 1;
//     }
//   }
//   return 0;
// }


// var count = 0;
// function PrimeChecker(num) { 
//   count++;
//   var numArr = num.toString().split('');
//   var hi = [];
//   while(numArr.length >0){
//     var randIn = Math.floor(Math.random()*numArr.length);
//     var randNum = numArr.splice(randIn,1);
//     hi.push(randNum);
//   }    
//   var myNum = parseInt(hi.join(''));
//   for(var i=2;i<myNum;i++){
//     if(myNum%i===0) i = i + 10000;
//   }
//   if(i < 10000) return 1;
//   if(count === 1000) return 0;
//   return PrimeChecker(num);
// }


// 16.
// Using the JavaScript language, have the function PermutationStep(num) take the num parameter being passed and return the next number greater than num using the same digits. For example: if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, return -1 (ie. 999). 
// Input = 11121    Output = 11211
// Input = 41352    Output = 41523

// function getAllPerms(s) {
//   var perms = [];
//   if (s.length === 1) {
//     perms.push(s);
//   } else {
//     for (var i = 0; i < s.length; i++) {
//       var sub = s.slice(0);
//       sub.splice(i, 1);
//       var sp = getAllPerms(sub);
//       for (var o = 0; o < sp.length; o++) {
//         sp[o].unshift(s[i]);
//         perms.push(sp[o]);
//       }
//     }
//   }
//   return perms;
// }

// function PermutationStep(target) { 
//   var res = target.toString().split('');
//   var perms = getAllPerms(res);
//   var c = Infinity;
//   for (var i = 0; i < perms.length; i++) {
//     var next = parseInt(perms[i].join(''), 10);
//     if (next < c && next > target) {
//       c = next;
//     }
//   }
//   if (c === Infinity) {
//     return -1;
//   }
//   return c;  
// }

// 15.
// Using the JavaScript language, have the function CountingMinutes(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 
// Input = "12:30pm-12:00am"    Output = 690
// Input = "1:23am-1:08am"    Output = 1425

// function timeStrToMinutes(timeStr) {
//   var amPm = timeStr.slice(-2).toLowerCase();
//   timeStr = timeStr.slice(0,-2);
//   var bits = timeStr.split(':');
//   bits[0] = bits[0]*1;
//   if (bits[0] === 12) {
//     bits[0] = 0;
//   }
//   bits[1] = bits[1]*1;
//   return bits[0] * 60 + bits[1] + (amPm === 'pm' ? 12 * 60 : 0);
// }

// function CountingMinutes(str) { 
//   var times = str.split('-');
//   var time1 = timeStrToMinutes(times[0]);
//   var time2 = timeStrToMinutes(times[1]);
//   if (time2 <= time1) {
//     time2 += 60 * 24;
//   }
//   // code goes here  
//   return time2-time1;
         
// }


// 14.
// Using the JavaScript language, have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The output must contain a number in the one's place even if it is a zero. 
// Input = 2 & num2 = 3   Output = "0.6667"
// Input = 10 & num2 = 10   Output = "1.0000"

// function FormattedDivision(num1, num2) { 

//   // convert divided answer into string with 4 
//   // significant digits used toFixed function
//   var div = (num1/num2).toFixed(4).split('');
  
//   // keep counter for inserting comma logic
//   var insert = -1;
  
//   // logic for inserting a comma every 3
//   // elements in the array starting from position of decimal point
//   // e.g. ['4', '5', '3', '2', '.', '2'] becomes ['4', ',5', '3', '2', '.', '2']
//   for (var i = div.indexOf('.'); i > 0; i--) {
//     insert++;
//     if (insert === 3) { 
//       div[i] = ',' + div[i];
//       insert = 0;
//     } 
//   }
  
//   return div.join('');
         
// }         

// FormattedDivision(123456789, 10000); 

// 13.
//Using the JavaScript language, have the function Consecutive(arr) take the array of integers stored in arr and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number. For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers may be entered as parameters and no array will have less than 2 elements. 
// Input = 5,10,15    Output = 8
// Input = -2,10,4    Output = 10

// function Consecutive(arr) { 

//   // get min and max values of array
//   var min = Math.min.apply(null, arr);
//   var max = Math.max.apply(null, arr);
  
//   // numbers needed to fill array are all numbers in
//   // between max and min minus the other elements in the array
//   return max - min - (arr.length - 1);
         
// }

// Consecutive([1,2,9,10]); 


// 12.
// Using the JavaScript language, have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty. 
// Input = 5,5,2,2,1  Output = 5
// Input = 3,4,1,6,10   Output = -1

// function SimpleMode(arr) { 
  
//   // the table that will contain each number as the key
//   // and the number of times it occurs as the value
//   // e.g. {"5": 1, "3": 3, "1": 1}
//   var table = {};

//   // loop through each number in the array
//   // see if this number already exists in table
//   // if so add 1 to the count, if not set count = 1
//   for (var i = 0; i < arr.length; i++) {
//     var number = arr[i];
//     table[number] === undefined ? table[number] = 1 : table[number] += 1;
//   }

//   // setup a new object that will store the number with the highest count
//   var answer = {number: null, count: 1};
  
//   // get the mode by determining what number appears most often in the table 
//   for (var n in table) {
//     if (table[n] > answer["count"]) {
//       answer["count"] = table[n];
//       answer["number"] = n;
//     }
//   }

//   // return the mode if one exists
//   return (answer["count"] === 1) ? -1 : answer["number"];
         
// }
   
// SimpleMode([1,2,3,5,5,2]); 

// 11. 
// Using the JavaScript language, have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the output should be "Ecguct Ekrjgt". 
// Input = "Hello" & num = 4  Output = "Lipps"
// Input = "abc" & num = 0  Output = "abc"

// function CaesarCipher(str, num) { 

//   var letters = "abcdefghijklmnopqrstuvwxyz";
//   var code = "";
//   var c;
  
//   // loop through entire string
//   for (var i = 0; i < str.length; i++) {
    
//     // current character
//     c = str.charAt(i);
    
//     // shift lowercase letters by N in the alphabet
//     // then mod 26 to get the number within range of a..z
//     if (letters.indexOf(c) !== -1) {
//       code += letters.charAt((letters.indexOf(c) + num) % 26);
//     }
    
//     // shift uppercase letters
//     else if (letters.indexOf(c.toLowerCase()) !== -1) {
//       code += letters.charAt((letters.indexOf(c.toLowerCase()) + num) % 26).toUpperCase();
//     }
    
//     // append non-alpha characters
//     else { code += c; }
    
//   }
  
//   return code;
         
// }
   
// CaesarCipher("Hello world", 15);

// 10.
// Using the JavaScript language, have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 
// Input = "Hello apple pie"    Output = Hello
// Input = "No words"   Output = -1

// function LetterCountI(str) { 

//   // array of words
//   var words = str.split(" ");
  
//   // the table that will contain each word with a key and value pair
//   // being the characters and the number of times they appeared
//   // e.g. {hello: {h: 1, e: 1, l: 2, o: 1}}
//   var table = {};
  
//   // loop through each word
//   for (var i = 0; i < words.length; i++) {
    
//     // create new entry in table with the key 
//     // being this word
//     var thisWord = words[i];
//     table[thisWord] = {};
    
//     // create a key/value pair that will store
//     // the highest letter count for each word
//     table[thisWord]["highest"] = 0;
    
//     // loop through each character in word and
//     // store number of times each letter appears
//     for (var c = 0; c < words[i].length; c++) {
     
//       // see if this character already exists in table for
//       // this word: if so add 1 to the count, if not set count = 1
//       var thisChar = thisWord[c];
//       table[thisWord][thisChar] === undefined ?
//         table[thisWord][thisChar] = 1 :
//         table[thisWord][thisChar] += 1;
      
//       // update the highest letter count for each 
//       // new letter in the iteration
//       if (table[thisWord][thisChar] > table[thisWord]["highest"]) {
//         table[thisWord]["highest"] = table[thisWord][thisChar];
//       }
      
//     }
    
//   }

//   // setup a new object that will store the word
//   // with the highest number of repeating characters
//   var answer = {word: null, count: 1};
  
//   // now determine what word has the highest number 
//   // of repeating letters by accessing the "highest"
//   // property of each word in the table
//   for (var w in table) {
//     if (table[w]["highest"] > answer["count"]) {
//       answer["count"] = table[w]["highest"];
//       answer["word"] = w;
//     }
//   }
  
//   return (answer["count"] === 1) ? -1 : answer["word"];
       
// }
   
// LetterCountI("world hello from coderbyte"); 

// 9.
// Using the JavaScript language, have the function BinaryConverter(str) return the decimal form of the binary value. For example: if 101 is passed return 5, or if 1000 is passed return 8.
// Input = "100101"   Output = "37"
// Input = "011"    Output = "3" 

// function BinaryConverter(str) { 

//   // the parseInt function takes a radix as the second parameter
//   // which specifies what base the number is in
//   return parseInt(str, 2)
         
// }

// BinaryConverter("1000");

// 8.
// Using the JavaScript language, have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. 
// Input = 5,7,16,1,2   Output = "false"
// Input = 3,5,-1,8,12    Output = "true"

// 7.
// Using the JavaScript language, have the function ArithGeoII(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
// Input = 5,10,15    Output = "Arithmetic"
// Input = 2,4,16,24    Output = -1

// function ArithGeo(arr) { 

//   // this function will loop through the provided array
//   // checking to see if the difference provided matches
//   // every element-pair difference in the array
//   function arrayDiffs(diff, arr, subtract) {

//     // loop starting from i=2 and check if every difference is the same
//     for (var i = 2; i < arr.length; i++) { 

//       // store the temporary difference 
//       var tempDiff = (subtract) ? arr[i] - arr[i-1] : arr[i] / arr[i-1];

//       // if differences do not match return false
//       if (tempDiff !== diff) { return false; }

//       // if we reach the end of the array and all differences matched, return true
//       else if (i === arr.length-1 && tempDiff === diff) { return true; }

//     }

//   }

//   // store the first difference for a potential arithmetic sequence
//   var diffArith = arr[1] - arr[0];

//   // store the first difference for a potential geometric sequence
//   var diffGeo = arr[1] / arr[0];

//   // check the whole array for an arithmetic sequence
//   var isArithSeq = arrayDiffs(diffArith, arr, true);
  
//   // if not an arithmetic sequence, check for geometric sequence
//   if (!isArithSeq) {

//     var isGeoSeq = arrayDiffs(diffGeo, arr, false);
//     return (isGeoSeq) ? "Geometric" : -1;

//   } else {

//     return "Arithmetic";

//   }
         
// }
   
// ArithGeo([3, 9, 27, 81]);

// 6.
// Using the JavaScript language, have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters. 
// Input = "cdore" & str2= "coder"      Output = "true"
// Input = "h3llko" & str2 = "hello"      Output = "false"

// function StringScramble(str1, str2) { 

//   // loop through string 2 
//   for (var i = 0; i < str2.length; i++) {
    
//     // check if each character also exists in string 1
//     // if not, return false
//     if (str1.indexOf(str2.charAt(i)) === -1) {
//       return false;
//     }
    
//   }
  
//   // return true if all characters exist in string 1
//   return true;
         
// }
   
// StringScramble("rkqodlw", "world");                                                               

// 5.
// Using the JavaScript language, have the function Division(num1,num2) take both parameters being passed and return the Greatest Common Factor. That is, return the greatest number that evenly goes into both numbers with no remainder. For example: 12 and 16 both are divisible by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3.
// Input = 7 & num2 = 3   Output = 1
// Input = 36 & num2 = 54   Output = 18

// function Division(num1, num2) { 

//   // setup variables
//   var a = num1;
//   var b = num2;
//   var r;
  
//   // keep using the mod function until a or b hits 0
//   while (a > 0 && b > 0) {
//     r = a % b;
//     a = b;
//     b = r;
//   }
  
//   // return the non-zero answer
//   return (a === 0) ? b : a;
         
// }
   
// Division(36, 54);

// function Division(num1,num2) { 

//   // take inputs and push all the factors into an array
//   var arr1 = [];
//   var arr2 = [];
//   var commonFactor = [];

//   for(var i = 1; i <= num1; i++){
//     if(num1 % i === 0){
//       arr1.push(i);
//     }
//   }

//   for(var i = 1; i <= num2; i++){
//     if(num2 % i === 0){
//       arr2.push(i);
//     }
//   }

//   // double for loops to loop thru the larger first and if it matches the smaller, push that into a
//   // common factor array

//   for(var i = 0; i < arr1.length; i++){
//     for(var j = 0; j < arr2.length; j++){
//       if(arr1[i] === arr2[j]){
//         commonFactor.push(arr2[j]);
//       }
//     }
//   }
//   // sort the array and pop the greatest common factor 
//   return commonFactor.pop(); 
         
// }

// 4.
// Using the JavaScript language, have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. 
// Input = "Noel - sees Leon"   Output = "true"
// Input = "A war at Tarawa!"   Output = "true"

// function PalindromeTwo(str) { 

//   // only match letters and numbers, ignore punctuation
//   var arr = str.match(/[a-z0-9]+/gi);
  
//   // join into a string
//   var joined = arr.join('').toLowerCase();
  
//   // check for palindrome
//   return joined === joined.split('').reverse().join('');
         
// }
   
// PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna");


// function PalindromeTwo(str) { 

//   // use str match to filter alphabets then reverse. Push that into another str
//   var strOrig = str.match(/[\w]/gi).join('').toLowerCase();
//   var strArr = str.match(/[\w]/gi).reverse().join('').toLowerCase();
//   // if statement to output true or false
//   if(strOrig === strArr){
//     return true;
//   }else{
//     return false;
//   } 
// }


// 3.
// Using the JavaScript language, have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4. For example: if num is 16 the output should be 53 as 53 is the 16th prime number. 
// Input = 9    Output = 23
// Input = 100    Output = 541

// function PrimeMover(num) {
  
//   // negative numbers cannot be primes
//   if (num < 1) { return 'invalid'; }
  
//   // first prime number is 2, the only even prime
//   if (num === 1) { return 2; }
  
//   // if greater than 2, start count at 1
//   var count = 1;
//   var n = 3;
  
//   // loop until we get the numth prime
//   while (count != num) {
    
//     // check if n is divisible by each number in between to see if it is a prime
//     for (var i = 2; i < n; i++) {
      
//       // if we reach the end we know this number is a prime because it was
//       // not divisible by any numbers so increase the count by 1
//       if (i === n-1) { 
//         count++;
//         n++;
//         break;
//       }
      
//       // if n is divisible by some number, then it is not a prime
//       // and we simply move on to the next number
//       else if (n % i === 0) {
//         n++;
//         break;
//       }
      
//     }
    
//   }
  
//   return n-1;
  
// }

// PrimeMover(250);

// 2.
//Using the JavaScript language, have the function RunLength(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols. 
// Input = "aabbcde"    Output = "2a2b1c1d1e"
// Input = "wwwbbbw"    Output = "3w3b1w"

// function RunLength(str) { 

//   var i = 0;

//   // final compressed string
//   var rle = "";
  
//   // loop through entire string building 
//   // the new compressed version
//   while (i < str.length) {
    
//     // get this current character
//     var c = str[i];
    
//     // the index of the next character
//     var j = i + 1;
    
//     // compressed version of the current character
//     // and its count which starts at 1
//     var compressed = [1, c];
    
//     // if the next character is the same, add 1 to the count
//     // e.g. eeed => [1, e] becomes [2, e] becomes [3, e] then stops
//     while (j < str.length) { 
//       if (str[j] === c) { compressed[0] += 1; } 
//       else { break; }
//       j++;
//     }
    
//     // add this compressed part of the string to the final
//     // compressed version of the string
//     rle += compressed.join('');

//     // start the loop at the next character now
//     i = j;
         
//   }
  
//   return rle;
         
// }

// RunLength("abbbopp");                                                    

// 1.
// Using the JavaScript language, have the function PrimeTime(num) take the num parameter being passed and return the string true if the parameter is a prime number, otherwise return the string false. The range will be between 1 and 2^16. 
// Input = 19     Output = true
// Input = 110      Output = false

// function PrimeTime(num) { 

//   // all numbers less than 2 are not primes
//   if (num < 2) { return false; }       
  
//   // loop from 2 to num and check if num is divisible
//   // by any of these numbers, if so, then it is not a prime
//   for (var i = 2; i < num; i++) {
//     if (num % i === 0) { return false; }
//   }
  
//   // return true if the loop finished and num was  
//   // not divisible evenly by any number
//   return true;
  
// }
   
// PrimeTime(109);

// We can improve the above code because of the following fact: Suppose we have some number N that is not a prime. If N is not a prime, 
// then N = a * b for some integers a and b. 

// Example: N = 110, then 110 = 10 * 11 or 110 = 22 * 5. 

// We can see that in both cases above, no matter what we chose for a or b, one of those numbers is less than the square root of N, in this case, less than Sqrt(110) = 10.48808. In the above example, 10 < 10.48808 and 5 < 10.48808. So in our code, when we run the loop to check if there is some number that evenly divides into N, we only need to loop until the square root of N instead of looping all the way to N.

// function PrimeTime(num) { 

//   // all numbers less than 2 are not primes
//   if (num < 2) { return false; }       
  
//   // more efficient loop
//   for (var i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
//     if (num % i === 0) { return false; }
//   }
  
//   // return true if the loop finished and num was  
//   // not divisible evenly by any number
//   return true;
  
// }
   
// PrimeTime(109);

// function PrimeTime(num) { 

//   var divisorLimit = Math.ceil(Math.sqrt(num));
//   if(num === 1 || num === 2){
//     return true;
//   }else{
//     for(var i = divisorLimit; i > 1; i--){
//       if(num % i === 0 ){
//         return false;
//       } 
//     }
//   }
//   return true; 
         
// }

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
//   var points = strArr.map(function(c) {
//     return c.replace("(","").replace(")","").split(" ").map(function(d) {
//       return Number(d);
//     });
//   }), xs, ys, xDiff, yDiff;
//   xs = points.map(function(c) { return c[0]; });
//   ys = points.map(function(c) { return c[1]; });
//   xDiff = Math.max.apply(null,xs) - Math.min.apply(null,xs);
//   yDiff = Math.max.apply(null,ys) - Math.min.apply(null,ys);
  
//   return xDiff * yDiff;
  
// }

// function RectangleArea(strArr) {
//     strArr.sort();
//     var newArr = [];
//     for (i = 0; i < strArr.length; i++) {
//         strArr[i] = strArr[i].split(" ");
//         newArr.push(+strArr[i][0].slice(1), +strArr[i][1].slice(0,strArr[i][1].length-1));
//     }
    
//     var x = newArr[3] - newArr[1];
//     var y = newArr[4] - newArr[0];
//     return x*y;
// }
 
// 33.
// Using the JavaScript language, have the function HammingDistance(strArr) take the array of strings stored in strArr, which will only contain two strings of equal length and return the Hamming distance between them. The Hamming distance is the number of positions where the corresponding characters are different. For example: if strArr is ["coder", "codec"] then your program should return 1. The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers. 
// Input = "10011", "10100"     Output = 3
// Input = "helloworld", "worldhello"     Output = 8

// function HammingDistance(strArr) {
//   return strArr[0].split("").filter(function(c,i) { return c !== strArr[1][i]; }).length;
// }

// function HammingDistance(strArr) { 
//   var count = 0;
  
//   strArr = strArr.map(x => x.split(''))[0].forEach((e, i) => {
//     if (e !== strArr[1][i]) count++;
//   });
 
//   return count; 
         
// }

// 32.
// Using the JavaScript language, have the function Superincreasing(arr) take the array of numbers stored in arr 
//and determine if the array forms a superincreasing sequence where each element in the array is greater than the
// sum of all previous elements. The array will only consist of positive integers. For example: if arr is 
//[1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing 
//sequence. If a superincreasing sequence isn't formed, then your program should return the string "false"
// Input = 1,2,3,4    Output = "false"
// Input = 1,2,5,10   Output = "true"

function Superincreasing(arr) { 

  // store the sum
  var sum = 0;
  
  // loop through entire array
  for (var i = 0; i < arr.length; i++) {

    // if a number is less than or equal to the current sum, simply return false
    if (arr[i] <= sum) { return "false"; }

    // update the sum after each iteration
    sum += arr[i];

  }
  
  return true;
         
}
   
Superincreasing([1, 3, 6, 13, 54]);

// 31. 
// Using the JavaScript language, have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your program should return the string false. 
// Input = 5,11,1,5,1   Output = true
// Input = 1,8,2,4,4    Output = false

// function OverlappingRanges(arr) {

//   // keep a count of how many numbers overlap
//   var counter = 0;
  
//   // loop through one of the ranges
//   for (var i = arr[0]; i < arr[1]; i++) {

//     // check if a number within the first range exists
//     // in the second range
//     if (i >= arr[2] && i <= arr[3]) { 
//       counter += 1;
//     }

//   }
 
//   // check if the numbers that overlap is equal to or greater
//   // than the last number in the array
//   return (counter >= arr[4]) ? true : false;
// }

// OverlappingRanges([4, 10, 2, 6, 3]); 

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

//   // check if first two numbers form an increasing sequence
//   var increasing = arr[1] > arr[0] ? true : false;
  
//   // loop through the rest of the array
//   for (var i = 2; i < arr.length; i++) {
    
//     // determine if next number in sequence matches 
//     // the boolean value we define in the variable "increasing"
//     var seq = arr[i] > arr[i - 1];
    
//     // if they do not match, then we know the sequence changes
//     if (seq !== increasing) { return i - 1; }

//   }
  
//   // if no change was detected, then just return -1
//   return -1;
         
// }

// ChangingSequence([1, 2, 4, 6, 4, 3, 1]);

// 18. NOT DONE
// Take the array of numbers stored in arr and return the string true if any combination of numbers in the 
//array can be added up to equal the largest number in the array, otherwise return the string false. 
//For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23.

// The subset sum problem is an important problem in computer science. Below we'll provide two common algorithms for solving this problem. The challenge is to determine if there is some subset of numbers in an array that can sum up to some number S. These algorithms can both be implemented to solve Array Addition I and Array Addition.

// Naive solution

// The algorithm for the exponential time, naive solution, is as follows: First we will generate every possible set (the power set), and then check if the sum of any of these sets equals the sum S. For example:

// arr = [1, 2, 3] 
// sum = 5

// All possible sets:
// []
// [1]
// [2]
// [3]
// [1, 2]
// [1, 3]
// [2, 3]
// [1, 2, 3]

// We can see that we can get a sum of 5 by adding the elements in the set [2, 3]. To generate all possible sets of an array, we'll implement the following algorithm:

// (1) The initial power set only contains the empty set: [[]]
// (2) Then we loop through each element in the array and add it to every element in the power set. Then we take the union of these two sets.
// (3) Once we get the power set, we check to see if the sum equals our goal S.

// Example

// arr = [1, 2, 3] 
// sum = 5
// sets = [[]]

// Step 1: Add 1 to the power set
// [[], [1]]

// Step 2: Add 2 to the power set
// [[], [1], [1, 2], [2]]

// Step 3: Add 3 to the power set
// [[], [1], [1, 2], [2], [1, 3], [2, 3], [1, 2, 3], [3]]

// function ArrayAdditionI(arr) {
  
//   // get largest number and remove it from array
//   var sum = Math.max.apply(null, arr);
//   arr.splice(arr.indexOf(sum), 1);
  
//   // power set
//   var sets = [[]];

//   // generate the power set and for each new set
//   // check if the temporary sum equals our sum above
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0, len = sets.length; j < len; j++) {
//       var temp = sets[j].concat(arr[i]);
//       sets.push(temp);
//       var s = temp.reduce(function(p, c) { return p + c; });
//       if (s === sum) { return "true"; }
//     }
//   }
  
//   return "false";
         
// }

// This algorithm runs in O(2n) time because in the worse case, we need to create every possible subset of the array to check if any of them equal the goal sum, and there are 2n possible sets.

// Dynamic programming code

// This algorithm runs in O(Sn) time where S is the sum. You can read more about the running time below.
// https://en.wikipedia.org/wiki/Subset_sum_problem#Pseudo-polynomial_time_dynamic_programming_solution

// function ArrayAddition(arr) {

//   // get largest number and remove it from array
//   var sum = Math.max.apply(null, arr);
//   arr.splice(arr.indexOf(sum), 1);
  
//   // clever way to get rid of negative values
//   for (var i = 0; i < arr.length; i++) { 
//     if (arr[i] < 0) {
//       sum -= arr[i];
//       arr[i] = 0;
//     }
//   }

//   // table to track elements
//   var table = [[]];
  
//   // fill first row 
//   for (var i = 1; i <= sum; i++)
//     table[0][i] = false; 
  
//   // fill first column
//   for (var i = 0; i <= arr.length; i++) {
//     table[i][0] = true; 
//     if (i !== arr.length) 
//       table.push([]);
//   }
  
//   // dynamic programming solution
//   for (var i = 1; i <= arr.length; i++) {
//     for (var j = 1; j <= sum; j++) {
//       table[i][j] = table[i-1][j];
//       if (table[i][j] === false && j >= arr[i-1]) {
//         table[i][j] = table[i][j] || table[i-1][j-arr[i-1]];
//       }
//     }
//   }
  
//   return table[arr.length][sum];
         
// }


// http://www.careercup.com/question?id=12899672
// http://www.careercup.com/question?id=5761544004567040
// http://www.skorks.com/2011/02/algorithms-a-dropbox-challenge-and-dynamic-programming/
// http://algorithms.tutorialhorizon.com/dynamic-programming-subset-sum-problem/

