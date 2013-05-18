# ===== Namespace =====
App = require 'app'


# ===== Router =====
App.Router.map ->
  @route('map')
    # put your routes here


# ===== Routes =====
App.IndexRoute = require 'routes/IndexRoute'
App.MapRoute = require 'routes/mapRoute'


# ===== Store =====


# ===== Models =====


# ===== Views =====
App.MapView = require 'views/mapView'

# ===== Controllers =====
App.MapController = require 'controllers/mapController'

# ===== Template Helpers =====


# ===== Templates =====
require 'templates/application'
require 'templates/index'
require 'templates/map'

