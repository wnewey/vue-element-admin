import AutoSizeText from './packages/auto-size-text/index.js';
import Badge from './packages/badge/index.js';
import ButtonGroup from './packages/button-group/index.js';
import Button from './packages/button/index.js';
import CascaderPanel from './packages/cascader-panel/index.js';
import CheckboxGroup from './packages/checkbox-group/index.js';
import Checkbox from './packages/checkbox/index.js';
import CityPicker from './packages/city-picker/index.js';
import Col from './packages/col/index.js';
import ContentCard from './packages/content-card/index.js';
import ContentPanel from './packages/content-panel/index.js';
import DatePicker from './packages/date-picker/index.js';
import Dialog from './packages/dialog/index.js';
import Divider from './packages/divider/index.js';
import FormItem from './packages/form-item/index.js';
import Form from './packages/form/index.js';
import IconSvg from './packages/icon-svg/index.js';
import Icon from './packages/icon/index.js';
import IdentityValidate from './packages/identity-validate/index.js';
import ImageViewer from './packages/image-viewer/index.js';
import Image from './packages/image/index.js';
import InputLabel from './packages/input-label/index.js';
import InputNotice from './packages/input-notice/index.js';
import Input from './packages/input/index.js';
import LinkButton from './packages/link-button/index.js';
import Loading from './packages/loading/index.js';
import MenuItem from './packages/menu-item/index.js';
import Menu from './packages/menu/index.js';
import Msg from './packages/msg/index.js';
import Pagination from './packages/pagination/index.js';
import Popover from './packages/popover/index.js';
import RadioButtonGroup from './packages/radio-button-group/index.js';
import RadioGroup from './packages/radio-group/index.js';
import Radio from './packages/radio/index.js';
import Row from './packages/row/index.js';
import Select from './packages/select/index.js';
import Slide from './packages/slide/index.js';
import Step from './packages/step/index.js';
import StepsVertical from './packages/steps-vertical/index.js';
import Steps from './packages/steps/index.js';
import Strength from './packages/strength/index.js';
import Submenu from './packages/submenu/index.js';
import Switch from './packages/switch/index.js';
import TableColumn from './packages/table-column/index.js';
import Table from './packages/table/index.js';
import TimePicker from './packages/time-picker/index.js';
import TipCard from './packages/tip-card/index.js';
import Tree from './packages/tree/index.js';
import Upload from './packages/upload/index.js';

const components = [
  AutoSizeText,
  Badge,
  Button,
  ButtonGroup,
  CascaderPanel,
  Checkbox,
  CheckboxGroup,
  CityPicker,
  Col,
  ContentCard,
  ContentPanel,
  DatePicker,
  Dialog,
  Divider,
  Form,
  FormItem,
  Icon,
  IconSvg,
  IdentityValidate,
  Image,
  ImageViewer,
  Input,
  InputLabel,
  InputNotice,
  LinkButton,
  Menu,
  MenuItem,
  Pagination,
  Popover,
  Radio,
  RadioButtonGroup,
  RadioGroup,
  Row,
  Select,
  Slide,
  Step,
  Steps,
  StepsVertical,
  Strength,
  Submenu,
  Switch,
  Table,
  TableColumn,
  TimePicker,
  TipCard,
  Tree,
  Upload
];

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
}

export default {
  version: '1.0.0',
  install,
  AutoSizeText,
  Badge,
  Button,
  ButtonGroup,
  CascaderPanel,
  Checkbox,
  CheckboxGroup,
  CityPicker,
  Col,
  ContentCard,
  ContentPanel,
  DatePicker,
  Dialog,
  Divider,
  Form,
  FormItem,
  Icon,
  IconSvg,
  IdentityValidate,
  Image,
  ImageViewer,
  Input,
  InputLabel,
  InputNotice,
  LinkButton,
  Menu,
  MenuItem,
  Pagination,
  Popover,
  Radio,
  RadioButtonGroup,
  RadioGroup,
  Row,
  Select,
  Slide,
  Step,
  Steps,
  StepsVertical,
  Strength,
  Submenu,
  Switch,
  Table,
  TableColumn,
  TimePicker,
  TipCard,
  Tree,
  Upload
};
