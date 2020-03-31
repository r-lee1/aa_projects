def my_min1(arr)
  arr.each do |el|
    return el if arr.all? { |el2| el <= el2 }
  end
end

def my_min2(arr)
  arr.reduce do |min, el|
    (el < min) ? el : min
  end
end

# p my_min2([ 0, 3, 5, 4, -5, 10, 1, 90 ])

def sub_sum1(arr)
  total_sub = []
  arr.each_index do |idx|
    (idx...arr.length).each do |idx2|
      total_sub << arr[idx..idx2]
    end
  end

  sum_of_subs = []
  total_sub.each do |subarr|
    sum_of_subs << subarr.reduce(:+)
  end

  sum_of_subs.max
end

def sub_sum2(arr)
  return arr.max if arr.all? { |el| el < 0 }
  max = 0
  current = 0
  arr.each do |num|
    current += num
    if current < 0
      current = 0
    else
      max = current if current > max
    end
  end

  max
end

p sub_sum2([-5, -1, -3])
