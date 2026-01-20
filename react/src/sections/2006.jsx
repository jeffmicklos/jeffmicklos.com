import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import Image from '../Image';
import Tip from '../Tooltip';
import { Blockquote } from '../Blockquote';
import { Subheader } from '../Subheader';

export default function TwoThousandAndSix() {
  return (
    <Section>
      <HeadingImage path="20060521-DSCF7420.jpg">2006</HeadingImage>

      <Sidebar>
        <Image path="20060429-DSCF6848.jpg">Mt. Helix, April 29th, 2006</Image>

        <Image path="20060519-DSCF7353.jpg">
          Brian in the Ralph’s parking lot after our show at Experience Coffee,
          May 19th, 2005
        </Image>

        <Image path="20230521-IMG_5696.jpg">
          I just now realized that I didn’t take this photo, because I am in it.
          {/* I have no idea how I ended up with it, but I've been keeping it safe
          for as long as I can remember.           <br /> */}
          Sunrise on Mt. Helix, May 21st, 2006
        </Image>

        <Image path="DSCF7440.jpg">
          “Every single day,” Mission Valley, May 25th, 2006
        </Image>

        <Image path="20060526-DSCF7473.jpg">
          A night I have zero recollection of, May 26th, 2006
        </Image>

        <Image path="20060925-DSCF8569.jpg">
          Raya and me, Kensington, September 25th, 2006
        </Image>

        <Image path="20061006-DSCF8660_2.jpg">
          Bassams on Market St. Downtown, October 6th, 2006
        </Image>

        <Image path="101306_17572.jpg">Casa De Oro, October 13th, 2006</Image>

        <Image path="20061224-DSCF9263.jpg">Bedroom, December 24th, 2006</Image>
      </Sidebar>

      <Body>
        <Paragaph>
          In 2006, MTV VJ Sway joined then up-and-coming rapper Lupe Fiasco on a
          walking tour of his neighborhood in Chicago. Fiasco was twenty-four
          and glowing with the third drive of the Utopian Impulse. Gesturing at
          his surrounding, he made it clear: “I don’t like this, this is not how
          it’s supposed to be.” He believed a better environment was possible,
          and like Tony Wilson before him, he imagined culture and city
          interconnected in a feedback loop of creation.
        </Paragaph>

        <Paragaph>
          In years that followed, Lupe grew from niche blog-rap status to
          rapping over Thom Yorke samples with Kanye and Pharrell, getting a
          Jay-Z feature, starting a post-punk band, rapping about Gaza getting
          bombed under the watchful of eye then-President Obama, and having a
          Top 10 single built around a Modest Mouse sample.
        </Paragaph>

        <Paragaph>
          But in 2012, six years after that first walk, Sway played back the old
          footage to him. What followed wasn’t nostalgia, but a cold
          confrontation with the past. Lupe Fiasco was face to face with ghosts:
        </Paragaph>

        <video
          controls
          poster="https://res.cloudinary.com/listentoapril/video/upload/so_109/emo/lupe.jpg"
          src="https://res.cloudinary.com/listentoapril/video/upload/v1768821049/emo/lupe.mov"
          className="mb-4"
        />

        <Paragaph>
          To fill the dead air, Sway suggests a backward-facing responsibility
          that we all have to the dead: “their spirit still lives on because you
          can acknowledge them.” In this framing, the past is not finished or
          foreclosed on, but is instead, a living presence, haunting every
          crowded street corner, dim alleyway, and sodium vapor parking lot. The
          unfilled hopes and dreams of passed/past weigh on the living, waiting
          to be redeemed by action, waiting for their story to be told not as a
          snuffed out flame but as a crucial piece of a generational
          emancipatory revolution. As Walter Benjamin said, “even the dead will
          not be safe from the enemy, if he wins.”
        </Paragaph>

        <hr className="mt-8 mb-8 border-gray-700" />

        <Paragaph>
          Apropos of nothing, here is a brief accounting of non-equivalent
          events that took place across two days in October 2006:
        </Paragaph>

        <Paragaph>
          <Subheader>Friday, October 13th 2006</Subheader>

          <ol className="list-disc">
            <li className="mb-2">
              Israeli airstrikes kill “a Hamas member and two other passengers”
              per CNN, with the IDF stating the vehicle was full of “rockets and
              carrying Hamas terrorists on their way to launch the rockets at
              Israel.”
            </li>
            <li className="mb-2">
              Three days after the physical release, I listened to the Marie
              Antoinette soundtrack for the first time. I was immobilized by the
              sounds of The Cure, The Radio Dept., and Windsor for the Derby.
            </li>
          </ol>
          <Subheader>Tuesday, October 31st 2006</Subheader>
          <ol className="list-disc">
            <li className="mb-2">
              Hezbollah leader Hassan Nasrallah confirmed serious negotiations
              with Israel on a prisoner exchange, a request that Israel had
              repeatedly rejected. The prisoner exchange would eventually come
              to fruition in 2008, with Hezbollah handing over the remains of
              two IDF soldiers captured in 2006, in exchange for five living
              Lebanese citizens and the remains of 199 Lebanese and Palestinian
              citizens held by the IDF.
            </li>
            <li className="mb-2">
              Israel forces moved into northern Gaza, starting a week long
              operation that took the lives of one IDF soldier and 82
              Palestinians. Israel referred to this operation as “Operation
              Autumn Clouds.” It culminated a week later with the shelling of
              homes in Gaza, which Israeli government referred to as a "mistake"
              caused by a "technical failure” in their missile guidance system.
              The United Nations Human Right Council were denied entry to Israel
              and occupied Palestinian territory, rendering an international
              fact-finding investigation impossible. United States Ambassador
              John Bolton remarked “we deeply regret the injuries and loss of
              life in Gaza” and added a but: “There is no question that Israel
              has a right to defend itself.”
            </li>
            <li>
              CNN’s American Morning program had an on-location segment, in
              which they went “in search of criminal ghosts on this Halloween.”
              The tour of Philadelphia's shuttered Eastern State Penitentiary
              was administered by Shawn Kelly, an envoy to the modern ruins
              since 1994. When asked if Kelly was afraid of the spirits trapped
              in the cells, he replied: “I don't believe in ghosts, but I've
              been running from them all my life.”
            </li>
          </ol>
        </Paragaph>
      </Body>
    </Section>
  );
}
