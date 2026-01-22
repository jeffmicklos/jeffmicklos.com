import './App.css';
import { useCallback, useState } from 'react';
import useScrollSpyOpacity from './useScrollSpyOpacity';
import Intro from './sections/Intro';
import Collateral from './sections/Collateral';
import Ghost1 from './sections/Ghost1';
import Ghost2 from './sections/Ghost2';
import Ghost3 from './sections/Ghost3';
import TwoThousandAndSix from './sections/2006';
import AgainstDemons from './sections/AgainstDemons';
import Blink182 from './sections/Blink182';
import IslandsOfMemory from './sections/IslandsOfMemory';
import LakeMungo from './sections/LakeMungo';
import Mercury from './sections/Mercury';
import ProblemThatHasNoName from './sections/ProblemThatHasNoName';
import ProctorValley from './sections/ProctorValley';
import Raya from './sections/Raya';
import SellOut from './sections/Sellout';
import StoryOfACity from './sections/StoryOfACity';
import TheWonderYears from './sections/TheWonderYears';
import Webtape from './sections/Webtape';
import AngelOfHistory from './sections/AngelOfHistory';
import ScrollVideo from './ScrollVideo';

const sections = [
  {
    name: 'Preface',
    id: 'preface',
    component: Intro,
  },
  {
    name: 'I Saw Your Ghost Tonight: Part 1',
    id: 'ghost-1',
    component: Ghost1,
  },
  {
    name: 'Collateral',
    id: 'collateral',
    component: Collateral,
  },
  {
    name: 'The Most Natural Thing in the World',
    id: 'webtape',
    component: Webtape,
  },
  {
    name: 'Vapor',
    id: 'vapor',
    component: Mercury,
  },
  {
    name: 'Proctor Valley Road',
    id: 'proctor-valley-road',
    component: ProctorValley,
  },
  {
    name: 'The Problem That Has No Name',
    id: 'the-problem-that-has-no-name',
    component: ProblemThatHasNoName,
  },
  {
    name: 'The Wonder Years',
    id: 'the-wonder-years',
    component: TheWonderYears,
  },
  {
    name: 'The Story of a City',
    id: 'the-story-of-a-city',
    component: StoryOfACity,
  },

  {
    name: 'Blink-182',
    id: 'blink-182',
    component: Blink182,
  },
  {
    name: 'Against Demons',
    id: 'against-demons',
    component: AgainstDemons,
  },
  {
    name: 'The Angel of History',
    id: 'the-angel-of-history',
    component: AngelOfHistory,
  },
  {
    name: 'I Saw Your Ghost Tonight: Part 2',
    id: 'ghost-2',
    component: Ghost2,
  },
  {
    name: 'Raya',
    id: 'raya',
    component: Raya,
  },
  {
    name: 'It Hasn’t Reached Me Yet',
    id: 'lake-mungo',
    component: LakeMungo,
  },
  {
    name: '2006',
    id: 'two-thousand-and-six',
    component: TwoThousandAndSix,
  },
  {
    name: 'Islands Of Memory',
    id: 'islands-of-memory',
    component: IslandsOfMemory,
  },
  {
    name: 'I Saw Your Ghost Tonight: Part 3',
    id: 'ghost-3',
    component: Ghost3,
  },
  {
    name: 'I Just Want to Sell Out My Funeral',
    id: 'i-just-want-to-sell-out-my-funeral',
    component: SellOut,
  },
];
function App() {
  const sectionIds = sections.map((s) => s.id);

  const [heroOpacity, setHeroOpacity] = useState(0);

  const handleVisibilityChange = useCallback((id, visibility) => {
    if (id === 'vapor') {
      setHeroOpacity(visibility);
    }
  }, []);

  const videoSectionVisible = heroOpacity > 0.1; // threshold-ish

  const navRef = useScrollSpyOpacity(sectionIds, {
    offsetPx: 16,
    onVisibilityChange: handleVisibilityChange,
  });

  return (
    <>
      {/* Fullscreen scroll-scrub video */}
      <ScrollVideo
        src="https://res.cloudinary.com/listentoapril/video/upload/v1767951523/emo/DSCF1815_3.mp4"
        className="fixed inset-0 overflow-hidden"
        fps={30}
        enabled={videoSectionVisible}
        style={{
          zIndex: 0,
          opacity: heroOpacity,
        }}
      />

      <nav
        ref={navRef}
        className="text-white z-10 fixed top-0 w-[11%] text-xs p-2 invisible min-[1600px]:p-8 min-[1520px]:text-sm min-[1450px]:w-auto min-[1320px]:visible"
      >
        <ol>
          {sections.map((section) => (
            <li key={section.id} className=" max-[1500px]:mb-2">
              <a
                href={`#${section.id}`}
                className="text-gray-100     opacity-[var(--nav-opacity)]
    hover:opacity-100
    transition-opacity  block cursor-pointer"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div class="w-100 p-4 bg-gray-800 text-xs  gap-2 hidden portrait:flex sm:hidden">
        <div className="flex content-center">
          <img
            src="https://res.cloudinary.com/listentoapril/image/upload/f_auto,q_auto/emo/Warning.gif"
            width="16"
            style={{ width: 16 }}
          />
        </div>

        <div>
          <strong>Warning!</strong>
          <br />
          This website, much like ourselves, is not made for the phone.
        </div>
      </div>

      <div className="relative z-10 max-w-screen-lg mx-auto  px-4 selection:bg-gray-200 selection:text-gray-900 pb-16 xl:px-0">
        {sections.map((section) => {
          const Component = section.component;
          return (
            <section
              key={section.id}
              id={section.id}
              className="layout-section text-white mb-8 relative"
            >
              <Component />
            </section>
          );
        })}
      </div>
    </>
  );
}

export default App;
