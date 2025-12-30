// Tabs data (dynamic source)
const tabsData = [
  { title: 'Overview', content: 'Overview content here...' },
  { title: 'Features', content: 'Features content here...' },
  { title: 'Pricing', content: 'Pricing content here...' }
];

const tabsContainer = document.getElementById("tabs");
const contentContainer = document.getElementById("tabContent");

let activeTabIndex = 0;

// Create tabs dynamically
tabsData.forEach((tab, index) => {
  const button = document.createElement("button");

  button.className = "tab";
  button.textContent = tab.title;
  button.setAttribute("role", "tab");
  button.setAttribute("aria-selected", index === 0);
  button.setAttribute("tabindex", index === 0 ? "0" : "-1");
  button.setAttribute("aria-controls", `panel-${index}`); // template literal ✔

  button.addEventListener("click", () => setActiveTab(index));
  button.addEventListener("keydown", e => handleKeyNavigation(e, index));

  tabsContainer.appendChild(button);
});

// Set active tab
const setActiveTab = index => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
    tab.setAttribute("aria-selected", i === index);
    tab.setAttribute("tabindex", i === index ? "0" : "-1");
  });

  contentContainer.textContent = `${tabsData[index].content}`; // template literal ✔
  contentContainer.setAttribute("id", `panel-${index}`);

  activeTabIndex = index;
  tabs[index].focus();
};

// Keyboard navigation
const handleKeyNavigation = (event, index) => {
  if (event.key === "ArrowRight") {
    setActiveTab((index + 1) % tabsData.length);
  }

  if (event.key === "ArrowLeft") {
    setActiveTab((index - 1 + tabsData.length) % tabsData.length);
  }
};

// Initialize first tab
setActiveTab(0);
