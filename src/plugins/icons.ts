import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faHome,
    faSearch,
    faExternalLinkAlt,
    faArrowUp,
    faCaretLeft,
    faCaretRight,
    faCaretDown,
    faInfoCircle,
    faExclamationCircle,
    faQuestionCircle,
    faPlay,
    faExpandAlt,
    faTimes,
    faRedo,
    faArrowLeft,
    faArrowRight,
    faCog,
    faHeart,
    faSortAmountUp,
    faSyncAlt,
    faEye,
    faEyeSlash,
    faTrash,
    faHistory,
    faCheckCircle,
    faFilter,
    faCalendarAlt,
    faCaretUp,
    faQuestion,
    faBookOpen,
    faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
    faSnowflake,
    faWindowMinimize,
    faWindowMaximize,
} from "@fortawesome/free-regular-svg-icons";
import {
    faDiscord,
    faGithub,
    faPatreon,
} from "@fortawesome/free-brands-svg-icons";

config.searchPseudoElements = true;

library.add(
    faHome,
    faSearch,
    faSnowflake,
    faExternalLinkAlt,
    faArrowUp,
    faCaretLeft,
    faCaretRight,
    faCaretDown,
    faInfoCircle,
    faExclamationCircle,
    faQuestionCircle,
    faPlay,
    faWindowMinimize,
    faExpandAlt,
    faWindowMaximize,
    faTimes,
    faRedo,
    faArrowLeft,
    faArrowRight,
    faCog,
    faHeart,
    faSortAmountUp,
    faSyncAlt,
    faEye,
    faEyeSlash,
    faTrash,
    faHistory,
    faCheckCircle,
    faFilter,
    faCalendarAlt,
    faCaretUp,
    faQuestion,
    faDiscord,
    faBookOpen,
    faPatreon,
    faGithub,
    faExchangeAlt
);

export default FontAwesomeIcon;
