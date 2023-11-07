// import { createPinia } from 'pinia';

// // 自动导入所有 module
// const modulesFiles = require.context('./modules', true, /\.ts$/);

// const modules = modulesFiles.keys().map((modulePath: string) => {
//   return modulesFiles(modulePath).default;
// });

// const pinia = createPinia();

// modules.forEach((useStore: any) => {
//   useStore(pinia);
// });

// export default pinia;
import { createPinia } from 'pinia';
const pinia = createPinia();
export default pinia;
