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

export default function SellOut() {
  return (
    <Section>
      <HeadingImage src="https://res.cloudinary.com/listentoapril/image/upload/v1768464067/emo/The_Wonder_Years__I_Just_Want_To_Sell_Out_My_Funeral__Calg_1.gif">
        I Just Want to <br />
        Sell Out <br />
        My Funeral
      </HeadingImage>

      <Sidebar>
        {/* <Image path="20051113-DSCF4587_2.jpg"></Image> */}
        {/* <Image path="20041020-rain_003.jpg"></Image> */}
        {/* <Image path="20070326-DSCF9877.jpg"></Image> */}
        <Image path="20070326-DSCF9904.jpg">Disneyland, March 26th, 2007</Image>

        <Image path="20050721-DSCF2396.jpg">Balboa Park, July 21st, 2005</Image>

        <Image path="wonder_years_live.gif">
          Against all odds, I got a chance to see The Wonder Years in 2025. A
          far cry away from the basement shows of the previous decade, less
          dogpiling for sure, but I'm grateful for any moment where
          30-year-somethings can scream out for the Utopian Impulse.
          <br />
          The Wonder Years, Petco Park, October 25th, 2025
        </Image>

        <Image path="20040102-DSCF0651_2.jpg">
          Rancho San Diego, Summer 2007
        </Image>

        <div className="mb-4">
          <iframe
            width="100%"
            className="mb-4"
            style={{ aspectRatio: 1.6667 }}
            src="https://www.youtube.com/embed/uyjx2K9Xz2c?si=dnb59VAHhi86fW3X"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <figcaption className="text-xs text-gray-500 text-right text-pretty">
            I Just Want To Sell Out My Funeral, The Wonder Years, March 16th,
            2014
          </figcaption>
        </div>

        <Image path="---_0163_2.jpg" />

        <SidebarQuote
          cite={<>– “An Ode to the Nite Ratz Club”, The Hotelier, 2011</>}
        >
          I still walk those paths at night,
          <br />
          but now just on my own
          <br />I recite to myself every story
          <br />
          In hopes that I will never let them go
          <br />
          <br />
          I'll hold on to every polaroid from France and Rome
          <br />
          And remember the nights at the Alamo
          <br />
          As if it were my second home
        </SidebarQuote>
        {/* <Image path="20060923-DSCF8513_1.jpg"></Image> */}
        {/* <Image path="19691231-59810005.jpg"></Image> */}
        <Image path="20050926-DSCF3858.jpg"></Image>
        {/* <Image path="20050827-DSCF3002.jpg"></Image> */}
      </Sidebar>

      <Body>
        <IntroQuote cite="– Karl Marx, 1852">
          Men make their own history, but they do not make it as they please;
          they do not make it under self-selected circumstances, but under
          circumstances existing already, given and transmitted from the past
        </IntroQuote>
        <Paragaph>
          “There There” opens <i>The Greatest Generation</i>, The Wonder Years’
          follow-up to <i>Suburbia I’ve Given You All and Now I’m Nothing</i>,
          and the closing chapter in their trilogy about growing up in
          abandonment. If the earlier records were documents of paralysis,{' '}
          <i>The Greatest Generation</i> is a reckoning, the drawing of a map to
          navigate through anxiety and out of depression, with Dan Campbell
          stating: “I want to be remembered for more than this.”
        </Paragaph>
        <Paragaph>
          The song begins as pop-punk illuminated by flickering candle light,
          fragile and hushed until the line “I’m sorry I don’t laugh at the
          right times” breaks the tension and pivots the track into a{' '}
          <Tip content="This tracks, as the Donut Friend himself, Mark Trombino, produced Jimmy Eat World's Clarity and mixed The Greatest Generation.">
            <i>Clarity</i>-era
          </Tip>{' '}
          lattice of spindly guitars. As the chorus bursts outward, Dan punches
          in with “is this what it feels like?” atop outstretched
          instrumentation that leaves notes suspended in mid-air, trapped in a
          thick haze of reverberated ash. It was a new sound for the band, and
          the genre, prompting AbsolutePunk to note that{' '}
          <i>The Greatest Generation</i> “has no real precedent in this
          community.”
        </Paragaph>
        <Paragaph>
          “Passing Through the Screen Door,” often abbreviated by fans to PTSD,
          functions as the first full track on the album. It returns to familiar
          sonic terrain: quick fire snares, explosive guitars, and pick slides
          that rev like motorbikes down a stretch of backcountry gravel. Dan’s
          vocals pierce through the overdriven guitar intractably, giving voice
          to the album’s thesis: “I’m conjuring ghosts on a forty-hour ride home
          / And they keep asking me what I’m doing with my life.” What could
          have been previously viewed as nostalgia on their prior releases now
          renders as a interrogation: the rose-colored comfort of the past has
          been stripped away and it’s remnants demand accounting.
        </Paragaph>
        <Paragaph>
          What permeates <i>The Greatest Generation</i> is a historically
          located anxiety, a millennial panic that enough hasn’t been done. A
          sense that everyone else has already read the instruction book, been
          whispered the secret, and they are all, in unison, keeping it out of
          reach. The rites-of-passage of adulthood, like stable work, home
          ownership, and coherence, closed just before approach:{' '}
          <i>
            “All the people I’ve graduated with / All have kids / All have wives
            / All have people who care if I come home at night.”
          </i>{' '}
          These insecurities would also take shape in the workplace,
          pathologized under the banner of imposter syndrome, turning a
          systematic condition into a personal malfunction.
        </Paragaph>
        <Paragaph>
          It’s a hallmark of the early 2010s, when digitally sun-bleached photos
          and zero-interest rate extravagance masked over the structural anchor
          that hung around the necks of 20-somethings. But <i>signaling</i>{' '}
          easy-to-come success was achievable with the just right amount of
          sepia tone on the timeline.
        </Paragaph>
        <Paragaph>
          The sixth track on the album, “The Devil in My Bloodstream,” finds The
          Wonder Years looking backward for a root-cause understanding of their
          unescapable disquiet. Around the time of writing, Dan Campbell’s
          great-grandfather, a World War II veteran Campbell had met only once,
          passed away. While helping his family sift through what was left
          behind, Campbell found a journal his great-grandfather had kept.
          Reading it, he recognized a dark familiarity, a pressure that never
          lifted:
        </Paragaph>
        <Paragaph>
          <Blockquote>
            I searched through my great-grandpa's memoirs <br /> for the devil
            in my bloodstream… <br /> Depression grabbed his throat <br /> and
            choked the life out of him slowly. <br /> I've got the same blood
            coursing through my veins <br /> and it'll come for me eventually.
          </Blockquote>
        </Paragaph>
        <Paragaph>
          Hereditary depression is presented from a center point, with Campbell
          equidistant from melancholia in every direction, simultaneously
          haunted by what came before and what seems promised ahead. Like{' '}
          <i>Lake Mungo’s</i> temporal terror: “I feel like something bad is
          going to happen to me. I feel like something bad has happened. It
          hasn’t reached me yet, but it’s on its way,” the song collapses time
          into purgatory, the past and the future are equally unsafe without
          action.
        </Paragaph>
        <Paragaph>
          The depressive’s long view is often riddled with uncertainty and
          dread, but The Wonder Years refuse the allure of succumbing to it as a
          permanent condition or place of residence. Instead, depression appears
          as a hostile terrain to be crossed, a night drive through a landscape
          you tear across with clenched teeth and wild momentum, not somewhere
          you consent to live. When Campbell sings,{' '}
          <i>
            “The Devil’s got a rifle on my front porch with me in his sights /
            But he knows I came looking for a fight,”
          </i>{' '}
          the downward pull is unmistakable, but he knows the only way out is
          through.
        </Paragaph>
        <Paragaph>
          The way out of depression, or at least the reasoning for the fight, is
          charted in the final track, “I Just Want To Sell Out My Funeral.” A
          seven-and-a-half minute melee of shifting tempos and rhythms that
          speedrun the entire albums trajectory, picking up pieces from each
          track prior to craft the album’s outline into a coherent manifesto. It
          is a slow build before the first breakdown, a whiplash inducing shift
          that sets the stage:
        </Paragaph>

        <Blockquote>
          We all wanna know… <br /> Where'd the American Dream go? <br /> Did
          you give up and go home? <br /> Am I here alone? <br /> <br /> And
          when the credits roll, <br /> I'll watch as the screen glows <br />{' '}
          The moments when I choked, <br /> and all the fears that I've outgrown{' '}
          <br /> (at least I hope so) <br />
          &hellip;
          <br />
          I just want to sell out my funeral <br /> I just want to be enough for
          everyone <br /> I just want to sell out my funeral <br /> Know I
          fought until the lights were gone
        </Blockquote>

        <Paragaph>
          Just past the six-minute mark, The Wonder Years reach the album’s
          coda. Snippets of every song reappear, tangled and overlapping, until
          something clicks: the circuit closes and a clean signal materializes,
          demodulated from the chaos:
        </Paragaph>

        <Blockquote>
          There's no devil on my shoulder, <br /> he's got a rocking chair on my
          front porch… <br /> But I won't let him in, no, I won't let him in.{' '}
          <br />
          ‘Cause I'm sick of seeing ghosts <br /> and I know how it's all gonna
          end.
          <br /> There's no triumph waiting, <br /> there's no sunset to ride
          off in. <br /> We all want to be great men <br /> and there's nothing
          romantic about it, <br /> I just want to know that I did all I could
          with what I was given
        </Blockquote>

        <Paragaph>
          The early stanzas situate Campbell in the imprisonment of the present,
          where the horizon line has fallen out of the field of view, leaving
          only blankspace. His questioning of the American Dream doesn’t echo as
          nostalgia for the Valium-buffered lawnmower era, but as the deeper
          ache of witnessing retreat. Going home, in this case, isn’t about
          seeking comfort but rather withdrawal into individualized coping and
          sedation, jacked into the "dream we name the past.”
        </Paragaph>

        {/* <Blockquote>
          We all wanna know… <br /> Where'd the American Dream go? <br /> Did
          you give up and go home? <br /> Am I here alone? <br /> <br /> And
          when the credits roll, <br />
          I'll watch as the screen glows <br /> The moments when I choked,
          <br /> and all the fears that I've outgrown <br /> (at least I hope
          so)
        </Blockquote> */}
        <Paragaph>
          But a true reckoning with the past means to acknowledge it not as a
          laminar flow of history but instead as an accumulation of
          image-moments that swirl around us in a constellation of suffering.
        </Paragaph>
        <Paragaph>
          There’s no grand narrative, only fragments of the past flashing
          incandescent in the now, brief signals illuminating with hope that
          they can be found in the wreckage, spiritually reanimated through
          shared memory and a refusal to look away.
        </Paragaph>
        <Paragaph>
          It’s the job of the now to invert those suffocating nightmares, to
          dedicate ourselves to actualizing the lost desires of past lives. To
          live in continual remembrance of those sacrificed at the altar of
          “progress,” whose lives have been extinguished, whose hopes and dreams
          were ground into dust, left as ghosts, in the machinery of Capital.
        </Paragaph>
      </Body>
    </Section>
  );
}
