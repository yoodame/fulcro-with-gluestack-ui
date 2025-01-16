(ns app.example.gluestack.components.ui
  (:require
    [com.fulcrologic.fulcro-native.alpha.components :refer [react-factory]]
    #?@(:cljs [["@/components/ui/gluestack-ui-provider/index.js" :refer [GluestackUIProvider]]
               ["@/components/ui/box/index.js" :refer [Box]]
               ["@/components/ui/button/index.js" :refer [Button ButtonText ButtonSpinner]]
               ["@/components/ui/center/index.js" :refer [Center]]
               ["@/components/ui/text/index.js" :refer [Text]]
               ["@/components/ui/alert/index.js" :refer [Alert AlertText]]
               ["@/components/ui/hstack/index.js" :refer [HStack]]
               ["@/components/ui/vstack/index.js" :refer [VStack]]])))

(def ui-provider
  #?(:cljs (react-factory GluestackUIProvider)))

(def ui-box
  #?(:cljs (react-factory Box)))

(def ui-button
  #?(:cljs (react-factory Button)))

(def ui-button-text
  #?(:cljs (react-factory ButtonText)))

(def ui-button-spinner
  #?(:cljs (react-factory ButtonSpinner)))

(def ui-center
  #?(:cljs (react-factory Center)))

(def ui-text
  #?(:cljs (react-factory Text)))

(def ui-alert
  #?(:cljs (react-factory Alert)))

(def ui-alert-text
  #?(:cljs (react-factory AlertText)))

(def ui-hstack
  #?(:cljs (react-factory HStack)))

(def ui-vstack
  #?(:cljs (react-factory VStack)))
