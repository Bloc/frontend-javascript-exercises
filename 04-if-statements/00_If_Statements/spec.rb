describe "favorite_number" do
  it "should return 'Too low' if the guess is low" do
    favorite_number(10, 1).should eq("Too low")
  end
  it "should return 'Too high' if the guess is high" do
    favorite_number(5, 11).should eq("Too high")
  end
  it "should return 'You got it!' if the guess is right" do
    favorite_number(11, 11).should eq("You got it!")
  end
end