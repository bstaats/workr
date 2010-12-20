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
config :workr_bundles, :required => [:shared, :login]

config :all,
  :required => [:sproutcore, :ki, :husky, :workr_bundles],
  :theme => 'husky'

#proxy "/", :to => "localhost:3000"
