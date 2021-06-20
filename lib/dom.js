export default (Component, options) => {
  class Custom extends Component {
    constructor(_options = {}) {
      super({
        ..._options,
        props: Object.assign(options, _options.props),
      });
    }
  }

  return Custom;
};
