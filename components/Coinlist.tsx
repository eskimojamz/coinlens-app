import Image from 'next/image'

function Coinlist({ id, image, symbol, name, rank, price, change24h, cap, high, low, ath, updated }) { 
    return (            
        <div className="border border-black rounded-md w-full p-4 "> 
            <Image 
                src={image}
                height={144}
                width={144}
            >
            </Image>
            <div className="fade">
                    <h1 className='rank'>#{rank}</h1>
                    <h1 className='symbol'>{symbol.toUpperCase()}</h1>
                    <h1 className='name'>{name}</h1>
                <ul className="list-group list-group-flush">
                    <li className='list-group-item'>
                        <p>Current Price</p>
                        <h2>$ {price.toFixed(2)}</h2>
                    </li>
                    <li className='list-group-item'>
                        <p>24h Change</p>
                        <h2>{parseFloat(change24h).toFixed(2)}%</h2>
                    </li>
                    <li className='list-group-item'>
                        <p>Marketcap Total</p>
                        <h2>$ {(cap/1000000000).toFixed(2)}B</h2>
                    </li>
                </ul>
                {/* <Link 
                    to={{
                        pathname: `/:${name}`,
                        state: {
                            id,
                            image, 
                            symbol, 
                            name, 
                            rank, 
                            price, 
                            change24h, 
                            cap, 
                            high, 
                            low, 
                            ath, 
                            updated 
                        }
                    }}
                >     */}
                <button className="fade">More info</button>    
                {/* </Link> */}
            </div>
        </div> 
        );
};

export default Coinlist