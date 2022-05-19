import '../styles/body.scss';
import '../styles/main.scss';
import { htmlStructure, header, startSortingBtn } from './components/htmlComponents';
import form from './components/form';
import events from './helpers/event';

const startApp = () => {
  htmlStructure(); // always load first
  form();
  header();
  startSortingBtn();
  events(); // always load last
};

startApp();
