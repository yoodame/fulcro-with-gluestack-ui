var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.GluestackUIProvider=GluestackUIProvider;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var _config=require("./config");var _reactNative=require("react-native");var _overlay=require("@gluestack-ui/overlay");var _toast=require("@gluestack-ui/toast");var _nativewind=require("nativewind");var _jsxRuntime=require("react-native-css-interop/jsx-runtime");var _excluded=["mode"];var getColorSchemeName=function getColorSchemeName(colorScheme,mode){if(mode==='system'){return colorScheme!=null?colorScheme:'light';}return mode;};function GluestackUIProvider(_ref){var _ref$mode=_ref.mode,mode=_ref$mode===void 0?'light':_ref$mode,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);var colorScheme=(0,_reactNative.useColorScheme)();var colorSchemeName=getColorSchemeName(colorScheme,mode);_nativewind.colorScheme.set(mode);return(0,_jsxRuntime.jsx)(_reactNative.View,{style:[_config.config[colorSchemeName],{flex:1,height:'100%',width:'100%'},props.style],children:(0,_jsxRuntime.jsx)(_overlay.OverlayProvider,{children:(0,_jsxRuntime.jsx)(_toast.ToastProvider,{children:props.children})})});}