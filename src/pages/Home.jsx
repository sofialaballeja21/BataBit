import { useState, useEffect } from 'react';
import { getData } from "../utils/getData";


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

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
            <div className="card">
                <ul>
                    {error && <li>ERROR: {error}</li>} 
                    {loading && <li>Loading...</li>} 
                    {!loading && data && (
                        <Grid container spacing={2}>  
                            {data.slice(0, 21).map((exchange) => (  
                                <Grid item xs={12} sm={6} md={4} key={exchange.exchange_id}> 
                                    <Card sx={{ maxWidth: 345 }}>
                                        
                                        <CardContent>
                                            
                                            <Typography gutterBottom variant="h3" component="div">
                                                {exchange.name}  
                                            </Typography>
                                            <Typography variant="h6" color="bg-black">
                                                Sitio Web: <a href={exchange.website}>{exchange.website}</a>  
                                            </Typography>
                                            <Typography variant="h6" color="bg-black">
                                                Fecha inicio de cotización: {exchange.data_quote_start} 
                                            </Typography>
                                            <Typography variant="h6" color="bg-black">
                                                Fecha fin de comercio: {exchange.data_trade_end} 
                                            </Typography>
                                          
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </ul>
            </div>
        </div>
    );
}
