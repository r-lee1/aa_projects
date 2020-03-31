class Array
  def remove_dups
    self.uniq
  end

  def my_uniq
    result = []
    self.each do |el|
      result << el unless result.include?(el)
    end
    result
  end

  def two_sum
    result = []
    i = 0
    while i < length - 1
      j = i + 1
      while j < length
        result << [i, j] if self[i] + self[j] == 0
        j += 1
      end
      i += 1
    end
    result
  end

  def my_transpose
    result = []
    self.each_with_index do |_el, i|
      temp_arr = []
      self.each_with_index do |_el, j|
        temp_arr << self[j][i]
      end
      result << temp_arr
    end
    result
  end

  def stock_picker
    min_index = self.index(self.min)
    max_index = self.index(self.max)
    min_index > max_index ? nil : [min_index, max_index]
  end
end
