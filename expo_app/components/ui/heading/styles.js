Object.defineProperty(exports,"__esModule",{value:true});exports.headingStyle=void 0;var _tva=require("@gluestack-ui/nativewind-utils/tva");var _IsWeb=require("@gluestack-ui/nativewind-utils/IsWeb");var baseStyle=_IsWeb.isWeb?'font-sans tracking-sm bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word':'';var headingStyle=exports.headingStyle=(0,_tva.tva)({base:`text-typography-900 font-bold font-heading tracking-sm my-0 ${baseStyle}`,variants:{isTruncated:{true:'truncate'},bold:{true:'font-bold'},underline:{true:'underline'},strikeThrough:{true:'line-through'},sub:{true:'text-xs'},italic:{true:'italic'},highlight:{true:'bg-yellow-500'},size:{'5xl':'text-6xl','4xl':'text-5xl','3xl':'text-4xl','2xl':'text-3xl','xl':'text-2xl','lg':'text-xl','md':'text-lg','sm':'text-base','xs':'text-sm'}}});