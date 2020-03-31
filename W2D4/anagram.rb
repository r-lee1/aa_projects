def first_anagram?(str, str2)
  time1 = Time.now
  perm_string = str.chars.permutation.to_a
  perm_string.map! do |perm|
    perm.join("")
  end

  time2 = Time.now
  puts '%.6f' % (time2 - time1)
  perm_string.include?(str2)
end

p first_anagram?("admirerabc", "marriedabc")

def second_anagram?(str, str2)
  time1 = Time.now
  dupstr = str.dup
  dupstr2 = str2.dup

  dupstr.each_char do |char|
    dupstr2.sub!(char, "")
  end

  time2 = Time.now
  puts '%.6f' % (time2 - time1)

  dupstr2.empty?
end

p second_anagram?("admirerabc", "marriedabc")

def third_anagram?(str, str2)
  time1 = Time.now
  str.chars.sort == str2.chars.sort
  time2 = Time.now
  puts '%.6f' % (time2 - time1)
end

p third_anagram?("admirerabc", "marriedabc")

def fourth_anagram?(str, str2)
  time1 = Time.now
  str_hash = Hash.new(0)
  str2_hash = Hash.new(0)

  str.chars.each do |key|
    str_hash[key] += 1
  end

  str2.chars.each do |key|
    str2_hash[key] += 1
  end
  time2 = Time.now
  puts '%.6f' % (time2 - time1)
  str_hash == str2_hash
end


p fourth_anagram?("admirerabc", "marriedabc")
