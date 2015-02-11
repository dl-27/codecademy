puts "input all"
text = gets.chomp
words = text.split (" ")
puts "input redacted"
redact = gets.chomp

words.each do |w|
    if w == redact 
        print "REDACTED "
    else         
        print w + " "
    end
end