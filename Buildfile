# ===========================================================================
# Project:   Workr
# ===========================================================================

# Add initial buildfile information here
config 'husky',
  :required => ['sproutcore/standard_theme'],
  :theme_name => 'husky',
  :test_required => ['sproutcore/testing'],
  :debug_required => ['sproutcore/debug']

config :all,
  :required => [:sproutcore, :ki, :husky],
  :theme => 'husky'

#proxy "/", :to => "localhost:3000"
