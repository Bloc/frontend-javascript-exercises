describe "add_two" do
  it "adds 2 to each element in an array" do
    a = [1, 2, 3]
    r = ["1 + 2 = 3", "2 + 2 = 4", "3 + 2 = 5"]
    add_two(a).should eq(r)
  end
  it "adds 2 to each element in a longer array" do
    a = [5, 7, 3, 12, 15]
    r = ["5 + 2 = 7", 
         "7 + 2 = 9", 
         "3 + 2 = 5", 
         "12 + 2 = 14", 
         "15 + 2 = 17"]
    add_two(a).should eq(r)
  end
end


