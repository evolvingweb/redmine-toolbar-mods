require 'redmine'

require_dependency 'ewwiki_hook'

Redmine::Plugin.register :redmine_toolbar_mods do
  name "Tavish's awesome toolbar modifications"
  author 'Tavish Armstrong'
  description 'Some toolbar modifications'
  version '0.0.1'
end
