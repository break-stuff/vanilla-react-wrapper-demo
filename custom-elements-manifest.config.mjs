import { reactWrapper } from 'cem-plugin-react-wrapper';

export default {
  /** Globs to analyze */
  globs: ['src/*.js'],
  /** Directory to output CEM to */
  outdir: './',
  /** Run in dev mode, provides extra logging */
  dev: true,
  /** Run in watch mode, runs on file changes */
  watch: false,
  /** Include third party custom elements manifests */
  dependencies: true,
  /** Output CEM path to `package.json`, defaults to true */
  packagejson: false,
  /** Provide custom plugins */
  plugins: [reactWrapper({
    modulePath: (className, tagName) => `../src/${tagName}.js`,
  })],
};
