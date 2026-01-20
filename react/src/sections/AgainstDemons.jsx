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

export default function AgainstDemons() {
  return (
    <Section>
      <HeadingImage path="cobham_road_against_demons_by_cyberyt_d5sd5b.jpg">
        Against Demons
      </HeadingImage>

      <Sidebar>
        <Image path="1243087955_e0e37cf404_b.jpg">
          Haint Blue porch ceiling,{' '}
          <Link
            withoutIcon
            href="https://flickr.com/photos/blackdoll/1243087955/"
          >
            via flickr
          </Link>
          , August 26th, 2007.
        </Image>
        <Image path="15454044502_2959bc1c1f_b.jpg">
          Haint Blue porch ceiling,{' '}
          <Link
            withoutIcon
            href="https://flickr.com/photos/randomconnections/15454044502/in/gallery-roomwithaview-72157702743505544/"
          >
            via flickr
          </Link>
          , October 5, 2014.
        </Image>

        <Link href="https://flickr.com/photos/roomwithaview/galleries/72157702743505544/with/13204674515">
          Haint Blue photo gallery on Flickr
        </Link>

        <Image path="bb7a0321.jpg">
          Braddock’s Point Cemetery, Hilton Head, South Carolina.
        </Image>
        <Image path="04f9af0e875aa92c0a8247437cb4d775b4528e8c.jpg">
          Braddock’s Point Cemetery, Hilton Head, South Carolina
        </Image>
        <Image path="4f8699554891f73b196b1d7b7742fa7a-1_copy.jpg">
          Jacob Zoot and Johnny Ott, Pennsylvania
        </Image>
        <Image path="unnamed-2.jpg">Miniaturized door-hanging barn quilt</Image>
        <Image path="Screenshot_2026-01-09_at_11.44.01_AM.jpg">
          Henry Dreyfuss
        </Image>
        <Image path="Z3VVWk1RSn0og61d9KVmfS9w5-OJR7-Ly3ZfNI1fSFo-1.jpg">
          Susan Kare, icon designer for the Macintosh Computer, seen at her desk
          with a copy of <i>Symbol Sourcebook</i> on the shelf behind her.
        </Image>
        <Image path="FC-1001_1.jpg">
          Polaroid SX-70, Designed by Henry Dreyfuss, 1972
        </Image>
        <Image path="Henry-Dreyfusss-1936-Redesign-and-Its-New-Lasting-Impact-LivingWithGravity-1.jpg">
          Hoover Model 150, Designed by Henry Dreyfuss, 1936
        </Image>
        <Image path="IMG-0110_1512x.jpg" />
        <Image path="download_8.jpg" />
        {/* <Image path="flashythings.gif" /> */}
      </Sidebar>

      <Body>
        <Paragaph>
          <IntroQuote
            cite={
              <>
                - <i>Tales of the Buckeye Hills</i>, 1963
              </>
            }
          >
            Never leave a rocking chair rocking without anybody sitting in it—it
            will be sure to be occupied by an unwanted ghost.
          </IntroQuote>
        </Paragaph>
        <Paragaph>
          How do you get rid of ghosts, or at least keep them at bay? An Irish
          folk belief imported into the American countryside warned against
          leaving a rocking chair empty. An unoccupied chair—especially one
          still in motion—was said to open a threshold, inviting something
          otherworldly to occupy the space. Blankets, teddy bears, or dolls
          placed on the seat functioned as a grounding system, closing the loop
          and preventing something else from completing the circuit.
        </Paragaph>
        <Paragaph>
          Porch ceilings, doors, and shutters across{' '}
          <Tip content="Note: South Carolina is the center point for this tradition and culture, but by no means the geographical limits.">
            South Carolina Lowcountry
          </Tip>
          are washed in a recurring talisman: a hue regionally called Haint
          Blue, it hovers in the spectrum of robin’s egg and royal blue. Paint
          the threshold the color of water or sky, and a haint (a common
          Southern analog for a “haunt”) might hesitate, misread the entrance,
          and move on. Early formulations were milk paint pigmented by Indigo, a
          cash crop forcibly harvested in the marshes of the low country by
          enslaved Africans that had generational expertise of cultivating
          Indigo in West Africa.
        </Paragaph>
        <Paragaph>
          Haint blue sits alongside other Lowcountry protections, like a tree
          spiked with blue bottle to catch what wanders too close at night, as
          preserved traditions of Gullah Geechee people. Their African roots
          were largely insulated due to early iterations of low country White
          Flight in the 1700s and 1800s. Their eventual reclamation of and
          investment in the land they were enslaved on created a cultural
          pockets where language, craft, and spiritual technology to hold fast
          for centuries, while the rest of the world accelerated and erased.
        </Paragaph>
        <Paragaph>
          But since the 1950s, the Black population on Hilton Head Island, where
          the Gullah Geechee are the longest-standing inhabitants, has dropped
          84%. Golf courses and resort condominiums have swallowed the
          barrier-island lattice of the Atlantic coast, as developers dismantle
          communal land structures that endured for centuries, converting shared
          inheritance into parcels priced for removal. The dead aren’t safe
          either. Cemeteries dating back to the 1800s are now anchored by Whole
          Foods parking lots and beachfront timeshares, leaving long term
          residents to pay their respects beneath the boxy spectre of
          venture-funded development.
        </Paragaph>
        <Paragaph>
          And Haint Blue has spread beyond the Gullah Geechee outposts and low
          country borders, migrating across the south to adorn restored
          plantation-style homes in white-dominated neighborhoods, denatured
          into aesthetic, reduced to a Sherwin-Williams swatch meant to varnish
          over cultural context and absolve the structure beneath it.
        </Paragaph>

        <div className="my-8">
          <video
            controls
            loop
            src="https://res.cloudinary.com/listentoapril/video/upload/v1768680361/emo/whole_foods_cemetary.mov"
          ></video>
          <p className="text-sm text-gray-500">
            A screen recording showing the Gullah Geeche cemetary built in the
            1800s, adjacent to a now abandoned Whole Foods.{' '}
            <Link inline href="https://maps.app.goo.gl/7FAwiap7dtvF7u9n6">
              Google Maps
            </Link>
          </p>

          {/* <div>
            <Image path="bb7a0321.jpg" />
          </div>

          <div>
            <Image path="04f9af0e875aa92c0a8247437cb4d775b4528e8c.jpg" />
          </div> */}
        </div>

        <Paragaph>
          Elsewhere in Pennsylvania Dutch Country, barn doors and beams are
          emblazoned with a three-pointed symbol known as a Hexefuss, German for
          “witch’s foot”. Drawn in chalk or paint, the Hexefuss functioned as a
          protective mark to ward off evil spirits, a modern patch of the
          European folk tradition of skewering a goose’s foot to door for
          protection.
        </Paragaph>
        <Paragaph>
          Over time, this conspicuous symbol of apotropaic magic was conflated
          with the more visible Pennsylvania Dutch supergraphic folk art of barn
          stars. These outward facing, kaleidoscopic murals of celestial
          geometry were not loaded with mythical powers or superstition, but
          were expressions of craft and regional identity. The confusion took
          hold as the boom of automobile tourism opened up previously remote
          farming communities, turning local visual culture into roadside
          attractions of antiquated whimsy, propelled by a eager travel
          journalists and travelers almanac publishers.
        </Paragaph>
        <Paragaph>
          In Paradise, Pennsylvania, two sign painters named Johnny Ott and
          Jacob Zook saw an opening in the market and began selling kitsch
          renditions of the barn art at roadside tourist shops. As demand grew,
          they pivoted to mass-production by silk screening on engineered wood,
          with each piece imbued with a specific symbolic meaning: charms for
          fertility, wealth, luck. In later interviews, both men admitted they
          were in on the joke, but appetite for rural otherness had already
          calcified the mythology into authenticity.
        </Paragaph>
        <Paragaph>
          The dust has never fully settled. Early travel journalism’s loose
          ethnography left a permanent mark, to the point where barn stars are
          now more widely known as hex signs, their supposed supernatural
          origins repeated without the local memory to back them up. And
          recently, a new barn-based art practice has entered the feedback loop:
          the barn quilt. Originating as a public art project in Ohio in 2001,
          these eight-by-eight-foot tessellations of triangles have spread
          across the lower 48, rapidly outnumbering traditional barn stars, but
          still inheriting the same false lineage, another layer of sediment
          obscuring the past, a nostalgia without memory.
        </Paragaph>
        <Paragaph>
          The Hex Sign Mandella effect was calcified further in 1972 with the
          publishing of{' '}
          <i>
            Symbol Sourcebook: An Authoritative Guide to International Graphic
            Symbols
          </i>{' '}
          by Henry Dreyfuss. The book was largely compiled from the industrial
          designers personal symbol databank that he had amassed throughout his
          life, and extended further my crowd-sourced submissions from
          symbol-fans across the world, reaching into industries, regions, and
          subcultures otherwise out of reach for Dreyfuss. His vision was to
          construct a new, global language based symbols, one that could slide
          between and literacy rates, smoothing communication to a visual array
          for the new globalized world.
        </Paragaph>
        <Paragaph>
          Of the 20,000 international symbols catalgged, eight circular icons,
          dense with crystalline geometry of stars and triangles, were grouped
          under the heading “HEX.” And each symbol was accompanied by a caption,
          stating it’s intended magical effect. One of these symbol stands apart
          from the rest, it’s crudely drawn with heavy and uneven lines, visibly
          alien from the geometrically precise bar star iconography it’s coupled
          with. It’s spell is desperate and simple: “Against Demons.”
        </Paragaph>
        <Paragaph>
          The <i>Authoritative Guide</i> indexed, printed, and bound it as fact,
          and that fact echoed across corporate design studios, ad agencies,
          museums, and high-rise offices across the world.
        </Paragaph>

        <Paragaph>
          Twenty-five years later, fragments of <i>Symbol Sourcebook</i>{' '}
          resurfaced in the visual language of Radiohead’s OK Computer, an album
          chronicling the piles of wreckage afforded by modernity: highways,
          lawns, handshakes, office parks, and polite collapse. Inspired by the
          symbol-rich work of Jean-Michele Basquiat, artists Stanley Donwood and
          Thom Yorke copy-pasted digital collages on an primitive release of
          Photoshop. The result was an ice-cold landscape of looped highways,
          pharma fine print, lost spirits, and all the iconography of a life
          gone horribly wrong. Donwood later described it as “the visual
          impression of a ghost language or the relics of a disaster.”
        </Paragaph>

        <Image large path="1f0e2795cec200080e7bda0e104a906e___a_800_800.jpg" />

        <Paragaph>
          Scattered across the album’s ephemera is the sigil and its
          incantation: Against Demons. In interviews, Donwood alternately
          described the mark as an American hobo sign, a folk talisman, or
          simply something that felt protective. “If you put that up in enough
          places,” he said, “they can’t cross the threshold. Demons. They can’t
          get in.”
        </Paragaph>

        <Paragaph>
          Donwood took a similar approach while trying to ward a demon that
          followed him through sleep, a “psychic tormentor.” He had read
          somewhere that scrawling the word “LIVED”, ”DEVIL” in reverse, on the
          back wall of his fireplace would trick the devil into thinking he had
          gone down a wrong passage, entering a mirror world, making the devil
          turn away from Donwood’s home.
        </Paragaph>

        <Paragaph>
          “I don’t know if this had any actual effect on demons,” Donwood later
          reflected, “or if I had somehow calmed a temporary madness within my
          own mind. It’s difficult, in retrospect, to be clear about mental
          disturbance. Now I only remember the fear vaguely—as a healed wound, a
          faded scar.”
        </Paragaph>

        <Image large path="Signs.gif" />
      </Body>
    </Section>
  );
}
