function getFood() {
    const input = document.getElementById('input').value;
    //console.log(input);
    //const firstWord = 'b';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayFood(data)
        })
        .catch(error => console.log(error))
}

const displayFood = data => {
    console.log(data.meals);
    let foodList = data.meals;
    const foodDisplay= document.getElementById('foodList');
    for (let i = 0; i < foodList.length; i++) {
        const food = foodList[i];
        const newDiv = document.createElement('div');
        newDiv.className = "food";
        const foodInfo = `
            <img src="${food.strMealThumb}" alt=""> 
            <h4>${food.strMeal}</h4>
        
        `
        newDiv.innerHTML = foodInfo;
        foodDisplay.appendChild(newDiv);
    }
}
// getFood()