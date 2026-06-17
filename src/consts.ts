// Drives the nav AND the in-page section anchors (Projects, Contact).
// "Home" is not a nav item — the logo links to the #home hero (rendered
// separately in index.astro). Journey + Skills are folded into Projects.
export const sectionLinks = [
    {label: "Projects", href: "#projects"},
    {label: "Contact", href: "#contact"},
];

// Drives the footer AND the fixed social rail (bottom-left).
export const socialLinks = [
    {label: "GitHub", href: "https://github.com/Shreyg4"},
    {label: "LinkedIn", href: "https://www.linkedin.com/in/shreyassg/"},
    {label: "Email", href: "mailto:shreyassundar0305@gmail.com"},
];