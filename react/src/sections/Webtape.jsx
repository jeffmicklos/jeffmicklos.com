import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import Image from '../Image';
import Tip from '../Tooltip';
import { Blockquote } from '../Blockquote';

export default function Webtape() {
  return (
    <Section>
      <HeadingImage path="20230906-000000010034.jpg">
        The Most <br /> Natural Thing <br />
        in the World
      </HeadingImage>

      <Sidebar>
        <Image path="20070213-DSCF9465_3.jpg">
          La Mesa, February 12th 2007, 12:40AM
        </Image>
        <Image path="20230906-000000010026.jpg">Summer 2023</Image>
        <Image path="P3250274.gif">
          San Francisco, March 25th, 2008, 12:24AM
        </Image>
      </Sidebar>

      <Body>
        <Paragaph>
          Our 2024 album <i>webtape</i> was constructed from our wreckage. We
          were archeologists, our backs to the buffering future as we dusted off
          the contours of our past lives, using the ruins as a map for the
          unrendered horizon.
        </Paragaph>

        <Paragaph>
          The first song on the album, the title track, opens with the sound of
          the fan whirring away inside my Aluminum Powerbook G4, the same audio
          clip used in the first song we recorded together twenty years earlier.
          What comes next is 11 minutes of memories: a slowed down piano part
          Joe wrote around 2015, a snippet of Mark inhaling in 2005 and saying
          “that’s weird” in 2007, spliced together room ambiance from the movie{' '}
          <Tip content={'this, i concede, is a bit on the nose'}>
            <i>Memento</i>
          </Tip>
          , a field recording of a TiVo’d episode of <i>Boy Meets World</i>, and
          cut-ups of hometown post-hardcore heroes DieRadioDie.
        </Paragaph>

        <Paragaph>
          The last song, yearning, was built from cut-ups of Blink-182’s “I Miss
          You,” interwoven with fragments of the theme song to <i>The Hills</i>,
          and a piano part I wrote to honor, or possibly to conjure, Joe, whom I
          hadn’t seen in what felt like years but was probably only a few
          months. It was an indictor light on a life vest, blinking in a coded
          pattern that very few could decipher.
        </Paragaph>

        <Paragaph>
          Scattered in-between are incidental moments. Summer, the only friend
          that moved out-of-state for college, repeatedly shouting “Hey!”, a{' '}
          <abbr title="San Francisco Municipal Railway">MUNI</abbr> ride in
          2007, video of friends trudging through Northern Californian snow, and
          countless scraps of abandoned recordings. These moments could never
          have imagined their final form, or how they would resurface to guide
          us decades later. They waited patiently until it was their time, until
          we could treat them with the reverence they deserved.
        </Paragaph>

        <Paragaph>
          I put everything I had into that album. It’s all there, nothing left
          on the table. We created deeply a truly unique artifact that is wholly
          us. I felt so much pride, it was an album that AI could have never
          conceived, it’s both incredibly personal in its composition and deeply
          human in its imperfection. You can see the cracks and the light that
          leaks through them. It’s exactly what makes art just that, it’s
          layered with all our pasts: our squishy feelings, grandiose plans,
          lost futures, and shared struggles. It’s the presence of these ghosts
          that make it a true representation of human life.
        </Paragaph>
      </Body>
    </Section>
  );
}
