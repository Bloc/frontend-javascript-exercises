describe "new_array" do
  it "creates an array of numbers" do
    new_array(1,2,3,4).should eq([1,2,3,4])
  end
  it "creates an array of strings" do
    new_array("a", "b", "c", "d").should eq(["a", "b", "c", "d"])
  end
  it "creates an array of non-sequential objects" do
    new_array(1,4,2,3).should eq([1,4,2,3])
  end
end

describe "first_and_last" do
  it "creates new array with numbers" do
    first_and_last([1,2,3]).should eq([1,3])
  end
  it "creates new array with strings" do
    first_and_last(["a", "b", "c", "d"]).should eq(["a", "d"])
  end
end
