import React from 'react';
import  './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className='home'>
          <div className='home_container'>
              <img className="home_imageTop"
          src="https://www.technologyshout.com/wp-content/uploads/2020/09/amazon_best_tv_march_2020_1585384758649.jpg"
          alt=""/>
          <div className='home_row'>
          <Product
            id="12321341"
            title="The Power of Your Subconscious Mind Paperback"
            price={219.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51QnuLIY2uL._SX322_BO1,204,203,200_.jpg"
          />
              <Product
            id="49568095"
            title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life"
            price={313.8}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/516pmXNNmCL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id="43518064"
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
            price={125.2}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51u2E5fNq8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          </div>
          <div className='home_row'>
          <Product
            id="4903850"
            title="Xiaomi 11 Lite NE 5G (Vinyl Black 6GB RAM 128 GB Storage) | Slimmest (6.81mm) & Lightest (158g) 5G Smartphone"
            price={25999}
            rating={4}
            image="https://m.media-amazon.com/images/I/71CyDMPnuFL._SL1500_.jpg"
          />
          <Product
            id="23445930"
            title="OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)"
            price={27999}
            rating={5}
            image="https://m.media-amazon.com/images/I/61iy2Ru9KdS._SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="Samsung Galaxy M52 5G (ICY Blue, 6GB RAM, 128GB Storage) Latest Snapdragon 778G 5G | sAMOLED 120Hz Display"
            price={29999}
            rating={4}
            image="https://m.media-amazon.com/images/I/81-tqKsrTuL._SL1500_.jpg"
          />
        
          </div>
          <div className='home_row'>
          <Product
            id="50828332"
            title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces, Stress Monitor, Heart & SpO2 Monitoring, 14 Sports Modes, Sleep Monitor & 5 ATM Water Resistance(Sandy Cream)"
            price={2499.99}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41TiopG4SeL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="90829332"
            title="Noise ColorFit Ultra 2 with 1.78 AMOLED Display, Best-in-Class Resolution, Premium Stainless Steel Body, 60+ Sports Modes, 100+ Watch Faces, IP68 Waterproof (Jet Black)"
            price={5999}
            rating={5}
            image="https://m.media-amazon.com/images/I/41xeyUkg2+L._SY300_SX300_.jpg"
          />
              
          </div>
          <img className="home_imageBottom" src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Lawnandgarden/September/Kraftseeds_-_Mobile.jpg' />
          
              </div>  
        </div>
    )
}

export default Home;

