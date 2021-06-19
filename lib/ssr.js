export default (Component, options) => {
  const { render, $$render } = Component;

  return {
    render(props, stuff) {
      const customProps = Object.assign(options, props);
      return render(customProps, stuff);
    },
    $$render(result, props, bindings, slots, context) {
      const customProps = Object.assign(options, props);
      return $$render(result, customProps, bindings, slots, context);
    },
  };
};
