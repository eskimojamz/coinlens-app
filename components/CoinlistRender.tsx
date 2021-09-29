import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Context } from '../context/store'
import { PointSpreadLoading } from 'react-loadingg';
import Coinlist from './Coinlist';

function CoinlistRender() {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true) 
    const { results: [results, setResults] } = useContext(Context)

    const getCoins = async () => {
        const coinsFetch = await axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        console.log(coinsFetch)
        setCoins(coinsFetch.data)
        setIsLoading(false)
    }
    
    useEffect(() => {
        getCoins()
    }, []) // on mount 

    const renderCoinList = () => {
        if(isLoading === true) {
            return(
                <div>
                    <PointSpreadLoading
                            color="white"
                            size="small"
                        />
                </div>
            )
        } else if (results.length > 0){
            let queryCoins = []
            let coinsData = coins
            coinsData.map(coin => {
                results.map(result => {
                    if (coin.name === result) {
                        queryCoins.push(coin)
                    }
                })
            })
            return(
                <div>
                    {queryCoins.map(coin => (
                        <Coinlist 
                            id = {coin.id}
                            image = {coin.image} 
                            symbol = {coin.symbol}
                            name = {coin.name}
                            rank = {coin.market_cap_rank}
                            price = {coin.current_price}
                            change24h = {coin.price_change_percentage_24h}
                            cap = {coin.market_cap}
                            updated = {coin.last_updated}
                        />
                    ))}    
                </div>
            )
        } else {
            return(
                <div className='flex flex-col space-y-8 items-center mt-8 px-4'>
                    {coins.map(coin => (
                        <Coinlist 
                            id = {coin.id}
                            image = {coin.image} 
                            symbol = {coin.symbol}
                            name = {coin.name}
                            rank = {coin.market_cap_rank}
                            price = {coin.current_price}
                            change24h = {coin.price_change_percentage_24h}
                            cap = {coin.market_cap}
                            updated = {coin.last_updated}
                        />
                    ))}    
                </div>
            )
        }
    }
    useEffect(()=> {
        renderCoinList()
    }, [results])
    return (
            <>{renderCoinList()}</>
    );
}

export default CoinlistRender
