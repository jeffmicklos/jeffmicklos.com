import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import Image from '../Image';
import Tip from '../Tooltip';
import IntroQuote from '../IntroQuote';
import ImageTip from '../ImageTip';
import SidebarQuote from '../SidebarQuote';

export default function Ghost2(props) {
  return (
    <Section>
      <HeadingImage path="20060429-DSCF6855.jpg">
        <span className="text-xl block mb-2">Part 2</span>
        I Saw Your
        <br />
        Ghost Tonight
      </HeadingImage>
      <Sidebar>
        <Image path="Picture_099">
          A night I have no recollection or photos of, despite me reviewing
          photos on my camera, via Chris Jack, Summer 2007
        </Image>
        {/* <Image path="fuji-a2650-2.png">Fuji A2650, 2002</Image> */}

        <SidebarQuote
          cite={
            <>
              – <i>Local Man Ruins Eveyrthing</i>, The Wonder Years, 2011.
            </>
          }
        >
          I don’t have roses in the closet
          <br />
          But I’ve got pictures in a drawer
          <br />
          It’s everything left in me
          <br />
          Not to stare at them anymore
        </SidebarQuote>

        <Image path="20070326-DSCF9877.jpg"></Image>

        <Image path="20050608-DSCF1534.jpg">
          Spring Valley, June 8th, 2005
        </Image>

        <div className="px-8">
          <Image path="motorola-razr-v3-pad.png">Motorola Razr V3, 2004</Image>
        </div>

        <Image path="091606_18321_3.jpg">
          Band practice, shot on Motorola Razr, September 16th 2006, 6:33PM
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
          Dead machines, eviscerated and shrouded with dust,
          <br />
          lay on metal shelves like bodies in a morgue.
          <br />…<br />
          Deep in the back room, a PHONE that has not rung in years
          <br />
          begins to RING.
        </IntroQuote>
        <Paragaph>
          Blowing dust from metal fissures, issuing text commands into a glowing
          green-on-black interface, and the repetitive flipping of power
          switches became ritual. They were my tools of divination, ways to
          conjure something lost, to become a temporal witness.
        </Paragaph>

        <Paragaph>
          I was able to build a library of 100,000 pictures, from my first
          digital camera (
          <ImageTip path="fuji-a2650-2.png">
            a 2.0 megapixel Fuji FinePix 2650
          </ImageTip>
          ) to my most recent smart phone and film pictures, all meticulously
          tagged with geolocation, dates, and timestamps.
        </Paragaph>

        <Paragaph>
          But when examining these pictures, a strange pattern started to occur:
          I had no pictures between April and December 2007. What was worse was,{' '}
          <Tip content="This situation has gotten increasingly more cursed since writing. A core batch of pictures I had fully understood as Fall 2007 ended up being&hellip; not that. This information bore itself out in the microfilm archives of the San Diego Union Tribune.">
            I also had no memories of that time
          </Tip>
          .
        </Paragaph>

        <Paragaph>
          I retraced my digital footsteps for months, cobbling together
          fragments from burner Flickr accounts, blog entries, and iPod backups.
          A few pictures here and there, but they were the memories I already
          had.
        </Paragaph>

        <Paragaph>
          Chris and Joe also started to excavate JPGs from that summer, but
          Joe’s archive had the exact same blackhole as mine (this is
          interesting, we aren’t entirely sure if its because we were together,
          camera-less or apart, camera-less). Chris had better luck: he
          unearthed pictures with me in them, holding my camera, even pausing to
          glance at the screen to review what I had just captured. I have no
          memory of these moments. I can’t situate them, I can’t attach them to
          anything. It is as if they never happened at all.
        </Paragaph>

        <Paragaph>
          Grasping at straws, I dug up my Motorola Razr, which was in daily
          operation from 2006–2010.
        </Paragaph>

        <Paragaph>
          Sending a fresh jolt of electricity to a 20 year old clamshell phone
          is oddly exhilarating. They were built in such a way that almost
          instantly after plugging in, a low-frame rate welcome animation
          sputters across the screen and a distorted but still cheery ringtone
          rattles through the tiny onboard speaker–your last alarm that was
          enqueued to alert you decades ago finally sounded.
        </Paragaph>

        <Paragaph>
          Navigating the labyrinthian menu structure of a Motorola RAZR led me
          to the period-accurate folder, “MYPIX,” the default holding ground for
          pictures from its 0.3-megapixel camera. What I found were digital
          dreamscapes: fuzzy memories in shallow saturation, highlights bursting
          into pure white, edges collapsing into stutter-stepped geometries of
          macro-pixels.
        </Paragaph>

        <div className="flex gap-4 mt-8">
          <div>
            <Image path="092708_01112_2.jpg">
              Mercury and Sodium Vapor lamps in La Mesa, September 27th, 2008
              1:11AM
            </Image>
          </div>

          <div>
            <Image path="040508_22012_2.jpg">
              The roof of Hotel St. James with Mark, Joe, and Hazz, April 5th,
              2008, 10:01PM
            </Image>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <div>
            <Image path="121109_16443.jpg">
              Rain in La Mesa, December 11th, 2009, 5:44PM
            </Image>
          </div>

          <div>
            <Image path="051108_05472_2.jpg">
              Sunrise at La Jolla Shores, May 11th, 2008, 5:47AM
            </Image>
          </div>
        </div>

        <Paragaph>
          Deeper into the Razrhole still was a cache of saved text messages,
          notes I thought were worthy of marking as “do not delete” in 2006 or
          2007. Among them were around six picture messages from a friend named
          Raya…
        </Paragaph>
      </Body>
    </Section>
  );
}
