const createVillageHTML = (villageName) => {
  return /* html */ `
  <div data-village-name="${villageName}" class="village"></div>
  `;
};

const createMailBoxHTML = (villageName) => {
  return /* html */ `
  <div data-mail-box-name="${villageName}" class="mailbox"><span>📮</span></div>
  `;
};

export { createVillageHTML, createMailBoxHTML };
