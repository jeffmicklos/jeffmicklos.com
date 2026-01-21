import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import Image from '../Image';
import Tip from '../Tooltip';
import { Blockquote } from '../Blockquote';

export default function AngelOfHistory() {
  return (
    <Section>
      <HeadingImage path="Picture13.jpg">The Angel of History</HeadingImage>

      <Sidebar>
        {/* <Image path="default.jpg" /> */}
        <Image path="Paul_Klee___Angelus_Novus___1920.jpg">
          <i>Angelus Novus</i>, Paul Klee, 1920
        </Image>
        <Image path="https___d1e00ek4ebabms.cloudfront.net_production_102d797c-b424-400f-bb81-19eb5631de6e.jpg">
          Walter Benjamin, 1937
        </Image>
        <Image path="DSCF0684-2.jpg">
          SFMOMA had an exhibition pairing Paul Klee and Barbara Stauffacher
          Solomon in the summer of 2023. I remember talking Bobbie on the phone
          about it, she was as confused as I was at the pairing, stating that
          she never really liked his work. I wholly agree, but I do wish I could
          see it through Walter Benjamin's eyes.
          <br />
          KLEE + BSS, SFMOMA, shot on a Fuji S5100, July 17th, 2023 at 3:12PM
        </Image>
        <Image path="exb_klee_header_bss.jpg">
          <i>“KLEE” San Francisco Museum of Art program guide</i>, Barbara
          Stauffacher Solomon, 1967
        </Image>
      </Sidebar>

      <Body>
        <Paragaph>
          In 1940, German-Jewish theorist{' '}
          <Tip content="Warning: if you ever find yourself speaking of him in person, it should be noted that his last name is pronounced 'Ben-Yuh-Min' and not 'Ben-Jah-Men'">
            Walter Benjamin
          </Tip>{' '}
          drafted a short, fragmentary collection of micro-essays that would
          later be published as <i>Theses on the Philosophy of History</i>. In
          it’s ninth entry, Benjamin meditates on <i>Angelus Novus</i>, a
          monoprint by Swiss-German painter and Bauhaus instructor, Paul Klee.
        </Paragaph>

        <Paragaph>
          The piece, purchased by Benjamin in 1921, is tinted in a narrow band
          of browns and beiges, divided by intersecting lines that form a
          sinusoidal shape: arms, legs, feet, and face. It’s not much larger
          than a sheet of copy paper, but in it’s abstraction Benjamin saw
          something else much larger:
        </Paragaph>

        <Blockquote>
          Angelus Novus shows an angel looking as though he is about to move
          away from something he is fixedly contemplating. His eyes are staring,
          his mouth is open, his wings are spread. This is how one pictures the
          angel of history. His face is turned toward the past. Where we
          perceive a chain of events, he sees one single catastrophe which keeps
          piling wreckage upon wreckage and hurls it in front of his feet. The
          angel would like to stay, awaken the dead, and make whole what has
          been smashed. But a storm is blowing from Paradise; it has got caught
          in his wings with such violence that the angel can no longer close
          them. The storm irresistibly propels him into the future to which his
          back is turned, while the pile of debris before him grows skyward.
          This storm is what we call progress.
        </Blockquote>

        <Paragaph>
          The subtext that Benjamin narrates aims to contend with the prevailing
          understanding of the past, an fabricated by the victors of history
          that has hypnotized society into a collective dream. For Benjamin, the
          act of “awakening” from this dream relies on using the memory of
          objects and experiences to synthesize a demystified version of
          history, to interrupt the narrative of a singular inevitable march
          toward of “progress.”
        </Paragaph>

        <Paragaph>
          When he wrote the thesis, Benjamin was escaping repatriation back to
          Nazi Germany by fleeing to the United States, sneaking across Europe
          on foot through France, Spain, and Portugal. Before exiting France*,
          the manuscript that contained his writings “On the Concept of History”
          covertly changed hands across borders via mail. Meanwhile, Klee’s
          Angelus Novus was hidden away in the French National Library, under
          the watchful eye of confidant Georges Bataille.
        </Paragaph>

        <Paragaph>
          Benjamin never made it out of Europe. In September 1940, fearing
          imminent handover to the Gestapo after being stopped at the Spanish
          border, he took his own life.
        </Paragaph>

        <Paragaph>
          The stowed-away manuscript for Theses on the Philosophy of History
          would eventually be published in 1942 by Benjamin's close friends
          Theodor Adorno and Max Horkheimer. Adorno would also keep the angel
          safe in the California after the war, before it eventually changed
          hands to Benjamin’s long-time friend, Gershom Scholem.
          <Tip content="Note: this is a very generous telling of the story. It’s been cured into history that Adorno mailed the artwork to Scholem, as per Benjamin’s last will. But contemporary sources have it that, after Adorno’s death, Scholem asserted himself as the rightful owner. The latter is what closer to the truth, having read way too much about Scholem.">
            <img
              width="16px"
              className="inline-block ml-1 relative align-text-top"
              src="https://res.cloudinary.com/listentoapril/image/upload/v1768972446/emo/Info.png"
            ></img>
          </Tip>
        </Paragaph>

        <Paragaph>
          Scholem had been living in Palestine since the early 1920’s and had
          routinely made appeals to Benjamin to join the emergent Zionist
          project taking shape. Benjamin never accepted, or even visited,
          stating a firm objection to the inherently “
          <Tip content="I put this in quotes because they are the exact words of Walter Benjamin's. They are not quoted to indicate eye-roll airquotes.">
            racist ideology
          </Tip>
          ” of the nationalist movement that vulgarly claimed supremacy and
          superiority of the Arab population as historical destiny. Benjamin
          wasn’t interested in the mystified narrative of progress via conquest,
          but rather redemption from the violent procession of history, he
          wanted to pick up the pieces.
        </Paragaph>

        <Paragaph>
          After Scholem’s death in 1982, his widow donated <i>Angelus Novus</i>{' '}
          to the Israel Museum in Jerusalem, where it sits today, atop a hill,
          overlooking the Israeli-Occupied West Bank of Palestine.
        </Paragaph>
      </Body>
    </Section>
  );
}
