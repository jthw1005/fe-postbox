const createVillageHTML = (villageName) => {
  return /* html */ `
  <div data-village-name="${villageName}" class="village"><div>${villageName}</div>
  `;
};

const createMailBoxHTML = (villageName) => {
  return /* html */ `
  <div data-mail-box-name="${villageName}" class="mailbox"><span>📮</span></div>
  `;
};

const createAnswerHTML = (str) => {
  return /* html */ `
  <p class="answer">${str}</p>
  `;
};

export { createVillageHTML, createMailBoxHTML, createAnswerHTML };
