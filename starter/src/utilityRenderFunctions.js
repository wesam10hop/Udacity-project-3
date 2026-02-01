const createElement = (elementType, text) => {
  if (!elementType) {
    return null;
  }

  const element = document.createElement(elementType);
  element.textContent = text;

  return element;
};

const createImage = (url, alt) => {
  const img = document.createElement("img");
  img.src = url;
  img.alt = alt;

  return img;
};

const createHeader = (headerType, text, dataCy) => {
  const header = document.createElement(headerType);
  header.textContent = text;

  if (dataCy) {
    header.setAttribute("data-cy", dataCy);
  }

  return header;
};

const createToggleButton = (text, element) => {
  const button = document.createElement("button");
  button.textContent = text;

  button.addEventListener("click", () => {
    if (element) {
      element.classList.toggle("notVisible");
    }
  });

  return button;
};

const createLabel = (text, htmlFor) => {
  const label = document.createElement("label");
  label.textContent = text;
  label.setAttribute("for", htmlFor);

  return label;
};

const createInput = (name) => {
  const input = document.createElement("input");
  input.name = name;
  input.id = name;

  const dataCyMap = {
    titleInput: "createSetName",
    termInput: "addCardFront",
    descriptionInput: "addCardBack",
  };

  if (dataCyMap[name]) {
    input.setAttribute("data-cy", dataCyMap[name]);
  }

  return input;
};

const createSubmitButton = (value) => {
  const submit = document.createElement("input");
  submit.type = "submit";
  submit.value = value;

  if (value === "Submit Set") {
    submit.setAttribute("data-cy", "createSetButton");
  }

  if (value === "Add Card") {
    submit.setAttribute("data-cy", "addCardButton");
  }

  return submit;
};

export {
  createElement,
  createImage,
  createHeader,
  createToggleButton,
  createLabel,
  createInput,
  createSubmitButton,
};
