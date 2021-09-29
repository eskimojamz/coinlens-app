import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Context } from '../context/store'

function HeroSearch() {
    const [items, setItems] = useState([])
    const [value, setValue] = useState("")
    const { results: [results, setResults] } = useContext(Context)

    const fetchCoins = async() => {
        let coinList = []
        const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        data.data.map(coin => {
            coinList.push(coin.name)
        })
        setItems(coinList)
    }

    useEffect(() => {
        fetchCoins()
    }, []) // on mount

    const onChange = (e) => {
        const value = e.target.value
        setValue(value)
        let results = []
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            results = items.sort().filter(v => regex.test(v))
        }
        setResults(results)
    }

    return (
        <div className="hero-search items-center h-48">
            <form className="search-form">
                <input
                    className="input-form rounded-sm p-2 border border-gray-300"
                    placeholder="Search"
                    onChange={onChange}
                    value={value} 
                >
                </input>
            </form>
        </div>
    )
}

export default HeroSearch
