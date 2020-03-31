def bad_two_sum?(arr, target_value)
  arr[0...-1].each_index do |idx1|
    ((idx1 + 1)...arr.length).each do |idx2|
      return true if arr[idx1] + arr[idx2] == target_value
    end
  end

  false
end

def okay_two_sum?(arr, target_value)
  sorted = arr.sort

  return false if sorted.length < 2
  # return true if sorted.first + sorted.last == target_value

  case ((sorted.first + sorted.last) <=> target_value)
  when -1
    okay_two_sum?(sorted[1..-1], target_value)
  when 0
    return true
  when 1
    okay_two_sum?(sorted[0..-2], target_value)
  end
end

def good_two_sum?(arr, target_value)
  two_sum_hash = Hash.new
  arr.each do |el|
    return true if two_sum_hash.key?(el)
    two_sum_hash[(el - target_value)] = true
  end

  false
end

p good_two_sum?([-5, -2, 0, 1, 8], -1)
