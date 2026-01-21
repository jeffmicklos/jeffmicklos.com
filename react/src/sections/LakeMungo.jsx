import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import Image from '../Image';
import Tip from '../Tooltip';
import { Blockquote } from '../Blockquote';
import SidebarQuote from '../SidebarQuote';

export default function LakeMungo() {
  return (
    <Section>
      <HeadingImage src="https://res.cloudinary.com/listentoapril/image/upload/f_auto,q_auto,dpr_2/emo/Lake_Mungo_Scene.gif">
        It hasn’t
        <br />
        reached me yet
      </HeadingImage>

      <Sidebar>
        <Image path="tumblr_17d26db0b47d202fe25841425bd1083c_38357893_1280.jpg">
          <i>Lake Mungo</i>, 2008
        </Image>

        <Image path="nokia_660.png">Nokia 6600, 2003</Image>

        <SidebarQuote
          cite={
            <>
              – “Our Lives Would Make a Sad Boring Movie”, The&nbsp;Hotelier,
              2011
            </>
          }
        >
          If there’s one thing in your life that
          <br />
          you'll never forget
          <br />
          It’s that we're dead in our future
          <br />
          but we're not dead yet
          {/* <br />
          Your life starts right now,
          <br />
          so start acting like it <br />
          Or else you’ll wake up one day
          <br />
          feeling like a silhouette */}
        </SidebarQuote>

        <Image path="Strange-Harbors-Lake-Mungo-15-Anniversary-Palmers.jpg">
          <i>Lake Mungo</i>, 2008
        </Image>
      </Sidebar>

      <Body>
        <Paragaph>
          The 2008 Australian horror movie <i>Lake Mungo</i> cold opens with a
          whisper: “I feel like something bad is going to happen to me. I feel
          like something bad has happened. It hasn’t reached me yet but it’s on
          its way.” What follows from there is 90 minutes of prolonged anguish
          captured through consumer grade electronics, as a young girl’s family
          attempts to retrace the last hours that led to her untimely, swollen
          death.
        </Paragaph>

        <Paragaph>
          The film reaches a nodal point when we see a friend’s handheld
          recording from the titular Lake Mungo, it captures the daughter
          frantically burying something in the sand. The video jitters across
          the screen at 10 frames per second, with light streaking through
          macro-pixels, and digital noise smearing the scene. What was buried
          was never clearly shown but, after having seen <thead></thead>{' '}
          footage, the family ventures out to Lake Mungo to recover whatever it
          was.
        </Paragaph>

        <Paragaph>
          The family excavates their daughter’s Nokia 6600 from the sand in the
          dead of night, powers it back to life in the cabin, and hunts for
          traces of data stored onboard. What they found was a 176x144 video
          their daughter captured that night, where the darkness isn’t smooth
          but striated with flecks of RGB pixels, allowing the mind to form the
          grimmest images out of the chroma noise. But what eventually
          materializes in frame is far more harrowing than what was imagined in
          the digital Rorschach test we saw just seconds before.
        </Paragaph>

        <Paragaph>
          A figure creeps toward the camera and it becomes clear — the recording
          shows the daughter’s own decaying corpse, the same one they identified
          at the morgue. The brother recounted:
          <Blockquote>
            I believe she recorded a ghost. I believe she recorded the future
            coming to get her.
          </Blockquote>
        </Paragaph>

        <Paragaph>
          At its core, <i>Lake Mungo</i> presents the possibility of being
          haunted by the future, by the spectre of one’s own demise, the end of
          history, and quite literally, the cessation of progress. As the future
          bleeds backwards, we languish in temporal disorder, transfixed on the
          horror of the only future left to imagine. The only reaction is to
          bury the phone and wait for it come.
        </Paragaph>

        <Paragaph>
          But what if the footage were simply erased? What if the phone was
          smashed to bits on the shores of Lake Mungo? The future does not have
          to be the disaster captured on the phone, the Utopian Impulse provokes
          defiant dreams and action, to be a glitch in the machine, breaking the
          paralysis of the foreclosed tomorrow. To quote Patti Smith, “I haven't
          fucked much with the past, but I've fucked plenty with the future.”
        </Paragaph>
      </Body>
    </Section>
  );
}
