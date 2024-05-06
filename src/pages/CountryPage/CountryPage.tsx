import { useLocation } from 'react-router-dom';
import styles from './CountryPage.module.scss'
import { useFetch } from '../../hooks/useFetch';
import { COUNTRY_URL } from '../../utils/url';
import { Card, CardContent, CardMedia, ListItem, ListItemText, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export const CountryPage = () => {
    const { pathname } = useLocation();

    const { data } = useFetch(`${COUNTRY_URL}${pathname}`);

    const [ pageData, setPageData ] = useState(null);

    useEffect(() => {
        setPageData(data[0]);
    }, [data])

    console.log('data >', data)
    console.log('pageData >', pageData)

    return (
        <section className={styles.wrapper}>
            {pageData   ? <Country {...pageData}/>
                        : <h1>Loading...</h1>}
        </section>
    )
}

const Country = (country) => {

    const {
        name,
        flags,
        capital,
        region,
        languages
    } = country;

    const {
        common,
        official
    } = name;

    const {    
        svg
    } = flags;

    return (
            <Card>
            <CardMedia
                component="img"
                height="600"
                image={svg}
                alt={common}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                {common}
                </Typography>
                <Typography variant="body2">
                    Official name: {official}
                </Typography>
                <Typography variant="body2">
                    Capital: {capital}
                </Typography>
                <Typography variant="body2">
                    Region: {region}
                </Typography>
                <Typography variant="body2">
                    Languages:
                    {Object.entries(languages).map(([key, value]) => (
                        <ListItem key={key}>
                            <ListItemText primary={`${key}: ${value}`} />
                        </ListItem>
                    ))}
                </Typography>
            </CardContent>
        </Card>
    )
}