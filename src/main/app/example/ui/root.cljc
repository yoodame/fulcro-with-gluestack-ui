(ns app.example.ui.root
  (:require
    [app.example.gluestack.components.ui :as gs]
    [com.fulcrologic.fulcro-native.alpha.components :as c]
    [com.fulcrologic.fulcro.components :as comp :refer [defsc]]))

;; You can use the `c/create-style-sheet` function to create a styles objects.
(def styles (c/create-style-sheet
              {:container {:flex            1
                           :backgroundColor "#eee"
                           :alignItems      "center"
                           :justifyContent  "center"}}))

(defsc Root [_ {:ui/keys [title alert-message]}]
  {:query         [:ui/title
                   :ui/alert-message]
   :initial-state {:ui/title         "Fulcro with Gluestack UI."
                   :ui/alert-message "This is an alert"}}
  (gs/ui-provider {:mode "light"}
    (gs/ui-box {:style (.-container styles)}
      (gs/ui-vstack {:space "2xl"}
        (gs/ui-text {:size "3xl" :bold true} title)
        (gs/ui-text {:size "4xl" :bold true} "LFG! \uD83D\uDE80")

        (gs/ui-hstack {:space "md"}
          (gs/ui-box {:className "p-8 bg-background-200"} "Hello")
          (gs/ui-box {:className "p-4 bg-background-200"} "World")
          (gs/ui-text {:className "text-typography-900"} "Hello World"))

        (gs/ui-alert {::className "mb-8"}
          (gs/ui-alert-text {} alert-message))

        (gs/ui-button {:size    "md"
                       :onPress (fn [] (js/alert "Button pressed"))}
          (gs/ui-button-text {} "Click me"))))))
