class Location {
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
    this.linkedLocations = {};
  }
  linkLocation(direction, locationToLink) {
    this.linkedLocations[direction] = locationToLink;
  }

  move(direction) {
    direction, this.linkedLocations[direction];
    if (direction in this.linkedLocations) {
      return this.linkedLocations[direction];
    } else {
      alert("You can't go that way");
      // return this;
    }
  }

  describeLocation() {
    return "You are in " + this.name + ", " + this.desc;
  }
}

class Character {
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
  }

  describe() {
    return "Your name is " + this.name + ", you are  " + this.desc;
  }
}

class Enemy extends Character {
  constructor(name, desc, weakness) {
    super(name, desc);
    this.weakness = weakness;
  }

  attack(type) {
    if (type == this.weakness) {
      return "you win";
    } else {
      return "not today, nice try";
    }
  }
}

// locations

const Cave = new Location("cave", "a dark cold chasm of emptiness.");
const Clearing = new Location(
  "clearing",
  "a beautiful open meadow filled with wild flowers"
);
const Forest = new Location("forest", "a dense maze of thick firs");

Cave.linkLocation("left", Clearing);
Cave.linkLocation("right", Forest);
Clearing.linkLocation("back", Cave);
Forest.linkLocation("back", Cave);

// characters

const Blossom = new Character("Blossom", "a fire fairy with a fierce temper.");
const Star = new Character(
  "Star",
  "a quirky air fairy who seems perpetually sleepy"
);
const Mage = new Enemy(
  "Mage",
  "a devious mind fairy with questionable intentions",
  "Fire"
);

const descriptionBox = document.getElementById("descriptionBox");
descriptionBox.innerHTML = Blossom.describe();

function displayLocationInfo(location) {
  document.getElementById("locationBox").innerHTML =
    location.describeLocation();
  document.getElementById("locationBox").focus();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    command = document.getElementById("ui").value;
    const directions = ["left", "right", "back"];

    if (directions.includes(command.toLowerCase())) {
      currentLocation = currentLocation.move(command);
      displayLocationInfo(currentLocation);
    } else {
      document.getElementById("ui").value = "";
      alert("that is not a valid comment, please try again");
    }
  }
});

function displayLocationInfo(location) {
  document.getElementById("locationBox").innerHTML =
    location.describeLocation();
  document.getElementById("locationBox").focus();
}

function startGame() {
  currentLocation = Cave;
  displayLocationInfo(currentLocation);
  document.getElementById("descriptionBox").style.display = "block";
}
startGame();
