let grid = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

let x, y;
let sym = 1;

function getrow(i){
    x = parseInt(i.rowIndex, 10);
    let ch;
    if (sym == 1) ch = 'x';
    else ch = 'o';
    let cnt1 = 0, cnt2 = 0, cnt3 = 0, cnt4 = 0;
    if (grid[x][y] == 0){
        grid[x][y] = sym;
        if (sym == 1)
            board.rows[x].cells[y].innerHTML = 'x';
        else
            board.rows[x].cells[y].innerHTML = 'o';
        
        for (let i = 0; i < 5; i++){
            if (x + i < 20 && y + i < 20 && grid[x + i][y + i] == sym) cnt1++;
            else break;
        }
        for (let i = 0; i < 5; i++){
            if (x - i >= 0 && y - i >= 0 && grid[x - i][y - i] == sym) cnt1++;
            else break;
        }
///////////////////////////////////////////////////////////////////////////////////////
        for (let i = 0; i < 5; i++){
            if (x + i < 20 && grid[x + i][y] == sym) cnt2++;
            else break;
        }
        for (let i = 0; i < 5; i++){
            if (x - i >= 0 && grid[x - i][y] == sym) cnt2++;
            else break;
        }
///////////////////////////////////////////////////////////////////////////////////////
        for (let i = 0; i < 5; i++){
            if (y + i < 20 && grid[x][y + i] == sym) cnt3++;
            else break;
        }
        for (let i = 0; i < 5; i++){
            if (y - i >= 0 && grid[x][y - i] == sym) cnt3++;
            else break;
        }
///////////////////////////////////////////////////////////////////////////////////////
        for (let i = 0; i < 5; i++){
            if (x + i < 20 && y - i >= 0 && grid[x + i][y - i] == sym) cnt4++;
            else break;
        }
        for (let i = 0; i < 5; i++){
            if (x - i >= 0 && y + i < 20 && grid[x - i][y + i] == sym) cnt4++;
            else break;
        }

        if (cnt1 >= 6 || cnt2 >= 6 || cnt3 >= 6 || cnt4 >= 6){
            alert('Player:  ' + sym + '  Win');
            location.reload();
        }else{
            cnt1 = 0; cnt2 = 0; cnt3 = 0; cnt4 = 0;
        }
        sym++;
        if (sym == 3) sym = 1;
    }
}
function getcell(i) {
    y = parseInt(i.cellIndex, 10);
    
}
function calc() {
    let expression = document.getElementById('expression').value;
    let res = calculate(expression);
    let html = 'The result is <b>' + res + '</b> ';
    document.getElementById('result').innerHTML = html;
}
