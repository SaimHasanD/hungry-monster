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

const displayFood = data => {
    let foodList = data.meals;
    if (data === null) {
        alert('input')
    }
    console.log(data);
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
        <img class="card-img-top" src="${food.strMealThumb}" alt="">
        <h1>${food.strMeal}<h1/>
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
        
    `
    document.getElementById('foodList').style.display = "none";
    document.getElementById('searchDiv').style.display = "none";

    newDiv.innerHTML = foodDetail;
    foodDetails.appendChild(newDiv);
}
// getFood()