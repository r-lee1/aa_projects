require 'rspec'
require 'cards'

describe Card do
  subject(:diamond_A) {Card.new(:diamond,'A')}
  describe "#initialize" do
    it "Create a card" do
      expect(diamond_A.value).to eq('A')
      expect(diamond_A.suit).to eq(:diamond)
    end
  end
end
