/*
 TO DO:
 2.goal
 3.map load

 */




window.onload =()=> {
    let screen = document.getElementById("main");

    let playerX;
    let playerY;
    let currentMap=0;
    function getPlayer() {
        for (let y=0;y<map.length;y++){
            for (let x=0;x<map[y].length;x++){
                if (map[y][x]==2){
                    playerX=x;
                    playerY=y;
                }
            }
        }
    }



    function render() {
        for (let y=0;y<map.length;y++){
            //create row
            if (screen.children[y]==null) {
                screen.innerHTML += "<div class='row'></div>"
            }
            for (let x=0;x<map[y].length;x++){
                //create tile
                if (screen.children[y].children[x]==null) {
                    screen.children[y].innerHTML += "<div class='cell air'></div>"
                }

                //set tile
                if (map[y][x] == 0){ screen.children[y].children[x].innerHTML="<img src='Sprites/New_floor.png'>";}
                else if (map[y][x] == 1){ screen.children[y].children[x].innerHTML="<img src='Sprites/New_wall.png'>";}
                else if (map[y][x] == 2){ screen.children[y].children[x].innerHTML="<img src='Sprites/Player.png'>";}
                else if (map[y][x] == 3){ screen.children[y].children[x].innerHTML="<img src='Sprites/Ladder.png'>";}
            }
        }
    }
    function move(x,y){
        //move
        if (map[y][x]==0){
            map[playerY][playerX]=0;
            map[y][x]=2;
            playerX=x;
            playerY=y;
            render();
        }else if(map[y][x]==3){
            map=maps[currentMap+1];
            currentMap++;
            //screen reset
            while (screen.childElementCount>0){
                screen.lastElementChild.remove();
            }
            getPlayer();
            render();
        }
    }

    //controls
    document.getElementById("html").addEventListener("keydown",function () {
        //up
        if (event.key === "w"){ move(playerX,playerY-1) };
        //down
        if (event.key === "s"){ move(playerX,playerY+1) };
        //left
        if (event.key === "a"){ move(playerX-1,playerY) };
        //right
        if (event.key === "d"){ move(playerX+1,playerY) };
    });

        /*
        *  0 = air
        *  1 = wall
        *  2 = player
        *  3 = goal
        */
    let maps=[

        [
            [1,1,1,1,1,1,1,1,1,1],
            [1,2,0,0,1,0,0,1,3,1],
            [1,1,1,0,1,0,1,1,0,1],
            [1,0,1,0,1,0,1,1,0,1],
            [1,0,0,0,0,0,0,1,0,1],
            [1,0,1,1,1,1,0,1,0,1],
            [1,0,0,0,0,1,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1],

        ],
        [
            [1,1,1,1,1,1,1],
            [1,2,1,0,0,0,1],
            [1,0,1,1,1,0,1],
            [1,0,0,0,0,0,1],
            [1,0,1,1,1,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,1,0,1],
            [1,1,1,1,1,0,1],
            [1,0,0,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,1,1,1,0,0,1],
            [1,3,0,0,0,1,1],
            [1,1,1,1,1,1,1],
        ],
        [
            //psát levely je bolest
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,2,0,0,0,0,1,0,0,0,1,3,0,0,0,0,1],
            [1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1],
            [1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],
            [1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1],
            [1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],
            [1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        ],
        //end map
        [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1],
            [1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1],
            [1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1],
            [1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1],
            [1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ]


    ];
    //init
    let map=maps[0];
    render();
    getPlayer();

};

