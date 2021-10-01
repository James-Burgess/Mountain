import Alpine from 'alpinejs'
import router from './utils/router'
import './styles/main.scss';

window.Alpine = Alpine
Alpine.start();
router.resolve();
