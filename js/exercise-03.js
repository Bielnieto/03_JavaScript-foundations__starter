/* 
    1. Define function 'getTypeOf', which receives a value as paramenter and returns the type of this value
        Use typeof to ckech the types for each of the main 5 primitive types (string, number, boolean, null, undefined)
    2. Log the result of any function call.
*/

function getTypeOf(value) {
    return typeof value;
  }
  
  const user = "Biel";
  console.log({ user: getTypeOf(user) });
  
  const salary = 10000;
  console.log({ salary: getTypeOf(salary) });
  
  const visibility = true;
  console.log({ visibility: getTypeOf(visibility) });
  
  const data = null;
  console.log({ data: getTypeOf(data) });
  
  const state = undefined;
  console.log({ state: getTypeOf(state) });
