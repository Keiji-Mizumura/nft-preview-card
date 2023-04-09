import React from 'react'

const NftCard = () => {
  return (
    <div className='nft-card'>
        <div className="nft-image">
            <div className="hover">
                <img src="/images/icon-view.svg" alt="view" />
            </div>
            <img className="nft-image-img" src="/images/image-equilibrium.jpg" alt="equilibrium" />
        </div>
        <div className="nft-details">
            <h1 className='nft-item'>
                Equilibrium #3429
            </h1>
            <p>
                Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="nft-pricing">
                <div className="price">
                    <img src="/images/icon-ethereum.svg" alt="ethereum" />
                    <h2>0.041 ETH</h2>
                </div>
                <div className="time">
                    <img src="/images/icon-clock.svg" alt="clock" />
                    <h2>3 days left</h2>
                </div>
            </div>
        </div>
        <div className="user-details">
            <img src="/images/image-avatar.png" alt="avatar" />
            <h2>Creation of <span className='username'>Jules Wyvern</span></h2>
        </div>
    </div>
  )
}

export default NftCard