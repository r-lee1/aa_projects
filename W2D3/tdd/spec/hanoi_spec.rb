require 'hanoi'
require 'rspec'

describe Board do
  subject(:game) { Board.new }
  describe "#initialize" do
    it "set grid 4 x 3" do
      expect(game.grid).to eq([[4, 3, 2, 1], [], []])
    end
  end


  describe "#won?" do
    context "when 2nd or 3rd spot is full" do
      before(:each) do
        game.grid = ([[], [4, 3, 2, 1], []])
      end

      it "checks if all discs are moved to 2nd spot" do
        expect(game.won?).to be true
      end
    end

      before(:each) do
        game.grid = ([[], [], [4, 3, 2, 1]])
      end

        it "checks if all discs are moved to 3rd spot" do
          expect(game.won?).to be true
        end
      end

  describe "#valid_move?" do
    before(:each) do
      game.grid = ([[3], [], [4, 2, 1]])
    end

    it "checks if target spot is taken by a smaller disk" do
      expect(game.valid_move?(0, 4)).to be false
    end
    before(:each) do
      game.grid = ([[4], [], [3, 2, 1]])
    end

    it "checks if target spot is taken by a bigger disk" do
      expect(game.valid_move?(0, 3)).to be true
    end
  end

  describe "#move" do
    before(:each) do
      game.grid = ([[4], [1], [3, 2]])
      game.move(2, 0)
    end
      it "moves disk to a correct position" do
        expect(game.grid).to eq([[4, 2], [1], [3]])
      end

      it "doesn't move disk if move is invalid" do
        expect { game.move(0, 1) }.to raise_error("Invalid move")
      end
  end

end
