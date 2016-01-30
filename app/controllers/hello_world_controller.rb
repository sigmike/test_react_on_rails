class HelloWorldController < ApplicationController
  def index
    @hello_world_props = { name: "Stranger", arrows: [{start: {x: 15, y: 15}, end: {x: 20, y: 20}}] }
  end
end
