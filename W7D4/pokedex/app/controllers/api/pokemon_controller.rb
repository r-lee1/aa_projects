class Api::PokemonController < ApplicationController

  def index
    @pokemons = Pokemon.all
    render :index
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :show
    else
      flash[:errors] = @pokemon.errors.full_messages
    end
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def update

  end

  def destroy

  end

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :moves, :image_url)
  end
end
