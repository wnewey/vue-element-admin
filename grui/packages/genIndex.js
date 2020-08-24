var fs = require('fs');
var path = require('path');

var PackName = function (pack, name) {
  this.pack = pack;
  this.name = name;
  return this;
};

var PackNameS = [];
fileDisplay(__dirname);

var imports = '';
var components = [];

PackNameS.forEach(e => {
  imports += `import ${e.name} from './packages/${e.pack}/index.js';\n`;
  if (e.name !== 'Msg' && e.name !== 'Loading') {
    components.push(e.name);
  }
});

var componentsNames = components.join(',\n  ');

var contents = '';

contents += `${imports}`;

contents += `
const components = [
  ${componentsNames}
];\n`;

contents += `
const install = function (Vue, opts = {}) {
  Vue.prototype.$GRUI = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(Msg);
  Vue.use(Loading);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}\n`;

contents += `
export default {
  version: '1.0.0',
  install,
  ${componentsNames}
};\n`;

fs.writeFile(path.resolve(__dirname, '../index.js'), contents, (_err) => {
  console.log('组件文件生成成功');
});
// 文件遍历方法
function fileDisplay(filePath) {
  // 根据文件路径读取文件，返回文件列表
  var files = fs.readdirSync(filePath);
  // 遍历读取到的文件列表
  files.forEach(function (filename) {
    // 获取当前文件的绝对路径
    var filedir = path.join(filePath, filename);
    // 根据文件路径获取文件信息，返回一个fs.Stats对象
    var stats = fs.statSync(filedir);

    var isFile = stats.isFile();// 是文件
    var isDir = stats.isDirectory();// 是文件夹
    if (isFile) {
      // 组件index.js
      if (filename === 'index.js') {
        // 获取组件名称
        var packageName = path.basename(path.dirname(filedir));
        // 首字母大写
        var names = packageName.split('\-');
        var finalName = '';
        for (var i = 0; i < names.length; i++) {
          finalName += names[i].substring(0, 1).toUpperCase() + names[i].substring(1);
        }
        PackNameS.push(new PackName(packageName, finalName));
      }
    }
    if (isDir) {
      fileDisplay(filedir);// 递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  });
}
