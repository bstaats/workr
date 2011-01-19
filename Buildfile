# ===========================================================================
# Project:   Workr
# ===========================================================================

# THEME
config 'husky',
  :required => ['sproutcore/standard_theme'],
  :theme_name => 'husky',
  :test_required => ['sproutcore/testing'],
  :debug_required => ['sproutcore/debug']

# BUNDLES
config :workr_bundles,
  :required => [:shared, :family_tree]

config :scui,
  :required => [:sproutcore, :'scui/drawing', :'scui/linkit']

config :all,
  :required => [:sproutcore, :'sproutcore/animation', :ki, :husky, :scui, :workr_bundles],
  :theme => 'husky'

#proxy "/", :to => "localhost:3000"
