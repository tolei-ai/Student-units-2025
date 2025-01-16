const resourcesData = {
  unit1: {
    "tutorial-videos": [
      "Video 1: Basics",
      "Video 2: Advanced Skills",
      "Video 3: Practical",
      "Video 4: Real World",
      "Video 5: Bonus"
    ],
    "tests": [
      "Test 1: Basics",
      "Test 2: Intermediate",
      "Test 3: Advanced",
      "Test 4: Final"
    ],
    "pdf-notes": ["PDF 1", "PDF 2", "PDF 3"],
    "homework": ["Homework 1", "Homework 2"],
    "practice-questions": ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6"]
  },
  unit2: { /* Similar structure as unit1, customized */ },
  unit3: { /* Similar structure as unit1, customized */ },
  unit4: { /* Similar structure as unit1, customized */ },
  unit5: { /* Similar structure as unit1, customized */ }
};

function displayResources(selectElement, unitId) {
  const selectedResource = selectElement.value;
  const resourceList = document.getElementById(`${unitId}-resources`);

  if (selectedResource && resourcesData[unitId][selectedResource]) {
    const items = resourcesData[unitId][selectedResource]
      .map((item) => `<li>${item}</li>`)
      .join("");

    resourceList.innerHTML = `
      <h4>${selectElement.options[selectElement.selectedIndex].text}</h4>
      <ul>${items}</ul>
    `;
  } else {
    resourceList.innerHTML = "<p>No resources available</p>";
  }
}
