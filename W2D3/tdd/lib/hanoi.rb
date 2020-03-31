class Board
  attr_accessor :grid

  def initialize
    @grid = [[4, 3, 2, 1], [], []]
  end

  def [](stack)
    @grid[stack]
  end

  def []=(stack, value)
    @grid[stack] = value
  end

  def won?
    case grid
    when [[], [4, 3, 2, 1], []], [[], [], [4, 3, 2, 1]]
      true
    else
      false
    end
  end

  def valid_move?(pos, disk)
    if @grid[pos].empty? || grid[pos].last > disk
      return true
    end
    false
  end

  def move(pos1, pos2)
    raise "Invalid move" unless valid_move?(pos2, @grid[pos1].last)
    @grid[pos2] << @grid[pos1].pop
  end
end
