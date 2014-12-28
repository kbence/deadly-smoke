require 'sinatra/base'
require 'sinatra/assetpack'

class SmokeApp < Sinatra::Base
  register Sinatra::AssetPack

  configure do
    set :port, ENV['PORT'] || 8080
  end

  assets {
    serve '/js', from: 'js'
    serve '/css', from: 'css'

    js :app, ['/js/smoke/**/*.js']
    js :third_party, ['/js/lib/**/*.js']
    css :app, ['/css/*.css']

    js_compression :jsmin
    css_compression :simple
  }

  get "/" do
    erb :index
  end

  run!
end
