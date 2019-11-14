import React from "react";

import { AppContext } from "./Provider";

/**
 * Higher-Order Component that receives a component and changes it by adding the Consumer
 * from context, making the context variables accessible through props.
 *
 */
export default function withContext(Component) {
  return function ComponentWithContext(props) {
    return (
      <AppContext.Consumer>
        {context => <Component {...props} context={context} />}
      </AppContext.Consumer>
    );
  };
}
