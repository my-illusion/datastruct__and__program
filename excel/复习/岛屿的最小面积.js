function maxAreaOfIsland(grid) {
    let maxNum = 0
    const visit = {}
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] && !visit[`${i}-${j}`]) {
                const max = findAreaIsland(grid, i, j, visit)
                if(max > maxNum) maxNum = max
            }
        }
    }
    return maxNum
}

function findAreaIsland(grid, i, j, visit) {
    const direction = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]
    visit[`${i}-${j}`] = 1
    let sum = 1
    for(const dir of direction) {
        if( 
            i + dir[0] >= 0 
            && i + dir[0] < grid.length 
            && j + dir[1] >= 0 
            && j + dir[1] < grid[0].length 
            && !visit[`${i + dir[0]}-${j + dir[1]}`] 
            && grid[i + dir[0]][j + dir[1]]) {
            sum += findAreaIsland(grid, i + dir[0], j + dir[1], visit)
        }
    }
    return sum
}

console.log(
    maxAreaOfIsland(
        [[0,0,0,0,0,0,0,0]]
    )
)