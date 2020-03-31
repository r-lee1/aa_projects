def windowed_max_range(array, window_size)
  current_max_range = nil

  array.each_index do |idx|
    window = array[idx...(idx + window_size)]
    break if window.length < window_size
    range = window.max - window.min
    p window
    if current_max_range.nil? || current_max_range < range
      current_max_range = range
    end
  end

  current_max_range
end

p windowed_max_range([1, 0, 2, 5, 4, 8], 2)# == 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3)# == 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4)# == 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) #== 6 # 3, 2, 5, 4, 8
