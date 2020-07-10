//Objective is to find the shortest substring in a string that has all characters
//from another given string

let s = "ADOBECODEBANC", t = "ABC"


//O(S + T) solution that traverses T for the hashmap and S using a sliding window.

let map = {}
    
for (let i = 0; i < t.length; i++) {
    if (map[t[i]] == undefined) {
        map[t[i]] = 1
    } else {
        map[t[i]]++
    }
}
    
//We use a right pointer to traverse the graph and a left pointer to reset
//our map
let right = -1
let left = 0
let min = ''
let uniqueLetters = Object.keys(map).length 
    
while (right <= s.length) {
    //If we still have some characters left, start moving the right pointer
    if (uniqueLetters !== 0) {
        right++
            
        let curr = s[right]
            
        //Decrement the frequency of any character in the map
        if (map[curr] !== undefined) {
            map[curr]--
        }
            
        //Once a value hits 0, decrement the number of unique letters left to find
        if (map[curr] == 0) {
            uniqueLetters--
        }
    //If we've found a substring that has all the characters
    } else {
        let curr = s[left]
            
        //Start adding up any characters back into the map
        if (map[curr] !== undefined) {
            map[curr]++
        }
            
        //Start adding up the number of unique letters
        if (map[curr] > 0) {
            uniqueLetters++
        }
            
        let temp = s.substring(left, right + 1)
            
        //Keep track of the minimum substring
        if (min == '') {
            min = temp
        } else {
            min = min.length < temp.length ? min : temp
        }
            
        left++
    }
}
    
return min