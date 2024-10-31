/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
     for(let i=0;i<=names.length;i++){
        for(let j=i+1;j<=names.length;j++){
            if(heights[i]<heights[j]){
                let temp;
                temp=names[i]
                names[i]=names[j]
                names[j]=temp
                
                let temp2;
                temp2=heights[i]
                heights[i]=heights[j]
                heights[j]=temp2
            }
        }
    }
    return names
};