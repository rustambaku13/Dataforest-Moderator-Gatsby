import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import fontSizes from "./fontSizes";
import Button from "./Buttons";
import sizes from "./sizes";
import Input from "./Input";
import global from "./global";
import FormLabel from "./Label";
import Heading from "./Heading";
import Checkbox from "./Checkbox";
import shadows from "./BoxShadow";
import Text from "./Text";
import Tabs from "./Tabs";
import space from "./space";
import Menu from "./Menu";
import Select from "./Select";
import Tag from "./Tags";
import Badge from "./Badge";
import Modal from "./Modal";
import Textarea from "./Textarea";
const theme = {
  colors,
  fontSizes,
  shadows,
  space,
  sizes,
  styles: {
    global,
  },
  fonts: {
    html: "Suisse",
    heading: "Suisse",
    body: "Suisse",
  },

  components: {
    Tag,
    Modal,
    Menu,
    Button,
    Select,
    Input,
    Textarea,
    Checkbox,
    Badge,
    Text,
    FormLabel,
    Tabs,
    Heading,
  },
};

export default extendTheme(theme);
