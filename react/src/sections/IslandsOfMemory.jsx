import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import Image from '../Image';
import Tip from '../Tooltip';
import { Blockquote } from '../Blockquote';
import SidebarQuote from '../SidebarQuote';

export default function IslandsOfMemory() {
  return (
    <Section>
      <HeadingImage src="https://res.cloudinary.com/listentoapril/image/upload/v1768462956/emo/Eternal_Sunshine_of_the_Spotless_Mind_Erase_Scene.gif">
        Islands of Memory
      </HeadingImage>

      <Sidebar>
        <Image path="small_P0Y7KIA5.jpg">
          <i>Memento</i>, Christopher Nolan, 2000
        </Image>

        <SidebarQuote
          cite={
            <>
              ― <i>Pattern Recognition</i>, William Gibson, 2003
            </>
          }
        >
          We have no idea, now, of who or what the inhabitants of our future
          might be. In that sense, we have no future. Not in the sense that our
          grandparents had a future, or thought they did. Fully imagined
          cultural futures were the luxury of another day, one in which 'now'
          was of some greater duration. For us, of course, things can change so
          abruptly, so violently, so profoundly, that futures like our
          grandparents' have insufficient 'now' to stand on. We have no future
          because our present is too volatile. ... We have only risk management.
          The spinning of the given moment's scenarios. Pattern recognition.
        </SidebarQuote>

        <Image path="shining-caretaker.gif">
          The Caretaker started out making what he referred to as “Haunted
          Ballroom” music, inspired by the distorted big-band music playing
          inThe Shining the background of the ballroom scenes from the{' '}
          <i>The Shining</i>.
        </Image>

        {/* <p className="text-xs text-gray-500 text-right text-pretty mb-4">
          The Caretaker started out making what he referred to as “Haunted
          Ballroom” music, inspired by the distorted big-band music playing
          inThe Shining the background of the ballroom scenes from the{' '}
          <i>The Shining</i>.
        </p> */}

        <Image path="Shining_Black_and_White.jpg">
          <i>The Shining</i>, Stanley Kubrick, 1980
        </Image>
      </Sidebar>

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
          aren’t remembered for very long, they fail to burn in. We are left
          with fragments of a disjointed present-past, looping inside a theater
          of liminality.{' '}
          <Tip
            content="Fredric Jameson refers to this concept as “historical amnesia”, Simon Reynolds might opt for “retromania,” but impact is the same: the
        inability to grasp history induces a present marked by nostalgic spirals
        of reiteration and pastiche, with no ability, time, or interest to break the loop."
          >
            <img
              width="16px"
              className="inline-block ml-1 relative align-text-top"
              src="https://res.cloudinary.com/listentoapril/image/upload/v1768972446/emo/Info.png"
            ></img>
          </Tip>
        </Paragaph>
        <Paragaph>
          The Caretaker’s 2005 album{' '}
          <i>Theoretically Pure Anterograde Amnesia</i> attempts to sonify this
          unrememberable present. As Mark Fisher wrote in the album’s liner
          notes:
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
          Baskinski’s 2001 release, <i>The Disintegration Loops</i>, whose
          decaying melody finds a locked-groove in your head to forever hold
          it’s ghostly afterimage, the tracks on{' '}
          <i>Theoretically Pure Anterograde Amnesia</i> are forgotten as soon as
          they complete. There is nothing to hold onto, it’s seventy-two
          fleeting moments that leave no trace and can never be recalled.
        </Paragaph>
      </Body>
    </Section>
  );
}
