// mars rover code
var grid= "";
var gridsize = 10;

//obstacles on grid
var obs = [[4,5],[10,0],[3,9]];

//create grid for rover
function createGrid(gridsize){
    for(var y = 0; y < gridsize; y++) {
        for(var x = 0; x < gridsize; x++) {
            grid += "#";
        } 
    grid += "\n";
    }
    return grid;
};

//check for collisions
function checkCollision(roverlocation, obstaclelocation) {
    for (i = 0; i = obstaclelocation.length; i++)
    if (roverlocation.equals(obstaclelocation[i])){
        return;
    }
};

//rover moving function
function moveRover(command, location, direction) {

    for (i = 0; i < command.length; i++){
        var dx = location[x];
        var dy = location[y];
        var dir = direction;

//check if rover has left grid
        switch(location){
            case dx < 0:
                dx = gridsize;
                break;
            case dy < 0:
                dy = gridsize;
                break;
            case dx > gridsize:
                dx = 0:
                break;
            case dy > gridsize:
                dy = 0:
            default:
                return;
        }

//rover direction & movement check
        switch (i){
            case "f":
                switch(dir){
                    case "N":
                        checkCollision([dx, dy], obs);
                        dy++;
                        break;
                    case "E";
                        checkCollision([dx, dy], obs);
                        dx++;
                        break;
                    case "S";
                        checkCollision([dx, dy], obs);
                        dy--;
                        break;
                    case "W";
                        checkCollision([dx, dy], obs);
                        dx--;
                    default:
                        return;
                }
                break;
            case "b":
                switch(dir){
                    case "N":
                        checkCollision([dx, dy], obs);
                        dy--;
                        break;
                    case "E";
                        checkCollision([dx, dy], obs);
                        dx--;
                        break;
                    case "S";
                        checkCollision([dx, dy], obs);
                        dy++;
                        break;
                    case "W";
                        checkCollision([dx, dy], obs);
                        dx++;
                    default:
                        return;
                }
                break;
            case "r":
                switch(dir){
                    case "N":
                        dir = "E";
                        break;
                    case "E";
                        dir = "S";
                        break;
                    case "S";
                        dir = "W";
                        break;
                    case "W";
                        dir = "N";
                    default:
                        return;
                }
                break;
            case "l":
                switch(dir){
                    case "N":
                        dir = "W";
                        break;
                    case "E";
                        dir = "N";
                        break;
                    case "S";
                        dir = "E";
                        break;
                    case "W";
                        dir = "S";
                    default:
                        return;
                }
                break;
            default:
                return;
        }

    }
}; 