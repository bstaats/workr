# ===========================================================================
# Project:   Workr
# ===========================================================================

# THEME
config :husky,
  :required => 'sproutcore/empty_theme',
  :theme_name => 'husky'

<<<<<<< HEAD

# How do you add a framework to a module so it only loads when the module loads
# I want to add 'scui/linkit' as a dependency for the studio module
# This doesnt work. SC things 'scui/linkit' is a submodule and not a framework
# config :studio,
#   :required => ['scui/linkit']


config :workr,
  :required => ['sproutcore', :ki, 'scui/linkit'],
=======
config :studio, :required => []

config :workr,
  :required => ['sproutcore', 'sproutcore/statechart', :husky],
>>>>>>> 201afec3a7602d5e15b0de127d33ea7fd830196f
  :deferred_modules => ['studio'],
  :theme => 'husky'

#proxy "/", :to => "localhost:3000"
