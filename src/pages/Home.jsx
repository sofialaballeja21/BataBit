import { useState, useEffect } from 'react';
import { getData } from "../utils/getData";

export function Home() {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);  
    const apikey = 'EE7830CB-3C9B-4DD0-9F71-C493E149C57E'; 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData(apikey);  
                console.log(result);  
                setData(result); 
            } catch (err) {
                setError(err.message); 
            } finally {
                setLoading(false);  
            }
        };

        fetchData(); 
    }, [apikey]);  

    return (
        <div className="Home">
            <h1>BataBit Home</h1>
            <div className="card">
                <ul>
                    {error && <li>ERROR: {error}</li>} 
                    {loading && <li>Loading...</li>} 
                    {!loading && data && data.slice(0, 20).map((exchange) => (  
                        <div key={exchange.exchange_id}>                              
                            <div className={`rounded-lg ${loading ? 'loading-class' : 'loaded-class'}`}>
                                <strong>{exchange.name}</strong>
                                <p>{exchange.website}</p>
                                <p>{exchange.data_quote_start}</p>
                                <p>{exchange.data_trade_end}</p>
                            </div>   
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

