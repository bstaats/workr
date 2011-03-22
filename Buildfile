# ===========================================================================
# Project:   Workr
# ===========================================================================

# THEME
config 'husky',
  :required => ['sproutcore/empty_theme'],
  :theme_name => 'husky',
  :test_required => ['sproutcore/testing'],
  :debug_required => ['sproutcore/debug']

# 
# config :scui,
#   :required => [:sproutcore, :'scui/drawing', :'scui/linkit']
# 
# 
# 
#config 'modules/studio',
#  :required => ['scui/linkit']


#config :studio,
#  :required => ['modules/studio']
 

config :all,
  :required => ['sproutcore', 'sproutcore/statechart', :husky],
  :deferred_modules => ['studio'],
  :theme => 'husky'

#proxy "/", :to => "localhost:3000"
