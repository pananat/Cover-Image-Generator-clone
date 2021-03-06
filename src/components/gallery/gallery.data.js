const icons = [
	'3d.svg',
	'actionscript.svg',
	'android.svg',
	'angular-component.svg',
	'angular-directive.svg',
	'angular-guard.svg',
	'angular-pipe.svg',
	'angular-resolver.svg',
	'angular-service.svg',
	'angular.svg',
	'apiblueprint.svg',
	'applescript.svg',
	'arduino.svg',
	'asciidoc.svg',
	'appveyor.svg',
	'audio.svg',
	'autohotkey.svg',
	'autoit.svg',
	'azure-pipelines.svg',
	'azure.svg',
	'babel.svg',
	'ballerina.svg',
	'authors.svg',
	'bitbucket.svg',
	'bithound.svg',
	'blink.svg',
	'aurelia.svg',
	'bower.svg',
	'browserlist.svg',
	'browserlist_light.svg',
	'bucklescript.svg',
	'assembly.svg',
	'c.svg',
	'cabal.svg',
	'cake.svg',
	'certificate.svg',
	'changelog.svg',
	'circleci.svg',
	'circleci_light.svg',
	'clojure.svg',
	'cloudfoundry.svg',
	'cmake.svg',
	'code-climate.svg',
	'code-climate_light.svg',
	'coffee.svg',
	'coldfusion.svg',
	'conduct.svg',
	'console.svg',
	'contributing.svg',
	'cpp.svg',
	'credits.svg',
	'crystal.svg',
	'crystal_light.svg',
	'csharp.svg',
	'css-map.svg',
	'css.svg',
	'cucumber.svg',
	'cuda.svg',
	'd.svg',
	'bazel.svg',
	'database.svg',
	'diff.svg',
	'django.svg',
	'docker.svg',
	'document.svg',
	'dotjs.svg',
	'drone.svg',
	'drone_light.svg',
	'edge.svg',
	'editorconfig.svg',
	'ejs.svg',
	'elixir.svg',
	'elm.svg',
	'email.svg',
	'erlang.svg',
	'eslint.svg',
	'exe.svg',
	'fastlane.svg',
	'favicon.svg',

	'firebase.svg',
	'flash.svg',
	'flow.svg',
	'blink_light.svg',
	'dart.svg',
	'buildkite.svg',
	'font.svg',
	'foxpro.svg',
	'fsharp.svg',
	'fusebox.svg',
	'gatsby.svg',
	'gemfile.svg',
	'git.svg',
	'gitlab.svg',
	'go.svg',
	'go_gopher.svg',
	'godot.svg',
	'gradle.svg',
	'graphcool.svg',
	'graphql.svg',
	'godot-assets.svg',
	'grunt.svg',
	'gulp.svg',
	'h.svg',
	'hack.svg',
	'haml.svg',
	'handlebars.svg',
	'groovy.svg',
	'haxe.svg',
	'hcl.svg',
	'haskell.svg',
	'helm.svg',
	'heroku.svg',
	'hpp.svg',
	'html.svg',
	'image.svg',
	'i18n.svg',
	'ionic.svg',
	'istanbul.svg',
	'java.svg',
	'http.svg',
	'hcl_light.svg',
	'jenkins.svg',
	'jest.svg',
	'jinja.svg',

	'javascript-map.svg',
	'julia.svg',
	'karma.svg',
	'key.svg',
	'kivy.svg',
	'javascript.svg',
	'kotlin.svg',
	'laravel.svg',
	'less.svg',
	'lib.svg',
	'livescript.svg',
	'lock.svg',
	'log.svg',
	'jupyter.svg',
	'makefile.svg',
	'jinja_light.svg',
	'markojs.svg',
	'mathematica.svg',
	'matlab.svg',
	'mdx.svg',
	'merlin.svg',
	'mint.svg',
	'mjml.svg',
	'mocha.svg',
	'move.svg',
	'mxml.svg',
	'netlify.svg',
	'ngrx-actions.svg',
	'ngrx-effects.svg',
	'ngrx-entity.svg',
	'ngrx-reducer.svg',
	'ngrx-state.svg',
	'nim.svg',
	'nix.svg',
	'nodejs.svg',
	'nodejs_alt.svg',
	'nodemon.svg',
	'npm.svg',
	'nunjucks.svg',
	'nuxt.svg',
	'ocaml.svg',
	'pdf.svg',
	'perl.svg',
	'php.svg',
	'php_elephant.svg',
	'postcss.svg',
	'powerpoint.svg',
	'powershell.svg',
	'prettier.svg',
	'prisma.svg',
	'processing.svg',
	'processing_light.svg',
	'protractor.svg',
	'pug.svg',
	'puppet.svg',
	'purescript.svg',
	'python-misc.svg',
	'python.svg',
	'r.svg',
	'racket.svg',
	'raml.svg',
	'razor.svg',
	'react.svg',
	'react_ts.svg',
	'readme.svg',
	'reason.svg',
	'red.svg',
	'redux-action.svg',
	'redux-reducer.svg',
	'redux-store.svg',
	'restql.svg',
	'riot.svg',
	'robot.svg',
	'rollup.svg',
	'routing.svg',
	'ruby.svg',
	'rust.svg',
	'san.svg',
	'sass.svg',
	'sbt.svg',
	'scala.svg',
	'scheme.svg',
	'semantic-release.svg',
	'semantic-release_light.svg',
	'sequelize.svg',
	'settings.svg',
	'shaderlab.svg',
	'silverstripe.svg',
	'slim.svg',
	'smarty.svg',
	'kl.svg',
	'solidity.svg',
	'stencil.svg',
	'lua.svg',
	'storybook.svg',
	'stylelint.svg',
	'stencil_light.svg',
	'stylus.svg',
	'sublime.svg',
	'svelte.svg',
	'svg.svg',
	'swc.svg',
	'markdown.svg',
	'table.svg',
	'tailwindcss.svg',
	'terraform.svg',
	'stylelint_light.svg',
	'test-jsx.svg',
	'swift.svg',
	'tex.svg',
	'snyk.svg',
	'todo.svg',
	'test-js.svg',
	'tune.svg',
	'typescript-def.svg',
	'typescript.svg',
	'url.svg',
	'vagrant.svg',
	'velocity.svg',
	'verilog.svg',
	'vfl.svg',
	'video.svg',
	'vim.svg',
	'travis.svg',
	'visualstudio.svg',
	'vscode.svg',
	'vue-config.svg',
	'vue.svg',
	'vuex-store.svg',
	'wakatime.svg',
	'wakatime_light.svg',
	'virtual.svg',
	'watchman.svg',
	'webassembly.svg',
	'webhint.svg',
	'webpack.svg',
	'twig.svg',
	'wolframlanguage.svg',
	'word.svg',
	'xaml.svg',
	'xml.svg',
	'wallaby.svg',
	'yang.svg',
	'yarn.svg',
	'zip.svg',
	'wepy.svg',
	'test-ts.svg',
	'yaml.svg'
];

export default icons;
