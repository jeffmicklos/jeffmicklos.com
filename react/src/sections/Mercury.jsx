import { useEffect, useRef, useState } from 'react';

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
import ScrollVideo from '../ScrollVideo';

export default function Mercury() {
  return (
    <Section>
      <HeadingImage path="20060505-DSCF6928.jpg">Vapor</HeadingImage>

      <Sidebar>
        <Image path="8587368_orig.jpg">
          <i>Thief</i>, Michael Mann, 1981
        </Image>
        <Image path="MV5BYmY2ZmU3NzctY2FmOS00NDg3LThkOTQtN2JjZjhhYjFjNGFhXkEyXkFqcGc._V1_FMjpg_UX1262_.jpg">
          <i>Thief</i>, Michael Mann, 1981
        </Image>
        <Image path="normal_homemade_clear_400w_mv_polamp-1.jpg">
          A photo found on a well-lit but still remote corner of the internet,
          where forum users share their resurrected and homebrewed lamps, bulbs,
          and lighting rigs. Here, user <code>vytautas_lamps</code> shares their
          recently revived Polish Mercury Vapor lamp from 1982. If you ever
          think your hyperfixations are extreme and beautiful, the internet will
          always show you someone conjuring much more.
        </Image>
        <Image path="g33.jpg">
          Graph showing the ouputted spectrums from various articifial light
          sources
        </Image>
        <Image path="235466.jpg">
          <i>The Harrowing of Hell</i>, Hieronymus Bosch, 1500s
        </Image>

        <SidebarQuote
          cite={
            <>
              – In a thread titled “Goodbye vomit lighting” on TrainOrders.com,
              an online meeting place for railfans, user `garrett` remarked on
              the phase-out of Sodium Vapor. November 14th, 2012
            </>
          }
        >
          “I have this funny feeling that we will miss these lights when they're
          all gone.
        </SidebarQuote>
        <Image path="C-hn9S5XUAUDIfk-1.jpg">
          The tranisition from Sodium Vapor (right) to LED (left), South Korea,
          2014
        </Image>
        <Image path="20251025-DSC04812.jpg">
          <i>This photo is entirely unedited.</i>
          <br />
          Since the 2020s, LEDs across the country have been shifting to a deep
          purple-blue, due to their yellow coating deteriorating and falling
          away. had only read about this phenomenon, but stumbed upon it in
          person October 2025, a truly out of body experience. So don’t say we
          dont have anything to look forward to. <br />
          Cathedral City, October 2th, 2025 at 11:21PM
        </Image>
      </Sidebar>

      <Body>
        <IntroQuote
          cite={
            <>
              – <i>I Saw the TV Glow</i>, screenplay by Jane Schoenbrun, 2024
            </>
          }
        >
          EXT. SUBURBAN STREET - NIGHT
          <br />
          We drift back out into the suburban night, across front lawns and
          power lines.
          <br />
          <br />
          The streetlight’s yellow glow tints and warms the gravel of the road,
          as if this whole town is one big electric-powered incubator.
        </IntroQuote>

        <Paragaph>
          The United States’ military support of Israel during the Yom Kippur
          War in October 1973 triggered an oil embargo by the Arab members of{' '}
          <abbr title="Organization of the Petroleum Exporting Countries">
            OPEC
          </abbr>
          , causing the cost of crude oil imports to quadruple within the year.
          The shock forced the United States into stringent energy cutbacks, and
          cities across the country began searching for cost-saving
          efficiencies. Among the most visible changes was the phase out of
          Mercury Vapor streetlights, in favor of the more energy-efficient
          Sodium Vapor lamps, trading cool blue illumination for the dim amber
          haze that would come to define 1990s liminality.
        </Paragaph>
        <Paragaph>
          Ahead of the transition to Sodium Vapor, Michael Mann’s 1981
          heist-thriller captured the Chicago streets glowing in Mercury Vapor’s
          cool blue shift. The cyan light bounces off industrial warehouse
          walls, streaks across wet car roofs and back alleys, and paints the
          backgrounds with dancing orbs of bokeh, rendering the city heartless
          and it’s inhabitants detached, caught in a ceaseless state of
          unfeeling.
        </Paragaph>

        <Paragaph>
          I never saw much Mercury Vapor lighting, San Diego started their phase
          out around 1984. But whenever I could catch a glimpse, in a dark
          suburb whose streets were draped with a warm shroud, the mechanical
          greenish-blue glow of those doomed lamps felt like the future that was
          sold to us in PlayStation commercials, Flash website intros, and{' '}
          <i>The Matrix</i>. I captured them as much as I could, as though I was
          documenting the future slowly being birthed through the power lines,
          in my tiny corner of the southwest extreme triangle:
        </Paragaph>

        <div className="flex gap-4 mt-8">
          <div>
            <Image path="20050610-DSCF1646.jpg" />
          </div>

          <div>
            <Image path="20060212-DSCF5764.jpg" />
          </div>
        </div>

        <div className="mb-8">
          <Image large path="20081009-PA090097.jpg"></Image>
        </div>

        <Paragaph>
          This is the technical transition taking scene in 2004’s{' '}
          <i>Collateral</i>: we are seeing the last gasps of Mercury Vapor
          clinging to the city streets, still present but clearly outpaced by
          Sodium’s encroaching orange haze. It’s an honest representation of the
          city and it’s infrastructure du juor, whereas other films shot on
          location in Los Angeles during this time period often flood the
          streets with artificial ambiance of helium-filled balloons,
          metal-halide rigs, and moonboxes. Take for example these on-location
          stills from 2001’s The Fast and the Furious, where the lighting takes
          no sides, but washes everything into neutral nothing:
        </Paragaph>

        <div className="mb-8 mt-8">
          <Image path="PEJDEK0C.jpg" />
          <Image path="P0OY5JQ0.jpg" />
        </div>

        <Paragaph>
          Sodium Vapor’s signature tone comes from it’s inability to accurately
          render color, as it only emits a narrow band of the visible light
          spectrum (compared to sunlight or incandescent light, whose
          wavelengths fill the spectrum out more fully). The monochromatic
          orange cast hides a lot in it’s shadows, it drains contrast, and and
          smears color, tricking the eye to understand red, blue, and green as
          gray and black. Collateral gently compensates for this by slipping in
          hints of full-spectrum lighting to keep skin tones human, but the
          surrounding world is blanketed in quilt of mercury and sodium.
        </Paragaph>

        <Paragaph>
          A year after the release of <i>Collateral</i>, the 2005 Energy Policy
          Act would outright ban the acquisition of new Mercury Vapor lamps
          across the country. Shortly thereafter, Sodium Vapor would be marked
          for death, with San Diego beginning the rollout of Induction lamps in
          September of 2011, and then again with the transition to LEDs in 2018.
          Each technological replacement promised efficiency and each changed
          the texture and our memory of night.
        </Paragaph>

        <Paragaph>
          The long-term effects of the steamroller of progress are still to be
          fully understood. When Sodium Vapor was originally introduced in the
          70s, it sparked outrage amongst citizens due to it’s sedative nature,
          how it’s amber embrace lulled people to sleep as they careened down
          miles of soft, warm highways. In 1976, Chicago Tribune critic Paul
          Gapp called the new light “grotesque and unnecessary,” an extension of
          his earlier 1974 critique:
        </Paragaph>

        <Paragaph>
          <Blockquote>
            One looks at the eerie, ominous quality of sodium vapor illumination
            and thinks of the bizarre paintings of Hieronymous Bosch, the
            frightening futurism of Stanley Kubrick's A Clockwork Orange, and
            other nightmares.
          </Blockquote>
        </Paragaph>

        <Paragaph>
          Sodium’s warmth bore out to be dreamlike, a staple of millennial past
          reality, where the world felt half asleep, compared to Mercury Vapor’s
          ice-bath that kept it’s inhabitants alert, if not constantly on edge.
          More recently, our pre-dawn drifting was halted by LED’s: the light of
          the screens, the light without sleep. Their short wave lengths fight
          the sunset and our natural circadian rhythm by suppressing melatonin
          production, overclocking our brains, and keeping us forever further
          from dreaming.
        </Paragaph>
      </Body>
    </Section>
  );
}
