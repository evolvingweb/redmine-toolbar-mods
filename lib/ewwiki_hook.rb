class EWWikiHook < Redmine::Hook::ViewListener
  def view_layouts_base_html_head(context={})
    javascript_include_tag("toolbar_buttons.js", :plugin => 'redmine_toolbar_mods') +
      stylesheet_link_tag('buttons.css', :plugin => 'redmine_toolbar_mods')
  end
end

