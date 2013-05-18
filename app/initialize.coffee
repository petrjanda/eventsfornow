# ===== Namespace =====
App = require 'app'


# ===== Router =====
App.Router.map ->
    # put your routes here


# ===== Routes =====
require 'routes/IndexRoute'


# ===== Store =====


# ===== Models =====


# ===== Views =====
App.MapView = require 'views/mapView'

# ===== Controllers =====


# ===== Template Helpers =====


# ===== Templates =====
require 'templates/application'
require 'templates/index'
require 'templates/map'

