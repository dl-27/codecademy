class Computer 
    @@users = {}
    def initialize (username, password)
        @username = username
        @password = password
        @files = {}
        @@users[username] = password
    end
    def create(filename)
        time = Time.now
        @files[filename] = time
        puts "File was created"
    end
    def Computer.get_users
        return @@users
    end
end

my_computer = Computer.new("my_computer", "1111")
my_computer.create("file")
my_computer.get_users