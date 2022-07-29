import React from "react";
import "../src/my-element.js";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "my-element": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export interface MyElementProps {
  children?: any;
  disabled?: boolean;
  foo?: string;
  prop1?: boolean;
  prop2?: number;
  onCustomEvent?: EventListenerOrEventListenerObject;
  onTypedEvent?: EventListenerOrEventListenerObject;
  onTypedCustomEvent?: EventListenerOrEventListenerObject;
}

declare module "react" {
  interface HTMLAttributes<T>
    extends AriaAttributes,
      DOMAttributes<T>,
      MyElementProps {}
}

export declare function MyElement({
  children,
  disabled,
  foo,
  prop1,
  prop2,
  onCustomEvent,
  onTypedEvent,
  onTypedCustomEvent,
}: MyElementProps): JSX.Element;
