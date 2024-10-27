 

export const getData = async (apiKey) => {
    const url = 'https://rest.coinapi.io/v1/exchanges'; // Endpoint de la API
    

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-CoinAPI-Key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error: ', error);
        throw error;
    }
};
