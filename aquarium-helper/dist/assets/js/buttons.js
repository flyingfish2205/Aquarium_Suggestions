async function createResults(){
    var tankSize = document.getElementById("tank-size").value;
    var experienceLevel = document.getElementById("biotope").value;
    var biotope = document.getElementById("level").value;
    var div = document.getElementById("output");
    var suggestion1 = document.getElementById("sug1");
    var suggestion2 = document.getElementById("sug2");
    var son = {
        "beginner1": [
          "Honey gourami, Japanese Ricefish, Female Betta"
        ],
        "beginner2": [
          "Neon Tetra, Cardinal Tetra, Harlequin Rasbora"
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
    
    if(experienceLevel == "beginner"){
      suggestion1.append(${son['beginner1'][Math.random*2]});
      suggestion2.append();
    }

    if(experienceLevel == "intermediate"){
      suggestion1.append();
      suggestion2.append();

    }

    if(experienceLevel == "advanced"){
      suggestion1.append();
      suggestion2.append();
        
    }
    
}