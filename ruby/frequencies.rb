puts "input"
text = gets.chomp
words = text.split(" ")
frequencies = Hash.new(0);
words.each do |w|
    frequencies[w] += 1
    puts frequencies[w]
end
frequencies  = frequencies.sort_by{|k,v| v};   
frequencies.reverse!
frequencies.each do |word, frequency|
    puts word +" " + frequency.to_s
end