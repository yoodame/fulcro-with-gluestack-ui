(ns app.example.client-native
  "Entry point for native client."
  (:require
    [app.example.ui.root :refer [Root]]
    ;[app.example.mobile-ui.resources :as resources]
    [com.fulcrologic.fulcro-native.expo-application-40 :as expoapp]
    [com.fulcrologic.fulcro.application :as app]
    [com.fulcrologic.fulcro.algorithms.timbre-support :refer [console-appender prefix-output-fn]]
    [com.fulcrologic.fulcro.networking.http-remote :as net]
    [com.fulcrologic.rad.type-support.date-time :as datetime]
    [com.fulcrologic.rad.application :as rad-app]
    [taoensso.timbre :as log]
    [fulcro.inspect.tool :as it]))

(defonce app (expoapp/fulcro-app {;:cached-images    resources/images
                                  ;:cached-fonts     resources/fonts
                                  :client-did-mount (fn [app] (log/info "Client did mount"))
                                  :remotes {:remote (net/fulcro-http-remote {:url "http://localhost:3000/api"
                                                                             :request-middleware (rad-app/secured-request-middleware nil)})}}))

(defn ^:export start
  {:dev/after-load true}
  []
  ;; Hot code reload of installed controls
  (log/info "Reinstalling controls")
  (app/force-root-render! app))

(defn ^:export init []
  ;; Connect to fulcro inspect
  (it/add-fulcro-inspect! app)

  (log/merge-config! {:output-fn prefix-output-fn
                      :appenders {:console (console-appender)}})
  (log/info "Starting App")

  ;; default time zone (should be changed at login for given user)
  (datetime/set-timezone! "America/Chicago")

  ;; Avoid startup async timing issues by pre-initializing things before mount
  (app/set-root! app Root {:initialize-state? true})
  ;(uir/start-routing! app application-chart)
  (app/mount! app Root :i-got-no-dom-node {:initialize-state? false}))
