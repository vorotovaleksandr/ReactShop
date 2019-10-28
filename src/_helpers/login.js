import * as axios from 'axios';
export default  function getLogin (){

   return axios.get('http://localhost:3001/users')  
   
}

