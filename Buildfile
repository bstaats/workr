# ===========================================================================
# Project:   Workr
# ===========================================================================

# Add initial buildfile information here
config :all, :required => [:sproutcore, :ki]

#proxy "/", :to => "localhost:3000"

# CONFIGURE THEMES
config :workr, :theme => 'husky'
config :husky,  :theme_name => 'husky'
