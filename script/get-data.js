export default () =>
    new Promise((resolve, reject) => {
        const url = process.env.API_URL;

        return fetch(url)
            .then((res) => res.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
