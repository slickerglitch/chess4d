const isString = s => typeof s === 'string'; 

const isFxn = f => typeof f === 'function';

const isInteger = n => typeof n === 'number' && isFinite(n) && Math.floor(n) === n; 

const validAnimationSpeed = speed => {
    if (!isInteger(speed)) { 
      return false;
    }
    
    return speed === 'fast' || speed === 'slow' ? true : speed >= 0; 
};

const validThrottleRate = rate => isInteger(rate) && rate >= 1; 

const validMove = move => {
   let squares = move.split('-')
   return !isString(move) || squares.length !== 2 ? false : validSquare(squares[0]) && validSquare(squares[1]);
}; 

const validSquare = square => isString(square) && square.search(/^[a-h][1-8]$/) !== -1;