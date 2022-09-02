import axios from 'axios';

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

