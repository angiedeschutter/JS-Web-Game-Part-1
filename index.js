
function newImage(imageName,imageId,leftLocation, bottomLocation) {
imageName = document.createElement('img')
imageName.src = imageId
imageName.style.position = 'fixed'
imageName.style.left = leftLocation
imageName.style.bottom = bottomLocation
document.body.append(imageName)
}

newImage("greenCharacter","assets/green-character.gif","100px","100px")
newImage("pineTree","assets/pine-tree.png","450px","200px")
newImage("tree","assets/tree.png","200px","300px")
newImage("pillar","assets/pillar.png","350px","100px")
newImage("crate","assets/crate.png","150px","200px")
newImage("well","assets/well.png","500px","425px")


function newItem(itemName,itemId,leftLocation, bottomLocation) {
    itemName =document.createElement('img')
    itemName.src=itemId
    itemName.style.position='fixed'
    itemName.style.left = leftLocation
    itemName.style.bottom = bottomLocation
    document.body.append(itemName)
    
    itemName.addEventListener('dblclick', function(){
        itemName.remove()
    })
}

newItem("sword","assets/sword.png","500px", "405px")
newItem("sheild","assets/sheild.png","165px","185px")
newItem("staff","assets/staff.png","600px","100px")

function backgroundImage(background, backgroundId, leftLocation, bottomLocation){
    background = document.createElement('img')
    background.src = backgroundId
    background.style.position = 'fixed'
    background.style.left = leftLocation+'px'
    background.style.bottom = bottomLocation+'px'
    background.style.zIndex =-1;
    document.body.append(background)
}

let windowWidth =window.innerWidth;
let windowHeight = window.innerHeight;
let widthBlocks=Math.round(windowWidth/100);
let heightBlocks=Math.round(windowHeight/100);

let leftLocation=0;
let bottomLocation=0;

for(let j=0; j<=(heightBlocks-5);j++){
    for(let i=0; i<=widthBlocks;i++){
        backgroundImage("grass", "assets/grass.png", leftLocation, bottomLocation);
        leftLocation+=99;
    }
    bottomLocation+=99;
    leftLocation=0;
}



let skyLeftLocation=0;
let skyBottomLocation=bottomLocation;

for(let j=0; j<=(5);j++){
    for(let i=0; i<=widthBlocks;i++){
        backgroundImage("sky", "assets/sky.png", skyLeftLocation, skyBottomLocation);
        skyLeftLocation+=99;
    }
    skyBottomLocation+=99;
    skyLeftLocation=0;
}


