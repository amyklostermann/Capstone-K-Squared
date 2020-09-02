export default (links) => `
<nav>

<ul class="hidden--mobile nav-links">
  ${links.map(link => `<li><a href="/${(link.title)}" data-navigo>${link.text}</a></li>`).join("")}
</ul>
</nav>
`;

//Hiding for now
//<i class="fas fa-bars"></i>
//

