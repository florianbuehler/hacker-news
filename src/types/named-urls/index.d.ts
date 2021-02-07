// named-urls does not yet have a standard typing shipped: https://github.com/tricoder42/named-urls/issues/7

declare module 'named-urls' {
  interface Routes {
    [path: string]: string | Routes
  }
  interface ReverseParams {
    [path: string]: number | string
  }

  //function include(base: string, routes: Routes): Routes
  function include<B, R>(base: B, routes: R): { toString(): B } & { [K in keyof R]: string | any }
  function reverse(pattern: string, params?: ReverseParams): string
  function reverseForce(pattern: string, params?: ReverseParams): string
}
