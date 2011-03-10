# ===========================================================================
# Project:   Workr
# Copyright: ©2011 My Company, Inc.
# ===========================================================================


config :scui,
  :required => [:sproutcore, :'scui/drawing', :'scui/linkit']

config :all,
  :required           => ['sproutcore/core_foundation', 'sproutcore/statechart', :scui],
  :theme              => 'sproutcore/empty_theme'


