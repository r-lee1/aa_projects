require 'rspec'
require 'deck'

describe Deck do
  subject(:deck) { Deck.new }
  describe "#initialize" do
    it "Creates deck of 52 cards" do
      expect(deck.cards.size).to eq(52)
    end
    it "First card in the deck is Spade" do
      expect(deck.cards[0].suit).to eq(:spade)
    end
    it "First card in the deck is A" do
      expect(deck.cards[0].value).to eq('A')
    end
  end

  describe "#shuffle" do
    let(:sorted_deck) { deck2.cards.sort }
    let(:deck2)  { Deck.new }

    it "Shuffles the deck" do
      expect(sorted_deck).to_not eq(deck2.cards)
      expect(sorted_deck).to eq(deck2.cards.sort)
    end
  end
end
