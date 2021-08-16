import { defineComponent, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import logo from './assets/logo.png';
import './App.scss';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const abc = ref('123455fas');
    return {
      abc,
    };
  },
  render() {
    const { abc } = this;
    return (
      <div class="wrapper">
        <img alt="Vue logo" src={logo} />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
        <span>{abc}</span>
        <span class="text">221112d321</span>
      </div>
    );
  },
});
