import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import Image from '../Image';
import Tip from '../Tooltip';
import { Blockquote } from '../Blockquote';
import IntroQuote from '../IntroQuote';
import Link from '../Link';
import SidebarQuote from '../SidebarQuote';

export default function StoryOfACity() {
  return (
    <Section>
      <HeadingImage src="https://images-prod.dazeddigital.com/2400/azure/dazed-prod/1210/7/1217299.jpg">
        The Story of a City
      </HeadingImage>

      <Sidebar>
        <Image path="exhibitions_78.jpg" />
        <Link href="https://www.mdmarchive.co.uk/exhibition/city-fun:-the-hidden-history-of-manchester's-favourite-fanzine">
          City Fun Zine Digital Archive
        </Link>

        <Image path="20251202-0331600_0331600-R2-012-4A_4.jpg">
          Manchester England, November 15th, 2025. Walking back from seeing
          Cabaret Voltaire, around the corner from the site of The Hacienda.
          Shot with Ektar 100 on a Ricoh R1.
        </Image>

        <Image path="7.jpg">“The Beauty is in the Streets”, Paris, 1968</Image>
        <Image path="bac9a54e-008a-4a74-b427-1813ab9b6558.jpg">
          – “We Want to Live”, Paris, 1968
        </Image>
        <SidebarQuote
          cite={
            <>
              <i>All That Is Solid Melts Into Air</i>, Marshall Berman, 1981
            </>
          }
        >
          To be modern is to find ourselves in an environment that promises us
          adventure, power, joy, growth, transformation of ourselves and the
          world -- and, at the same time, that threatens to destroy everything
          we have, everything we know, everything we are.
        </SidebarQuote>
        <Image path="Hacienda_24.jpg">– The Hacienda, Manchester, 1982</Image>
        <Image path="IMG_4757.jpg">
          London, December 15th 2019, I held these two books up together and
          realized, for the first time, their shared lineage.
        </Image>

        <Image path="The-Hacienda-Manchester-early-days-pre-acid-house-1980s-1.jpg">
          – The Hacienda, Manchester, 1986
        </Image>
        <Image path="20231101-IMG_4568.jpg">
          Jon Savage’s personal copy of{' '}
          <i>Factory Records: FAC 151 The Festival of the Tenth Summer</i>{' '}
          (1986), found and photographed in Manchester, November 1st, 2023
        </Image>
      </Sidebar>

      <Body>
        <IntroQuote cite={<>— Tony Wilson, Factory Records, 2007.</>}>
          I don’t see this as a story of a pop group…
          <br />I see this as the story of a city.
        </IntroQuote>

        <Paragaph>
          The ‘76 punk explosion created a chain reaction of Xeroxed fanzines,
          each one mapping the local blast radius of the new youth culture.
          Among them, the collectively run City Fun out of Manchester stood
          apart as half local music review, half psychogeographic field report
          on youth navigating a collapsing landscape as austerity tightened its
          grip. In December 1978, one of those dispatches broke through with a
          biting clarity. An eighteen-year-old named Liz Naylor made her debut
          with a stream-of-consciousness piece titled No City Fun. Without
          preamble or theory, she started:
        </Paragaph>

        <Paragaph>
          <Blockquote>
            thecity is terrifying; is frightening; is a prison. Just where do I
            go?
          </Blockquote>
        </Paragaph>

        <Paragaph>and closed with resignation:</Paragaph>

        <Paragaph>
          <Blockquote>
            I think i hate the city. i think it hates me. i think i'm paranoid.{' '}
            <br /> i hate. i hate, i hate. i hate every product; everybody;
            everygroup everyshop everybus everyclothing; every fad every fashion
            every 'scene'. <br /> I feel like 1976. <br /> my head aches. thank
            you god. <br /> i am sylvia platn in reincarnation <br /> i hate -
            and that's the saddest thing.
          </Blockquote>
        </Paragaph>

        <Paragaph>
          In between, Naylor narrates slipping through the brick-torn streets of
          Manchester, as alienation, privation, and a stagnation loom over:
          “virgin at the time of writing is closed - THANK GOD, (wish they'd
          stay closed for good.) due to moving(CERTAINLY NOT MOVEMENT, CERTAINLY
          NOT PROGRESSION.). ”. It reads like a frenetic LiveJournal dispatch,
          but at just 18 years old, Liz Naylor may not have had words to
          formally name this haunting, but the feeling was clear: the spectacle
          was choking her, and everything around her.
        </Paragaph>

        <Paragaph>
          Six months later, in 1979, Joy Division debuted with
          <i>Unknown Pleasures</i>. The 23-year-olds had a terminal vision,
          never questioning “is this it?”, but instead surrendering with dead
          eyes and frozen breath fully committing that “this is it.” What made
          it different from ‘70s guitarmusic was that nothing specific was
          wrong. The problem wasn’t loveloss or war. The problem was everything.
        </Paragaph>

        <Paragaph>
          Joy Division emerged from 1970’s Manchester, England, a hallowed out
          city that had birthed the industrial revolution and was uniquely
          crushed by it’s consequences. Rapid growth and decay created piles of
          rubble where factories and homes once sat, which paved the way for
          sprawling concrete apartment blocks and looped motorways. Guitarist
          Bernard Sumner recalled, “You were always looking for beauty because
          it was such an ugly place…I don’t remember seeing a tree until I was
          about nine.”
        </Paragaph>

        <Paragaph>
          That sense of nothingness was carried through the music with cavernous
          reverb and stray synthesizers setting the atmosphere for Ian Curtis’
          stretched monotone seance, while metallic drums and bass tumbled
          forward through the gothic landscape.
        </Paragaph>

        <Paragaph>
          <Blockquote>
            "Unknown Pleasures" is a brave bulletin, a danceable dream;
            brilliantly, a record of place. Of one particular city, Manchester…
            Joy Division's spatial, circular themes and Martin Hannett's shiny,
            waking-dream production gloss are one perfect reflection of
            Manchester's dark spaces and empty places: endless sodium lights and
            hidden semis seen from a speeding car, vacant industrial sites - the
            endless detritus of the 19th century - seen gaping like rotten teeth
            from an orange bus.
          </Blockquote>
          <cite>
            Jon Savage’s 1979 review of <i>Unknown Pleasures</i> for Melody
            Maker
          </cite>
        </Paragaph>

        <Paragaph>
          What Naylor, Curtis, and Savage were all describing was something the
          Situationists had diagnosed two decades prior. In 1950’s Paris, Ivan
          Chtcheglov and Guy Debord were writing about modern cities as places
          where true living had been replaced by spectacle. Cities were
          strip-mined of new culture, tourism had transmuted into time travel,
          and imagination had been paved over by prescribed paths and adverts,
          in what Henri Lefebvre would call, a “colonization of everyday life”:
        </Paragaph>

        <Paragaph>
          <Blockquote>
            We are bored in the city, we really have to strain to still discover
            mysteries on the sidewalk billboards, the latest state of humor and
            poetry… <br /> All cities are geological; you cannot take three
            steps without encountering ghosts bearing all the prestige of their
            legends. We move within a closed landscape whose landmarks
            constantly draw us toward the past. Certain shifting angles, certain
            receding perspectives, allow us to glimpse original conceptions of
            space, but this vision remains fragmentary. It must be sought in the
            magical locales of fairy tales and surrealist writings: castles,
            endless walls, little forgotten bars, mammoth caverns, casino
            mirrors.
          </Blockquote>
          <cite>
            Ivan Chtcheglov, October 1953 (published in{' '}
            <i>International Situationniste #1)</i>
          </cite>
        </Paragaph>

        <Paragaph>
          But Chtcheglov diagnoses wasn’t terminal like Curtis’. The
          Situationists vision was electrified by the Utopian Impulse: a direct
          identification of the ills in society, and then, action. They knew
          that beneath the concrete grid lived an emergent counter-city of
          possibility, another glimmering future waiting to be switched on. In
          May of ’68, a spontaneous network of students and misfits scrawled
          these rallying cries across Parisian walls: “Run, comrade, the old
          world is behind you!”, “Under the paving stones, the beach.”, "We want
          to live”. For the Situationists, art, revolution, and daily life
          collapsed into one another, with the insistence that the city was not
          a sealed fate that you merely had to endure, but rather an interface
          that could be interrupted, rerouted, and remade.
        </Paragaph>

        <Paragaph>
          <Blockquote>
            And you, forgotten, your memories ravaged by all the consternations
            of both hemispheres, stranded in the Red Cellars of Pali-Kao,
            without music and without geography, no longer setting out for the
            hacienda where the roots think of the child and where the wine is
            finished off with fables from an old almanac. Now that’s all gone.
            You’ll never see the hacienda. It doesn’t exist. <br /> <br />
            The hacienda must be built.
          </Blockquote>
        </Paragaph>

        <Paragaph>
          In the wake of Ian Curtis’ suicide in 1980, a mythology and morbid
          fandom grew around Joy Division, generating a dark influx of capital
          for Factory Records. Label frontman Tony Wilson believed that capital
          should not be extracted from Manchester, but rather reinvested back
          into the city and the youth culture that generated it. The concrete
          outcome was the Hacienda nightclub, which rolled up it’s corrugated
          steel doors in 1982. Tucked into a forgotten industrial zone of the
          inner city, the Hacienda was inspired by New York clubland but
          uniquely Manchester in it’s execution, an experiment in whether
          culture could reboot a landscape of urban decay.
        </Paragaph>

        <Paragaph>
          Interior designer Ben Kelly dragged outside materials inside,
          recontextualizing traffic bollards, diamond plate steel, and slabs of
          concrete while wrapping existing iron columns in high-visibility
          supergraphics. The explicit intent was to have a seamless transition
          from outside to inside, to make clubgoers understand that they weren’t
          <i>escaping</i> Manchester, but entering into an augmented vision of
          what could be.
        </Paragaph>

        <Paragaph>
          The city’s historic industrial symbology became a new religious
          iconography, with all of its suffocation and shadow excised through
          neon, sweat, and collective motion. Dereliction was sublimated into
          True Faith as Manchesters youth danced inside a future built atop it’s
          wreckage. Tony Wilson stated, “It’s necessary for every period to
          build its cathedrals, its necessary for any youth culture to have a
          place, a sense of place” and for fifteen years, The Hacienda was that
          hallowed site. What started as a post-punk flashpoint quickly mutated
          with stateside electronic music, the acid house explosion, and the
          birth of the Madchester scene, a mercurial cocktail of indie rock and
          rave culture, with the Hacienda’s dayglo yellow at its center.
        </Paragaph>

        <Paragaph>
          In the summer of 1986, Liz Naylor would pen the first chapter of
          Factory Records ten year retrospective,{' '}
          <i>Factory Records: FAC 151 The Festival of the Tenth Summer</i>:
        </Paragaph>

        <Paragaph>
          <Blockquote>
            It’s easy. It’s very tempting; to get all nostalgic when viewing
            things in retrospect. WHAT GREAT DAYS THEY WERE, EH BOYS! The punk
            rock years. The times when, (They’d have you think), we were all
            youth and grooviness, speeding along on a wave of creative energy.
            The mass psychology of the safety pin etcetera. <br /> … <br /> It
            WAS good then; But it’s better NOW.
          </Blockquote>
        </Paragaph>
      </Body>
    </Section>
  );
}
