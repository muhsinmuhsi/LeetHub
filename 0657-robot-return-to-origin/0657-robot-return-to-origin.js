/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let que={
        x:0,
        y:0
    }
    for (let i=0;i<moves.length;i++){
        if(moves[i]=="U"){
            que.y+=1;
        }
        if(moves[i]=="D"){
            que.y-=1;
        }
        if(moves[i]=="R"){
            que.x+=1;
        }
        if(moves[i]=="L"){
            que.x-=1;
        }

    }
    if(que.x==0&&que.y==0){
        return true
    }else{
        return false
    }
};