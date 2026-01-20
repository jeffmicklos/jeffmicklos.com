import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import Image from '../Image';
import Tip from '../Tooltip';
import { Blockquote } from '../Blockquote';

export default function ProblemThatHasNoName() {
  return (
    <Section>
      <HeadingImage path="Picture13.jpg">
        The Problem
        <br />
        That Has No Name
      </HeadingImage>

      <Sidebar>
        {/* <Image path="default.jpg" /> */}
        <Image path="20250416-Scan_4.jpg">
          <i>The Medium is the Massage: An Inventory of Effects</i>, Marshall
          McLuhan, 1967
        </Image>
        <Image path="Levittown_houses._LOC_gsc.5a25985.tif.jpg">
          Levittown houses, New York, 1958
        </Image>
        <Image path="hoover-xmas-53-swscan08442-copy-1.jpg">
          Hoover vacuum advertisement, 1953
        </Image>
        <Image path="Mornidine.jpg">Mornidine advertisement, 1959</Image>
        <Image path="qqvppljjz15c1.jpg">
          Serax Benzodiazepine advertisement, 1967
        </Image>
      </Sidebar>

      <Body>
        <Paragaph>
          <Blockquote>
            The end of the line. <br /> The railway radically altered the
            personal outlooks and patterns of social interdependence. It bred
            and nurtured the American Dream. It created totally new urban,
            social, and family worlds. New ways of work. New ways of management.
            New legislation. <br /> <br /> The technology of the railway created
            the myth of a green pasture world of innocence. It satisfied man's
            desire to withdraw from society, symbolized by the city, to a rural
            setting where he could recover his animal and natural self. It was
            the pastoral ideal, a Jeffersonian world, an agrarian democracy
            which was intended to serve as a guide to social policy. It gave us
            darkest suburbia and its lasting symbol: the lawnmower.
          </Blockquote>
        </Paragaph>

        <Paragaph>
          The above quote comes from Marshall McLuhan’s 1967 book,{' '}
          <i>The Medium is the Massage: An Inventory of Effects</i>. In it,
          McLuhan argues that technologies themselves, not the messages they
          carry, are the primary catalysts of societal change. Media itself
          reorganizes perception, behavior, and social relations simply by
          existing, regardless of whether they transmit news, entertainment,
          silence, or slop. Society fixates on content, bit sized pieces of
          atomic messages, while the medium slips in quietly, wholly
          transmogrifying how we relate to ourselves and each other, long before
          we have the language or time to describe the implications.
        </Paragaph>

        <Paragaph>
          Sixty years on, McLuhan remains a reliable map for understanding our
          rapidly increasing willingness to adopt new media at the cost of
          everything else. But I stumble on his choice of suburbia’s “lasting
          symbol.” The lawnmower is a good candidate, capturing the mans
          continual free roaming domination over the living. But I cant help but
          to feel that men so often enjoy mowing the lawn, for that very reason.
          A more precise symbol might be: the vacuum cleaner.
        </Paragaph>

        <Paragaph>
          Something sinister was leaking into the suburbs in the 1960s. Women,
          relegated to the post-war choreography of “keeping house” at the
          expense of their own fulfillment, found themselves brooding in dark
          malaise. Writer Betty Friedan situated herself in the middle of it
          all, interviewing women across the United States and tracing the
          outline of male-dominated advertising campaigns, decreasing college
          enrollment for women, and the booming birthrate. What she identified
          was a widespread loss of identity and a profound yearning, as women
          tiptoed around the existential question of “is this all?”
        </Paragaph>

        <Paragaph>
          At the center of this disquiet was{' '}
          <Tip content="This is also, of course, the name of Friedan’s 1963 book chronicling this epidemic">
            <i>The Feminine Mystique</i>
          </Tip>
          : an ideal engineered in advertising agencies and cemented in
          patriarchy. It reanimated the belief that women ought to be wholly
          fulfilled with the Sisyphean routine of housewifery: groceries,
          dishes, beds, peanut-butter sandwiches with children. When asked to
          describe their symptoms, women said things like “I feel empty somehow”
          or “I feel as if I don’t exist.” When asked to describe the problem,
          they could only describe their daily lives.
        </Paragaph>

        <Paragaph>
          <code className="text-sm text-gray-700">
            &lt;!-- TODO: Explicitly call out “The Problem that Has No name” as
            phrase coined of Friedan in The Feminine Mystique, 1963 --&gt;
          </code>
        </Paragaph>

        <Paragaph>
          This was “the problem that has no name” and it’s effects were
          compounded by stigma and the rabid individualism and atomization bred
          by car country. Women had internalized their struggle as personal
          failure, a glitch in an otherwise functioning system. But these
          suburban homes were not isolated sites of anxiety, but rather a
          mycorrhizal network of shared suffering.
        </Paragaph>

        <Paragaph>
          This low-frequency hum of unease that Friedan tapped into began to
          surface in doctors’ offices as suburban inhabitants, and
          overwhelmingly women, were reporting rising levels of fear, anxiety,
          and insomnia. The doctors, unequipped to handle such vast and hazy
          malady, reported these conditions upward to the pharmaceutical
          companies, and these reports caught the eye of a fledging ad-man by
          the name of Arthur Sackler. Sacker had a unique take on prescription
          medication, believing that with the right marketing, you could offer a
          cure for just about anything, including problems with no names.
        </Paragaph>

        <Paragaph>
          In 1963, Diazepam was released under the brand name Valium. Sackler
          help to craft a direct-to-doctor marketing strategy, in which
          pharma-marketers linked care providers with sales representatives and
          marketing materials for their newest wares. In this arrangement,
          Valium was marketed as a modern chemical buffer against restlessness,
          soft panic, and the creeping sense that something had gone horribly
          wrong. Marketing collateral had assured doctors and patients that
          Valium was not dangerous, nor was it addictive: it’s side effects were
          limited to fatigue, with the upside of “the patient finds it easier to
          feel hopeful about the future”.
        </Paragaph>

        <Paragaph>
          By the end of the decade, Valium had become the most prescribed drug
          in the United States. It’s New Jersey mill pressed out industrial
          quantities every hour, with 2.3 billion tablets sold in 1978 alone.
        </Paragaph>

        <Paragaph>
          <Blockquote>
            You wake up in the morning, and you feel as if there’s no point in
            going on another day like this. So you take a tranquilizer because
            it makes you not care so much that its pointless
          </Blockquote>
          <cite>- Betty Friedan, The Feminine Mystique, 1963</cite>
        </Paragaph>
      </Body>
    </Section>
  );
}
