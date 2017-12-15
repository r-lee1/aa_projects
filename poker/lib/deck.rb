require_relative 'cards'

class Deck
  SUITS = [ :spade, :diamond, :club, :heart ]
  VALUES = %w(A 2 3 4 5 6 7 8 9 10 J Q K)
  #
  attr_accessor :cards

  def initialize
    @cards = []
    fill_deck
  end

  def fill_deck
    SUITS.each do |suit|
      VALUES.each do |value|
        @cards << Card.new(suit, value)
      end
    end
  end

  def shuffle
    @cards.shuffle
  end

  def draw
    @cards.pop
  end
end

deck = Deck.new
p deck.shuffle
