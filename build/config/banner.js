module.exports = [
  '/*!\n',
  '  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n',
  '  <%= grunt.template.today("yyyy-mm-dd") %>\n',
  '  <%= pkg.homepage ? pkg.homepage + "\\n" : "" %>',
  '  Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n',
  '*/\n\n'
].join('');
