import DOMProperty from 'react-dom/lib/DOMProperty';

export const emailAttributes = {
  Properties: {
    xmlns: 0,
    align: 0,
    valign: 0,
    bgcolor: 0,
    border: 0,
  },
};

export default function injectReactEmailAttributes() {
  if (Object.hasOwnProperty.call(DOMProperty.properties, 'xmlns')) {
    delete emailAttributes.Properties.xmlns;
  }

  DOMProperty.injection.injectDOMPropertyConfig(emailAttributes);
}
