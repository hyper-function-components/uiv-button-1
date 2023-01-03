import './index.css';

const HFC: HyperFunctionComponent = (container, props) => {
  container.classList.add('uiv-button-1');
  container.innerHTML = props.attrs.text || '';

  if (props.events.onClick) {
    container.addEventListener('click', props.events.onClick);
  }

  console.log(props);
  // Object.assign(container, props._);

  return {
    changed(props: HfcProps) {
      container.innerHTML = props.attrs.text || '';
    },
    disconnected() {},
  };
};

HFC.tag = 'button';
// @ts-ignore
HFC.hfc = process.env.HFC_NAME;
// @ts-ignore
HFC.ver = process.env.HFC_VERSION;
// @ts-ignore
HFC.names = process.env.HFC_PROP_NAMES;

export default HFC;
