// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-travels",
          title: "Travels",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/travels/";
          },
        },{id: "news-i-earned-a-ph-d-in-information-science-from-jaist-and-was-honored-with-the-outstanding-student-award",
          title: 'I earned a Ph.D. in Information Science from JAIST and was honored with...',
          description: "",
          section: "News",},{id: "news-i-started-working-as-a-postdoctoral-researcher-in-ogata-lab-jaist",
          title: 'I started working as a Postdoctoral Researcher in Ogata lab, JAIST.',
          description: "",
          section: "News",},{id: "news-i-moved-to-tomita-and-aoki-s-research-group-working-on-the-formal-methods-and-verification-tools-for-next-generation-automotive-system-platforms-research-project",
          title: 'I moved to Tomita and Aoki’s research group, working on the Formal Methods...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-enhancing-decision-making-safety-in-autonomous-driving-through-online-model-checking-has-been-accepted-for-publication-in-the-11th-international-conference-on-rigorous-state-based-methods-abz-2025",
          title: 'Our paper titled Enhancing Decision-making Safety in Autonomous Driving Through Online Model Checking...',
          description: "",
          section: "News",},{id: "news-i-was-appointed-as-a-research-assistant-professor",
          title: 'I was appointed as a Research Assistant Professor.',
          description: "",
          section: "News",},{id: "news-our-paper-proof-scores-a-survey-which-i-co-authored-has-been-accepted-for-publication-in-acm-computing-surveys-a-press-release-has-been-issued-to-announce-this-achievement",
          title: 'Our paper, Proof Scores: A Survey, which I co-authored, has been accepted for...',
          description: "",
          section: "News",},{id: "news-our-paper-titled-safety-analysis-of-autonomous-driving-systems-a-simulation-based-runtime-verification-approach-has-been-accepted-for-publication-in-ieee-transactions-on-reliability-a-press-release-has-been-issued-to-announce-this-achievement",
          title: 'Our paper titled Safety Analysis of Autonomous Driving Systems: A Simulation-based Runtime Verification...',
          description: "",
          section: "News",},{id: "projects-enhancing-decision-making-safety-in-ad-through-online-model-checking",
          title: 'Enhancing Decision-making Safety in AD Through Online Model Checking',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AD-safety-shield-through-onlineMC/";
            },},{id: "projects-a-runtime-verification-framework-for-adss",
          title: 'A Runtime Verification Framework for ADSs',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ADS-runtime-verification/";
            },},{id: "projects-autoware-safety-analysis-in-cutin-cutout-and-deceleration-scenarios",
          title: 'Autoware Safety Analysis in cutin, cutout, and deceleration scenarios',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Autoware-cutin-cutout-deceleration/";
            },},{id: "projects-hybrid-post-quantum-tl-formal-analysis-in-maude-npa",
          title: 'Hybrid Post-Quantum TL formal analysis in Maude-NPA',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hybrid-pqtsl-verification/";
            },},{id: "projects-ipsg-invariant-proof-score-generator",
          title: 'IPSG - Invariant Proof Score Generator',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/invariant-proof-score-generator/";
            },},{id: "projects-formal-verification-of-mutual-exclusion-protocols",
          title: 'Formal verification of mutual exclusion protocols',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mutual-exclusion-verification/";
            },},{id: "projects-formal-analysis-of-post-quantum-hybrid-key-exchange-ssh-transport-layer-protocol",
          title: 'Formal analysis of Post-Quantum Hybrid Key Exchange SSH Transport Layer Protocol',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pqssh-analysis/";
            },},{id: "projects-verifying-safe-memory-reclamation-in-concurrent-programs",
          title: 'Verifying Safe Memory Reclamation in Concurrent Programs',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/safe-memory-reclamation-verification/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%75%6F%6E%67%74%64@%6A%61%69%73%74.%61%63.%6A%70", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/duongtd23", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/duongtdvnu", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-7092-2084", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=VnWazk8AAAAJ", "_blank");
        },
      },{
        id: 'social-researchmap',
        title: 'Researchmap',
        section: 'Socials',
        handler: () => {
          window.open("https://researchmap.jp/duongtd", "_blank");
        },
      },{
        id: 'social-JAIST_faculty_profile',
        title: 'Jaist_faculty_profile',
        section: 'Socials',
        handler: () => {
          window.open("https://fp.jaist.ac.jp/public/Default2.aspx?id=794&l=1", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
