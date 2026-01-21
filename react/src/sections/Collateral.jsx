import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import Image from '../Image';
import Tip from '../Tooltip';
import { Blockquote } from '../Blockquote';

export default function Collateral() {
  return (
    <Section>
      <HeadingImage src="https://res.cloudinary.com/listentoapril/image/upload/v1763013855/emo/collateral-2004-tom-cruise.gif">
        Collateral
      </HeadingImage>

      <Sidebar>
        <p className="text-sm text-gray-500 mb-4">
          <blockquote className="font-serif text-pretty mb-2">
            <span className="italic">
              "Someday?"
              <br />
              "Someday my dream will come?"
              <br />
              One night you will wake up and discover it never happened. It's
              all turned around on you. It never will. Suddenly you are old.
              Didn't happen, and it never will, because you were never going to
              do it anyway&hellip; Don't you talk to me about murder.
            </span>
          </blockquote>
          <cite className="not-italic">
            – <i>Collateral</i>, 2004
          </cite>
        </p>

        <Image path="MV5BZGFiYzk3ZmMtODA5ZC00MDQzLWI0ZmUtMGUyY2JiMTFhM2UxXkEyXkFqcGc._V1_QL75_UX1050_.jpg" />

        <Image path="sony_hdw-f900_1.png">
          Sony&rsquo;s HDW-F900R, released in 2000 as the first digital video
          camera to shoot 24 frames per second.
        </Image>

        <Image path="tumblr_6c8b2ab09a27cea497d8cb5226d5ba49_1cc48223_540.gif" />
      </Sidebar>

      <Body>
        <Paragaph>
          Michael Mann released his eighth motion picture in 2004, it was called{' '}
          <i>Collateral</i>. Shot entirely on location in Los Angeles, it
          captured a city during a technological transition.
        </Paragaph>
        <Paragaph>
          Following one night in the lives of two men, a hitman (Tom Cruise) and
          his conscripted taxicab chauffeur (Jamie Foxx), Collateral tells a
          story of deferred dreams, chance, dedication to work, and
          indifference. It was one of the first big budget motion pictures to be
          shot digitally, leveraging the same camera system used on the first
          entirely digital movie, 2001’s{' '}
          <i>Star Wars: Episode I - The Phantom Menace</i>.
        </Paragaph>
        <Paragaph>
          This new camera technology, Sony’s HDW-F900, captured nighttime Los
          Angeles in an expanded dynamic range that film could never offer, LA’s
          darkest shadows were lifted by the CCD sensor and high F-Stops
          rendered deepest reaches of the sprawl in sharp clarity. The movie’s
          Director of Photography, Dion Beebe, remarked of the digital capture:
        </Paragaph>
        <Paragaph className="mb-8">
          <Blockquote>
            It’s a different result. Because you’re seeing a night world that is
            richly illuminated, with an enormous amount of depth, it’s slightly
            unsettling. It feels almost otherworldly, and it’s somehow a little
            bit alienating.
          </Blockquote>
        </Paragaph>
        <Image large path="4US4C6PE" />
        <Image large path="23_260.jpg" />
        <Image
          large
          path="MV5BNDgzZDM0MDUtODkyMS00MjY1LWEwNTAtNzNiOTcyZjA3NDkxXkEyXkFqcGc._V1_QL75_UX1050_.jpg"
        ></Image>
      </Body>
    </Section>
  );
}
