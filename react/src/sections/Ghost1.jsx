import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import { Blockquote } from '../Blockquote';
import IntroQuote from '../IntroQuote';
import Image from '../Image';
import SidebarQuote from '../SidebarQuote';

export default function Ghost1(props) {
  return (
    <Section>
      <HeadingImage path="20060521-DSCF7410.jpg">
        <span className="text-xl block mb-2">Part 1</span>
        I Saw Your
        <br />
        Ghost Tonight
      </HeadingImage>

      <Sidebar>
        <Image path="tenor-4.gif" />

        <SidebarQuote
          cite={
            <>
              – <i>Nueromancer</i>, William Gibson, 1984.
            </>
          }
        >
          Rain woke him, a slow drizzle, his feet tangled in coils of discarded
          fibre-optics. The arcade’s sea of sound washed over him, receded,
          returned. Rolling over, he sat up and held his head&hellip; He glanced
          up and saw a sooty plastic window, a faint glow of fluorescents.
        </SidebarQuote>

        <Image path="Screenshot_2026-01-19_at_7.30.15_PM.jpg">
          An example of a corrupted JPEG, manifesting as a mosiac of stray image
          data jumbled together out of time
        </Image>
      </Sidebar>

      <Body>
        <IntroQuote
          cite={
            <>
              <i>— The Matrix</i>, screenplay by Lana and Lilly Wachowski, 1998.
            </>
          }
        >
          FADE IN:
          <br />
          ON COMPUTER SCREEN
          <br />
          so close it has no boundaries.
        </IntroQuote>

        <Paragaph>
          In 2021, I started the process of gathering, time stamping, and
          geolocating every picture I’ve taken, dating back to 2004. They were
          scattered across hard drives, memory cards, archived websites,
          internal memory chips, and burned CDs.
        </Paragaph>

        <Paragaph>
          We like to think of digital technology as everlasting ones-and-zeroes
          that remain stable, outside our own timeline of mortal decay. But the
          truth is far more ghostly: data, too, succumbs to time and entropy. It
          decays to oxidization, ultraviolet light, and heat, just like the rest
          of us. In memory cards, electrons eventually weep out of their glass
          gates, dragging zeroes to ones before evaporating into nothingness.
          The chemistry that makes up optical media like CDs and DVDs reveals
          itself to be rather fragile within a decade, as it’s organic dyes and
          reflective mirrors begin to corrode (this process happens doubly fast
          if you, for some reason, were to leave your burned CDs in a hot car).
        </Paragaph>

        <Paragaph>
          Technologist that aren’t preoccupied with building digital enclosures
          have been building communally maintained bridges that link lost
          technologies to the present day. Shattered JPEGs can be spliced back
          together with tools like JPEG-Repair-Toolkit, decomposing filesystems
          can be circumnavigated with a process known as File Carving, and
          bricked phones can have their memory chips physically removed from
          their circuit boards to be read out and reconstructed bit-by-bit via
          “Chip-Off” data recovery services.
        </Paragaph>

        <Paragaph>
          Some of it got beyond me, maybe just inches out my cybernetic reach,
          but maybe miles, it’s hard to tell in a dark room. I enlisted a
          Russian datastitcher that goes by the handle JPEGMedic to help repair
          the underlying binary structure of a few JPEGs that I was able to
          scrape off a failing drive, and sent an iPhone 5 to the UK for an
          experimental recovery procedure.
        </Paragaph>

        <Paragaph>
          The office started to hum with layers of old tech stacked atop new.
          Digital video cameras were buried underneath yardage of cables and
          adapters salvaged from an industrial electronic supply warehouse,
          connected to a black polycarbonate MacBook, which was daisy-chained to
          it’s seventh generation anodized aluminium replacement. Stacks of
          burned CDs with cryptic messages inscribed on them towered over
          external drives and disassembled digital cameras. The past and present
          were living, breathing in unison, a complex stratum of hot-wired
          memory holes.
        </Paragaph>
      </Body>
    </Section>
  );
}
