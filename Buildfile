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
config :login, :required => [] # dynamically loaded so we assume its *real* requirement are already met
config :workr_bundles, :required => [:shared]

config :all,
  :required => [:sproutcore, :ki, :husky, :workr_bundles],
  :dynamic_required => [:login],
  :theme => 'husky'

#proxy "/", :to => "localhost:3000"
