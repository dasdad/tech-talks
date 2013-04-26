Rubygems
========

* `bundle gem navarro`
* `gem build navarro.gemspec`
    * Fails at first, because of `TODO`s in descriptions
* `gem push navarro.gem`
* Public hosting
    * [Rubygems](https://rubygems.org/gems/hostesse)
    * Alternatives [aren't very used anymore](http://rubyforge.org/), or are [dead](http://gems.github.com/)
* Private hosting
    * [Gem in a Box](https://github.com/cwninja/geminabox)
    * [Gemfury](http://www.gemfury.com/)
* What are the files in the gem?
    * `navarro.gemspec`
    * `LICENSE.txt`
    * `README.md`
    * `spec/` or `test/`
        * [RSpec](http://rspec.info/) or [MiniTest](https://github.com/ruby/ruby/tree/trunk/lib/minitest)
    * `lib/`
        * `navarro.rb`
            * Includes source code in `navarro` folder
        * `navarro/`
            * Contains classes in the `Navarro` namespace
        * Folders determine namespace - class or module - and comes with `<folder>.rb` that includes classes in directory
        * Don't forget `version.rb`
            * Use [SemVer](http://semver.org/)
    * `bin/`
        * Executables
            * `OptionParser` from core
            * [Thor](http://whatisthor.com/) and create a `Navarro::Cli` class
    * `ext/`
        * Core extensions in C
            * Performance
            * Wrapper for already existing lib
        * GVML
            * Don't worry about concurrency
* Intefaces
    * Executables
        * `vagrant`, `rspec`
    * Inheritance
        * `ActiveRecord::Base`
    * Composition
        * `Resque`
    * DSL
        * `Sinatra`
