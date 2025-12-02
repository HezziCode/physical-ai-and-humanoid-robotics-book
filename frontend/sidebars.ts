import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Chapters',
      items: [
        'chapters/chapter-1',
        'chapters/chapter-2',
        'chapters/chapter-3',
        'chapters/chapter-4',
        'chapters/chapter-5',
        'chapters/chapter-6',
        'chapters/chapter-7',
        'chapters/chapter-8',
        'chapters/chapter-9',
        'chapters/chapter-10',
      ],
    },
  ],
};

export default sidebars;