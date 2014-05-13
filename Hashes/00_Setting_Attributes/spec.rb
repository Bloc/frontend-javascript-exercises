describe "User" do
  describe "initialize" do
    it "can set just the name" do
      u = User.new(name: "Bob")
      u.name.should eq("Bob")
      u.email.should eq("n/a")
    end
    it "can set all values" do
      u = User.new(name: "Joe", email: "joe@example.com", bio: "Cool dude", age: 34, sex: :male)
      u.name.should eq("Joe")
      u.email.should eq("joe@example.com")
      u.bio.should eq("Cool dude")
      u.age.should eq(34)
      u.sex.should eq(:male)
    end
    it "can set no values" do
      u = User.new
      u.name.should eq("n/a")
      u.email.should eq("n/a")
      u.bio.should eq("n/a")
      u.age.should eq("n/a")
      u.sex.should eq("n/a")
    end
  end
end

