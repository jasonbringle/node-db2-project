
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
          {
            "id": 1,
            "VIN": "12338875757",
            "Make": "Chevy",
            "Model": "Volt",
            "Mileage": "4000987",
            "Exterior-Condition": "Bad",
            "Salvage": "yes",
            "Color": "Silver"
        },
        {
            "id": 2,
            "VIN": "1234123jkhl",
            "Make": "TOyota",
            "Model": "Corolla",
            "Mileage": "123456",
            "Exterior-Condition": "Good",
            "Salvage": "No",
            "Color": "Red"
        },
        {
            "id": 3,
            "VIN": "4329845093284670",
            "Make": "Toyota",
            "Model": "Corona",
            "Mileage": "234789",
            "Exterior-Condition": "Great!",
            "Salvage": 0,
            "Color": "Green"
        },
        {
            "id": 4,
            "VIN": "4329845093444284670",
            "Make": "Toyota",
            "Model": "Corona",
            "Mileage": "234789",
            "Exterior-Condition": "Great!",
            "Salvage": 0,
            "Color": "Green"
        },
        {
            "id": 5,
            "VIN": "4329893444284670",
            "Make": "Toyota",
            "Model": "Corona",
            "Mileage": "234789",
            "Exterior-Condition": "Great!",
            "Salvage": 0,
            "Color": "Green"
        },
        {
            "id": 6,
            "VIN": "43298444284670",
            "Make": "Toyota",
            "Model": "Corona",
            "Mileage": "234789",
            "Exterior-Condition": "Great!",
            "Salvage": 0,
            "Color": "Green"
        },
        {
            "id": 7,
            "VIN": "43298284670",
            "Make": "Toyota",
            "Model": "Corona",
            "Mileage": "234789",
            "Exterior-Condition": "Great!",
            "Salvage": 0,
            "Color": "Green"
        },
        {
            "id": 8,
            "VIN": "43298270",
            "Make": "Toyota",
            "Model": "Corona",
            "Mileage": "234789",
            "Exterior-Condition": "Great!",
            "Salvage": 0,
            "Color": "Green"
        }
      ]);
    });
};
