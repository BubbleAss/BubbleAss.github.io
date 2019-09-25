gameData = {
  gold: 0,
  goldPerClick: 1,
  autoMineAmount: 1,
  enableAutoMine: false,
  upgrades: {
    pickaxeCost: 10,
    pickaxeLevel: 1
  }
}



function updateGoldText(){
  document.getElementById('goldText').innerHTML = gameData.gold + " Gold";
}

function mineGold(){
  gameData.gold += gameData.goldPerClick;
  updateGoldText();
}

function buyPickaxeUpgrade(){
  if (gameData.gold >= gameData.upgrades.pickaxeCost){
  gameData.gold -= gameData.upgrades.pickaxeCost;
  gameData.goldPerClick +=2;
  gameData.upgrades.pickaxeCost *= 2;
  gameData.upgrades.pickaxeLevel++;
  updateGoldText();
  document.getElementById('upgradePickaxeButton').innerHTML = 'Upgrade Pickaxe ' + '(level: ' + gameData.upgrades.pickaxeLevel + ')' + '<br>' + 'cost: ' + gameData.upgrades.pickaxeCost;
  }
}

function enableAutoMine(){
  if (gameData.gold >= 100){
    gameData.enableAutoMine = true;
    gameData.gold -= 100;
    gameData.autoMineAmount = 1;
    updateGoldText();
    document.getElementById('buyAutoMine').style.display = "none";
  }
}

function autoMine(){
  gameData.gold += gameData.autoMineAmount;
  updateGoldText();
}

var mainGameLoop = window.setInterval(function() {
  if (gameData.enableAutoMine == true){
    autoMine();
  }
}, 1000)


var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
}, 10000)

var savegame = JSON.parse(localStorage.getItem("vincentIdleSave"))
if (savegame !== null) {
  gameData = savegame
}
