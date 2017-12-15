require 'rspec'
require 'tdd.rb'

describe Array do
  subject (:array) { Array.new([1, 2, 1, 3, 3]) }

  describe "#remove_dups" do
    it "removes duplicates from an array" do
      expect(array.remove_dups).to eq([1, 2, 3])
    end
  end

  describe "#my_uniq" do
    it "my_uniq removes duplicates from an array as well" do
      expect(array.my_uniq).to eq([1, 2, 3])
    end
  end

  describe "#two_sum" do
    let(:array2) { Array.new([-1, 0, 2, -2, 1]) }
    it "return indicies of elements which sum is zero" do
      expect(array2.two_sum).to eq([[0, 4], [2, 3]])
    end
  end

  describe "#my_transpose" do
    let(:array3) { Array.new([[0, 1, 2], [3, 4, 5], [6, 7, 8]]) }
    it "returns transposed array" do
      expect(array3.my_transpose).to eq([[0, 3, 6], [1, 4, 7], [2, 5, 8]])
    end
  end

  describe "#stock_picker" do
    let(:stock_profitable) { Array.new([10, 11, 10, 20, 30]) }
    let(:stock_unprofitable) { Array.new([10, 8, 10, 7, 6, 1]) }
    it "return profitable pair of days" do
      expect(stock_profitable.stock_picker).to eq([0, 4])
    end
    it "returns nil for unprofitable period" do
      expect(stock_unprofitable.stock_picker).to eq(nil)
    end
  end
end
