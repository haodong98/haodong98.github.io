export const personalInfo = {
  name: 'Haodong Zheng',
  profilePicture: '/profile1.jpg', //optional
  role: 'PhD',
  university: 'EPFL',
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
  { name: 'Blogs', route: '/projects' }
  // { name: 'CV', route: '/cv.pdf' }
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: false,
  ExperienceSection: true,
  SelectedPublicationsSection: false,
};

export const fontStyle = 'mono'; // "sans" | "serif" | "mono" | "lato"
