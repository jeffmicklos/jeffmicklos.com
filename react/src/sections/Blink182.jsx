import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import Image from '../Image';
import Tip from '../Tooltip';
import { Blockquote } from '../Blockquote';
import IntroQuote from '../IntroQuote';
import SidebarQuote from '../SidebarQuote';

export default function Blink182() {
  return (
    <Section>
      <HeadingImage src="https://res.cloudinary.com/listentoapril/image/upload/v1768461929/emo/blink182__Up_All_Night.gif">
        Blink-182
      </HeadingImage>

      <Sidebar>
        {/* <Image path="20240725-000000020017.jpg" /> */}
        <Image path="20240725-000000010011.jpg">
          Blink-182 at Petco Park on June 30, 2024. The happiness I felt at this
          concert was unparalleled. Shot on a Ricoh R1.
        </Image>
        {/* <Image path="vlcsnap-2026-01-04-17h41m51s676.jpg">
          – Crowd-sourced footage for Up All Night by Blink-182
        </Image> */}
        <Image path="Screenshot_2026-01-04_at_5.50.48_PM.jpg">
          – “Up All Night,” Blink-182
        </Image>
        <SidebarQuote
          cite={
            <>
              Another great emo interoplation of Sylvia Plath, from an album
              laced with references to her work.
              <br />
              “Forget Me Not”, The Promise Ring, 1997
            </>
          }
        >
          But between one June and September, <br /> you're all I remember.{' '}
          <br />
          But I'm a lantern, my head a moon,
          <br />I married a room
        </SidebarQuote>

        <div className="mb-4">
          <iframe
            width="100%"
            className="mb-4"
            style={{ aspectRatio: 1.6667 }}
            src="https://www.youtube.com/embed/0cLeyGWthgw?si=JcyOuYjcGW8-hUv6"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <figcaption className="text-xs text-gray-500 text-right">
            I couldn’t mention a song about a ghost without adding this.
            <br />
            “Ghosts”, Japan, 1981
          </figcaption>
        </div>

        <Image path="backlot01.jpg">
          Brochure from the Downey Studios backlot
        </Image>
        <Image path="294770361_1093219994882666_3656594791540645596_n.jpg">
          A side-by-side frame match of <i>Christmas with the Kranks</i> and “Up
          All Night.”
        </Image>
      </Sidebar>

      <Body>
        <div className="flex space-between gap-4">
          <IntroQuote cite={<>– Blink-182, 2023</>}>
            I don't feel pain, but I feel more than you'd ever know
          </IntroQuote>

          <IntroQuote cite={<>– Sylvia Plath</>}>
            I don’t know what it is like to not have deep emotions. Even when I
            feel nothing,
            <br />I feel it completely.
          </IntroQuote>
        </div>

        <Paragaph>
          I’ve added a few new tracks to my list of Favorite Blink-182 Songs,
          songs I heard for the first time only within the past two years. More
          Than You Know from their 2023 release “One More Time,” alongside
          “Ghost on the Dance Floor” and “Up All Night,” both released on 2011’{' '}
          <i>Neighborhoods</i>
          but unheard by me until 2024.
        </Paragaph>

        <Paragaph>
          Upon the release of Neighborhoods, MTV News slunk into abyss with
          their review, stating:
        </Paragaph>

        <Paragaph>
          <Blockquote>
            Lyrically, Neighborhoods is the bleakest thing Blink have ever done,
            haunted by specters both real…and imagined. <br />…<br /> Sonically,
            it's practically nocturnal…a sound that recalls nothing so much as
            dark streets and black expanses, mostly of the suburban variety (the
            field behind the 7-Eleven, the cul-de-sac illuminated by the single
            streetlight, etc.).
          </Blockquote>
        </Paragaph>

        <Paragaph>
          “Ghost on the Dance Floor” opens the album with guitar jabs that sound
          like distorted blasts of morse code from a broken transmitter,
          propelled by rolling drums, and a synth line that feels spliced from
          gothic cloth of The Cure or Joy Division. Each verse and chorus
          explode into one another, a chain reaction of catastrophic bliss, with
          Tom Delonge drawing out each syllable to reach maximum density: “Yeah
          I, I saw your ghost tonight, the moment felt so real.”
        </Paragaph>

        <Paragaph>
          The third track off Neighborhoods, “Up All Night,” is far more
          belligerent in it’s instrumentation but still meditative in it’s
          lyrical delivery. The song invokes scenes of a never ending struggle
          for play and disengagement from the twisted wiring of Capital, only to
          be left haunted by the shadows it casts:
        </Paragaph>

        <Paragaph>
          <Blockquote>
            Everyone falls and spins and gets up again <br /> with a friend who
            does the same. <br /> Everyone lies and cheats their wants and
            needs, <br />
            and still believes their heart. <br /> And everyone gets the chills,
            the kind that kills, <br /> when the pain begins to start <br /> …{' '}
            <br /> Let me get this straight, do you want me here? <br /> As I
            struggle through each and every year… <br /> And all these demons,
            they keep me up all night… <br />
            They keep me up all night
          </Blockquote>
        </Paragaph>

        <Paragaph>
          Two music videos were released for “Up All Night.” The first, produced
          in partnership with a cellphone carrier, was assembled from the living
          archive of the internet’s most popular video-sharing platform. It
          stitched together over 10,000 ripped and pixelated fragments fans had
          uploaded: cover versions, skate videos, bedroom dances, and every
          slice of life Blink fans would have uploaded in the early Obama years,
          before curation and the algorithm turned documentation into content.
          The video plays out like a corrupting flashback, smeared pixels triply
          compressed into sludge and UI elements frozen in time. It’s
          composition makes impossible to view at a higher quality. It’s 360p
          forever.
        </Paragaph>

        <Paragaph>
          It unfolds over the course of a single night in what director Isaac
          Rentz described as “a neighborhood where all the parents have
          disappeared.” The setting was a backlot just south of Los Angeles,
          originally constructed for 2004’s <i>Christmas with the Kranks</i>.
          Over the video’s three minutes and forty seconds, the suburbs
          surrender to the volatility and luminescence of unsupervised youth.
          The kids move in active defiance of the song’s resignation: up all
          night, fueled by reckless abandon, and warding off the demons by
          laughing in their face.
        </Paragaph>

        <Paragaph>
          “Up All Night” may have been the last picture shot at Downey Studios,
          which was entirely demolished in October of 2012, to make way for
          77-acre retail park for Wal-Mart, TJ Maxx, and HomeGoods.
        </Paragaph>
      </Body>
    </Section>
  );
}
