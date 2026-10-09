/* Original photos and screenshots live in public/assets/uploads/.
   Update the paths here to replace an image.
   Empty strings display the designed placeholders. */
export const portfolio = {
  portrait: 'assets/uploads/adriel-portrait.png',
  portraitSize: [362, 435],
  // Put the PNG's feathered white border behind the frame on these three sides.
  portraitFrameInset: { left: 5, right: 6, bottom: 6 },
  portraitHeadroom: 0.12,
  projects: [
    {
      id: 'melange', name: 'Mélange Crews', year: '2025', logo: 'assets/logo-melange.webp',
      role: 'Front-End Developer', type: 'Group · Class assignment', category: 'Web development',
      summary: 'Connecting people with the help they need.',
      description: 'A website interface that connects service workers, including housekeepers, repair workers, and drivers, with people who need their services.',
      story: 'For our Human–Computer Interaction assignment, we designed a bridge between workers looking for opportunities and households looking for reliable help. Users can book a worker based on their needs and preferred date.',
      stack: ['HTML', 'CSS', 'JavaScript'], repo: 'https://github.com/adrieljie/melange-crews',
      screenshot: 'assets/uploads/melange-home.png', secondaryScreenshot: 'assets/uploads/melange-profile.png',
      screenshotSize: [2880, 3948], secondaryScreenshotSize: [2880, 2674],
      primaryLabel: 'Homepage preview', secondaryLabel: 'Worker profile preview'
    },
    {
      id: 'trashkuyy', name: 'Trashkuyy', year: '2025', logo: 'assets/logo-trashkuyy.webp',
      role: 'AI Engineer & Full-Stack Developer', type: 'Group · Class assignment', category: 'AI & web development',
      summary: 'A little intelligence. A cleaner everyday.',
      description: 'An AI-powered website that identifies waste from an uploaded image and suggests how to process it properly.',
      story: 'Created for my Artificial Intelligence course, Trashkuyy addresses the everyday challenge of sorting and managing waste. I researched waste datasets and computer vision models to build the AI system.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'FastAPI', 'CNN'], repo: 'https://github.com/adrieljie/Trashkuyy_AI',
      screenshot: 'assets/uploads/trashkuyy-classification.png', secondaryScreenshot: 'assets/uploads/trashkuyy-history.png',
      screenshotSize: [2378, 3892], secondaryScreenshotSize: [2880, 2646],
      primaryLabel: 'Waste classification preview', secondaryLabel: 'Classification history preview'
    },
    {
      id: 'lesvol', name: 'LesVol', year: '2026', logo: 'assets/logo-lesvol.webp',
      role: 'Front-End Developer', type: 'Group · Class assignment', category: 'Web development',
      summary: 'Making it easier to show up for a cause.',
      description: 'A platform to discover volunteer activities, publish events, and support event validity through verification and attendance proof.',
      story: 'For our Software Engineering course, my team and I connected two sides of the same problem: volunteers struggling to find activities, and organizers struggling to reach volunteers.',
      stack: ['Blade', 'HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL'], repo: 'https://github.com/earleneagesthasugeng/LesVol_SE',
      screenshot: 'assets/uploads/lesvol-landing.png', secondaryScreenshot: 'assets/uploads/lesvol-my-activities.png',
      screenshotSize: [2880, 1626], secondaryScreenshotSize: [1536, 1784],
      primaryLabel: 'Volunteer discovery preview', secondaryLabel: 'My activities preview'
    },
    {
      id: 'rundle', name: 'Rundle', year: '2026', logo: 'assets/logo-rundle.webp',
      role: 'AI Engineer & Full-Stack Developer', type: 'Individual · Self-initiated', category: 'AI & web development',
      summary: 'A running plan that starts with you.',
      description: 'A web application that creates a personalized weekly running schedule based on a runner’s distance, pace, and ability.',
      story: 'As a runner, I often found it difficult to decide when to run, when to rest, and which pace to target. That experience inspired me to build a platform that fits a training schedule to each runner’s characteristics.',
      stack: ['React.js', 'Python', 'FastAPI', 'K-Means', 'SQLite'], repo: 'https://github.com/adrieljie/rundle',
      screenshot: 'assets/uploads/rundle-dashboard-wide.png', secondaryScreenshot: 'assets/uploads/rundle-plan-detail.png',
      screenshotSize: [2880, 1556], secondaryScreenshotSize: [2047, 2724],
      primaryLabel: 'Running dashboard preview', secondaryLabel: 'Running plan details preview'
    },
    {
      id: 'sumber-anugerah', name: 'Sumber Anugerah', year: '2026', logo: '',
      role: 'Full-Stack Developer', type: 'Individual · Self-initiated', category: 'Web development',
      summary: 'Less bookkeeping. More clarity.',
      description: 'A point-of-sale website to monitor stock, support restocking, and track purchases on credit, partial payments, and outstanding balances.',
      story: 'I built this after seeing my parents struggle to manage their store’s inventory and remember which customers still owed money. The goal was to simplify their daily work and support better restocking decisions.',
      stack: ['React.js', 'PHP', 'Laravel', 'MySQL'], repo: 'https://github.com/adrieljie/POS-SA',
      screenshot: 'assets/uploads/sa-transactions.png', secondaryScreenshot: 'assets/uploads/sa-inventory.png',
      screenshotSize: [2378, 1556], secondaryScreenshotSize: [2880, 1586],
      primaryLabel: 'Transactions preview', secondaryLabel: 'Inventory management preview'
    }
  ]
};
