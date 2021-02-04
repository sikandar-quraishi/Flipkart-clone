import * as Api from "./Api";



export const getData = () => {
    const url = `/posts`;
    return getRequest(url);
}



const getRequest  = (url) => {
    return new Promise(function (resolve, reject) {

        const obj = {
            url: url,
            onSuccess: (resp) => {
                resolve(resp);
            },
            onError: (err) => {
                reject();
                console.log('api error', err);
            }
        }

        Api.get(obj.url, obj.onSuccess, obj.onError);

    });
}

const PutRequest = (url, data) => {
    return new Promise(function (resolve, reject) {
        const obj = {
            url: url,
            data: data,
            onSuccess: (resp) => {
                resolve(resp);
            },
            onError: (err) => {
                reject();
                console.log('api error', err);
            }
        }

        Api.put(obj.url, obj.data, obj.onSuccess, obj.onError);

    });
}

const PostRequest = (url, data) => {
    return new Promise(function (resolve, reject) {
        const obj = {
            url: url,
            data: data,
            onSuccess: (resp) => {
                resolve(resp);
            },
            onError: (err) => {
                reject();
                console.log('api error', err);
            }
        }
        Api.post(obj.url, obj.data, obj.onSuccess, obj.onError);

    });
}

function DeleteRequest(url) {
    return new Promise(function (resolve, reject) {
  
        let obj = {
            url: url,
            onSuccess: (resp) => {
                resolve(resp);
            },
            onError: (err) => {
                reject(err);
                console.log('api error', err);
            }
        }
  
        Api.deleteApi(obj.url, obj.onSuccess, obj.onError);
  
    });
  }


