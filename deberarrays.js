'use strict'

let semana = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday',  'Saturday' ]; 
   
   semana.shift('Sunday'); 
   semana.unshift('Monday'); 
   semana.push('Sunday'); 
   semana.splice(4, 0, 'Friday'); 
 for (let i = 0; i < semana.length; i++) { 
      alert(semana[i]); 
}
