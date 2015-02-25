def alphabetize(arr, rev=false)
    if (rev == true)
        arr.reverse!
    else 
        arr.sort!
    end
end 
numbers = [6, 3, 32, 1, 2, 0]
puts alphabetize(numbers, true)