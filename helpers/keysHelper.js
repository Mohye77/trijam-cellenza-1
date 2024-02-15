const keyCodeByKey = { 
    "1": {key:"1",keyCode:"49", neighbors: ["2", "A"], leftNeighbors: [], rightNeighbors:  ["2", "A"]},
    "2": {key:"2",keyCode:"50", neighbors: ["1", "3", "A", "Z"], leftNeighbors: ["1", "A"], rightNeighbors: ["3", "A", "Z" ]},
    "3": {key:"3",keyCode:"51", neighbors: ["2", "4", "Z", "E"], leftNeighbors: ["2", "Z"], rightNeighbors: ["4", "Z", "E"]},
    "4": {key:"4",keyCode:"52", neighbors: ["3", "5", "E", "R"], leftNeighbors: ["3", "E"], rightNeighbors: ["5", "E", "R"]},
    "5": {key:"5",keyCode:"53", neighbors: ["4", "6", "R", "T"], leftNeighbors: ["4", "R"], rightNeighbors: ["6", "R", "T"]},
    "6": {key:"6",keyCode:"54", neighbors: ["5", "7", "T", "Y"], leftNeighbors: ["5", "T"], rightNeighbors: ["7", "T", "Y"]},
    "7": {key:"7",keyCode:"55", neighbors: ["6", "8", "Y", "U"], leftNeighbors: ["6", "Y"], rightNeighbors: ["8", "Y", "U"]},
    "8": {key:"8",keyCode:"56", neighbors: ["7", "9", "U", "I"], leftNeighbors: ["7", "U"], rightNeighbors: ["9", "U", "I"]},
    "9": {key:"9",keyCode:"57", neighbors: ["8", "0", "I", "O"], leftNeighbors: ["8", "I"], rightNeighbors: ["0", "I", "O"]},
    "0": {key:"0",keyCode:"48", neighbors: ["9", "°", "O", "P"], leftNeighbors: ["9", "O"], rightNeighbors: ["°", "O", "P"]},
    "°": {key:"°",keyCode:"219", neighbors: ["0", "+", "P", "¨"], leftNeighbors: ["0", "P"], rightNeighbors: ["+", "P", "¨"]},
    "+": {key:"+",keyCode:"187", neighbors: ["°", "¨", "£"], leftNeighbors: ["°", "¨"], rightNeighbors: ["¨","£"]},
    "A": {key:"A",keyCode:"65", neighbors: ["1", "2", "Z", "Q"], leftNeighbors: ["1", "A"], rightNeighbors:  ["2", "Z", "Q"]},
    "Z": {key:"Z",keyCode:"90", neighbors: ["2", "3", "A", "E", "Q", "S"], leftNeighbors: ["A", "2", "3", "Q", "S"], rightNeighbors:  ["2", "3", "Q", "S", "E"]},
    "E": {key:"E",keyCode:"69", neighbors: ["3", "4", "Z", "R", "S", "D"], leftNeighbors: ["Z", "3", "4", "S", "D"], rightNeighbors:  ["3", "4", "S", "D", "R"]},
    "R": {key:"R",keyCode:"82", neighbors: ["4", "5", "E", "T", "D", "F"], leftNeighbors: ["E", "4", "5", "D", "F"], rightNeighbors:  ["4", "5", "D", "F", "T"]},
    "T": {key:"T",keyCode:"84", neighbors: ["5", "6", "R", "Y", "F", "G"], leftNeighbors: ["R", "5", "6", "F", "G"], rightNeighbors:  ["5", "6", "F", "G", "Y"]},
    "Y": {key:"Y",keyCode:"88", neighbors: ["6", "7", "T", "U", "G", "H"], leftNeighbors: ["T", "6", "7", "G", "H"], rightNeighbors:  ["6", "7", "G", "H", "U"]},
    "U": {key:"U",keyCode:"85", neighbors: ["7", "8", "Y", "I", "H", "J"], leftNeighbors: ["Y", "7", "8", "H", "J"], rightNeighbors:  ["7", "8", "H", "J", "I"]},
    "I": {key:"I",keyCode:"73", neighbors: ["8", "9", "U", "O", "J", "K"], leftNeighbors: ["U", "8", "9", "J", "K"], rightNeighbors:  ["8", "9", "J", "K", "O"]},
    "O": {key:"O",keyCode:"79", neighbors: ["9", "0", "I", "P", "K", "L"], leftNeighbors: ["I", "9", "0", "K", "L"], rightNeighbors:  ["9", "0", "K", "L", "P"]},
    "P": {key:"P",keyCode:"80", neighbors: ["0", "°", "O", "¨", "L", "M"], leftNeighbors: ["O", "0", "°", "L", "M"], rightNeighbors:  ["0", "°", "L", "M", "¨"]},
    "¨": {key:"¨",keyCode:"221", neighbors: ["°", "+", "P", "£", "M", "%"], leftNeighbors: ["P", "°", "+", "M", "%"], rightNeighbors:  ["°", "+", "M", "%", "£"]},
    "£": {key:"£",keyCode:"186", neighbors: ["+", "¨", "%", "µ"], leftNeighbors: ["¨", "+", "%", "µ"], rightNeighbors:  ["%","µ", "+"]},
    "Q": {key:"Q",keyCode:"81", neighbors: ["A", "Z", "S",">", "W"], leftNeighbors: ["A", "Z", ">", "W"], rightNeighbors:  ["A", "Z", ">", "W", "S"]},
    "S": {key:"S",keyCode:"83", neighbors: ["Z", "E", "Q","D", "W", "X"], leftNeighbors: ["Z", "E", "W", "X"], rightNeighbors:  ["Z", "E", "W", "X", "D"]},
    "D": {key:"D",keyCode:"68", neighbors: ["E", "R", "S","F", "X", "C"], leftNeighbors: ["E", "R", "X", "C"], rightNeighbors:  ["E", "R", "X", "C", "F"]},
    "F": {key:"F",keyCode:"70", neighbors: ["R", "T", "D","G", "C", "V"], leftNeighbors: ["R", "T", "C", "V"], rightNeighbors:  ["R", "T", "C", "V", "G"]},
    "G": {key:"G",keyCode:"71", neighbors: ["T", "Y", "F","H", "V", "B"], leftNeighbors: ["T", "Y", "V", "B"], rightNeighbors:  ["T", "Y", "V", "B", "H"]},
    "H": {key:"H",keyCode:"72", neighbors: ["Y", "U", "G","J", "B", "N"], leftNeighbors: ["Y", "U", "B", "N"], rightNeighbors:  ["Y", "U", "B", "N", "J"]},
    "J": {key:"J",keyCode:"74", neighbors: ["U", "I", "H","K", "N", "?"], leftNeighbors: ["U", "I", "N", "?"], rightNeighbors:  ["U", "I", "N", "?", "K"]},
    "K": {key:"K",keyCode:"75", neighbors: ["I", "O", "J","L", "?", "."], leftNeighbors: ["I", "O", "?", "."], rightNeighbors:  ["I", "O", "?", ".", "L"]},
    "L": {key:"L",keyCode:"76", neighbors: ["O", "P", "K","M", ".", "/"], leftNeighbors: ["O", "P", ".", "/"], rightNeighbors:  ["O", "P", ".", "/", "M"]},
    "M": {key:"M",keyCode:"77", neighbors: ["P", "¨", "L","%", "/", "§"], leftNeighbors: ["P", "¨", "/", "§"], rightNeighbors:  ["P", "¨", "/", "§", "%"]},
    "%": {key:"%",keyCode:"192", neighbors: ["¨","£", "M","µ", "§" ], leftNeighbors: ["¨", "£", "M", "§"], rightNeighbors:  ["¨", "£", "§", "µ"]},
    "µ": {key:"µ",keyCode:"220", neighbors: ["£", "%",], leftNeighbors: ["%", "£"], rightNeighbors:  ["£"]},
    ">": {key:">",keyCode:"226", neighbors: ["Q", "W"], leftNeighbors: ["Q"], rightNeighbors:  ["Q", "W"]},
    "W": {key:"W",keyCode:"87", neighbors: ["Q", "S", ">", "X"], leftNeighbors: [">","Q"], rightNeighbors:  ["Q", "S", "X"]},
    "X": {key:"X",keyCode:"88", neighbors: ["S", "D", "W", "C"], leftNeighbors: ["S", "D"], rightNeighbors:  ["S", "D", "C"]},
    "C": {key:"C",keyCode:"67", neighbors: ["D", "F", "X", "V"], leftNeighbors: ["D", "F"], rightNeighbors:  ["D", "F", "V"]},
    "V": {key:"V",keyCode:"86", neighbors: ["F", "G", "C", "B"], leftNeighbors: ["F", "G"], rightNeighbors:  ["F", "G", "B"]},
    "B": {key:"B",keyCode:"66", neighbors: ["G", "H", "V", "N"], leftNeighbors: ["G", "H"], rightNeighbors:  ["G", "H", "N"]},
    "N": {key:"N",keyCode:"78", neighbors: ["H", "J", "B", "?"], leftNeighbors: ["H", "J"], rightNeighbors:  ["H", "J", "?"]},
    "?": {key:"?",keyCode:"188", neighbors: ["J", "K", "N", "."], leftNeighbors: ["J", "K"], rightNeighbors:  ["J", "K", "."]},
    ".": {key:".",keyCode:"190", neighbors: ["K", "L", "?", "/"], leftNeighbors: ["K", "L"], rightNeighbors:  ["K", "L", "/"]},
    "/": {key:"/",keyCode:"191", neighbors: ["L", "M", ".", "§"], leftNeighbors: ["L", "M"], rightNeighbors:  ["L", "M", "§"]},
    "§": {key:"§",keyCode:"223", neighbors: ["M", "%", "/"], leftNeighbors: ["/", "M", "%"], rightNeighbors:  ["M", "%"]}
}


