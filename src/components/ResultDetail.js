import React from 'react';

class ResultDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: ["https://s3-media1.fl.yelpcdn.com/bphoto/vcKdU_2kapjws9OC1Xu82Q/258s.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/ma8rywCKJ5Hd64BJRkTvGg/258s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/ZlqUxZioWCiK65J2WG2c5g/258s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/8_scgEa9LwhiD-oWHyufQw/258s.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/qVkizN0MGz9FWS6EKOaRsw/258s.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/fzWd6RapKTm4ICuu5uJ9gA/258s.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/efM1myL9iA2J93vx4qQmxA/258s.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/kjK2iJb_wipXjlUaOlnCcg/258s.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/E8FnCLlwr5_ktpE7K9skXA/258s.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/LJqSQAhjqa6mL-E0H_Ia_g/258s.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/uuMe9V6wPzzcD4EgbfOKEg/258s.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/FQj5Aqii5KXmzx7aaC8J_w/258s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/n6C6K9iSs9z8zQYxVqOr2Q/258s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/n-GICLMjZQVWB4q38dNoiQ/258s.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/ii0HpbWKccCxHiFETVm91g/258s.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/PEzPF2gIfIdClSv5wKci3Q/258s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/HbQNhPR9Xa7s1w1PsBC43g/258s.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/KdegN7udfUkf5s8exyRKvQ/258s.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/jXluP0ToFuW_fWPWp14w8Q/258s.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/JteBEbAMpiFQ14cve3_oBQ/258s.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/8vNlatAKYPry5M7n79kGHA/258s.jpg", "https://s3-media2.fl.yelpcdn.com/bphoto/sGLu5Uz461caln8MiUgr0g/258s.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/5xfKKaSxmEVT3fnVPcKDew/258s.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/FwLHMoWL19q79-xrft-R8Q/258s.jpg", "https://s3-media1.fl.yelpcdn.com/bphoto/QKFOcNzGMcL0S_hOUGBK6w/258s.jpg", "https://s3-media3.fl.yelpcdn.com/bphoto/XfITHGHOvrCKKYEpaqwXJA/258s.jpg", "https://s3-media4.fl.yelpcdn.com/bphoto/V3F99ZXsi8M5FGV5sf4NXQ/258s.jpg"]
    }
  }

  render() {
    const pictureCarousel = this.state.pictures.map(src => 
      <li key={src}>
        <img src={src} alt=''/>
      </li>
    )

    return (
      <div>
        <ul>
          {pictureCarousel}
        </ul>
      </div>
    )
  }
}

export default ResultDetail;



// $.get('https://www.yelp.com/biz_photos/tasty-pot-boston-4', function (response) {
//   console.log(response);
// });