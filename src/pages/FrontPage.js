import React from 'react'
import Header from '../components/Header'
import UserFront from '../components/UserFront'
import ariana from '../images/ariana.jpg'
import barackobama from '../images/barackobama.jpg'
import cnn from '../images/cnn.jpg'
import ellen from '../images/ellen.jpg'
import fallon from '../images/fallon.jpg'
import gomez from '../images/gomez.png'
import jt from '../images/jt.jpg'
import justinbieber from '../images/justinbieber.jpg'
import kardashian from '../images/kardashian.jpg'
import katyperry from '../images/katyperry.jpg'
import ladygaga from '../images/ladygaga.jpg'
import modi from '../images/modi.png'
import rihanna from '../images/rihanna.jpg'
import ronaldo from '../images/ronaldo.jpg'
import shakira from '../images/shakira.jpg'
import spears from '../images/spears.jpg'
import taylorswift from '../images/taylorswift.jpg'
import trump from '../images/trump.jpg'
import twitter from '../images/twitter.png'
import youtube from '../images/youtube.png'

import Plot from '../components/Plot'





export default function FrontPage() {

  return (
    <>
      <section>
        <Header />

        <UserFront
          img={katyperry}
          name='1. Katy Perry'
          handle='@katyperry'
          url='https://twitter.com/katyperry'
          joined='Joined: March 2007'
          followers='107,579,981'
          following='217'
          tweets='9990'
        />
        <UserFront
          img={barackobama}
          name='2. Barack Obama'
          handle='@BarackObama'
          url='https://twitter.com/BarackObama'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='106,711,130'
          following='613,640'
          tweets='15,634'
        />
        <UserFront
          img={justinbieber}
          name='3. Justin Bieber'
          handle='@justinbieber'
          url='https://twitter.com/justinbieber'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='105,865,454'
          following='298,374'
          tweets='30,525'
        />
        <UserFront
          img={rihanna}
          name='4. Rihanna'
          handle='@rihanna'
          url='https://twitter.com/rihanna'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='91,664,589'
          following='1,080'
          tweets='10,313'
        />
        <UserFront
          img={taylorswift}
          name='5. Taylor Swift'
          handle='@taylorswift'
          url='https://twitter.com/taylorswift13'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='83,580,693'
          following='0'
          tweets='211'
        />
        <UserFront
          img={ladygaga}
          name='6. Lady Gaga'
          handle='@ladygaga'
          url='https://twitter.com/ladygaga'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='78,783,189'
          following='124,916'
          tweets='8,961'
        />
        <UserFront
          img={ronaldo}
          name='7. Ronaldo'
          handle='@Cristiano'
          url='https://twitter.com/Cristiano'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='78,423,030'
          following='51'
          tweets='3,409'
        />
        <UserFront
          img={ellen}
          name='8. Ellen'
          handle='@TheEllenShow'
          url='https://twitter.com/TheEllenShow'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='77,904,995'
          following='31,246'
          tweets='19,765'
        />
        <UserFront
          img={youtube}
          name='9. You Tube'
          handle='@YouTube'
          url='https://twitter.com/YouTube'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='71,589,477'
          following='1,036'
          tweets='23,468'
        />
        <UserFront
          img={jt}
          name='10. Justin Timberlake'
          handle='@jtimberlake'
          url='https://twitter.com/jtimberlake'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='64,990,272'
          following='291'
          tweets='4,094'
        />
        <UserFront
          img={ariana}
          name='11. Ariana Grande'
          handle='@ArianaGrande'
          url='https://twitter.com/ArianaGrande'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='63,427,833'
          following='61,960'
          tweets='44,624'
        />
        <UserFront
          img={trump}
          name='12. Donald J. Trump'
          handle='@realDonaldTrump'
          url='https://twitter.com/realDonaldTrump'
          joined='Joined: March 2007'
          followers='61,294,571'
          following='47'
          tweets='42,506'
        />
        <UserFront
          img={kardashian}
          name='13. Kim Kardashian West'
          handle='@KimKardashian'
          url='https://twitter.com/KimKardashian'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='61,044,742'
          following='146'
          tweets='29,572'
        />
        <UserFront
          img={gomez}
          name='14. Selena Gomez'
          handle='@selenagomez'
          url='https://twitter.com/selenagomez'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='57,782,920'
          following='1,188'
          tweets='4,386'
        />
        <UserFront
          img={spears}
          name='15. Britney Spears'
          handle='@britneyspears'
          url='https://twitter.com/britneyspears'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='56,370,296'
          following='381,917'
          tweets='5,630'
        />
        <UserFront
          img={twitter}
          name='16. Twitter'
          handle='@Twitter'
          url='https://twitter.com/twitter'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='56,241,748'
          following='140'
          tweets='10,596'
        />
        <UserFront
          img={cnn}
          name='17 .CNN Breaking News'
          handle='@cnnbrk'
          url='https://twitter.com/cnnbrk'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='55,364,269'
          following='121'
          tweets='66,446'
        />
        <UserFront
          img={shakira}
          name='18. Shakira'
          handle='@shakira'
          url='https://twitter.com/shakira'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='51,255,648'
          following='212'
          tweets='6,234'
        />
        <UserFront
          img={fallon}
          name='19. Jimmy Fallon'
          handle='@jimmyfallon'
          url='https://twitter.com/jimmyfallon'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='51,218,150'
          following='8,929'
          tweets='11,955'
        />
        <UserFront
          img={modi}
          name='20. Narendra Modi'
          handle='@narendramodi'
          url='https://twitter.com/narendramodi'
          bio='Bio: Love. Light.'
          joined='Joined: March 2007'
          followers='48,203,956'
          following='2,169'
          tweets='23,945'
        />
      </section>
    </>
  )
}