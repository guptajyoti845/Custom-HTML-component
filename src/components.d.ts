/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface UcSideDrawer {
        "title": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLUcSideDrawerElement extends Components.UcSideDrawer, HTMLStencilElement {
    }
    var HTMLUcSideDrawerElement: {
        prototype: HTMLUcSideDrawerElement;
        new (): HTMLUcSideDrawerElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "uc-side-drawer": HTMLUcSideDrawerElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface UcSideDrawer {
        "title"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "uc-side-drawer": UcSideDrawer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "uc-side-drawer": LocalJSX.UcSideDrawer & JSXBase.HTMLAttributes<HTMLUcSideDrawerElement>;
        }
    }
}
