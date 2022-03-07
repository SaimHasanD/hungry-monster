const getFood = () => {
    const name = document.getElementById('input').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayFood(data)
        })
        .catch(error => console.log(error))
}

const displayFood = data => {
    let foodList = data.meals;
    const foodDisplay = document.getElementById('foodList');
    foodDisplay.textContent="";
    for (let i = 0; i < foodList.length; i++) {
        const food = foodList[i];
        const newDiv = document.createElement('div');
        const foodInfo = `
        <button onclick="getFoodDetails('${food.idMeal}')" class="detailsBtn">
            <img src="${food.strMealThumb}" alt=""> 
            <h6>${food.strMeal}</h6>
            </button>
        `
        newDiv.innerHTML = foodInfo;
        foodDisplay.appendChild(newDiv);
    }
}
const getFoodDetails = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            displayFoodDetails(data);
        })
        .catch(error => console.log(error))
}

const displayFoodDetails = data => {
    const food = data.meals[0];
    console.log(food);
    const foodDetails = document.getElementById('foodDetails');
    foodDetails.textContent="";
    const newDiv = document.createElement('div');
    newDiv.className = 'foodDetails';
    const foodDetail = `
        <img src="${food.strMealThumb}" alt="">
        <h1>${food.strMeal}<h1/>
        <h6>Ingredients</h6>
        <p>${food.strIngredient1}</p>
        <p>${food.strIngredient2}</p>
        <p>${food.strIngredient3}</p>
        <p>${food.strIngredient4}</p>
        <p>${food.strIngredient5}</p>
        <p>${food.strIngredient6}</p>
        
    `
    document.getElementById('foodList').style.display = "none";
    document.getElementById('searchDiv').style.display = "none";

    newDiv.innerHTML = foodDetail;
    foodDetails.appendChild(newDiv);
}
// getFood()