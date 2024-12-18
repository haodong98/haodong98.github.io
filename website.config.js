export const personalInfo = {
  name: 'Haodong Zheng',
  profilePicture: '/profile.jpg', //optional
  role: '^',
  university: ' ^',
  socialMedia: [
    { name: 'Email', url: 'zhdwizard@gmail.com' },
    { name: 'Twitter', url: 'https://x.com/zhd000' },
    {
      name: 'GitHub',
      url: 'https://github.com/wizard0',
    }
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: 'System researcher homepage',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [
  // { name: 'Projects', route: '/projects' },
  // { name: 'Publications', route: '/publications' },
  // { name: 'Life', route: '/life' },
  // { name: 'CV', route: '/cv.pdf' },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  ExperienceSection: true,
  SelectedPublicationsSection: true,
};

export const fontStyle = 'mono'; // "sans" | "serif" | "mono" | "lato"
