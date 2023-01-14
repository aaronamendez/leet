
/*
 Q. Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order starting from the top left element.

 
*/

function spiral(m) {

  let left = 0 
  let top = 0
  let right = m[0].length - 1
  let bottom = m.length - 1
  const result = []
  const size =  m.length * m[0].length
  
  while(result.length < size){
  
    // TOP
    for(let i = left ; i <= right && result.length < size; i++ ){
      result.push(m[top][i])
    }
    // the top most row its pushed to the result so we incremnt the top 
    top++
  
    for( let i = top ; i <= bottom && result.length < size ;i++){
      result.push(m[i][right])
    }
    // we have printed the right most column so we decremnt right
    right--
    
    for(let i = right; i >= left  && result.length < size ; i--){
      result.push(m[bottom][i])
    }
    // we printed bottom row and now me move up
    bottom--
  
    for(let i = bottom ; i >= top  && result.length < size; i--){
      result.push(m[i][left])
    }
    //we incremnt left cause we are done with the first column
    left++
  
   }
  return result
  }
  console.log(spiral([
    [1, 2, 3, 0],
    [4, 5, 6, 0],
    [7, 8, 9, 0],
    [10, 11, 12, 0]
  ]),  [1, 2, 3, 6, 9, 8, 7, 4, 5])