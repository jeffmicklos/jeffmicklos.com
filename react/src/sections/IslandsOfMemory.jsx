import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import Image from '../Image';
import Tip from '../Tooltip';
import { Blockquote } from '../Blockquote';

export default function IslandsOfMemory() {
  return (
    <Section>
      <HeadingImage src="https://res.cloudinary.com/listentoapril/image/upload/v1768462956/emo/Eternal_Sunshine_of_the_Spotless_Mind_Erase_Scene.gif">
        Islands of Memory
      </HeadingImage>

      <Sidebar></Sidebar>

      <Body>
        <Paragaph>
          One of the primary side effects of drugs in the benzodiazepine class,
          including Valium, is anterograde amnesia: an inhibiting of the brain’s
          ability to encode new memories into long-term storage. This sits in
          stark opposition to the more recognized memory condition of retrograde
          amnesia, where new memories are persisted but the past is left
          unreachable, if not wholly erased. Two cultural maps to understand
          these conditions could be{' '}
          <i>Eternal Sunshine of the Spotless Mind retrograde</i> erasing
          backward and <i>Memento’s</i> anterograde stumbling forward.
        </Paragaph>

        <Paragaph>
          Memory is not recorded all at once, each fragment goes through a
          pipeline of encoding and consolidation in order to persist long-term.
          First encoded as electrical wisps, temporary memory traces require
          chemical reinforcement before consolidation in the neural network,
          under benzodiazepines, this process is inhibited. Without
          consolidation, the brain can register experience but cannot demodulate
          it into cognizance. What remains are islands of memory, fragmented
          images without connective tissue, stranded without a before or after.
        </Paragaph>

        <Paragaph>
          It’s a contemporary affliction mirrored in everyday life, with
          ephemeral images scrolling past us in doubletime, erasing any sense of
          continuity or temporal grounding (the techno co-option of the term
          “timeline” feels extra duplicitous now). Images and moments flash into
          synapses, grasping attention and satisfaction for a time, but they
          aren’t remembered for very long. The images fail to burn in. We are
          left with fragments of a disjointed present-past, looping inside a
          theater of liminality.
        </Paragaph>

        <Paragaph>
          The Caretaker’s 2005 album Theoretically Pure Anterograde Amnesia
          attempts to sonify this unrememberable present. As Mark Fisher wrote
          in the album’s liner notes:
          <Blockquote>
            The threat is no longer the deadly sweet seduction of nostalgia. The
            problem is not, any more, the longing to get to the past, but the
            inability to get out of it.
          </Blockquote>
        </Paragaph>

        <Paragaph>
          The album has a runtime just under four hours, with 72 tracks labelled
          with their index and prefixed simply with “Memory.” Sonically, the
          album is comprised of slowed and reverb'd orchestral arrangements that
          are fogged to the point of near disappearance. In contrast to William
          Baskinski’s 2001 release, The Disintegration Loops, whose decaying
          melody finds a locked-groove in your head to forever hold it’s ghostly
          afterimage, the tracks on Theoretically pure anterograde amnesia are
          forgotten as soon as they complete. There is nothing to hold onto,
          it’s seventy-two fleeting moments that leave no trace and can never be
          recalled.
        </Paragaph>
      </Body>
    </Section>
  );
}
