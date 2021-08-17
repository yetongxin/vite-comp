import { Button } from '../../../src/components/button';
import DefaultTheme from 'vitepress/theme'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component(Button.name, Button);
    registerComponents(app);
  },
};
