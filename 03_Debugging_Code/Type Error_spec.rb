describe "add" do
  it "returns a string with 1 and 2 added" do
    add(1,2).should eq("1 + 2 = 3")
  end
  it "returns a string with 5 and 7 added" do
    add(5,7).should eq("5 + 7 = 12")
  end
end

