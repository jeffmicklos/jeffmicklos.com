import Section from '../Section';
import Body from '../Body';
import Sidebar from '../Sidebar';
import HeadingImage from '../HeadingImage';
import Paragaph from '../Paragraph';
import { Blockquote } from '../Blockquote';
import { Subheader } from '../Subheader';
import IntroQuote from '../IntroQuote';
import Image from '../Image';

export default function Ghost3(props) {
  return (
    <Section>
      <HeadingImage path="20090526-P5261898_2.jpg">
        <span className="text-xl block mb-2">Part 3</span>
        I Saw Your
        <br />
        Ghost Tonight
      </HeadingImage>

      <Sidebar>
        <Image path="20260105-IMG_7658.jpg">
          Transfer progress on a Universal Memory Exchanger
        </Image>

        <Image path="20250918-P8220956.jpg">
          Raya and Alisha, sent by Raya's LG Chocolate to my Motorola Razr
          (later captured in a Panasonic GM-1), January 7th, 2008 at 7:46PM
        </Image>

        {/* <div className="px-16">
          <Image path="20250918-P8220984.jpg" />
        </div> */}

        <Image path="20050810-DSCF2707_2.jpg">
          Raya and Kell surfing the net on her HP Pavillion MX70, photos of
          Alisha lining the top shelf of the desk. Shot on a Fuji S5100, August
          10th, 2005 at 4:01PM
        </Image>

        <div>
          <Image path="Screenshot_2026-01-19_at_6.31.14_PM.jpg" />
          <Image path="Screenshot_2026-01-19_at_6.30.19_PM.jpg">
            <i>Pulse</i>, Kiyoshi Kurosawa, 2001
          </Image>
        </div>

        <div className="mt-8 mb-4">
          <p className="text-sm">
            <b>
              <span style={{ fontFamily: 'Verdana', color: '#0000ff' }}>
                CrashLandingDoll: {/* (3:05:09 PM) */}
              </span>
            </b>
            <span style={{ fontFamily: 'Verdana' }}>
              do you know how to enable javascript?
            </span>
          </p>
          <p className="text-xs text-gray-500 text-right text-pretty">
            – The sole contents of a one-off AIM chatlog with Alisha.
            <br />
            The logs don’t show my response at the time, but I can confidently
            say now, after all these years that yes, Alisha, I do know how to
            enable javascript.
            <br />
            June 11th, 2005, 3:05PM
          </p>
        </div>
      </Sidebar>

      <Body>
        <IntroQuote>
          From: Ray 📱
          <br />
          Size: 30kb
          <br />
          Priority: Normal
          <br />
          Th, Jan 10, 1:13 am
        </IntroQuote>

        <Paragaph>
          The seduction of the archive, the fever it induces, is driven by the
          hunger for new old stock. We all carry a memory bank used to patch
          together a narrative quilt of how we arrived at today, but the
          archival impulse demands more, insisting that there are sealed
          chambers still waiting, that something foundational remains buried
          just beyond reach. As Derrida writes in <i>Archive Fever</i>: “It is
          to burn with a passion. It is never to rest, interminably, from
          searching for the archive right where it slips away. It is to run
          after the archive, even if there’s too much of it.”
        </Paragaph>

        <Paragaph>
          In March of 2022, the Razr’s 2.2-inch screen illuminated black holes
          in the memory bank. Messages I expressly saved to remember had slipped
          away into the wreckage of time. Locked away were photos Raya sent me
          from her LG Chocolate phone, postage stamp size micro-updates sent
          during her trip to see Alisha in Northern Washington. Pictures I
          hadn’t seen in 15 or so years. I wanted to save them, to liberate them
          from their electroluminescent aluminium shell, answer the call of the
          archive.
        </Paragaph>

        <Paragaph>
          I acquired a particularly doom-riddled artifact off an online
          marketplace that turned thrifters into snipers during the first
          dot-com boom. The device, manufactured in 2007, is called a “Universal
          Memory Exchanger.” It’s job is forensic extraction, a commercial tool
          designed to interface with second-generation cell phones and recover
          whatever data is still clinging.
        </Paragaph>

        <Paragaph>
          It comes bundled with a cat o' nine tails of adapters: find the best
          fit, plug one end into the phone, the other into the deck, and let a
          USB drive catch the data spilling out the back. The onboard dot-matrix
          display provides a useful menu to navigate the hot-wired phones
          internal memory, making reading and transferring files far easier than
          it should be.
        </Paragaph>

        <Paragaph>
          Pictures and contact lists flew over the wire, but the picture
          messages remained locked behind glass, relegated, forever, out of
          band. I took photos of the Razr’s screen doing its best approximation
          of rendering them:
        </Paragaph>

        <div className="mt-8 mb-12">
          <Image large path="20250918-P8220965.jpg" />
        </div>

        <Paragaph>
          The messages were from January 2008. Two months later, Raya posted to
          her eJournal:{' '}
          <i>
            “It’s crazy to come back on here, it was such a huge piece of my
            life and four months later…it seems almost silly.”
          </i>{' '}
          A few months after that, she issued her final entry:
        </Paragaph>

        <Paragaph>
          <Subheader>April 17th, 2008, 9:17pm</Subheader>
          <Blockquote>
            We only live once, do we really want to waste any more time?
          </Blockquote>
        </Paragaph>

        <hr className="mt-8 mb-8 border-gray-700" />

        <Paragaph>
          Alisha, still in constant flight, continued posting updates to the
          public journaling platform until 2010. Raya had been reticent to talk
          about Alisha’s life in the years leading up to that point, but it was
          implied that she was always slipping through something, her screen
          name flickering to blue less and less often. By then, we had lost
          contact completely, but the nodal points in her digital footprint
          projected the future. Alisha’s final entry read:
        </Paragaph>

        <Paragaph>
          <Subheader>February 16th, 2010, 1:18pm</Subheader>
          <Blockquote>
            brittany dies in her sleep of an overdose January 22, Thursday of
            2010.
            <br />
            her birthday, the 27th.
            <br />
            -remember those dates Alisha.
            <br />i miss her
          </Blockquote>
        </Paragaph>

        <Paragaph className="mt-8">
          Four days later, Raya responded in the comments:
        </Paragaph>

        <Paragaph>
          {/* <Subheader>↪ February 20th, 2010, 8:44pm</Subheader> */}

          <Subheader>
            <img
              src="https://res.cloudinary.com/listentoapril/image/upload/v1769020287/emo/Chat.png"
              width="16"
              className="inline-block mr-2"
            />
            <span>February 20th, 2010, 8:44pm</span>
          </Subheader>

          <Blockquote>
            After Malini died i never thought i would meet anyone like her again
            and would never have a best friend and then i met you, that same
            year. You moved away and i felt like you left me too.
            <br /> <br />
            Then Ben died and i felt alone again and was angry, really angry at
            God and at everything because everyone i got close to was taken from
            me. Then you moved back to SD and built me from the ground up. You
            rescued me. <br />
            <br /> Keep your head up love, and keep your eyes wide open for your
            rescue.
            <br /> People are put in our lives like stars, they shine so bright
            for a while then they have to leave us, but the change they make in
            us last forever. <br /> I love you Ger. And am always here in heart
            and spirit.
          </Blockquote>
        </Paragaph>

        <Paragaph className="mt-12 mb-12">
          Alisha passed away on February 10th, 2020, fifteen years to the day of
          Raya’s first journal entry about missing her after she moved to
          Florida. Raya still posts on Alisha’s Facebook wall.
        </Paragaph>

        <div className="flex gap-4 mt-8">
          <div>
            <Image path="84326619_10158605646861320_7113803054473805824_n.jpg"></Image>
          </div>

          <div>
            <Image path="20260103-83362440_10158605646336320_6510345374698307584_n-2.jpg"></Image>
          </div>
        </div>
      </Body>
    </Section>
  );
}
