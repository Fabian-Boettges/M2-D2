
 /*   MANDATORY JS EXERCISES (create a different file for this exercise)
    1) Save this array in a variable called genres: ["Comedy", "Drama", "Romance", "Horror", "Sci-Fi", "Documentary"]
    2) Create an unordered list using JavaScript and save it in a variable
    3) Cycle the array and create a list-item via JavaScript for every element
    4) Insert the genere as text in the list-item
    5) Append the list items in the unordered list
    6) Append the unordered list in the document. The list should appear in the page.
*/
 window.onload = function () {
    addList()
 }

 function addList () {

    //1)
    let genres = ["Comedy", "Drama", "Romance", "Horror", "Sci-fi", "Documentary"]

    //2)
    let unorderedList = document.createElement("ul")

    //3)
    for (let genre of genres) {
        let newItem = document.createElement("li")

    //4)
    newItem.innerText = genre

    //5)
    unorderedList.appendChild(newItem) 

     //6)
    }
    let genreDiv = document.getElementById("genre-div")
        genreDiv.appendChild(unorderedList)
}

