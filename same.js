// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has it's corrsponding value squared in the second array.
// The frequency of values must be the same.

// MA SOLUTION
// EXAMPLES :
// Example same([1,2,3], [4,1,9]) // true
// Example same([1,2,3], [1,9]) // false
// Example same([1,2,1], [4,4,1]) // false

// UNDERSTAND :
// En suivant les étapes je vais déjà reformuler avec mes mots le problème :
// Ecrire une fonction qui compare 2 tableaux
// Cette fonction retourne vrai si toutes les valeurs du premier tableau,
// ont leurs correspondances au carré dans le 2 eme tableau.
// Aussi il doit y avoir exactement le même nombre d'élements.

// PSEUDO - CODE SIMPLE :

// found = false;
// FONCTION : same(tableau1, tableau2)
// TRIER Les Tableaux

// Verifier déjà si il ont la même longueur
// SI (tableau1.length = tableau2.length)
//      BOUCLE sur les éléments du tableau1
//          tab1Square = élementTableau1 au carré;
//   
//          BOUCLE sur les éléments du tableau2
//     
//              SI tab1Square = élement du tableau 2;
//                  found = true;
//              FINSI
//              SI found = true
//                  sortir boucle
//              FINSI
//          FIN BOUCLE
//      
//          SI found = false
//              RETURN found;
//          FINSI
//      FIN BOUCLE
//FINSI
//AFFICHER found
let found = false;
function same(array1, array2) {
    array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    console.log(array1)
    console.log(array2)

    if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            const atSquare = array1[i] * array1[i];
            for (let j = 0; j < array2.length - i; j++) {

                if (atSquare === array2[j + i]) {
                    found = true;
                } else {
                    found = false;

                }
                if (found) {
                    break;
                }

            }
            if (!found) {
                break;
            }
        }
    }
    console.log(found);
}
// TIME COMPLEXITY HERE - N²
//same([1, 2, 3], [4, 1, 9]);
//same([1, 2, 1], [4, 4, 1]);

// Another Solution 
function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        // ** for square²
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1);
    }
    return true;
}
// TIME COMPLEXITY HERE - N²
console.log(same2([1, 2, 3], [4, 1, 9]));
console.log(same2([1, 2, 1], [4, 4, 1]));