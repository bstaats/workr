# ===========================================================================
# Project:   Workr
# ===========================================================================

# THEME
config 'husky',
  :required => ['sproutcore/empty_theme'],
  :theme_name => 'husky',
  :test_required => ['sproutcore/testing'],
  :debug_required => ['sproutcore/debug']

config :studio, :required => []

config :workr,
  :required => ['sproutcore', 'sproutcore/statechart', :husky],
  :prefetched_modules => ['studio'],
  :theme => 'husky'

#proxy "/", :to => "localhost:3000"