const keyBykeyCode = { 
    "49": {key:"1",keyCode:"49", neighbors: ["2", "A"]},
    "50": {key:"2",keyCode:"50", neighbors: ["1", "3", "A", "Z"]},
    "51": {key:"3",keyCode:"51", neighbors: ["2", "4", "Z", "E"]},
    "52": {key:"4",keyCode:"52", neighbors: ["3", "5", "E", "R"]},
    "53": {key:"5",keyCode:"53", neighbors: ["4", "6", "R", "T"]},
    "54": {key:"6",keyCode:"54", neighbors: ["5", "7", "T", "Y"]},
    "55": {key:"7",keyCode:"55", neighbors: ["6", "8", "Y", "U"]},
    "56": {key:"8",keyCode:"56", neighbors: ["7", "9", "U", "I"]},
    "57": {key:"9",keyCode:"57", neighbors: ["8", "0", "I", "O"]},
    "48": {key:"0",keyCode:"48", neighbors: ["9", "°", "O", "P"]},
    "219": {key:"°",keyCode:"219", neighbors: ["0", "+", "P", "¨"]},
    "187": {key:"+",keyCode:"187", neighbors: ["°", "¨", "£"]},
    "65": {key:"A",keyCode:"65", neighbors: ["1", "2", "Z", "Q"]},
    "90": {key:"Z",keyCode:"90", neighbors: ["2", "3", "A", "E", "Q", "S"]},
    "69": {key:"E",keyCode:"69", neighbors: ["3", "4", "Z", "R", "S", "D"]},
    "82": {key:"R",keyCode:"82", neighbors: ["4", "5", "E", "T", "D", "F"]},
    "84": {key:"T",keyCode:"84", neighbors: ["5", "6", "R", "Y", "F", "G"]},
    "88": {key:"Y",keyCode:"88", neighbors: ["6", "7", "T", "U", "G", "H"]},
    "85": {key:"U",keyCode:"85", neighbors: ["7", "8", "Y", "I", "H", "J"]},
    "73": {key:"I",keyCode:"73", neighbors: ["8", "9", "U", "O", "J", "K"]},
    "79": {key:"O",keyCode:"79", neighbors: ["9", "0", "I", "P", "K", "L"]},
    "80": {key:"P",keyCode:"80", neighbors: ["0", "°", "O", "¨", "L", "M"]},
    "221": {key:"¨",keyCode:"221", neighbors: ["°", "+", "P", "£", "M", "%"]},
    "186": {key:"£",keyCode:"186", neighbors: ["+", "¨", "%", "µ"]},
    "81": {key:"Q",keyCode:"81", neighbors: ["A", "Z", "S",">", "W"]},
    "83": {key:"S",keyCode:"83", neighbors: ["Z", "E", "Q","D", "W", "X"]},
    "68": {key:"D",keyCode:"68", neighbors: ["E", "R", "S","F", "X", "C"]},
    "70": {key:"F",keyCode:"70", neighbors: ["R", "T", "D","G", "C", "V"]},
    "71": {key:"G",keyCode:"71", neighbors: ["T", "Y", "F","H", "V", "B"]},
    "72": {key:"H",keyCode:"72", neighbors: ["Y", "U", "G","J", "B", "N"]},
    "74": {key:"J",keyCode:"74", neighbors: ["U", "I", "H","K", "N", "?"]},
    "75": {key:"K",keyCode:"75", neighbors: ["I", "O", "J","L", "?", "."]},
    "76": {key:"L",keyCode:"76", neighbors: ["O", "P", "K","M", ".", "/"]},
    "77": {key:"M",keyCode:"77", neighbors: ["P", "¨", "L","%", "/", "§"]},
    "192": {key:"%",keyCode:"192", neighbors: ["¨","£", "M","µ", "§" ]},
    "220": {key:"µ",keyCode:"220", neighbors: ["£", "%",]},
    "226": {key:">",keyCode:"226", neighbors: ["Q", "W"]},
    "87": {key:"W",keyCode:"87", neighbors: ["Q", "S", ">", "X"]},
    "88": {key:"X",keyCode:"88", neighbors: ["S", "D", "W", "C"]},
    "67": {key:"C",keyCode:"67", neighbors: ["D", "F", "X", "V"]},
    "86": {key:"V",keyCode:"86", neighbors: ["F", "G", "C", "B"]},
    "66": {key:"B",keyCode:"66", neighbors: ["G", "H", "V", "N"]},
    "78": {key:"N",keyCode:"78", neighbors: ["H", "J", "B", "?"]},
    "188": {key:"?",keyCode:"188", neighbors: ["J", "K", "N", "."]},
    "190": {key:".",keyCode:"190", neighbors: ["K", "L", "?", "/"]},
    "191": {key:"/",keyCode:"191", neighbors: ["L", "M", ".", "§"]},
    "223": {key:"§",keyCode:"223", neighbors: ["M", "%", "/"]}
}