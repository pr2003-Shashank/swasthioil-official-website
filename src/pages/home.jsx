import React from 'react'
import Carousel from 'react-material-ui-carousel';
import car_img from '../assets/images/coco3.jpg';
import Pure from '../assets/images/Pure.png';
import Health from '../assets/images/Health.png';
import Hair from '../assets/images/Hair.png';
import Edible from '../assets/images/Edible.png';
import Shelf from '../assets/images/Shelf.png';
import Skin from '../assets/images/Skin.png';
import k_img from '../assets/images/Kateel.jpg';
import { Button, Paper, Typography } from '@mui/material';
import { CarouselNextIcon, CarouselPrevIcon } from '../renders/icon';
import { useNavigate, useLocation } from 'react-router-dom';
import './home.scss'
import Cards from '../renders/card';

function Home() {

  const navigate = useNavigate();
  const location = useLocation();

  let items = [
    // {
    //     bannerImg: car_img1,
    // },
    // {
    //     bannerImg: car_img2,     
    // },
    {
      bannerImg: car_img,
    },
  ];

  let textItems = [
    {
      text1: 'Donate Blood, Save Lives',
      description: 'One donation can save upto three lives. The simple, generous act of giving blood can save lives.'
    },
    {
      text1: 'Days of Gratitude',
      description: "Your birthday can be someone else's special day as well. Make your birthday memeorable by giving someone the 'Gift of Life'. Donate blood, Donate for a cause."
    }
  ]

  function Item(props) {
    return (
      <Paper>
        <div className="banner_img">
          <img src={props.item.bannerImg} alt="banner-image" />
        </div>
      </Paper>
    );
  }

  function TextItem(props) {
    return (
      <div className='overlay_text'>
        <div className='overlay_head'>
          <Typography>{props.item.text1}</Typography>
        </div>
        <div className='overlay_body'>
          <Typography>{props.item.description}</Typography>
        </div>
      </div>
    )
  }

  return (
    <div className='home_container'>
      <div className='carousel_container'>
        <Carousel
          className="banner_carousel"
          // NextIcon={<CarouselNextIcon />}
          // PrevIcon={<CarouselPrevIcon />}
          // navButtonsAlwaysInvisible={true}
          // navButtonsAlwaysVisible={false}
          autoPlay={true}
          stopAutoPlayOnHover={false}
          interval={10000}
          animation={'slide'}
          swipe={true}
        >
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}

        </Carousel>
        {/* <div className="carousel_overlay">
          <Carousel
            className='overlay_carousel'
            interval={6000}
            // navButtonsAlwaysInvisible={true}
            indicators={false}
          >
            {textItems.map((item,i) => (
              <TextItem key={i} item={item}/>
            ))}
          </Carousel>
          <Button
					  className="register_btn"
					  variant="contained"
					  onClick={(e) => {
						  window.open('');
					  }}
				  >
					  <span>REGISTER NOW</span>
				  </Button>
        </div> */}

      </div>
      <div className='Product_container'>
        <div className='Product_header'>
          <Typography>Products</Typography>
        </div>
        <div className='Product_display'>
          <Cards />
        </div>
      </div>
      <div className='Coco_container'>
        <div className='Coco_title'>
          <Typography>Experience the Extraordinary with Coconut Oil!</Typography>
        </div>
        <div className='Coco_description'>
          <div className='Coco_left'>
            <Typography>
               <span>Cold-Pressed Coconut Oil</span><br/>
               What sets our cold-pressed coconut oil apart from conventionally roasted oil is its preservation of essential nutrients, natural aroma, and flavour. By avoiding the high temperatures used in the roasting process, we ensure that the oil remains rich in antioxidants, vitamins, and the pure, unadulterated goodness of coconuts. This translates into an oil that not only enhances the flavour of your dishes but also provides a myriad of health benefits.<br/>
               {/* At Swasthi, we believe in the power of purity and tradition. Our commitment to the 'ghana' machine and the cold-pressed method reflects our dedication to quality and your well-being. We invite you to explore our range of coconut oil products and experience the difference that pure, cold-pressed oil can make in your life. */}
            </Typography>
          </div>
          <div className='Coco_right'>
            <Typography>" Unlock the secret to nourishment like no other. Coconut oil, a treasure trove of wellness, is your closest ally, second only to mother's milk, when it comes to lauric acid. This extraordinary natural elixir offers a source of lauric acid unparalleled in the culinary world. Discover the power of coconut oil, a culinary marvel that has been cherished for generations, and elevate your well-being to new heights. Embrace the wisdom of nature and make coconut oil an essential part of your daily regimen, celebrating its remarkable resemblance to the liquid gold of life's purest source. "</Typography>
          </div>
        </div>
      </div>
      <div className='Speciality_container'>
        <div className='Speciality_title'>
          <Typography>Our Speciality & Health Benifits</Typography>
        </div>
        <div className='Speciality_description1'>
          <div className='sp_card'>
            <div className='sp_img'>
              <img className='img_vector' src={Pure} />
            </div>
            <div className='sp_content'>
              <Typography><span>Pure</span><br />"Swasthi guarantees that all coconut oil variants are 100% pure, completely devoid of any adulterants, fragrances, additives, preservatives, or chemicals."
              </Typography>

            </div>
          </div>
          <div className='sp_card'>
            <div className='sp_img'>
              <img className='img_vector' src={Health} />
            </div>
            <div className='sp_content'>
              <Typography><span>Healthy</span><br />"Highly digestible, enhances metabolic function, supports weight management, lowers unhealthy cholesterol levels, promotes cardiovascular well-being, strengthens the immune system, and is renowned for its immunity-boosting properties."
              </Typography>
            </div>

          </div>
          <div className='sp_card'>
            <div className='sp_img'>
              <img className='img_vector' src={Shelf} />
            </div>
            <div className='sp_content'>
              <Typography><span>Long Shelf Life</span><br />"Careful selection of premium edible coconut/copra, meticulous sun drying to eliminate moisture, fine filtering, and airtight packaging guarantee an extended shelf life upto 6 months."
              </Typography>
            </div>
          </div>
          <div className='sp_card'>
            <div className='sp_img'>
              <img className='img_vector' src={Edible} />
            </div>
            <div className='sp_content'>
              <Typography><span>Edible use</span><br />
                "Swasthi coconut oil is a versatile choice for all your culinary needs, whether in deep frying, salad dressings, shallow frying, or even raw consumption. Its popularity shines in the traditional dishes of the Konkan regions and also South Indian cuisine."
              </Typography>
            </div>
          </div>

        </div>
        <div className='Speciality_description2'>
          <div className='sp_card'>
            <div className='sp_img'>
              <img className='img_vector' src={Hair} />
            </div>
            <div className='sp_content'>
              <Typography><span>Hair Care</span><br />"Nurtures the skin, hydrates and conditions the hair, fortifies the roots, maintains a refreshing scalp, and is a popular choice as a hair oil, whether used as it is or blended with various additives of your choice."
              </Typography>
            </div>

          </div>
          <div className='sp_card'>
            <div className='sp_img'>
              <img className='img_vector' src={Skin} />
            </div>
            <div className='sp_content'>
              <Typography><span>Skin Care</span><br />"Coconut oil offers anti-inflammatory properties, aids in maintaining skin hydration, effectively combats acne, and provides additional benefits for overall skin health."
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className='Kateel_container'>
        <div className='k_title'>
          <Typography>Our Pillar of Blessings</Typography>
        </div>
        <div className='k_description'>
          <div className='k_right'>
          </div>
          <div className='k_mid'>
            <img className='k_img' src={k_img} />
            {/* Kateel Shri Durgaparameshwari */}
          </div>
          <div className='k_left'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home