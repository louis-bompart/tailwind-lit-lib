// See https://github.com/lit/lit/pull/4879/files#diff-41e2a8c1a53ce9e5503d90ab9890555ff96b9b8b56cd7178965ee2544564139c 
declare module '*.css' {
    const sheet: CSSStyleSheet;
    export default sheet;
  }