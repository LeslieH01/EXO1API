import axios from 'axios';
export const getItems = (url) => axios.get(url)
/*
export async function getItems(url){
    let data = axios.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  
    let result = await data;
  
    return result;
  }; 

export const getItems = (url) => {

    axios.get(url)
        .then(function (response) {
            // handle success

            if (response.status === 200) {
                console.log('données niveau fonction getItem', response.data);
                return response.data
            }
            else {

                return response
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return error
        });
}
*/