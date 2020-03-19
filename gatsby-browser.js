import fromEntries from 'object.fromentries';
import 'tailwindcss/dist/base.css';
import 'typeface-rajdhani';
import wrapWithProvider from './wrap-with-provider';

if (!Object.fromEntries) {
  fromEntries.shim();
}

export const wrapRootElement = wrapWithProvider;
