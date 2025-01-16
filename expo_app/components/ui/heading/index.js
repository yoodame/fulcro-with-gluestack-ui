var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.Heading=void 0;var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireWildcard(require("react"));var _htmlElements=require("@expo/html-elements");var _styles=require("./styles");var _nativewind=require("nativewind");var _jsxRuntime=require("react-native-css-interop/jsx-runtime");var _excluded=["size","className","isTruncated","bold","underline","strikeThrough","sub","italic","highlight"],_excluded2=["className","size","as"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap(),t=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r;})(e);}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u];}return n.default=e,t&&t.set(e,n),n;}(0,_nativewind.cssInterop)(_htmlElements.H1,{className:'style'});(0,_nativewind.cssInterop)(_htmlElements.H2,{className:'style'});(0,_nativewind.cssInterop)(_htmlElements.H3,{className:'style'});(0,_nativewind.cssInterop)(_htmlElements.H4,{className:'style'});(0,_nativewind.cssInterop)(_htmlElements.H5,{className:'style'});(0,_nativewind.cssInterop)(_htmlElements.H6,{className:'style'});var MappedHeading=(0,_react.memo)((0,_react.forwardRef)(function(_ref,ref){var size=_ref.size,className=_ref.className,isTruncated=_ref.isTruncated,bold=_ref.bold,underline=_ref.underline,strikeThrough=_ref.strikeThrough,sub=_ref.sub,italic=_ref.italic,highlight=_ref.highlight,props=(0,_objectWithoutProperties2.default)(_ref,_excluded);switch(size){case'5xl':case'4xl':case'3xl':return(0,_jsxRuntime.jsx)(_htmlElements.H1,Object.assign({className:(0,_styles.headingStyle)({size:size,isTruncated:isTruncated,bold:bold,underline:underline,strikeThrough:strikeThrough,sub:sub,italic:italic,highlight:highlight,class:className})},props,{ref:ref}));case'2xl':return(0,_jsxRuntime.jsx)(_htmlElements.H2,Object.assign({className:(0,_styles.headingStyle)({size:size,isTruncated:isTruncated,bold:bold,underline:underline,strikeThrough:strikeThrough,sub:sub,italic:italic,highlight:highlight,class:className})},props,{ref:ref}));case'xl':return(0,_jsxRuntime.jsx)(_htmlElements.H3,Object.assign({className:(0,_styles.headingStyle)({size:size,isTruncated:isTruncated,bold:bold,underline:underline,strikeThrough:strikeThrough,sub:sub,italic:italic,highlight:highlight,class:className})},props,{ref:ref}));case'lg':return(0,_jsxRuntime.jsx)(_htmlElements.H4,Object.assign({className:(0,_styles.headingStyle)({size:size,isTruncated:isTruncated,bold:bold,underline:underline,strikeThrough:strikeThrough,sub:sub,italic:italic,highlight:highlight,class:className})},props,{ref:ref}));case'md':return(0,_jsxRuntime.jsx)(_htmlElements.H5,Object.assign({className:(0,_styles.headingStyle)({size:size,isTruncated:isTruncated,bold:bold,underline:underline,strikeThrough:strikeThrough,sub:sub,italic:italic,highlight:highlight,class:className})},props,{ref:ref}));case'sm':case'xs':return(0,_jsxRuntime.jsx)(_htmlElements.H6,Object.assign({className:(0,_styles.headingStyle)({size:size,isTruncated:isTruncated,bold:bold,underline:underline,strikeThrough:strikeThrough,sub:sub,italic:italic,highlight:highlight,class:className})},props,{ref:ref}));default:return(0,_jsxRuntime.jsx)(_htmlElements.H4,Object.assign({className:(0,_styles.headingStyle)({size:size,isTruncated:isTruncated,bold:bold,underline:underline,strikeThrough:strikeThrough,sub:sub,italic:italic,highlight:highlight,class:className})},props,{ref:ref}));}}));var Heading=exports.Heading=(0,_react.memo)((0,_react.forwardRef)(function(_ref2,ref){var className=_ref2.className,_ref2$size=_ref2.size,size=_ref2$size===void 0?'lg':_ref2$size,AsComp=_ref2.as,props=(0,_objectWithoutProperties2.default)(_ref2,_excluded2);var isTruncated=props.isTruncated,bold=props.bold,underline=props.underline,strikeThrough=props.strikeThrough,sub=props.sub,italic=props.italic,highlight=props.highlight;if(AsComp){return(0,_jsxRuntime.jsx)(AsComp,Object.assign({className:(0,_styles.headingStyle)({size:size,isTruncated:isTruncated,bold:bold,underline:underline,strikeThrough:strikeThrough,sub:sub,italic:italic,highlight:highlight,class:className})},props));}return(0,_jsxRuntime.jsx)(MappedHeading,Object.assign({className:className,size:size,ref:ref},props));}));Heading.displayName='Heading';