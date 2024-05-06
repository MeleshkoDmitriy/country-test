import { CountryItem } from '../../components/CountryItem/CountryItem'
import { useFetch } from '../../hooks/useFetch'
import { ALL_COUNTRIES } from '../../utils/url'
import styles from './HomePage.module.scss'

export const HomePage = () => {

    const { data, isLoading } = useFetch(ALL_COUNTRIES);

    if (!data) {
        return <h1>Something went wrong!</h1>
    }
    
    return (
        <section className={styles.wrapper}>
            {isLoading && <h1>Loading...</h1>}
            {data.map((country) => {
                return <CountryItem {...country} />
            })}
        </section>
    )
}