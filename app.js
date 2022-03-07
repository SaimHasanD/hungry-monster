//Get Food Info 
const getFood = () => {
    const name = document.getElementById('input').value;
    console.log(name);
    if (!name) {
        alert('Please input a meal name');
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                displayFood(data);
            })
            .catch(error => console.log(error))
    }
}
// get display data 
const displayFood = data => {
    let foodList = data.meals;
    if (foodList) {
        console.log(data);
        const foodDisplay = document.getElementById('foodList');
        foodDisplay.textContent = "";
        document.getElementById('foodDetails').textContent = "";
            foodList.forEach(food => {
                const newDiv = document.createElement('div');
                const foodInfo = `
                    <button onclick="getFoodDetails('${food.idMeal}')" class="detailsBtn">
                        <img src="${food.strMealThumb}" alt=""> 
                        <h6 class="text-center p-2">${food.strMeal}</h6>
                        </button>
                    `
                newDiv.innerHTML = foodInfo;
                foodDisplay.appendChild(newDiv);
            });
    } else {
        alert("Sorry, We couldn't find anything with this name");
    }

}
//get food details
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
//show food details
const displayFoodDetails = data => {
    const food = data.meals[0];
    console.log(food);
    const foodDetails = document.getElementById('foodDetails');
    foodDetails.textContent = "";
    const newDiv = document.createElement('div');
    newDiv.className = 'foodDetails';
    const foodDetail = `
        <img class="card-img-top foodImage" src="${food.strMealThumb}" alt="">
        <h1 class="text-center">${food.strMeal}<h1/><hr>
        <h6>Ingredients</h6> <br>
        <p>${food.strMeasure1} ${food.strIngredient1}</p>
        <p>${food.strMeasure2} ${food.strIngredient2}</p>
        <p>${food.strMeasure3} ${food.strIngredient3}</p>
        <p>${food.strMeasure4} ${food.strIngredient4}</p>
        <p>${food.strMeasure5} ${food.strIngredient5}</p>
        <p>${food.strMeasure6} ${food.strIngredient6}</p>
        <p>${food.strMeasure7} ${food.strIngredient7}</p>
        <p>${food.strMeasure8} ${food.strIngredient8}</p>
        <p>${food.strMeasure9} ${food.strIngredient9}</p>
        <p>${food.strMeasure10} ${food.strIngredient10}</p>
        <p>${food.strMeasure11} ${food.strIngredient11}</p>
        <p>${food.strMeasure12} ${food.strIngredient12}</p>
        <p>${food.strMeasure13} ${food.strIngredient13}</p>
        <p>${food.strMeasure14} ${food.strIngredient14}</p>
        <p>${food.strMeasure15} ${food.strIngredient15}</p>
        <p>${food.strMeasure16} ${food.strIngredient16}</p>
        <p>${food.strMeasure17} ${food.strIngredient17}</p>
        <p>${food.strMeasure18} ${food.strIngredient18}</p>
        <p>${food.strMeasure19} ${food.strIngredient19}</p>
    `;
    newDiv.innerHTML = foodDetail;
    foodDetails.appendChild(newDiv);
}
