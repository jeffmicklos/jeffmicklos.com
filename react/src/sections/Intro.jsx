import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import Tip from '../Tooltip';

export default function Intro(props) {
  return (
    <Section>
      <HeadingImage></HeadingImage>

      <Sidebar></Sidebar>

      <Body>
        <Paragaph>
          <h1 className="text-5xl/14 font-bold text-pretty mb-8">
            Darkest Suburbia:
            <br />
            Pop-Punk, Street Lights,
            <br />
            and Ghost Stories
          </h1>
        </Paragaph>

        <Paragaph>
          I don’t always listen to{' '}
          <Tip content="Note: I am going to be using the terms “emo” and “pop-punk” interchangably, it’s okay.">
            emo music
          </Tip>
          . Well, I’ve always listened to emo music, but not consistently. My
          first real exposure was in 2002 or 2003, on the crest of third-wave
          emo boom with bands exploding out of New York and New Jersey:
          Thursday, Taking Back Sunday, Coheed and Cambria, The Early November,
          and so on.
        </Paragaph>

        <Paragaph>
          Like most self-conscious 11th graders, I quickly put aside those band
          tee shirts upon first listen to Godspeed You Black Emperor. I spent
          the better part of the next decade immersed in delicate piano,
          mechanical pops and clicks, and increasingly extreme reverb. Of
          course, though, I have always been able to feel the potency of hearing
          “Firefly” and “Sweetness” back-to-back on shuffle, be it in August
          2004 or August 2024.
        </Paragaph>

        <Paragaph>
          This past April, my music streaming service of convenience made an
          executive decision: you will stop listening to music that sounds like
          the inside of a computer and instead, you will listen to emo music.
          Emo music you’ve never heard before. Emo music that you have no
          foundation or reference points to.
        </Paragaph>

        <Paragaph>
          I spent weeks hitting “next” on the algorithmic playlists, jumping
          past the most hideous album artwork and eye-roll inducing but somehow
          endearing song titles: “Buona Pizza,” So I Shotgunned a Beer and Went
          to Bed,” “Flannel Is the Color of My Energy, “Fuck, Dantooine is Big.”
          The algorithm was recycling the same 10 bands, over and over, for
          weeks. They all sounded the same, the sound of wide-eyed suburbia and
          carefree youth crushed by anxiety. It wasn’t bad, I just had no idea
          why it was being forced upon me. I hit skip as often as I could, until
          Stereolab or Claire Rousay eventually came up.
        </Paragaph>

        <Paragaph>
          I ultimately caved when the song “There, There” came on, by a band
          called The Wonder Years. Intrigued by the song title, I had an ironic
          hope that this a Radiohead cover done by one of these silly bands. It
          was not.
        </Paragaph>
      </Body>
    </Section>
  );
}
