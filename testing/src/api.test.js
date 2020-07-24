import Api from './api.js'
import axios from 'axios';

describe('Api', () => {

    var api 

    test(' 2 + 2 is 4', () => {
        api = new Api
        expect(api.add(2)).toEqual(4);
     })


     test('api returns name of user', () => {
         api = new Api 
         expect.assertions(1);
         expect(response.data.name).toEqual("Leanna Graham");
         return(api.fetch());
    });

});

