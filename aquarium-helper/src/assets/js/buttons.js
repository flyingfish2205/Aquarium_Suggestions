function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createResults(){
    var tankSize = document.getElementById('tank-size').value;
    var experienceLevel = document.getElementById('level').value;
    var biotope = document.getElementById('biotope').value;
    var div = document.getElementById('output');
    var suggestion1 = document.getElementById('sug1');
    var suggestion2 = document.getElementById('sug2');
    suggestion1.innerHTML = "";
    const linebr = document.createElement("br");
    var son = {
        "beginner1": [
          "Honey gourami", "Japanese Ricefish", "Female Betta"
        ],
        "beginner2": [
          "Neon Tetra", "Cardinal Tetra", "Harlequin Rasbora"
        ],
        "intermediate1": [
          "Betta",
          "Neocaridina Shrimp",
          "Scarlet Badis"
        ],
        "intermediate2": [
          "Mystery Snail",
          "Chili Rasbora",
          "Exclamation Point Rasbora"
        ],
        "advanced1": [
          "Hillstream loach",
          "Bamboo shrimp",
          "Blue Brazos Crayfish"
        ],
        "advanced2": [
          "Thai Micro Crab",
          "African Dwarf Frog",
          "Pygmy Sunfish"
        ]
      }
    
    if(experienceLevel == "1"){
      suggestion1.append("Suggestion 1: ");
      suggestion1.append(son["beginner1"][getRandomInt(3)]);
      suggestion1.append(linebr);
      suggestion1.append("Suggestion 2: ");
      suggestion1.append(son["beginner2"][getRandomInt(3)]);
    }

    if(experienceLevel == "2"){
      suggestion1.append("Suggestion 1: ");
      suggestion1.append(son["intermediate1"][getRandomInt(3)]);
      suggestion1.append(linebr);
      suggestion1.append("Suggestion 2: ");
      suggestion1.append(son["intermediate2"][getRandomInt(3)]);

    }

    if(experienceLevel == "3"){
      suggestion1.append("Suggestion 1: ");
      suggestion1.append(son["advanced1"][getRandomInt(3)]);
      suggestion1.append(linebr);
      suggestion1.append("Suggestion 2: ");
      suggestion1.append(son["advanced2"][getRandomInt(3)]);
        
    }
    
}
